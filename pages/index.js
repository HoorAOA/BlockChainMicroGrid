import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Exchange from '../ethereum/exchange';
import web3 from '../ethereum/web3';


class ExchangeIndex extends Component {


    async componentDidMount() {
        await ethereum.enable();
        const accounts = await web3.eth.getAccounts();

        this.setState({
            accountAddress: accounts[0]
        });
    }

    static async getInitialProps() {
        const AllExchanges = await factory.methods.getDeployedExchanges().call();
        // console.log(AllExchanges);
        var requests = [];
        var AllRequests = [];
        var exchange = [];
        var requestCount = 0;
        if (AllExchanges.length != 0) {
            for (var j = 0; j < AllExchanges.length; j++) {
                exchange = Exchange(AllExchanges[j]);
                requestCount = await exchange.methods.getRequestsCount().call();
                requests = await Promise.all(
                    Array(parseInt(requestCount)).fill().map((element, index) => {
                        return exchange.methods.exchangeRequests(index).call()
                    })
                );
                AllRequests.push.apply(AllRequests, requests);
            }

        }
        console.log(AllExchanges);
        console.log(AllRequests);
        return { AllExchanges, AllRequests };

    }

    state = {
        units: '',
        price: '',
        manager: '',
        loading: false,
        errorMessage: '',
        accountAddress: ''
        // cardsItems: {}
    }


    renderCard() {

        if (this.props.AllExchanges.length != 0) {
            const items = this.props.AllRequests.map((request, index) => {

                if (this.state.accountAddress == request.manager) {
                    return {
                        header: request.units + ' Kw | ' + request.price + ' wei',
                        description:
                            <div>
                                <div class="ui inverted divider"></div>
                                <div id={index}>
                                    <Button disabled={request.complete} fluid
                                        color="blue"
                                        basic
                                        floated="right"
                                        onClick={this.onFinalize.bind(this, { index })}>
                                        Finalize
                        </Button></div> </div>,
                        meta: 'Owner: ' + request.manager,
                        fluid: true,
                        style: { width: '500px' }
                    };
                }
                else {
                    return {
                        header: request.units + ' Kw | ' + request.price + ' wei',
                        description:
                            <div>
                                <div class="ui inverted divider"></div>
                                <div id={index}>
                                    <Button disabled={request.complete} fluid
                                        color="green"
                                        basic
                                        floated="right"
                                        onClick={this.onSubmit.bind(this, { index })}>
                                        Buy
                        </Button></div> </div>,
                        meta: 'Owner: ' + request.manager,
                        fluid: true,
                        style: { width: '500px' }
                    };
                }

            });

            // const cardsItems = await Promise.all(items).then((values) => {
            //     console.log(values);
            //     return values;
            //   });

            // this.setState({ cardsItems });

            return <Card.Group items={items} />
        }
    }


    onSubmit = async (event, id) => {
        // event.preventDefault();
        console.log(id.target.parentNode.id);
        const indexofButtton = parseInt(id.target.parentNode.id);
        const n = this.props.AllRequests[indexofButtton].ExchangeNo;
        const exchange = Exchange(this.props.AllExchanges[n]);

        const { price } = this.props.AllRequests[indexofButtton];

        await ethereum.enable();
        const accounts = await web3.eth.getAccounts();

        await exchange.methods.contribute().send({
            from: accounts[0],
            value: parseInt(price)
        });

    }

    onFinalize = async (event, id) => {
        // event.preventDefault();
        console.log(id.target.parentNode.id);
        var indexofButtton = parseInt(id.target.parentNode.id);
        const n = this.props.AllRequests[indexofButtton].ExchangeNo;
        const exchange = Exchange(this.props.AllExchanges[n]);
        var prevRequests = 0;
        var requestCount = 0;
        var currentExchange = [];

        if (n > 0) {
            for (var i = 0; i < n; i++) {
                currentExchange = await Exchange(this.props.AllExchanges[i]);
                requestCount = await currentExchange.methods.getRequestsCount().call();
                prevRequests += parseInt(requestCount);
            }
            indexofButtton = indexofButtton - prevRequests;
        }


        await ethereum.enable();
        const accounts = await web3.eth.getAccounts();


        await exchange.methods.finalizeRequest(indexofButtton).send({
            from: accounts[0]
        });

    }


    render() {
        return <div>
            <Layout>

                <h2>Pending Exchanges</h2>
                <Link route="/Exchanges/new">
                    <a>
                        <Button
                            content='Create new Exchange'
                            icon='add'
                            primary
                            floated="right"
                        />
                    </a>
                </Link>
                {/* <Card.Group items={this.state.cardsItems}/> */}
                {this.renderCard()}

            </Layout>
        </div>;
    }
}

export default ExchangeIndex;