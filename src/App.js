// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type) =>{
    setAlert({
      mssg:message,
      type:type
    })
    setTimeout(() => {
     setAlert(null)
    }, 2000);
   }
  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
   }
  const togglemode=(cls)=>{
    removeBodyClass();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#403f52';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About textutils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextConverter" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* <About/> */}

      </div>
    </>
  );
}

export default App;
