import StateForm from './state-form'
import CMSForm from './cms-form';
import { Toolkit } from "@uitk/react";
import "@uitk/themes/optum/fonts.css";
import React from 'react';
const App = () => (
  <Toolkit appId="@uitk/react-starter-kit">
    <StateForm/>
    <CMSForm/>
  </Toolkit>
);

export default App;

