"use client"

import { createTheme } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

const theme = createTheme({
	palette: {
		primary: {
			light: "#64E1C6",
			main: "#46A9B6",
			dark: "#337C86",
			contrastText: "#FFFFFF"
		},
		secondary: {
			light: "#F6F6F6",
			main: "#ACACAC",
			dark: "#868686",
			contrastText: "#101820"
		},
		info: {
			main: "#2EE09F",
		},
		mode: "light",
	},
	typography: {
		fontFamily: 'Montserrat.style.fontFamily',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			fontSize: '1.5rem',
			fontWeight: 800,
			'@media (min-width: 640px)': { 
			  fontSize: '2.5rem',
			},
			'@media (min-width: 768px)': {
			  fontSize: '3rem',
			},
		  },
		  h2: {
			fontSize: '1rem',
			fontWeight: 700,
			'@media (min-width: 640px)': { 
			  fontSize: '1.75rem',
			},
			'@media (min-width: 768px)': {
			  fontSize: '2.25rem',
			},
		  },
		  body1: {
			fontSize: '1rem',
			fontWeight: 500,
			'@media (min-width: 640px)': { 
			  fontSize: '1.25rem',
			},
			'@media (min-width: 768px)': {
			  fontSize: '1.5rem',
			},
		  },
		  caption: {
			fontSize: '0.75rem',
			fontWeight: 400,
			'@media (min-width: 640px)': { 
			  fontSize: '1rem',
			},
		  },
		  button: {
			fontSize: '1rem',
			fontWeight: 600,
			'@media (min-width: 640px)': { 
			  fontSize: '1.25rem',
			},
			'@media (min-width: 768px)': {
			  fontSize: '1.5rem',
			},
		  },
	},
});

export default theme;