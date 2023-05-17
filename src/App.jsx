import React, { useState } from 'react';
import './fonts.scss';
import './global.scss';
import FirstScreen from './components/firstScreen/FirstScreen';
import Plus from './components/plus/Plus';
import Club from './components/club/Club';
import Burger from './components/burger/Burger';
import Treiners from './components/treiners/Treiners';

const App = () => {
    const [activeBurger, setActiveBurger] = useState(false);
    return (
        <>
            <Burger active={activeBurger} setActive={setActiveBurger} />
            <FirstScreen setActiveBurger={setActiveBurger} />
            <Plus />
            <Club />
            <Treiners />
        </>
    );
};

export default App;