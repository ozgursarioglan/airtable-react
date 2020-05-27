import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    EuiHeader,
    EuiHeaderSectionItem,
    EuiHeaderLogo,
    EuiHeaderLinks,
    EuiHeaderLink,
} from '@elastic/eui';

const NavBar = (props) => {

    const renderPagesNav = () => {
        let aPage = props.pages.map(pageObj => <NavLink to = {`/page/${pageObj.PageUrl}`}><EuiHeaderLink>{pageObj.PageName}</EuiHeaderLink></NavLink> )
        return aPage
    }
    return (
        <div>
            <EuiHeader>
                <EuiHeaderSectionItem border="right">
                    <EuiHeaderLogo href="#">RemoteTeam Demo</EuiHeaderLogo>
                </EuiHeaderSectionItem>
                <EuiHeaderLinks>
                    <NavLink to="/"><EuiHeaderLink>Home</EuiHeaderLink></NavLink>
                    {renderPagesNav()}
                </EuiHeaderLinks>
                <EuiHeaderSectionItem border="left">
                    <EuiHeaderLink href="#">Login</EuiHeaderLink>
                </EuiHeaderSectionItem>
            </EuiHeader>
        </div>
    )
}

export default NavBar
