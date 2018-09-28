import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './article.component.style.css'
import {Link} from 'react-router-dom';

class Article extends Component {
    constructor(props) {
        super(props);



    }

    state = {
        data: [],
        navigators: {}
    };

    // goBack() {
    //     this.props.history.goBack();
    //
    // }

    prevArticle = () => {
        this.props.history.push('/kategoria/'+this.props.match.params.categoryId+'/artykul/'+this.state.navigators.previousId)
    };
    nextArticle = () => {
        this.props.history.push('/kategoria/'+this.props.match.params.categoryId+'/artykul/'+this.state.navigators.nextId)
    };


    componentDidMount() {
        fetch("http://localhost:8080/movie/"+this.props.match.params.id+"/navigators")
            .then(res => res.json())
            .then(data => this.setState({navigators: data}));
        fetch("http://localhost:8080/movie/"+this.props.match.params.id)
            .then(res => res.json())
            .then(data => this.setState({data: data}))
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            fetch("http://localhost:8080/movie/"+this.props.match.params.id+"/navigators")
                .then(res => res.json())
                .then(data => this.setState({navigators: data}));
            fetch("http://localhost:8080/movie/"+this.props.match.params.id)
                .then(res => res.json())
                .then(data => this.setState({data: data}))
        }
    }
    render() {
        console.log(this.state);

        if (this.state.data === null) {
            return null
        }
        console.log(this.state.data);
        const mov = this.state.data;
        console.log(mov);


        const list = <div key={mov.id} className="article-col-1-3">
            <img src={mov.image} className="article-col-img"/>
            <h2 className="article-col-title">{mov.title}, {mov.releaseDate}r.</h2>
            <p className="article-col-article"> {mov.description}</p>
        </div>;

        return <div className="Article">
            <div className="header-list">
                {this.state.navigators.previousId !== null && <button className="prev-article-btn" onClick={this.prevArticle}>&#8592; Poprzedni artykuł |</button>}
                <Link to={"/" + this.props.match.params.category}>Artykuły</Link>
                <Link to="/">Strona główna |</Link>
                {this.state.navigators.nextId !== null && <button className="next-article-btn" onClick={this.nextArticle}>Następny artykuł &rarr;</button>}
            </div>
            <div className="header-container">{list}</div>
        </div>;

    }
}

export const ArticleComponent = withRouter(Article);