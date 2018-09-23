import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class HomeComponent extends Component {
    render() {
        return (
            <div className="Home">
                <section className="main container">
                    <div className="main-title"><h3><a href="https://www.facebook.com/PrzegladKinowy/">Przegląd
                        kinowy
                    </a></h3>
                    </div>
                    <ul className="main-menu">
                        <li className="main-menu-links link1">
                            <Link to="/10">Kadry zapadające w pamięć</Link>
                            <p>Ciekawostki o >kulisach powstawania i kręcenia filmów.</p>
                        </li>
                        <li className="main-menu-links link2">
                            <Link to="/9">Zza kulis</Link>
                            <p>Piękne filmowe kadry i związane z nimi ciekawostki.</p>
                        </li>
                        <li className="main-menu-links link3">
                            <Link to="/11">Oscarowe historie</Link>
                            <p>Historie z najważniejszą statuetką w roli głównej.</p>
                        </li>
                        <li className="main-menu-links link4">
                            <Link to="/12">Wehikuł czasu</Link>
                            <p>Opis najlepszego wg nas filmu danego roku.</p>
                        </li>
                        <li className="main-menu-links link5">
                            <Link to="/14">Camera obscura</Link>
                            <p>Tutaj znajdziesz mało znane lub zapomniane,świetne produkcje.</p>
                        </li>
                        <li className="main-menu-links link6">
                            <Link to="/o-nas">O nas</Link>
                            <p>Poznaj twórców strony.</p>
                        </li>
                        <li className="main-menu-links link7">
                            <a href="https://www.messenger.com/t/PrzegladKinowy">Kontakt</a>
                            <p>Masz do nas sprawę? Napisz!</p>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}
