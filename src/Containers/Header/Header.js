import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../../Components/Header/Bar'
import Home from '../../Components/Header/Home'
import Search from '../../Components/Header/Search'
import UserInfo from '../../Components/Header/UserInfo'
const Header = props => {
    return (
        <Bar>
            <Home/>
            <UserInfo/>
            <Search/>
        </Bar>
    );
};

Header.propTypes = {
    
};

export default Header;