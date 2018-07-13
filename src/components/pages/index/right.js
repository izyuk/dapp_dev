import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './style.less';

import Icon from '../../../static/icon';
import {ICONS} from '../../../static/constants';

class Right extends Component {
    render() {
        return (
            <div className={style.right_container}>
                <div className="container">
                    <Switch>
                        <Route path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const Home = () => (
        <div className="head">
            <div className={style.content}>
                <Icon icon={ICONS.logo} width={600} height={70} color={'#73f5e2'} viewBox={'0 0 300 80'}/>
            </div>
        </div>
);

const About = () => (
    <div className="other_head">
        <p>About</p>
        <p>DApp DEV is a development studio dedicated to creating decentralized applications using Ethereum platform. Our mission is to promote and support Ethereum ecosystem. DApp DEV Consulting offices are located in Kyiv (headquarters) and Berlin. We believe that the era of decentralization brings a new world of opportunities for all of us. We would like to to build together a more globally accessible, freer and more trustworthy Internet by means of Ethereum as a decentralized platform. DApp DEV has brought together some of the brightest minds in technology, cryptography, peer-to-peer technology and decentralised consensus architectures to power this future decentralised web</p>
    </div>
);

export default Right;