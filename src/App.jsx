import React from 'react';
import './fonts.scss';
import './global.scss';
import FirstScreen from './components/firstScreen/FirstScreen';
import Plus from './components/plus/Plus';
import Club from './components/club/Club';
import Burger from './components/burger/Burger';

const App = () => {
    return (
        <>
        <Burger />
        <FirstScreen />
        <Plus />
        <Club />
        </>
    );
};

export default App;