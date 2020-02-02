import { createAction } from 'redux-actions';
import {
    SET_DARK_THEME, SET_LIGHT_THEME,
    SET_ICONS_SIZE, SET_ICONS_COLOR,
    DARK_THEME, LIGHT_THEME
} from '../constants/styles';


export const setDarkTheme = createAction(SET_DARK_THEME, () => DARK_THEME);
export const setLightTheme = createAction(SET_LIGHT_THEME, () => LIGHT_THEME);

export const setIconsSize = createAction(SET_ICONS_SIZE, size => size);
export const setIconsColor = createAction(SET_ICONS_COLOR, color => color);