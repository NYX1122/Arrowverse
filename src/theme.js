import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
})

export default theme;