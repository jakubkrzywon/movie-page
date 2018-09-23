import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './list.component.style.css'
import {Link} from 'react-router-dom';

class List extends Component {
    state = {
        data: [],
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {

        fetch(`http://localhost:8080/category/` + this.props.match.params.categoryId)
            .then(res => res.json())
            .then(data => this.setState({data: data.movies}))
    };


    render() {
        console.log(this.state.data);
        const list = this.state.data.map(item =>
            <div key={item.id} className="col-1-3">
                <div className="col-img" style={{backgroundImage: `url(${item.image})`}}>
                </div>
                <p className="col-title">{item.title}, {item.releaseDate}</p>

                <div className="col-link">
                    <Link to={"/wiecej/"+this.props.match.params.categoryId+"/"+item.id}>Przeczytaj artykuł</Link>
                </div>
            </div>
        );



        return <div className="List">

            <div className="header-list-list">
                <Link to="/">Strona główna</Link>
            </div>
            <div className="header-container-list">{list}</div>
        </div>;
    }
}

export const ListComponent = withRouter(List);