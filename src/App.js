import React from 'react';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import Signup from './components/Signup';

const App = () => {
  return (
  <div>
  <Navbar />
  <Signup />
  {/*  <FormField label="Name" type="text" placeholder="e.g Alex Smith" /> 
 <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
 <CoolButton myClass="button is-success">Signup</CoolButton>
 <CoolButton myClass="button is-danger is-rounded">Login</CoolButton> */}

  </div>

  )
  
};

export default App;
