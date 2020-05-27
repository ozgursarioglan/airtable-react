import React, {Component} from 'react';

class FeaturesSection extends Component {
    render() {
        return (
            <div>
                <section className="py-8 py-md-11 bg-gray-200">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-7 text-center">


                                <h2 className="font-weight-bold">
                                    Built for teams of all kinds.
                                </h2>


                                <p className="font-size-lg text-muted mb-7 mb-md-9">
                                    No matter what you're working on, who you're with, or how many of you there are,
                                    Landkit can help.
                                </p>

                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-lg-6 d-lg-flex pb-1 mb-4">


                                <div className="card shadow-light-lg overflow-hidden" data-aos="fade-up">
                                    <div className="row">
                                        <div className="col-md-4 position-relative">


                                            <img src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-8.png"
                                                 className="h-75 position-absolute right-0 mt-7 mr-n4" alt="..." />

                                        </div>
                                        <div className="col-md-8">


                                            <div className="card-body py-7 py-md-9 text-center">


                                                <h4 className="font-weight-bold">
                                                    Unlimited Team Size
                                                </h4>


                                                <p className="text-muted mb-0">
                                                    Landkit works well for a scrappy team of 3 or scales to the
                                                    enterprise level needs of Forture 500 companies.
                                                </p>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-lg-6 d-lg-flex pb-1 mb-4">


                                <div className="card shadow-light-lg overflow-hidden text-center" data-aos="fade-up">
                                    <div className="row">
                                        <div className="col-md-8">


                                            <div className="card-body py-7 py-md-9">


                                                <h4 className="font-weight-bold">
                                                    Emoji Responses
                                                </h4>


                                                <p className="text-muted mb-0">
                                                    Instead of bombarding team members with huge messages, simply reply
                                                    with an emoji to express your reply.
                                                </p>

                                            </div>

                                        </div>
                                        <div className="col-md-4">


                                            <img src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-6.png"
                                                 className="h-75 position-absolute left-0 mt-7" alt="..." />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">


                                <div className="card shadow-light-lg overflow-hidden text-center text-lg-left"
                                     data-aos="fade-up">
                                    <div className="row">
                                        <div className="col-md-4 position-relative">


                                            <img src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
                                                 className="h-75 position-absolute right-0 mt-6" alt="..." />

                                        </div>
                                        <div className="col-md-8">


                                            <div className="card-body py-7 py-md-9">


                                                <h4 className="font-weight-bold">
                                                    Building a community.
                                                </h4>


                                                <p className="text-muted mb-0">
                                                    Landkit is focused on helping foster a community. Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit. Proin quis diam tempus tortor
                                                    egestas blandit. Aliquam erat volutpat. Phasellus rhoncus pretium
                                                    molestie. Nulla facilisi. Etiam sollicitudin lectus ac nisi
                                                    tincidunt porttitor. Phasellus eros metus, gravida eu mi ac, gravida
                                                    convallis ipsum.
                                                </p>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default FeaturesSection;