import { useSelector } from 'react-redux';
import { getTheme } from '../selectors/styles';

export default () => {
    const theme = useSelector(getTheme);

    return theme;
};