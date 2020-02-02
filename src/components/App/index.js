import './styles.css';
import React from 'react';
import TodoList from '../TodoList';
import { IconContext } from 'react-icons';

let todos = [
    {
        title: 'Tarea 1',
        description: 'Descripcion 1',
        date: new Date()
    },
    {
        title: 'Tarea 2',
        description: 'Descripcion 2',
        date: new Date()
    },
    {
        title: 'Tarea 3',
        description: 'Descripcion 3',
        date: new Date()
    },
    {
        title: 'Tarea 4',
        description: 'Descripcion 4',
        date: new Date()
    },
    {
        title: 'Tarea 5',
        description: 'Descripcion 5',
        date: new Date()
    },
    {
        title: 'Tarea 6',
        description: 'Descripcion 6',
        date: new Date()
    },
    {
        title: 'Tarea 7',
        description: 'Descripcion 7',
        date: new Date()
    },
    {
        title: 'Tarea 8',
        description: 'Descripcion 8',
        date: new Date()
    },
];

const App = () => {
    return (
        <IconContext.Provider value={{
            className: 'react-icons',
            size: '2em'
        }}>
            <div className="App">
                <TodoList todos={todos} />
            </div>
        </IconContext.Provider>
    );
}

export default App;
