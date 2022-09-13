import StateForm from './state-form'
import CMSForm from './cms-form';
import { Toolkit } from "@uitk/react";
import "@uitk/themes/optum/fonts.css";
import React from 'react';
import {AllBreakpointsExample} from './fffff'
const App = () => (
  <Toolkit appId="@uitk/react-starter-kit"
  grid
  >
    <StateForm/>
    <CMSForm/>
    {/* <AllBreakpointsExample/> */}
  </Toolkit>
);

export default App;

