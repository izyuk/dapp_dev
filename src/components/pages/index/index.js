import React, { Component } from 'react';
import style from './style.less';
import Left from './left';
import Right from './right';
import backgr from '../../../static/img/bg.png';


class Index extends Component {
  render() {
    return (
      <section className={style.main}
               style={{backgroundImage: `url(${backgr})`,
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom',
                backgroundSize: '70%'}}>
        <Left/>
        <Right/>
      </section>
    );
  }
}

export default Index;
