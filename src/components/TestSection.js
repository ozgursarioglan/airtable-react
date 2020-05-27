import React, { Component } from 'react';

class TestSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        fetch('https://api.airtable.com/v0/appxgMKp3ZuSCqNva/Meta?api_key=keyoRtG2CfniQqXoX')
            .then((resp) => resp.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: data.records });
            }).catch(err => {
            // Error
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card-deck">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestSection;

const MovieCard = ({ title, year, description, imageURL }) => (
    <div className="card">

    </div>
);