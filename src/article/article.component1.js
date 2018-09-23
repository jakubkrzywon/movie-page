import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './article.component.style.css'
import {Link} from 'react-router-dom';


function Prev(props) {
    return (
        <button onClick={props.toggle} disabled={props.active}>Previous</button>
    );
}

function Next(props) {
    return (
        <button onClick={props.toggle} disabled={props.active}>Next</button>
    );
}


class Article extends Component {
    constructor(props) {
        super(props);

    this.state={
        index: 1,
        disabledNext: false,
        disabledPrev: false,
        data: null,
    }
    }


    componentDidMount() {
        fetch("http://localhost:8080/category/9")
            .then(res => res.json())
            .then(data => this.setState({data: data.movies}))
    }
    togglePrev(e) {
        let index = this.state.index - 1;
        let disabledPrev = (index === 0);

        this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
    }

    toggleNext(e) {
        let index = this.state.index + 1;
        let disabledNext = index === (this.state.data.length - 1);

        this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
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
        const { index, disabledNext, disabledPrev } = this.state
        const films = this.state.data ? this.state.data[index] : null

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


        if (films) {
            return (
                <div className="Article">
                    <div className="header-list">
                        <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
                        <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
                    </div>
                    <div className="header-container">{list}</div>
                </div>
            )
        } else {
            return <span>error</span>
        }
    }

}

export const ArticleComponent1 = withRouter(Article);