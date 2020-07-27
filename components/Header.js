import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: '1em'}}>
            <Link route="/">
                <a className="item">
                    BlockChainMicroGrid
                </a>
            </Link>

            <Menu.Menu position="right">
                <Link route="/">
                    <a className="item">
                        Pending Exchanges
                    </a>
                </Link>
                <Link route="/Exchanges/new">
                    <a className="item">
                        New Exchange
                    </a>
                </Link>
            </Menu.Menu>
        </Menu>
    )
}