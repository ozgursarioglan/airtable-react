import React, {Component} from 'react';

class FooterSection extends Component {
    render() {
        return (
            <div>
                <footer className="py-8 py-md-11 bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3">


                                <img src="assets/img/brand.svg" alt="..." className="footer-brand img-fluid mb-2" />


                                <p className="text-gray-700 mb-2">
                                    A better way to build.
                                </p>


                                <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                                    <li className="list-inline-item list-social-item mr-3">
                                        <a href="#!" className="text-decoration-none">
                                            <img src="assets/img/icons/social/instagram.svg"
                                                 className="list-social-icon" alt="..." />
                                        </a>
                                    </li>
                                    <li className="list-inline-item list-social-item mr-3">
                                        <a href="#!" className="text-decoration-none">
                                            <img src="assets/img/icons/social/facebook.svg"
                                                 className="list-social-icon" alt="..." />
                                        </a>
                                    </li>
                                    <li className="list-inline-item list-social-item mr-3">
                                        <a href="#!" className="text-decoration-none">
                                            <img src="assets/img/icons/social/twitter.svg"
                                                 className="list-social-icon" alt="..." />
                                        </a>
                                    </li>
                                    <li className="list-inline-item list-social-item">
                                        <a href="#!" className="text-decoration-none">
                                            <img src="assets/img/icons/social/pinterest.svg"
                                                 className="list-social-icon" alt="..." />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-6 col-md-4 col-lg-2">


                                <h6 className="font-weight-bold text-uppercase text-gray-700">
                                    Products
                                </h6>


                                <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Page Builder
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            UI Kit
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Styleguide
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-reset">
                                            Changelog
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-6 col-md-4 col-lg-2">


                                <h6 className="font-weight-bold text-uppercase text-gray-700">
                                    Services
                                </h6>


                                <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Documentation
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Changelog
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Pagebuilder
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-reset">
                                            UI Kit
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">


                                <h6 className="font-weight-bold text-uppercase text-gray-700">
                                    Connect
                                </h6>


                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Page Builder
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            UI Kit
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Styleguide
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Documentation
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Changelog
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-reset">
                                            Changelog
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-6 col-md-4 col-lg-2">


                                <h6 className="font-weight-bold text-uppercase text-gray-700">
                                    Legal
                                </h6>


                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Documentation
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#!" className="text-reset">
                                            Changelog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-reset">
                                            Pagebuilder
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterSection;