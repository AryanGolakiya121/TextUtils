import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const  [mode, setMode] = useState('light')   //whether dark mode is enabled or not
  const  [alert, setAlert] = useState(null)
  
  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  const toggleMode = async() => {
     if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils Dark Mode"
     }else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils Light Mode"
     }
  }

//   const removeBodyClasses = () => {
//     document.body.classList.remove('bg-light')
//     document.body.classList.remove('bg-dark')
//     document.body.classList.remove('bg-warning')
//     document.body.classList.remove('bg-success')
//     document.body.classList.remove('bg-danger')
    
//   }
//   const toggleMode = async(cls) => {
//     removeBodyClasses();
//     document.body.classList.add('bg-'+cls)
//     if(mode === 'light'){
//      setMode("dark")
//      document.body.style.backgroundColor = '#042743';
//      showAlert("Dark mode has been enabled", "success");
//      // document.title = "TextUtils Dark Mode"
//     }else{
//      setMode("light")
//      document.body.style.backgroundColor = 'white';
//      showAlert("Light mode has been enabled", "success");
//      // document.title = "TextUtils Light Mode"
//     }
//  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
          <Alert alert={alert}/>
          <div className='container my-3'>
              <Routes>
              {/* {exact match exact path route path otherwise it match partial route} */}
                <Route exact path='/' element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert}/>}></Route>
                <Route exact path='/about' element={<About mode={mode} />}></Route>  
              </Routes>
          </div>   
      </Router>  
    </>
  );
}

export default App;
