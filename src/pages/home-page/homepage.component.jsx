import React from 'react';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory-component';

const homePage = () =>{
    return(
        <div className='homepage'>
            <h1>Welcome to my Homepage</h1>
            <Directory></Directory>
        </div>
    )
}

export default homePage;