'use client'

import { useState } from 'react';
import { Button, Box, Typography, TextField } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

export default function ImageUpload() {
    const [imageValue, setImageValue] = useState('');

    const handleImageChange = (event) => {
        setImageValue(event.target.value);
    };
    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };
    return (
        <Box className="flex flex-col items-center">
            <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="image"
                    label="sube tu imagen"
                    type="file"
                    fullWidth
                    required
                    variant="outlined"
                    color="primary"
                    InputLabelProps={{ shrink: true }}
                    value={imageValue}
                    onChange={handleImageChange}
                    
                />
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUpload />}
                color="primary"
                onClick={handleUploadClick}
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

