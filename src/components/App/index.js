import './styles.css';
import React from 'react';
import TodoList from './../TodoList';
import classNames from 'classnames';
import { Navbar, Button } from 'react-bootstrap';
import useToggleTheme from '../../hooks/useToggleTheme';
import useSubscribeTheme from '../../hooks/useSubscribeTheme';
import { DARK_THEME, LIGHT_THEME } from '../../constants/styles';

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
    const toggleTheme = useToggleTheme();
    const theme = useSubscribeTheme();
    const bgTheme = classNames({
        'bg-dark': theme === DARK_THEME,
        'bg-light': theme === LIGHT_THEME,
    });
    const textColorClass = classNames({
        'text-light': theme === DARK_THEME,
        'text-white': theme === LIGHT_THEME
    });
    const navbarClass = classNames(
        textColorClass,
        {
            'bg-secondary': theme === DARK_THEME,
            'bg-info': theme === LIGHT_THEME,
            'text-center': true,
            'justify-content-between': true,
            'border-bottom': theme === DARK_THEME,
            'border-secondary': theme === DARK_THEME
        }
    );

    return (
        <div className={bgTheme}>
            <Navbar
                collapseOnSelect expand="md" sticky='top'
                className={navbarClass}
            >
                <Navbar.Brand className={textColorClass}>TODOApp</Navbar.Brand>
                <Button onClick={toggleTheme}>Toggle Theme</Button>
            </Navbar>
            <TodoList todos={todos} />
        </div>
    );
};

export default App;
