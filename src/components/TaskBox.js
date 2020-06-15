import React, { useState } from 'react';
import Header from './Header';
import Task from './Task';
import NewTask from './NewTask';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Database from '../data.json';

const TaskBox = ({logout, profileInfo}) => {
    const [taskList, setTaskList] = useState(Database.taskList);
    const [isNewTaskOpen, setNewTaskOpen] = useState(false);

    const onCreateNewTask = (taskName, projectName, formattedTime) => {
        const data = taskList;
        data.push({
            "taskName": taskName,
            "projectName": projectName,
            "formattedTime": formattedTime
        });
        setTaskList(data);
        setNewTaskOpen(false);
    };

    const onDeleteAction = (taskName) => {
        const data = taskList.filter(item => {
            return item.taskName !== taskName;
        });
        setTaskList(data);
    }

    const onLogout = () => {
        setTaskList([]);
        logout()
    }

    return (
        <div >
            {/* Header */}
            <Header name={profileInfo.name} logout={onLogout} />

            {/* Task List */}
            {!isNewTaskOpen && (
                <div style={{margin:20}}>
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                        <div style={{ width: '50%', minWidth: 400 }}>
                        <h2 style={{textAlign:"center", margin: 20}}>Progress Tracker</h2>
                            {
                                taskList.map(item => (
                                    <Task
                                        key={item.taskName}
                                        taskName={item.taskName}
                                        projectName={item.projectName}
                                        formattedTime={item.formattedTime}
                                        onDelete={onDeleteAction}
                                    />
                                ))
                            }

                        </div>
                    </div>
                    <Button variant="success" onClick={() => { setNewTaskOpen(true) }} style={{
                      position:'relative', top:'50%', left:'45%'
                    }}>Create New Task</Button>{' '}
                </div>
            )}

            {/* Create New Task */}
            {isNewTaskOpen && (
                <NewTask
                    onClose={() => { setNewTaskOpen(false) }}
                    onSubmit={onCreateNewTask}
                />
            )}
        </div>
    );
}

export default TaskBox;
