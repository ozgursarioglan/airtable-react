import React, {Component} from 'react';

class SliderSection extends Component {
    render() {
        return (
            <div>
                <section className="position-relative pt-12 pt-md-14 mt-n11">


                    <div className="shape shape-fluid-x shape-blur-2 svg-shim text-light">
                        <svg viewBox="0 0 1313 768" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M442.794 768c163.088 0 305.568-88.227 382.317-219.556l.183.556s.249-.749.762-2.181a440.362 440.362 0 0033.192-71.389C901.996 397.81 989.306 277.09 1144.29 206l-.92-.693C1230.34 171.296 1295.63 94.049 1312.83 0H1.294v295.514c-.663 9.909-1 19.908-1 29.986 0 244.386 198.114 442.5 442.5 442.5z"
                                fill="currentColor"/>
                        </svg>
                    </div>


                    <div className="container">
                        <div className="row align-items-center text-center text-md-left">
                            <div className="col-12 col-md-6">


                                <img src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-4.png" alt="..."
                                     className="img-fluid mw-130 float-right mb-6 mb-md-0" data-aos="fade-right" />

                            </div>
                            <div className="col-12 col-md-6">


                                <h1 className="display-1 font-weight-bold">
                                    <div data-aos="fade-left">Work Smart.</div>
                                    <div data-aos="fade-left" data-aos-delay="100">Not Hard.</div>
                                </h1>


                                <p className="font-size-lg text-muted mb-0" data-aos="fade-left" data-aos-delay="200">
                                    Productivity tools can either help you or get in the way. Landkit aims to remove all
                                    barriers between you and just getting stuff done. Give us a try and we promise you
                                    won't regret it.
                                </p>

                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default SliderSection;