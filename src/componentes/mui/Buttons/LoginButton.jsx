import React from 'react';
import { Button, Link } from '@mui/material';

const LoginButton = ({ to }) => {

    const buttonStyles = {
        width: 601,
        height: 42,
        backgroundColor: '#46A9B6',
    };

  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button variant="contained" style={buttonStyles}>
        ENVIAR
      </Button>
    </Link>
  );
};

export default LoginButton;