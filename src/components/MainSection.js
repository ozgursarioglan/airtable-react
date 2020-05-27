import React, { Component } from 'react'
import HeroSection from "./HeroSection";
import CustomerSection from "./CustomerSection";
class MainSection extends Component {
    render() {
        return (
            <div>
                <HeroSection/>
                <CustomerSection/>
            </div>
        );
    }
}

export default MainSection;