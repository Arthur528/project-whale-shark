import React from 'react';
import passwordGenerator from '../../assets/images/PassGen1.png';
import homePage from '../../assets/images/homePage.png';
import suya from '../../assets/images/shop-shop.png';
import workDay from '../../assets/images/workDay.png';
import textEditor from '../../assets/images/textEdit.png';
import Taskinator from '../../assets/images/weathertracker.png';

function Portfolio() {
    return (
        <section className="portfolio">
        <div className="center">
            <h1 className="page-header">My Portfolio</h1>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
            <div class="col">
                <div class="card">
                    <img
                        src={passwordGenerator}
                        alt="passwordGenerator"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Password Generator</p>
                        <a href="https://github.com/Arthur528/blu-pig-3" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://arthur528.github.io/blu-pig-3/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={homePage}
                        alt="homePage"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Home Page</p>
                        <a href="https://github.com/Arthur528/blu-pig-2" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://arthur528.github.io/blu-pig-2/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={suya}
                        alt="suya"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Suya</p>
                        <a href="https://github.com/bmckenzie88/suya" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://bmckenzie88.github.io/suya/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={workDay}
                        alt="workDay"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Work Day Schedular</p>
                        <a href="https://github.com/Arthur528/snark-shark-1" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://arthur528.github.io/snark-shark-1/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={textEditor}
                        alt="textEditor"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Text Editor</p>
                        <a href="https://final-attempt-editor.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://github.com/Arthur528/final-attempt-editor" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={weatherTracker}
                        alt="weatherTracker"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Weather Tracker</p>
                        <a href="https://github.com/Arthur528/on-her-majestys-secret-weather" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://arthur528.github.io/on-her-majestys-secret-weather/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>



        </div>
    </section>
    )
}

export default Portfolio;