import React from 'react';
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';
import { getIconSizeWithFormat } from '../../selectors/styles';
import useSubscribeTheme from './../../Hooks/useSubscribeTheme';
import { DARK_THEME } from '../../constants/styles';

export default ({ children }) => {
    const theme = useSubscribeTheme();
    const iconsSize = useSelector(getIconSizeWithFormat);
    const iconsColor = theme === DARK_THEME ? 'white' : 'black';

    return (
        <IconContext.Provider value={{
            className: 'react-icons',
            color: iconsColor,
            size: iconsSize
        }}>
            {children}
        </IconContext.Provider>
    );
};