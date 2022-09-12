import React, {useState} from "react";
import {
  Fieldset,
  FormControl,
  HelperText,
  Label,
  Legend,
  TextInput,
} from "@uitk/react";

export const CMSForm= ({cmsFormHeader}) => {
// const GeneralForm= () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nameBlurred, setNameBlurred] = useState(false);
  const [addressBlurred, setAddressBlurred] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameError =
    name.length === 0 && (nameBlurred || submitted) ? "Name is required" : "";
  const addressError =
    address.length === 0 && (addressBlurred || submitted)
      ? "Address is required"
      : "";
  const onSubmit = (event) => {
    setSubmitted(true);
    event.preventDefault();
  };
  return (
    <Fieldset>
      <Legend>
        {cmsFormHeader}
        {/* Form Header */}
        <HelperText>All fields required</HelperText>
      </Legend>
      <form onSubmit={onSubmit}>
        <FormControl id="required-text-input-1" error={nameError} required>
          <Label>Username</Label>
          <TextInput
            onChange={(e) =>
              setName(e.target.value)
            }
            onBlur={() => setNameBlurred(true)}
            value={name}
          />
        </FormControl>
        <FormControl id="required-text-input-2" error={addressError} required>
          <Label>Password</Label>
          <HelperText>Apartment, building or suite number</HelperText>
          <TextInput
            onChange={(e) =>
              setAddress(e.target.value)
            }
            onBlur={() => setAddressBlurred(true)}
            value={address}
          />
        </FormControl>
        <FormControl id="required-text-input-2" error={addressError} required>
          <Label>Email</Label>
          <HelperText>Apartment, building or suite number</HelperText>
          <TextInput
            onChange={(e) =>
              setAddress(e.target.value)
            }
            onBlur={() => setAddressBlurred(true)}
            value={address}
          />
        </FormControl>
      </form>
    </Fieldset>
  );
};

export default CMSForm;