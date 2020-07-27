import React, {Component} from 'react';
import Layout from '../../components/Layout';
import {Form, Button, Input, Message, Divider} from 'semantic-ui-react';
import Exchange from '../../ethereum/exchange';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import factory from '../../ethereum/factory';

// import Router from 'next/router'

class ExchangeNew extends Component {
    state = {
        PowerUnits: '',
        Price: '',
        errorMessage: '',
        recipient: '',
        loading: false
    };
    


    onSubmit = async event => {
        event.preventDefault();

        this.setState({loading: true, errorMessage:''});

        await ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        const { PowerUnits, Price, recipient} = this.state;

        var AllExchanges = await factory.methods.getDeployedExchanges().call();

        if ((AllExchanges.length == 0)){
            await factory.methods.createExchange()
                .send({ from: accounts[0]});
            AllExchanges = await factory.methods.getDeployedExchanges().call();
        }

        const exchange = Exchange(AllExchanges[0]);
        try{
            await exchange.methods
                .createRequest(
                    web3.utils.toWei(Price, 'ether'),
                    recipient, 
                    PowerUnits).send({ from: accounts[0]});
            
           
            Router.pushRoute('/');

        }
        catch(err)
        {
            this.setState({errorMessage: err.message});
        } finally { 

            this.setState({loading: false});
           
        }
    };

    render() {
        return(
            <Layout>
                <h2>Create New Exchange</h2>
                <Divider hidden />
                <Divider inverted width={6}/>
                <Divider hidden />
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field width={6}>
                        <label>Power Units</label>
                        <Input 
                            label="Kw" 
                            labelPosition="right"
                            value={this.state.PowerUnits}
                            onChange={event => 
                                this.setState({ PowerUnits: event.target.value })}/>
                    </Form.Field>

                    <Form.Field width={6}>
                        <label>Price</label>
                        <Input 
                            label="Ether" 
                            labelPosition="right"
                            value={this.state.Price}
                            onChange={event => 
                                this.setState({ Price: event.target.value })}/>
                    </Form.Field>

                    <Form.Field width={6}>
                        <label>Recipient</label>
                        <Input 
                            value={this.state.recipient}
                            onChange={event => this.setState({ recipient: event.target.value})}/>
                    </Form.Field>

                    <Divider hidden />
                    <Divider inverted width={6}/>
                    <Divider hidden />
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default ExchangeNew;