import { createSelector } from 'reselect';

export const getStyles = state => state.styles;

export const getTheme = createSelector(getStyles, styles => styles.theme);

export const getIconStyles = createSelector(getStyles, styles => styles.icons);

export const getIconSize = createSelector(getIconStyles, icons => icons.size);

export const getIconColor = createSelector(getIconStyles, icons => icons.color);

export const getIconsFormat = createSelector(getIconStyles, icons => icons.format);

export const getIconSizeWithFormat = createSelector(getIconStyles, icons => `${icons.size}${icons.format}`);