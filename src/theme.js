import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/roboto/300.css';

const font = 'Roboto';

var theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#53b664',
        },
        secondary: {
            main: '#000000',
        },
        tertiary: {
            main: '#ffffff'
        },
        info: {
            main: '#52f9ff',
        },
        success: {
            main: '#52f9ff',
        },
        background: {
            default: '#5ecc70',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: font
            }
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                   backgroundColor: '#000000'
                }
            }
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;