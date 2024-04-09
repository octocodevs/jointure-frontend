import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

export default function ImageUpload() {
    return (
        <Box className="flex flex-col items-center">
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUpload />}
                type="submit"
                color="primary"
                text-uppercase

            >
                Haz click aquí

            </Button>

            <Box className="flex flex-col mt-4">
                <Typography variant='caption' color="primary" justifyContent='center'>
                    Sube una imagen
                </Typography>
                <Typography variant='caption' color="primary" justifyContent='center'>
                    SVG, PNG, JPG or GIF.
                </Typography>
                <Typography variant='caption' color="primary" justifyContent='center'>
                    Máximo 3MB
                </Typography>
            </Box>

        </Box>


    )
}

