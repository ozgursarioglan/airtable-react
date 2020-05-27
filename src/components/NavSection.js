import React, {Component} from 'react';

class NavSection extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">


                        <a className="navbar-brand" href="index.html">
                            <strong>RemoteTeam</strong>
                        </a>


                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarCollapse">


                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <i className="fe fe-x"/>
                            </button>


                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        Landings
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        Landings
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        Landings
                                    </a>
                                </li>
                            </ul>


                            <a className="navbar-btn btn btn-sm btn-primary lift ml-auto" href="#" target="_blank">
                                Buy now
                            </a>

                        </div>

                    </div>
                </nav>
            </div>
        );
    }
}

export default NavSection;