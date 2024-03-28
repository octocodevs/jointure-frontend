import React from 'react';
import { Button, Link, Box } from '@mui/material';

const LoginButton = ({ to }) => {
    const buttonStyles = {
        width: '85%',
        height: 42,
        backgroundColor: '#46A9B6',
    };

    return (
        <Box display="flex" justifyContent="center" marginTop={2} marginLeft={13}>
            <Link to={to} style={{ textDecoration: 'none', width: '100%' }}>
                <Button variant="contained" style={buttonStyles}>
                    ENVIAR
                </Button>
            </Link>
        </Box>
    );
};

export default LoginButton;