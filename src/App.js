import React, {useState} from 'react';
import {Panel, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MainScreen from "./panels/MainScreen/MainScreen";
import CreateList from "./panels/CreateList/CreateList";

const App = () => {

    const [activeScreen, setActiveScreen] = useState('MainScreen')

    return (
        <View activePanel={activeScreen}>
            <Panel id='MainScreen'>
                <MainScreen setScreen={setActiveScreen}/>
            </Panel>
            <Panel id='CreateList'>
                <CreateList setScreen={setActiveScreen}/>
            </Panel>
        </View>
    );
}

export default App;

