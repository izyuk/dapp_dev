import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './header.less';
import Icon from '../../static/icon';
import {ICONS} from '../../static/constants';
class Header extends Component {
    render() {
        return (
            <header>
                <div className={style.logo}>
                    <Link to="/">
                        <Icon icon={ICONS.logo} width={164} height={20} color={'#73f5e2'} viewBox={'0 0 164 85'}/>
                    </Link>
                </div>
                <nav>
                    <Link to="/consulting"><span>consulting</span></Link>
                    <Link to="/conference"><span>conference</span></Link>
                    <Link to="/hackaton"><span>hackaton</span></Link>
                    <Link to="/jobs"><span>jobs</span></Link>
                </nav>
            </header>
        );
    }
}

export default Header;
