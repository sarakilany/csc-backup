import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

const useDropdown = (label, defaultState, options, onChange ) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const handleSelect = (e) => {
    setState(e.target.value);
    onChange(e);
  }
  
  const Dropdown = () => (
    <>
      <label htmlFor="{id}">{label.charAt(0).toUpperCase() + label.slice(1)}</label>
      <Form.Select 
        id={id}
        name={label}
        value={state}
        onChange={(e) => handleSelect(e)}
        onBlur={(e) => handleSelect(e)}
        disabled={options.length === 0}
        required
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Form.Select>
    </>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;