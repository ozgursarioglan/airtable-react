import React, {Component, Fragment} from 'react';
import { EuiEmptyPrompt, EuiButton } from '@elastic/eui';
class HeroSection extends Component {
    state = {
        siteTitle: '',
        siteSubTitle: '',
        seoTitle: '',
        siteDesc: '',
        heroButtonText: '',
        heroButtonLink: ''
    }
    componentDidMount() {
        fetch('https://api.airtable.com/v0/appxgMKp3ZuSCqNva/Meta?api_key=keyoRtG2CfniQqXoX')
            .then((resp) => resp.json())
            .then(data => {
                this.setState({
                    siteTitle: data.records[0].fields.siteTitle,
                    siteSubTitle: data.records[0].fields.siteSubTitle,
                    seoTitle: data.records[0].fields.seoTitle,
                    siteDesc: data.records[0].fields.siteDesc,
                    heroButtonText: data.records[0].fields.heroButtonText,
                    heroButtonLink: data.records[0].fields.heroButtonLink
                });
            }).catch(err => {
            console.log(err)
        });
    }

    render() {
        return (
            <div>
                <EuiEmptyPrompt
                    iconType="editorStrike"
                    title={<h1>{this.state.siteTitle}</h1>}
                    body={
                        <Fragment>
                            <p>
                                {this.state.siteDesc}
                            </p>
                            <p>{this.state.siteSubTitle}</p>
                        </Fragment>
                    }
                    actions={
                        <EuiButton color="primary" fill>
                            {this.state.heroButtonText}
                        </EuiButton>
                    }
                />
            </div>
        );
    }
}

export default HeroSection;