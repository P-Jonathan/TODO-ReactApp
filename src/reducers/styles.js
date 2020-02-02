import { handleActions } from 'redux-actions';
import { setDarkTheme, setLightTheme } from '../actions/styles';
import { LIGHT_THEME } from '../constants/styles';

export const defaultStyles = {
    theme: LIGHT_THEME,
    icons: {
        size: 2,
        format: 'em',
        color: 'black'
    }
};

export const stylesReducer = handleActions({
    [setDarkTheme]: (state, { payload }) => ({ ...state, theme: payload }),
    [setLightTheme]: (state, { payload }) => ({ ...state, theme: payload })
}, defaultStyles);