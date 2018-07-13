import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './style.less';

class Left extends Component {
    render() {
        return (
            <div className={style.left_content}>
                <ul className={style.indicators}>
                    <li className={style.active}>
                        <Link to='/about'>
                            <span>About</span>
                        </Link>
                        <b></b>
                    </li>
                    <li>
                        <Link to='/index/easytcr'>
                            <span>EasyTCR</span>
                        </Link>
                        <b></b>
                    </li>
                    <li>
                        <Link to='/index/busines'>
                            <span>Business</span>
                        </Link>
                        <b></b>
                    </li>
                    <li>
                        <Link to='/index/ecosystem'>
                            <span>Ecosystem</span>
                        </Link>
                        <b></b>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Left;