import React from 'react';
import { Button, Link, Box} from '@mui/material';

const LoginButton = ({ to }) => {
    const buttonStyles = {
        width: '100%',
        height: 42,
        backgroundColor: '#46A9B6',
    };

    return (
        <Box display="flex" justifyContent="center" marginTop={2}>
            <Link to={ to } href="/admin/marketplace" style={{ textDecoration: 'none', width: '100%' }}>
                <Button variant="contained" style={buttonStyles}>
                    ENVIAR
                </Button>
            </Link>
        </Box>
    );
};

export default LoginButton;
