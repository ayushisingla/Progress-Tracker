import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

const Task = ({ taskName, projectName, formattedTime, onDelete }) => {

    const [remainingTime, setRemainingTime] = useState(0);

    const deleteAction = () => {
        onDelete(taskName);
    }

    const getFormattedTimeInSec = (ftime) => {
        const timeArray = ftime.split(":");
        return parseInt(timeArray[0] * 60 * 60) + parseInt(timeArray[1] * 60)
    };

    useEffect(() => {
        setRemainingTime(getFormattedTimeInSec(formattedTime));
        return () => {
            setRemainingTime(0);
        }
    }, [])

    useEffect(() => {
        let timerRef;
        try {
            if (remainingTime) {
                timerRef = setTimeout(() =>  setRemainingTime(remainingTime - 1), 1000);
            }
        } catch (err) {
            console.log("err: ", err)
        }
        return () => {
            clearTimeout(timerRef);
        }
    }, [remainingTime])

    return (
        <div style={{ backgroundColor: 'lightgrey', margin: 5, padding: 5 }}>
            <div>
                <span style={{ fontSize: 18, flex: 1 }}>{taskName}</span>
                <div style={{ float: 'right' }}>
                    <span style={{ fontSize: 22, marginRight: 30 }}>{remainingTime}</span>
                    <Button variant="danger" style={{ fontSize: 10 }} onClick={deleteAction}>X</Button>{' '}
                </div>
            </div>
            <div style={{ marginTop: 5 }}>
                <span style={{ fontSize: 14, fontWeight: 'bold' }}>{projectName}</span>
                <span style={{ fontSize: 14 }}>{` (Total time in [hh:mm] is ${formattedTime})`}</span>
            </div>
        </div>
    );
}

export default Task;
