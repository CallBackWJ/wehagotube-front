import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../Components/Common/PageTemplate'
import ContainerTemplate from "../Components/Common/ContainerTemplate";
import SearchVideoContainer from '../Components/SearchVideo/SearchVideoContainer'
const SearchPage = props => {
    return (
        <div>
            <PageTemplate>
                <ContainerTemplate title='“세무대리” 검색결과 22개 동영상'>
                    <SearchVideoContainer>

                    </SearchVideoContainer>
                </ContainerTemplate>
            </PageTemplate>
        </div>
    );
};

SearchPage.propTypes = {
    
};

export default SearchPage;