import React from 'react';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

interface AlertProps {
    children: React.ReactNode;
    color: 'success' | 'error';
    severity: 'success' | 'error';
    handleClick: () => void;
    errorStatus: boolean;
}

function Alerts({
    children,
    color,
    severity,
    handleClick,
    errorStatus,
}: AlertProps) {
    return (
        <Collapse in={errorStatus}>
            <Alert
                color={color}
                severity={severity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={handleClick}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {children}
            </Alert>
        </Collapse>
    );
}

export default Alerts;
