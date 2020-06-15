import React, { useState, useEffect } from 'react';
import Header from './Header';
import Task from './Task';
import Database from '../data.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from 'react-bootstrap/Button';
import Timekeeper from 'react-timekeeper';

const NewTask = ({ onClose, onSubmit }) => {

    const [taskName, setTaskName] = useState();
    const [formattedTime, setFormattedTime] = useState('05:40');
    const [projectName, setProjectName] = useState(Database.projectsList[0]);

    const onCreateNewTask = () => {
        if (taskName && projectName && formattedTime) {
            onSubmit(taskName, projectName, formattedTime);
        }
        else {
            alert('All fields are required');
        }

    };
    const onSelect = (obj) => {
        setProjectName(obj.value)
    }

    return (
        <div>
            <h2 style={{ textAlign: "center", margin: 10 }}>Create New Task</h2>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>

                <div style={{ width: '50%', minWidth: 400, backgroundColor: 'lightgrey', padding: 20 }}>
                    {/* Task Name */}
                    <label htmlFor="taskNameInput">
                        Name of the task:
                </label>
                    <br />
                    <input
                        id="taskNameInput"
                        onChange={e => setTaskName(e.target.value)}
                        value={taskName}
                    />
                    <br />
                    <br />


                    {/* Project Name */}
                    <label htmlFor="projectName">Select Project Name:</label>
                    <Dropdown options={Database.projectsList} onChange={onSelect} value={projectName} />
                    <br />
                    

                    {/* Formatted Time */}
                    <label htmlFor="formattedTime">
                        Enter Time needed (hh:mm):
                </label>
                    <br />
                    <input
                        id="formattedTime"
                        onChange={e => setFormattedTime(e.target.value)}
                        value={formattedTime}
                    />
                    <br />
                    
                    <br />
                    <Button variant="success" onClick={onCreateNewTask} style={{
                        position: 'relative', top: '50%', left: '30%', margin: 10
                    }}>Submit</Button>
                    <Button variant="danger" onClick={onClose} style={{
                        position: 'relative', top: '50%', left: '30%'
                    }} >Close</Button>
                </div>
            </div>
        </div>
    );
}

export default NewTask;
