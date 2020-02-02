import React from 'react';
import TodoItem from './../TodoItem';
import { Container, Row, Col } from 'react-bootstrap';

const TodoList = ({ todos }) => {
    return (
        <Container fluid>
            <Row>
                {
                    todos.map(todo =>
                        <Col
                            sm={12} 
                            md={{ span: 6, offset: 3 }}
                            lg={{ span: 8, offset: 2 }}
                            key={todo.title}
                        >
                            <TodoItem {...todo} />
                        </Col>

                    )
                }
            </Row>
        </Container>
    );
}

export default TodoList;