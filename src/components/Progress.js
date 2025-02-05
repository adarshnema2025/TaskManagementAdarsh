import React, { useState, useEffect } from 'react';

const Progress = ({ tasks = [] }) => {
    // Ensure `tasks` is an array and handle the case when it's undefined
    const [taskStatus, setTaskStatus] = useState([]);

    // Update `taskStatus` when `tasks` change
    useEffect(() => {
        setTaskStatus(tasks.map(() => ({ progress: false, inProgress: false, done: false })));
    }, [tasks]);

    // Function to toggle status on click
    const toggleStatus = (taskIndex, column) => {
        setTaskStatus((prevState) =>
            prevState.map((status, index) =>
                index === taskIndex ? { ...status, [column]: !status[column] } : status
            )
        );
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tasks</th>
                        <th scope="col">Progress</th>
                        <th scope="col">In Progress</th>
                        <th scope="col">Done</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No tasks available</td>
                        </tr>
                    ) : (
                        tasks.map((task, index) => (
                            <tr key={index}>
                                <th scope="row">{task}</th>
                                <td onClick={() => toggleStatus(index, 'progress')} style={{ cursor: 'pointer' }}>
                                    {taskStatus[index]?.progress ? '✔️' : '❌'}
                                </td>
                                <td onClick={() => toggleStatus(index, 'inProgress')} style={{ cursor: 'pointer' }}>
                                    {taskStatus[index]?.inProgress ? '✔️' : '❌'}
                                </td>
                                <td onClick={() => toggleStatus(index, 'done')} style={{ cursor: 'pointer' }}>
                                    {taskStatus[index]?.done ? '✔️' : '❌'}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Progress;
