import React, { useState, useEffect } from 'react';
import Header from './Header';
import Login from './Login';
import TaskBox from './TaskBox';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [profileInfo, setProfileInfo] = useState();

    const onLoginSucess = (profileInfoData) => {
        setProfileInfo(profileInfoData)
        setIsLogin(true)
    };

    return (
        <div >
            {/* Login */}
            {!isLogin && (
                <Login onLoginSucess={onLoginSucess} />
            )}

            {isLogin && (
                <TaskBox logout={() => setIsLogin(false)} profileInfo={profileInfo} />
            )}

        </div>
    );
}

export default Home;
