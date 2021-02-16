import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';

import Conversation from './components/Conversation';
import UserList from './components/UserList';
import { Join } from './components/Join';

const App = () => {
    const [roomName, setRoomName] = React.useState('');

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    const getUsers = async (roomName) => {
        const data = await axios.get(`/chat/${roomName}`);
        console.log(data);
        return data.data;
    };

    React.useCallback(() => getUsers, []);

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Join
                        roomName={roomName}
                        handleRoomNameChange={handleRoomNameChange}
                    />
                </Route>
                <Route exact path="/chat/:roomName" children={<Conversation />}>
                    <div className="app">
                        <UserList getUsers={getUsers} roomName={roomName} />
                        <Conversation />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};
export default App;
