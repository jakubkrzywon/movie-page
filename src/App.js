import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {ArticleComponent1} from "./article/article.component1";
import {ArticleComponent2} from "./article/article.component2";
import {ArticleComponent3} from "./article/article.component3";
import {ArticleComponent4} from "./article/article.component4";
import {ArticleComponent5} from "./article/article.component5";
import {AboutComponent} from "./about us/aboutus.component";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route exact path="/o-nas" render={() => <AboutComponent/>}/>
                        <Route exact path="/:categoryId" render={() => <ListComponent/>}/>
                        <Route exact path="/wiecej/9/:id" render={() => <ArticleComponent1/>}/>
                        <Route exact path="/wiecej/10/:id" render={() => <ArticleComponent2/>}/>
                        <Route exact path="/wiecej/11/:id" render={() => <ArticleComponent3/>}/>
                        <Route exact path="/wiecej/12/:id" render={() => <ArticleComponent4/>}/>
                        <Route exact path="/wiecej/14/:id" render={() => <ArticleComponent5/>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
