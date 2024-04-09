// components/OptionList.js
"use client"

import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Typography, Paper, Box } from '@mui/material';

export default function OptionList({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);
    onSelect(newValue);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <ToggleButtonGroup
        value={selectedOption}
        exclusive
        onChange={handleOptionChange}
        aria-label="option-list"
      >
        {options.map((option) => (
          <Paper
            key={option.value}
            elevation={5}
            variant="outlined"
            sx={{
                margin: 1,
                /* height: 100,
                width: 60, */
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
          >
            <ToggleButton value={option.value} aria-label={option.label}>
              <Box display="flex" flexDirection="column" alignItems="center">
                {option.icon}
                <Typography
                    variant="body1"
                    sx= {{
                        fontSize:12,
                        textTransform:'lowercase', 
                        fontWeight:'400',
                        color:'#101820'
                    }}
                    >{option.label}</Typography>
              </Box>
            </ToggleButton>
          </Paper>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
