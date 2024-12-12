/* eslint-disable react/prop-types */
import {
  Box,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

function FiltersForm({ onChange }) {
  const [formValues, setFormValues] = useState({
    name: undefined,
    status: undefined,
    species: undefined,
  });



  const debouncedOnChange = useCallback(
    debounce((updatedValues) => {
      onChange(updatedValues);
    }, 300),
    []
  );

  const handleTextFieldChange = (e) => {
    const updatedValues = { ...formValues, name: e.target.value };
    setFormValues(updatedValues);
    debouncedOnChange(updatedValues);
  };

  const handleSelectChange = (field, selectedOption) => {
    const updatedValues = { ...formValues, [field]: selectedOption };
    setFormValues(updatedValues);
    onChange(updatedValues);
  };

  return (
    <Box p={6}>
      <Grid2 container columnSpacing={3}>
        <Grid2 size={{ xs: 12, sm: 4, lg: 2 }}>
          <TextField
            label="Name"
            variant="standard"
            name="name"
            value={formValues.name}
            onChange={handleTextFieldChange}
            size="small"
            fullWidth
            margin="normal"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 4, lg: 2 }}>
          <FormControl size="small" variant="standard" fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formValues.status}
              onChange={(e) => handleSelectChange("status", e.target.value)}
            >
              <MenuItem value="alive">Alive</MenuItem>
              <MenuItem value="dead">Dead</MenuItem>
              <MenuItem value="unknown">Unknown</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 4, lg: 2 }}>
          <FormControl size="small" variant="standard" fullWidth margin="normal">
            <InputLabel>Species</InputLabel>
            <Select
              name="species"
              value={formValues.species}
              onChange={(e) => handleSelectChange("species", e.target.value)}
            >
              <MenuItem value="human">Human</MenuItem>
              <MenuItem value="alien">Alien</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default FiltersForm;
