import './styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import CustomToggle from './../CustomToggle';
import useToggle from '../../hooks/useToggle';
import useSubscribeTheme from './../../hooks/useSubscribeTheme';
import { DARK_THEME, LIGHT_THEME } from '../../constants/styles';
import { MdExpandMore, MdExpandLess, MdEdit, MdDelete } from 'react-icons/md';
import { Card, Accordion, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

const mapToButtons = ([...elements]) => elements.map(
    (E, index) => (
        <ButtonGroup size='sm' key={index}>
            <Button variant="link">
                <E />
            </Button>
        </ButtonGroup >
    )
);

const TodoItem = ({ title, description, date: _date }) => {

    const date = `${_date.toLocaleDateString()} - ${_date.toLocaleTimeString()}`;
    const [visibility, toggleVisibility] = useToggle('display-true', 'display-false');
    const theme = useSubscribeTheme();

    const className = classNames({
        'border': true,
        'text-center': true,
        'bg-secondary': theme === DARK_THEME,
        'text-light': theme === DARK_THEME,
        'border-secondary': theme === DARK_THEME,
        'bg-light': theme === LIGHT_THEME,
        'text-dark': theme === LIGHT_THEME,
        'border-primary': theme === LIGHT_THEME,
    });

    return (
        <Accordion>
            <Card className={className}>
                <Card.Header className='todo-item-header'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{date}</Card.Subtitle>
                    <CustomToggle
                        className={visibility}
                        onClick={toggleVisibility}
                        variant='link'
                        size='sm'
                        eventKey='0'
                    >
                        <MdExpandMore />
                    </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                    <>
                        <Card.Body>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <ButtonToolbar className='justify-content-between'>
                                {
                                    mapToButtons([
                                        MdEdit,
                                        MdDelete
                                    ])
                                }
                                <ButtonGroup size='sm'>
                                    <CustomToggle
                                        onClick={toggleVisibility}
                                        variant='link'
                                        size='sm'
                                        eventKey='0'
                                    >
                                        <MdExpandLess />
                                    </CustomToggle>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card.Footer>
                    </>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
};

export default TodoItem;