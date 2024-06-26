'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProposalDetailData from '../ProposalDetailData/ProposalDetailData.jsx';
import { Container } from '@mui/material';
import ProposalDetailBrandData from '../ProposalDetailData/ProposalDetailBrandData.jsx';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const steps = ['Propuesta', 'Marca', 'Conecta'];

export default function ProposalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? 
          
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Container className="flex min-h-auto flex-col items-center justify-between p-8">
    <Box sx={{ 
      width: '100%',
     }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
   
          {activeStep === 0 && <div>
            <ProposalDetailData />
          </div>}
          {activeStep === 1 && <div>
            <ProposalDetailBrandData />
          </div>}
          {activeStep === 2 && (
  <div>
    <Typography sx={{ mt: 3, mb: 1, pl: 2, }}>
      ¡Recuerda! Aún no has sido elegido para participar en la colaboración. Recibirás un email confirmando si te han aceptado.
    </Typography>
    <FormControlLabel
      sx={{ pl: 2, }}
      control={
        <Checkbox
          checked={termsAccepted}
          onChange={(event) => setTermsAccepted(event.target.checked)}
        />
      }
      label="Acepto las condiciones de la colaboración"
    />
  </div>
)}
          

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                variant="outlined"
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Anterior
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }} style={{ display: activeStep === steps.length - 1 ? 'none' : 'inline' }}>
                Siguiente
              </Button>
              {activeStep === steps.length - 1 && (
                <Button 
                variant="contained" 
                onClick={handleComplete} 
                disabled={!termsAccepted}
                >
                Colaborar
                </Button>
)}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
    </Container>
  );
}
