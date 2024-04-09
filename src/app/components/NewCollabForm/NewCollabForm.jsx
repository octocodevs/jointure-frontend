
'use client'
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import BasicSelect from '../Mui/inputs/BasicSelect'
import CheckboxLabels from '../Mui/inputs/Checkbox'
import Link from 'next/link'
import { KeyboardArrowRight } from '@mui/icons-material'
import { useState } from 'react'



export default function NewCollabForm() {

    const [brandValue, setBrandValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [imageValue, setImageValue] = useState('');
    const [collabStartDate, setCollabStartDate] = useState('');
    const [collabEndDate, setCollabEndDate] = useState('');
    const [collabType, setCollabType] = useState('');
    const [duration, setDuration] = useState('');
    const [costValue, setCostValue] = useState('');
    const [objectivesValue, setObjectivesValue] = useState('');
    const [idealCollaboratorsValue, setIdealCollaboratorsValue] = useState('');
    const [proposalValue, setProposalValue] = useState('');
    const [responsibilityValue, setResponsibilityValue] = useState('');
    const [planningValue, setPlanningValue] = useState('');
    const [operationsAndSalesValue, setOperationsAndSalesValue] = useState('');
    const [marketingValue, setMarketingValue] = useState('');
    const [economicAgreementsValue, setEconomicAgreementsValue] = useState('');
    const [termsAndConditionsValue, setTermsAndConditionsValue] = useState('');
    const [observationsValue, setObservationsValue] = useState('');
    const [publicOrPrivate, setPublicOrPrivate] = useState('');
    const [collabLimitValue, setCollabLimitValue] = useState('');
    const [limitValue, setLimitValue] = useState('');
    const [adStartDate, setAdStartDate] = useState('');
    const [adEndDate, setAdEndDate] = useState('');
    const [sendNotification, setSendNotification] = useState(false);

    const handleBrandChange = (event) => {
        setBrandValue(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitleValue(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescriptionValue(event.target.value);
    };

    const handleImageChange = (event) => {
        setImageValue(event.target.value);
    };

    const handleCollabStartDateChange = (event) => {
        setCollabStartDate(event.target.value);
    };

    const handleCollabEndDateChange = (event) => {
        setCollabEndDate(event.target.value);
    };

    const handleCollabTypeChange = (event) => {
        setCollabType(event.target.value);
    };

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };

    const handleCostChange = (event) => {
        setCostValue(event.target.value);
    };

    const handleObjectivesChange = (event) => {
        setObjectivesValue(event.target.value);
    };

    const handleIdealCollaboratorsChange = (event) => {
        setIdealCollaboratorsValue(event.target.value);
    };

    const handleProposalChange = (event) => {
        setProposalValue(event.target.value);
    };

    const handleResponsibilityChange = (event) => {
        setResponsibilityValue(event.target.value);
    };

    const handlePlanningChange = (event) => {
        setPlanningValue(event.target.value);
    };

    const handleOperationsAndSalesChange = (event) => {
        setOperationsAndSalesValue(event.target.value);
    };

    const handleMarketingChange = (event) => {
        setMarketingValue(event.target.value);
    };

    const handleEconomicAgreementsChange = (event) => {
        setEconomicAgreementsValue(event.target.value);
    };

    const handleTermsAndConditionsChange = (event) => {
        setTermsAndConditionsValue(event.target.value);
    };

    const handleObservationsChange = (event) => {
        setObservationsValue(event.target.value);
    };

    const handlePublicOrPrivateChange = (event) => {
        setPublicOrPrivate(event.target.value);
    };

    const handleCollabLimitChange = (event) => {
        setCollabLimitValue(event.target.value);
    };

    const handleLimitChange = (event) => {
        setLimitValue(event.target.value);
    };

    const handleAdStartDateChange = (event) => {
        setAdStartDate(event.target.value);
    };

    const handleAdEndDateChange = (event) => {
        setAdEndDate(event.target.value);
    };

    const handleSendNotificationChange = (event) => {
        setSendNotification(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            brand: brandValue,
            title: titleValue,
            description: descriptionValue,
            image: imageValue,
            collabStartDate: collabStartDate,
            collabEndDate: collabEndDate,
            collabType: collabType,
            duration: duration,
            cost: costValue,
            objectives: objectivesValue,
            idealCollaborators: idealCollaboratorsValue,
            proposal: proposalValue,
            responsibility: responsibilityValue,
            planning: planningValue,
            operationsAndSales: operationsAndSalesValue,
            marketing: marketingValue,
            economicAgreements: economicAgreementsValue,
            termsAndConditions: termsAndConditionsValue,
            observations: observationsValue,
            publicOrPrivate: publicOrPrivate,
            collabLimit: collabLimitValue,
            limit: limitValue,
            adStartDate: adStartDate,
            adEndDate: adEndDate,
            sendNotification: sendNotification,


        });
    };

    return (
        <Container overflow="auto" className='pb-20 '>
            <Box className="py-8 pb-4" display="flex" alignItems="center" justifyContent="center">
            </Box>
            <Typography variant="h2" align="center">Crear propuesta de Colaboración</Typography>
            <Box className='px-16 pt-12' overflow="auto" >
                <form
                    noValidate
                    autoComplete="off"

                >
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="brand"
                        label="Nombre de la marca"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        required
                        value={brandValue}
                        onChange={handleBrandChange}

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
                        value={titleValue}
                        onChange={handleTitleChange}

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
                        value={descriptionValue}
                        onChange={handleDescriptionChange}


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
                        value={imageValue}
                        onChange={handleImageChange}

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
                        value={collabStartDate}
                        onChange={handleCollabStartDateChange}
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
                        value={collabEndDate}
                        onChange={handleCollabEndDateChange}
                    />

                    <BasicSelect
                        id="collab_type"
                        label="Tipo de colaboración"
                        value={collabType}
                        onChange={handleCollabTypeChange}
                        options={[
                            { value: 'Co-Branding', label: 'Co-Branding' },
                            { value: 'Co-Licensing', label: 'Co-Licensing' },
                            { value: 'Co-Supply', label: 'Co-Supply' },
                            { value: 'Co-Stand', label: 'Co-Stand' },
                            { value: 'Co-Marketing', label: 'Co-Marketing' },
                            { value: 'Co-Event', label: 'Co-Event' },
                            { value: 'Otro', label: 'Otro' },
                        ]}
                        sx={{
                            '& .MuiInputLabel-root': { color: 'red' },
                            '& .MuiSelect-root': { backgroundColor: 'lightblue' },
                        }}
                    />

                    <BasicSelect
                        id="duration"
                        label="Duración"
                        value={duration}
                        onChange={handleDurationChange}
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
                        id="cost"
                        label="Costo"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        value={costValue}
                        onChnage={handleCostChange}
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
                        value={objectivesValue}
                        onChange={handleObjectivesChange}
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
                        value={idealCollaboratorsValue}
                        onChange={handleIdealCollaboratorsChange}

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
                        value={proposalValue}
                        onChange={handleProposalChange}
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
                        value={responsibilityValue}
                        onChange={handleResponsibilityChange}
                    />

                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="planning"
                        label="Planificación"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        value={planningValue}
                        onChange={handlePlanningChange}
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
                        value={operationsAndSalesValue}
                        onChange={handleOperationsAndSalesChange}
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
                        value={marketingValue}
                        onChange={handleMarketingChange}
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
                        value={economicAgreementsValue}
                        onChange={handleEconomicAgreementsChange}
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
                        value={termsAndConditionsValue}
                        onChange={handleTermsAndConditionsChange}
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
                        value={observationsValue}
                        onChange={handleObservationsChange}
                    />
                    <BasicSelect
                        id="public_or_private"
                        label="público o privado"
                        value={publicOrPrivate}
                        onChange={handlePublicOrPrivateChange}
                        options={[
                            { value: 'public', label: 'Público' },
                            { value: 'private', label: 'Privado' },
                        ]}
                        sx={{
                            '& .MuiInputLabel-root': { color: 'red' },
                            '& .MuiSelect-root': { backgroundColor: 'lightblue' },
                        }}
                    />

                    <FormGroup sx={{ marginLeft: 2 }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Límitar colaboraciones"
                        />
                    </FormGroup>

                    {/* <TextField
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
                        value={collabLimitValue}
                        onChange={handleCollabLimitChange}
                    /> */}

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
                        value={adStartDate}
                        onChange={handleAdStartDateChange}
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
                        value={adEndDate}
                        onChange={handleAdEndDateChange}
                    />


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
