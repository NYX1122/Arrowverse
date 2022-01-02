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
            main: '#002006',
        },
        info: {
            main: '#52f9ff',
        },
        success: {
            main: '#52f9ff',
        },
        background: {
            default: '#fafafa',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: font
            }
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;