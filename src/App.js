import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {ArticleComponent1} from "./article/article.component1";
import {ArticleComponent} from "./article/article.component";
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
                        <Route exact path="/wiecej/:categoryId/:id" render={() => <ArticleComponent/>}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
