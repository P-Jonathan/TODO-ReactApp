import './styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import CustomToggle from './../CustomToggle';
import useToggle from './../../Hooks/useToggle';
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
    const [className, toggleClassName] = useToggle('display-true', 'display-false');

    return (
        <Accordion>
            <Card
                bg='white'
                border='primary'
                text='primary'
                className='todo-item-card text-center'
            >
                <Card.Header className='todo-item-header'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{date}</Card.Subtitle>
                    <CustomToggle
                        className={className}
                        onClick={toggleClassName}
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
                                        onClick={toggleClassName}
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