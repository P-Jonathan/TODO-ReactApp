import React from 'react';
import { useAccordionToggle, Button } from 'react-bootstrap';

const CustomToggle = ({ eventKey, children, onClick, as, ...props }) => {
    const decoratedOnClick = useAccordionToggle(eventKey, onClick);
    const As = as ? as : Button;
    return (
        <As
            onClick={decoratedOnClick}
            {...props}
        >
            {children}
        </As>
    );
};

export default CustomToggle;