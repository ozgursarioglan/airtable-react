import React, {Component} from 'react';
import HeaderSection from "./components/HeaderSection";
import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
} from '@elastic/eui';
import { Route, Switch } from 'react-router-dom';
import MainSection from "./components/MainSection";
import PageSection from "./components/PageSection";
import NotFoundSection from "./components/NotFoundSection";
class App extends Component {
    state = {
        pages: []
    }

    componentDidMount() {
        fetch('https://api.airtable.com/v0/appxgMKp3ZuSCqNva/Pages?api_key=keyoRtG2CfniQqXoX')
            .then((resp) => resp.json())
            .then(data => {
                this.setState({
                    pages: data.records.map(i =>(
                        i.fields
                    ))
                });
            }).catch(err => {
            console.log(err)
        });
    }


    renderShirts = (routerProps) => {
        let pageUrl = routerProps.match.params.PageUrl
        console.log(routerProps)
        let foundPage = this.state.pages.find(pageObj => pageObj.PageUrl === pageUrl)
        return (foundPage ? <PageSection PageContent={foundPage}/> : <NotFoundSection/>)
    }


    render() {
        return (
            <div>
            <HeaderSection pages = {this.state.pages}/>
                <EuiPage>
                    <EuiPageBody component="div">
                        <Switch>
                            <Route exact path = '/' component = {MainSection} />
                            <Route path = '/page/:PageUrl' render = {routerProps => this.renderShirts(routerProps)} />
                            <Route component = {NotFoundSection} />
                        </Switch>
                    </EuiPageBody>
                </EuiPage>
            </div>
        );
    }
}

export default App;