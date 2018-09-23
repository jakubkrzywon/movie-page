import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './aboutus.component.style.css'
import {Link} from 'react-router-dom';


class About extends Component {


    render() {
        return <div className="about-page">
            <div className="about-header"><Link to="/">Strona główna</Link></div>
            <div className="about-container">
                <div className="about-us">

                    <img
                        src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/29511021_2118062204885750_1157738512417104356_n.jpg?_nc_cat=0&oh=a09997cfafb60f583279afcbac4c468f&oe=5C259C7D"
                        alt=""/>
                    <h1>Jakub Krzywoń</h1>
                    <p>Mam 23 lata, no w sumie, to za niecały miesiąc stuknie już 24. Pochodzę z Cieszyna, miasta
                        położonego w województwie śląskim na granicy polsko-czeskiej. Od 5 lat mieszkam w Katowicach,
                        gdzie studiowałem prawo na Uniwersytecie Śląskim. Moją pasją jest sport, przedewszystkim ten,
                        który kładzie nacisk na kondycję oraz wytrzymałość. Podczas studiów z sukcesami reprezentowałem
                        siebie oraz uczelnię na Akademickich Mistrzostwach Śląska oraz Polski w ergometrze wioślarskim.
                        Po obronie pracy magisterskiej moje zainsteresowania przerzuciły się na triathlon. W sierpniu
                        2018r. ukończyłem mój pierwszy start na dystansie 1/4 IronMan. Od dziecka kochałem oglądać
                        filmy. Rodzice od małego wpajali mi dobre kino oraz muzykę. Tak zostało mi do dziś, bo rzadko
                        kiedy można zobaczyć mnie bez słuchawek na uszach czy też nie przeglądającego najnowszy
                        repertuar kinowy.</p>
                </div>
                <div className="about-us">
                    <img
                        src="https://scontent-waw1-1.xx.fbcdn.net/v/t34.18173-12/16143985_1460311440646711_510828957_n.png?_nc_cat=0&oh=1e7073188b62af24f9501da0a6d68ec6&oe=5B9C76E4"
                        alt=""/>
                    <h1>Mateusz Sebastiański</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquam architecto
                        aspernatur commodi dicta doloribus ducimus eos esse harum id illum incidunt itaque magnam magni,
                        minus nihil nobis non numquam obcaecati odit, optio perspiciatis provident, quibusdam ratione
                        rem similique tempora temporibus vitae voluptatem. Doloribus enim laboriosam, molestiae quos
                        suscipit velit! Amet aut beatae culpa cumque cupiditate eum excepturi exercitationem facere ipsa
                        laboriosam magni molestiae nihil porro provident quam quia quibusdam quo quos reiciendis sunt
                        totam, ullam ut voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
                        odio! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque dignissimos
                        molestias. Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
        </div>
    }
}


export const AboutComponent = withRouter(About);