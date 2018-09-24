import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './article.component.style.css'
import {Link} from 'react-router-dom';

class Article extends Component {
    constructor(props) {
        super(props);


        this.state = {
            data: null,
            index: 0,
        };
        this._TogglePrev = this._TogglePrev.bind(this);
        this._ToggleNext = this._ToggleNext.bind(this);
    }




    componentDidMount() {
        fetch("http://localhost:8080/category/9")
            .then(res => res.json())
            .then(data => this.setState({data: data.movies[this.state.index]}))

    }


    _ToggleNext() {
        if(this.state.index == this.state.data.length - 1)
            return;

        this.setState(prevState => ({
            index: prevState.index + 1
        }))
    }

    _TogglePrev() {
        if(this.state.index == 0)
            return;

        this.setState(prevState => ({
            index: prevState.index - 1
        }))
    }

    render() {
        if (this.state.data === null) {
            return null
        }
        let {index, data} = this.state;
        console.log(this.state.data);
        const mov = this.state.data.find(movie => {
            return movie.id === Number(this.props.match.params.id)
        });
        console.log(mov);


        const list = <div key={mov.id} className="article-col-1-3">
            <img src={mov.image} className="article-col-img"/>
            <h2 className="article-col-title">{mov.title}, {mov.releaseDate}r.</h2>
            <p className="article-col-article"> {mov.description}</p>
        </div>;

        // return <div className="Article">
        //     <div className="header-list">
        //         <button className="prev-article-btn" onClick={this.prevArticle}>&#8592; Poprzedni artykuł |</button>
        //         <button className="prev-page-btn" onClick={this.goBack}>Poprzednia strona |</button>
        //         <Link to="/">Strona główna |</Link>
        //         <button className="next-article-btn" onClick={this.nextArticle}>Następny artykuł &rarr;</button>
        //     </div>
        //     <div className="header-container">{list}</div>
        // </div>;

        if (mov.id <= 18) {
            return <div className="Article">
                <div className="header-list">
                    <Link to={"/9"}>Artykuły</Link>
                    <Link to="/">Strona główna</Link>
                    <Link to={"/wiecej/9" + "/" + (Number(mov.id) + 1)}>Następny
                        artykuł &rarr;</Link>
                </div>
                <div className="header-container">{list}</div>
            </div>;
        } else if (mov.id >= 28) {
            return <div className="Article">
                <div className="header-list">
                    <Link to={"/wiecej/9" + "/" + (Number(mov.id) - 1)}>&#8592; Poprzedni
                        artykuł</Link>
                    <Link to={"/9"}>Artykuły</Link>
                    <Link to="/">Strona główna</Link>
                </div>
                <div className="header-container">{list}</div>
            </div>;
        }  else {return <div className="Article">
            <div className="header-list">
                <Link
                    to={"/wiecej/9"  + "/" + (Number(mov.id) - 1)}>&#8592; Poprzedni
                    artykuł</Link>
                <Link to={"/9" }>Artykuły</Link>
                <Link to="/">Strona główna</Link>
                <Link to={"/wiecej/9" + "/" + (Number(mov.id) + 1)}>Następny
                    artykuł &rarr;</Link>
            </div>
            <div className="header-container">{list}</div>
        </div>;
        }
    }
}

export const ArticleComponent1 = withRouter(Article);