
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
    return (
        <FormGroup sx={{ marginLeft: 2 }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Acepto términos y condiciones" />
        </FormGroup>
    );
}