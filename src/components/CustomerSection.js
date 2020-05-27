import React, {Component} from 'react';
import {
    EuiButton,
    EuiCard,
    EuiIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiLink,
    EuiSpacer,
    EuiText,
    EuiBadge,
    EuiTitle,
    EuiTextAlign
} from '@elastic/eui';

const imgUrl = '//logo.clearbit.com/'

class CustomerSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
        };
    }

    componentDidMount() {
        fetch('https://api.airtable.com/v0/appxgMKp3ZuSCqNva/Customers?api_key=keyoRtG2CfniQqXoX')
            .then((resp) => resp.json())
            .then(data => {
                console.log(data);
                this.setState({
                    customers: data.records
                });
            }).catch(err => {
            console.log(err)
        });
    }


    render() {
        return (
            <div>

                <EuiTextAlign textAlign="center">
                    <EuiTitle  size="m">
                        <h2 textAlign="center">Customers</h2>
                    </EuiTitle>
                </EuiTextAlign>
                <EuiFlexGroup>
                    {this.state.customers.map(customers => <CustomerCard {...customers.fields} /> )}
                </EuiFlexGroup>
            </div>
        );
    }
}

export default CustomerSection;

const CustomerCard = ({ Name, Text, Url, Color, Icon, BadgeText}) => (
    <EuiFlexItem>
        <EuiCard
            icon={<EuiIcon size="xxl" type={imgUrl+Icon} />}
            title={Name}
            description={Text}
            footer={
                <div>
                    <EuiSpacer size="xs" />
                    <EuiText size="s">
                        <p>
                            <EuiBadge color={Color}>{BadgeText}</EuiBadge>
                        </p>
                    </EuiText>
                </div>
            }
        />
    </EuiFlexItem>
);