import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import style from './app.less';


import Header from '../header/index';
import Index from '../pages/index';

const App = () => (
    <div className={style.wrap}>
        <Main/>
    </div>
);

const Main = () => (
    <main>
        <Header/>
        <Switch>
            <Route exact path="/" component={Index}/>
            {/*<Route path="/projects" component={Projects}/>*/}
        </Switch>
    </main>
)



export default App;
