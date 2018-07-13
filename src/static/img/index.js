import React, { Component } from 'react';
import style from './style.less';
import Left from './left';
import Right from './right';


class Index extends Component {
  render() {
    return (
      <section className={style.main}>
        <Left/>
        <Right/>
      </section>
    );
  }
}

export default Index;
