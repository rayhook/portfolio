import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    investment: "",
    options: ["public stocks", "venture", "angel"],
    contact: [],
    options2: ["CV", "coverletter", "personal project"]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("type: ", type, "name: ", name, "value: ", value, "checked: ", checked);

    const isSelect = type === "select-one";
    const isCheckbox = type === "checkbox";
    if (isSelect) {
      setFormData({ ...formData, investment: value });
    } else if (isCheckbox) {
      if (checked) {
        setFormData({ ...formData, contact: [...formData.contact, name] });
      } else {
        setFormData({
          ...formData,
          contact: formData.contact.filter((val) => val !== name)
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="wrapper">
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
          name="contact"
          formData={formData}
          handleChange={handleChange}
        />
        <Checkbox label="documents" options={formData.options2} handleChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
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

const RadioInput = ({ label, name, formData, handleChange }) => {
  return (
    <fieldset>
      <label>TV</label>
      <input type="radio" name={name} value="TV" onChange={handleChange} />
      <label>Sat</label>
      <input type="radio" name={name} value="Sat" onChange={handleChange} />
      <label>Goggles</label>
      <input type="radio" name={name} value="Goggle" onChange={handleChange} />
    </fieldset>
  );
};

const Checkbox = ({ label, options, handleChange }) => {
  return (
    <fieldset>
      <h2>{label}</h2>
      {options.map((option) => (
        <div key={option}>
          <label>{option} </label>
          <input type="checkbox" name={option} onChange={handleChange} />
        </div>
      ))}
    </fieldset>
  );
};
export default Form;
