import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Exchange from '../ethereum/exchange'
import { Router } from '../routes';

class ExchangeRow extends Component {
    

    render() {
        const {Row, Cell} = Table;
        const { id , exchange} = this.props;

        return (
            <Row disabled={exchange.complete} positive={!exchange.complete}>
                <Cell>{id}</Cell>
                <Cell>{exchange.units}</Cell>
                <Cell>{exchange.price}</Cell>
                <Cell>{exchange.complete}</Cell>
                
            </Row>
        );
    }
}

export default ExchangeRow;