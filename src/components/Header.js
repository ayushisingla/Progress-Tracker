import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = ({ name, logout }) => {
    return (
        <div style={{ height: 60, backgroundColor: 'rgb(253,194,48)', flex: 1, justifyContent: 'row', alignItems: 'flex-end', textAlign: 'center' }}>
            <Button variant="warning" style={{ float: "left" ,height: 60}}>Hi {name}</Button>{' '}
            <Button variant="warning" style={{ float: "right",height: 60 }} onClick={logout} >Logout</Button>{' '}
        </div>
    );
}

export default Header;
