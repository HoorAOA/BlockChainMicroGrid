import React , {Component} from 'react';
import {Card , Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Exchange from '../ethereum/exchange';
import web3 from '../ethereum/web3';

// export default () => {
//     return <h1>This is the index page</h1>;
// };

class ExchangeIndex extends Component {

    static async getInitialProps(){
        const AllExchanges = await factory.methods.getDeployedExchanges().call();
        console.log(AllExchanges);
        var requests = [];
        var TheAddress = '';
        if (AllExchanges.length != 0 ){
            TheAddress = AllExchanges[0];
            const exchange = Exchange(AllExchanges[0]);
            const requestCount = await exchange.methods.getRequestsCount().call();

            requests = await Promise.all(
                Array(parseInt(requestCount)).fill().map((element, index) => {
                    return exchange.methods.exchangeRequests(index).call()
                })
            );

            
        }
        
        return { AllExchanges ,requests, TheAddress};
        
    }
    
    state = {
        units: '',
        price: '',
        manager: '',
        loading: false,
        errorMessage:''
        // cardsItems: {}
    }

    renderCard() {
        if(this.props.AllExchanges.length != 0){
        const items = this.props.requests.map( (request, index) => {
            
            return {
                header: request.units + ' Kw | ' + request.price + ' wei' ,
                    description: 
                    <div>
                    <div class="ui inverted divider"></div>
                    <div className='ui two buttons' id={index}>
                        
                    <Button   
                        color= "green"
                        basic 
                        floated="right"
                        onClick={ this.onSubmit.bind(this, {index})}> 
                        Buy
                    </Button>
                    <Button disabled={request.complete} 
                        color= "blue"
                        basic 
                        floated="right"
                        onClick={this.onFinalize.bind(this, {index})}> 
                        Finalize
                    </Button></div> </div>,
                    meta: 'Owner: ' + request.manager ,
                    fluid: true,
                    style: {width:'500px'}
                };
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
        // this.state.indexofButtton = id.target.id;
        const exchange = Exchange(this.props.TheAddress);

        const {price} = this.props.requests[indexofButtton];
        
        // this.setState({loading: true, errorMessage: ''});

            await ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            
            await exchange.methods.contribute().send({
                from : accounts[0],
                value : parseInt(price)
            });

    }

    onFinalize = async (event, id) => {
        // event.preventDefault();
        console.log(id.target.parentNode.id);
        const indexofButtton = parseInt(id.target.parentNode.id);
        // this.state.indexofButtton = id.target.id;
        const exchange = Exchange(this.props.TheAddress);


        // this.setState({loading: true, errorMessage: ''});

            await ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            

            await exchange.methods.finalizeRequest(indexofButtton).send({
                from : accounts[0]
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