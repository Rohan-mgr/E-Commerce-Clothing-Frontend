import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface BadgeProps {
    color?: 'primary' | 'secondary';
    badgeContent: number;
    children: React.ReactElement;
}

declare module '@mui/material/styles' {
    interface Palette {
        primary: Palette['primary'];
    }

    interface PaletteOptions {
        primary?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Badge' {
    interface BadgePropsColorOverrides {
        primary: true;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#ca1515',
        },
    },
});

function CustomBadge({ badgeContent, children, color }: BadgeProps) {
    return (
        <ThemeProvider theme={theme}>
            <Badge
                badgeContent={badgeContent}
                color={color ? color : 'primary'}
            >
                {children}
            </Badge>
        </ThemeProvider>
    );
}

export default CustomBadge;
