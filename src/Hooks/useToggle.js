import { useState } from 'react';

export default (prop1, prop2) => {
    const [prop, setProp] = useState(prop1);
    const toggleProp = () => {
        setProp(prop => prop !== prop1 ? prop1 : prop2);
    };
    return [prop, toggleProp];
};