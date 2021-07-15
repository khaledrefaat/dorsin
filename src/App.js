import React from 'react'

import Header from './sections/Header';
import Services from './sections/Services';

import classes from './App.module.scss';

const App = () => {
    return (
        <div>
            <Header />
            <Services sectionStyles={classes.section} />
        </div>
    )
}

export default App
