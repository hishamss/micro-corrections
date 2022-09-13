import React, {useState} from "react";
import {
  Fieldset,
  FormControl,
  HelperText,
  Label,
  Dropdown,
  Legend,
  Card,
  Button
} from "@uitk/react";
import styled from "styled-components";
import { math } from "polished";
import './index.css'
const H3Styles = styled.span`
 ${({ theme: { color, font } }) => `
   h2 {
     font-family: ${font.family.heading.h3.value};
     font-size: ${font.size.heading.h3.value};
     font-weight: ${font.weight.heading.h3.value};
     color: ${color.text.heading.h3.value};
     line-height: ${math(font.size.heading.h3.value + "* 1.5")};
   }
 `}
`;

const searchByItems= [
  { id: "1", label: "Bypass Code", value: "Bypass Code" },
  { id: "2", label: "Claim Data", value: "Claim Data" },
  { id: "3", label: "Claim Id", value: "Claim Id" },
  { id: "4", label: "Member Data", value: "Member Data" },
];
export const StateForm= ({stateFormHeader}) => {
// const GeneralForm= () => {
  const [searchBy, setSearchBy] = useState("");
  const [address, setAddress] = useState("");
  const [searchByBlurred, setSearchByBlurred] = useState(false);
  const [addressBlurred, setAddressBlurred] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameError =
    name.length === 0 && (searchByBlurred || submitted) ? "Name is required" : "";
  const addressError =
    address.length === 0 && (addressBlurred || submitted)
      ? "Address is required"
      : "";
  const onSubmit = (event) => {
    setSubmitted(true);
    event.preventDefault();
  };
  return (
    <Card className="correctionsCard"
    header={
      <H3Styles>
        <h2>{stateFormHeader}</h2>
      </H3Styles>
    }
  >
    <Fieldset>
    <Legend>
        Search
      </Legend>
      <form onSubmit={onSubmit}>
        <div className="grid">
        <div className="row">
          <div className="col">

            <FormControl id="required-text-input-1" error={nameError} required className={"mt-m mb-m"}>
          <Label>Search By</Label>         
        <Dropdown
        type="single"
        items={searchByItems}
        value={searchBy}
        onChange={setSearchBy}
        // onBlur={() => setSearchByBlurred(true)}
          />
        </FormControl>

          
          </div>
          <div className="col">
         <FormControl id="required-text-input-2" error={addressError} required>
          <Label>Category</Label>
        <Dropdown
        type="single"
        items={searchByItems}
        value={searchBy}
        onChange={setSearchBy}
        />
        </FormControl>
          </div>
          <div className="col">
       <FormControl id="required-text-input-2" error={addressError} required>
          <Label>State</Label>
        <Dropdown
        type="single"
        items={searchByItems}
        value={searchBy}
        onChange={setSearchBy}
        />
        </FormControl>
          </div>
        </div>
        
        
        <div className="row">
          <div className="col">
          <FormControl id="required-text-input-2" error={addressError} required>
          <Label>Type Of Claim</Label>
        <Dropdown
        type="single"
        items={searchByItems}
        value={searchBy}
        onChange={setSearchBy}
        />
        </FormControl>
          </div>
          <div className="col">
          <FormControl id="required-text-input-2" error={addressError} required>
          <Label>Date Type</Label>
        <Dropdown
        type="single"
        items={searchByItems}
        value={searchBy}
        onChange={setSearchBy}
        />
        </FormControl>
          </div>
          <div className="col"></div>
        </div>
        
       
        </div>
      </form>
    </Fieldset>
  </Card>
    
  );
};

export default StateForm;