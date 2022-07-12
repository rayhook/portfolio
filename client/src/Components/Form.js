import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    investment: "--Select an option---",
    options: ["public stocks", "venture", "angel"],
    fastProcess: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(type, name);

    const isSelect = type === "select-one";
    const isCheckbox = type === "checkbox";
    if (isSelect) {
      setFormData({ ...formData, investment: value });
    } else if (isCheckbox) {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="First Name"
        name="first_name"
        value={formData.first_name}
        handleChange={handleChange}
      />
      <TextInput
        label="Last Name"
        name="last_name"
        value={formData.last_name}
        handleChange={handleChange}
      />
      <NumberInput label="Age" name="age" value={formData.age} handleChange={handleChange} />
      <MultiSelect
        label="Specialty"
        name="options"
        value={formData.investment}
        handleChange={handleChange}
        options={formData.options}
      />
      <RadioInput
        label="Fast proceess"
        name="fastProcess"
        value={formData.fastProcess}
        handleChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const TextInput = ({ label, name, value, handleChange }) => {
  return (
    <fieldset>
      <label>{label}</label>
      <input type="text" name={name} value={value} onChange={handleChange} />
    </fieldset>
  );
};

const NumberInput = ({ label, name, value, handleChange }) => {
  return (
    <fieldset>
      <label>{label}</label>
      <input name={name} value={value} onChange={handleChange} type="number" />
    </fieldset>
  );
};
const MultiSelect = ({ label, name, value, options, handleChange }) => {
  return (
    <fieldset>
      <label>{label}</label>
      <select name={name} value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

const RadioInput = ({ label, name, value, handleChange }) => {
  return (
    <fieldset>
      <label>{label}</label>
      <input type="radio" name="option1" checked={value} onChange={handleChange} />
      <input type="radio" name="option2" checked={value} onChange={handleChange} />
    </fieldset>
  );
};
export default Form;
