import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './article.component.style.css'
import {Link} from 'react-router-dom';

class Article extends Component {
    constructor(props) {
        super(props);



    }

    state = {
        data: null,
        index: 0,
    };

    // goBack() {
    //     this.props.history.goBack();
    //
    // }

    prevArticle = () => {
        this.props.history.replace('movie/id/previous')
    };
    nextArticle = () => {
        this.props.history.replace('movie/id/next')
    };

    componentDidMount() {
        fetch("http://localhost:8080/category/" + this.props.match.params.category)
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
            <h2 className="article-col-title">{mov.title}, {mov.releaseDate}r.</h2>
            <p className="article-col-article"> {mov.description}</p>
        </div>;

        return <div className="Article">
            <div className="header-list">
                <button className="prev-article-btn" onClick={this.prevArticle}>&#8592; Poprzedni artykuł |</button>
                <Link to={"/" + this.props.match.params.category}>Artykuły</Link>
                <Link to="/">Strona główna |</Link>
                <button className="next-article-btn" onClick={this.nextArticle}>Następny artykuł &rarr;</button>
            </div>
            <div className="header-container">{list}</div>
        </div>;

    //     if (mov.id <= 29) {
    //         return <div className="Article">
    //             <div className="header-list">
    //                 <Link to={"/10"}>Artykuły</Link>
    //                 <Link to="/">Strona główna</Link>
    //                 <Link to={"/wiecej/10" + "/" + (Number(mov.id) + 1)}>Następny
    //                     artykuł &rarr;</Link>
    //             </div>
    //             <div className="header-container">{list}</div>
    //         </div>;
    //     } else if (mov.id >= 39) {
    //         return <div className="Article">
    //             <div className="header-list">
    //                 <Link to={"/wiecej/10" + "/" + (Number(mov.id) - 1)}>&#8592; Poprzedni
    //                     artykuł</Link>
    //                 <Link to={"/10"}>Artykuły</Link>
    //                 <Link to="/">Strona główna</Link>
    //             </div>
    //             <div className="header-container">{list}</div>
    //         </div>;
    //     }  else {return <div className="Article">
    //         <div className="header-list">
    //             <Link
    //                 to={"/wiecej/10"  + "/" + (Number(mov.id) - 1)}>&#8592; Poprzedni
    //                 artykuł</Link>
    //             <Link to={"/10" }>Artykuły</Link>
    //             <Link to="/">Strona główna</Link>
    //             <Link to={"/wiecej/10" + "/" + (Number(mov.id) + 1)}>Następny
    //                 artykuł &rarr;</Link>
    //         </div>
    //         <div className="header-container">{list}</div>
    //     </div>;
    //     }
    }
}

export const ArticleComponent = withRouter(Article);