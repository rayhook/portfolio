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
    <div className="w-screen">
      <div className="mx-auto mt-10 w-1/2 bg-gray-300 px-2 py-4">
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
          <div className="flex w-full justify-center">
            <button className="bg-blue-500 px-8 py-5 text-white rounded-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TextInput = ({ label, name, value, handleChange }) => {
  return (
    <fieldset className="mb-3">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <input
        type="text"
        className="box-border p-2.5 text-gray-100 bg-gray-500 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </fieldset>
  );
};

const NumberInput = ({ label, name, value, handleChange }) => {
  return (
    <fieldset className="mb-3">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <input
        className="box-border p-2.5 bg-gray-500 border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full"
        name={name}
        value={value}
        onChange={handleChange}
        type="number"
      />
    </fieldset>
  );
};
const MultiSelect = ({ label, name, value, options, handleChange }) => {
  return (
    <fieldset>
      <label className=" mb-3 block text-sm font-medium ">{label}</label>
      <select
        className="bg-gray-500 border-gray-900 text-gray-100 p-2.5 rounded-lg
      "
        name={name}
        value={value}
        onChange={handleChange}
      >
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
    <fieldset className=" mt-5">
      <h1 className="text-lg mb-3 font-medium">Select your country</h1>
      <div className="flex items-center mb-4">
        <label className="block mr-2 text-sm font-medium text-gray-900">Germany</label>
        <input
          className="w-4 h-4 border-gray-500 focus:ring-2 focus:ring-blue-300"
          type="radio"
          name={name}
          value="TV"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center mb-4">
        <label className="block mr-2 text-sm font-medium text-gray-900">USA</label>
        <input
          className="w-4 h-4 border-blue-500 focus:ring-2 focus:ring-blue-300"
          type="radio"
          name={name}
          value="Sat"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-3 text-sm font-medium ">France</label>
        <input
          className="w-4 h-4 border-gray-500 focus:ring-2 focus:ring-blue-500"
          type="radio"
          name={name}
          value="Goggle"
          onChange={handleChange}
        />
      </div>
    </fieldset>
  );
};

const Checkbox = ({ label, options, handleChange }) => {
  return (
    <fieldset>
      <h2 className="mb-5 text-lg font-medium capitalize">{label}</h2>
      {options.map((option) => (
        <div
          key={option}
          className="flex items-center
        mb-3 "
        >
          <label className="mr-2 text-sm font-medium text-gray-900">{option}</label>
          <input
            className="w-4 h-4 text-red-600 bg-red-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            name={option}
            onChange={handleChange}
          />
        </div>
      ))}
    </fieldset>
  );
};
export default Form;
