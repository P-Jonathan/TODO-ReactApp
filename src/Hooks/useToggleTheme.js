import { useCallback } from 'react';
import { getTheme } from '../selectors/styles';
import { DARK_THEME } from '../constants/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../actions/styles';

export default () => {
    const dispatch = useDispatch();
    const theme = useSelector(getTheme);

    const toggleClass = useCallback(() => {
        const action = theme === DARK_THEME
            ? setLightTheme
            : setDarkTheme;
        dispatch(action());
    }, [dispatch, theme]);

    return toggleClass;
};