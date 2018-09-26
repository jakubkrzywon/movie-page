import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './article.component.style.css'
import {Link} from 'react-router-dom';

class Article extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);


    }

    state = {
        data: null,

    };

    goBack() {
        this.props.history.goBack();

    }

    prevArticle = () => {

    };
    nextArticle = () => {

    };

    componentDidMount() {
        fetch("http://localhost:8080/category/11")
            .then(res => res.json())
            .then(data => this.setState({data: data.movies}))
    }

    render() {
        if (this.state.data === null) {
            return null
        }
        console.log(this.state.data);
        const mov = this.state.data.find(movie => {
            return movie.id === Number(this.props.match.params.id)
        });
        console.log(mov);
        // if (mov === undefined) {
        //     this.props.history.push("/wiecej/" + this.props.match.params.category + "/" + (Number(this.props.match.params.id)+1))
        //     return null
        // }

        const list = <div key={mov.id} className="article-col-1-3">
            <img src={mov.image} className="article-col-img"/>
            <h2 className="article-col-title">{mov.title}, #{mov.releaseDate}</h2>
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

        if (mov.id <= 40) {
            return <div className="Article">
                <div className="header-list">
                    <Link to={"/11" }>Artykuły</Link>
                    <Link to="/">Strona główna</Link>
                    <Link to={"/wiecej/11"+ "/" + (Number(mov.id) + 1)}>Następny
                    artykuł &rarr;</Link>
                </div>
                <div className="header-container">{list}</div>
            </div>;
        } else if (mov.id >= 46) {
            return <div className="Article">
                <div className="header-list">
                    <Link to={"/wiecej/11"+ "/" + (Number(mov.id) - 1)}>&#8592; Poprzedni
                        artykuł</Link>
                    <Link to={"/11"}>Artykuły</Link>
                    <Link to="/">Strona główna</Link>
                </div>
                <div className="header-container">{list}</div>
            </div>;
        }  else {return <div className="Article">
            <div className="header-list">
                <Link
                    to={"/wiecej/11"+ "/" + (Number(mov.id) - 1)}>&#8592; Poprzedni
                    artykuł</Link>
                <Link to={"/11"}>Artykuły</Link>
                <Link to="/">Strona główna</Link>
                <Link to={"/wiecej/11" + "/" + (Number(mov.id) + 1)}>Następny
                    artykuł &rarr;</Link>
            </div>
            <div className="header-container">{list}</div>
        </div>;
        }
    }
}

export const ArticleComponent3 = withRouter(Article);