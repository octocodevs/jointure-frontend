
'use client'
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import BasicSelect from '../Mui/inputs/BasicSelect'
import CheckboxLabels from '../Mui/inputs/Checkbox'
import Link from 'next/link'
import { KeyboardArrowRight } from '@mui/icons-material'
import { useState } from 'react'



export default function NewCollabForm (){

    const [duration, setDuration] = useState('');

  return (
    <Container overflow="auto" className='pb-20 '>
            <Box className="py-8 pb-4" display="flex" alignItems="center" justifyContent="center">
            </Box>
            <Typography variant="h2" align="center">Nueva propuesta de Colaboración</Typography>
            <Box className='px-16 pt-12' overflow="auto" >
            <form
                noValidate
                autoComplete="off"
                
            >
                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="Brand"
                    label="Nombre de la marca"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    
                    
                />
                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="title"
                    label="Título"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    
                    
                />

                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="description"
                    label="Descripción"
                    multiline
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    
                    

                />
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
                    
                />
                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="collab_start_date"
                    label="Fecha de inicio"
                    type="date"
                    fullWidth
                    required
                    variant="outlined"
                    color="primary"
                    InputLabelProps={{ shrink: true }}
                    
                />

                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="collab_end_date"
                    label="Fecha de finalización"
                    type="date"
                    fullWidth
                    required
                    variant="outlined"
                    color="primary"
                    InputLabelProps={{ shrink: true }}
                    
                />
                    

                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="collab_type"
                        label="Tipo de colaboración"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />

                    <BasicSelect
                        id="duration"
                        label="Duración"
                        value={duration}
                        onChange={setDuration}
                        options={[
                            { value: 'puntual', label: 'puntual' },
                            { value: 'periódica', label: 'periódica' },
                            { value: 'largo plazo', label: 'largo plazo' },
                        ]}
                        sx={{
                            '& .MuiInputLabel-root': { color: 'red' },
                            '& .MuiSelect-root': { backgroundColor: 'lightblue' },
                        }}
                    />
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="objectives"
                        label="Objetivos"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />
                    
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="ideal_collaborators"
                        label="Perfil de colaboradores deseado"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />
                        <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="proposal"
                        label="Propuesta"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />

                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="responsibility"
                        label="Responsabilidad"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />

                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="planning"
                        label="PLanificación"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />  

                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="operations_and_sales"
                        label="Operaciones y ventas"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />  

                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="marketing"
                        label="marketing"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />   

                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="economic_agreements"
                        label="Acuerdos económicos"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    /> 
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="terms_and_conditions"
                        label="Términos y condiciones"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="observations"
                        label="Observaciones"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />
                    {/* <BasicSelect
                        id="public_or_private"
                        label="público o privado"
                        options={[
                            { value: 'public', label: 'Público' },
                            { value: 'private', label: 'Privado' },
                        ]}
                        sx={{
                            '& .MuiInputLabel-root': { color: 'red' },
                            '& .MuiSelect-root': { backgroundColor: 'lightblue' },
                        }}
                    /> */}
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="collab_limit"
                        label="Límite de colaboraciones"
                        type="number"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />

                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="limit"
                        label="Límite"
                        type="number"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                    />
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="ad_start_date"
                        label="Fecha de inicio del anuncio"
                        type="date"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        InputLabelProps={{ shrink: true }}
                    />

                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="ad_end_date"
                        label="Fecha final del anuncio"
                        type="date"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        InputLabelProps={{ shrink: true }}
                    />

                    {/* <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="send_notification"
                        label="Fecha final del anuncio"
                        type="date"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        
                        
                    /> */}

                    <FormGroup sx={{ marginLeft: 2 }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Enviar notificaciones" 
                        />
                    </FormGroup>


                

                <Box>
                    <Button
                        
                        type="submit"
                        color="primary"
                        variant="contained"
                        endIcon={<KeyboardArrowRight />}
                        fullWidth
                        sx={{ m: 2, }}
                    >
                        Enviar
                    </Button>
                </Box>
            </form>
            </Box>
 
        </Container>
  )
}
