import React from 'react';
import './fonts.scss';
import './global.scss';
import FirstScreen from './components/firstScreen/FirstScreen';
import Plus from './components/plus/Plus';

const App = () => {
    return (
        <>
        <FirstScreen />
        <Plus />
        </>
    );
};

export default App;