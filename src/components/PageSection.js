import React from 'react'
import {
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle,
    EuiImage,
    EuiFlexGroup,
    EuiFlexItem,
    EuiBadge
} from '@elastic/eui';
const PageSection = ({PageContent}) => {
    return (
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
            <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                    <EuiTitle>
                        <h2>{PageContent.PageTitle}</h2>
                    </EuiTitle>
                </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>

                <EuiFlexGroup>
                    <EuiFlexItem grow={false}>
                        <EuiImage
                            size="l"
                            hasShadow
                            caption={PageContent.PageTitle}
                            alt={PageContent.PageTitle}
                            url={PageContent.PageImage}
                        />
                    </EuiFlexItem>
                    <EuiFlexItem>{PageContent.PageText}
                    </EuiFlexItem>
                </EuiFlexGroup>
                {PageContent.PageCategory.map(item => (
                    <EuiBadge color="secondary">{item}</EuiBadge>
                ))}
            </EuiPageContentBody>
        </EuiPageContent>
    )
}

export default PageSection










