import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route, useLocation} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Document from './components/Document';
import ChatbotNew from './components/ChatbotNew';
import Footer from './components/Footer';
// import SignLog from './components/SignLog';
import Profile from './components/Profile';
import Auth from './components/Auth';
import NoteState from './context/NodeState'
import Jar from './components/jarvisbot';
import Jar2 from './components/jar2';
import Avaz from './components/Avaz';
import Objdetec from './components/objdetect';
import ErrorPage from './components/ErrorPage';
import Forget from './components/Forget';
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
// import noteContext from './context/noteContext';
import { useSelector, useDispatch } from 'react-redux'
import { updateBydataTrue,updateByDefaultFalse } from './redux/counter/conterSlice';
import Home2 from './components/Home2';
import Footer2 from './components/Footer2';
import Sigup2 from './components/Sigup2';
// import Signup3 from './components/Signup3';
// import Chatbot from './components/Chatbot';
import Chatbot2 from './components/Chatbot2';
import Profilenew from './components/Profilenew';
import Sidebarr from "./components/documents/sidebar"
function App() {
  
  const dispatch = useDispatch()
  const flag=false
// useEffect(()=>{
//   // alert("loaded")
//   console.log("loaded");
//    CookieAuth()

// })
const CookieAuth= async()=>{
  const Cget=Cookies.get('user')
  console.log(Cget!=undefined +" .......");
  console.log(Cget);
  try {
  
  if (Cget!=undefined) {
  console.log(Cget+"...........hjkhkh..........")
  const cookieVerification =await axios.post("http://localhost:3001/tokenAuth",{Cget});
  if (cookieVerification.statusText==='Authenticated') {
    console.log(cookieVerification.data);
    console.log(cookieVerification.statusText+".......App.js Cookie");
    const {Fname,Lname,Email,Phone,City}=cookieVerification.data
    dispatch(updateBydataTrue(cookieVerification.data))
    console.log(userValue.Token)
    flag=true
    

  } else {
    console.log(cookieVerification.statusText+".......App.js Cookie");
    Cookies.remove('user')
  dispatch(updateByDefaultFalse())


  }
}
} catch (error) {
    // alert("something Error try later")
    // window.location.reload(true)
}
}
CookieAuth()
const userValue = useSelector((state) => state.user)
  console.log(userValue.Token+"redux ...........From APP.JS....");

  return (
      // {
          // console.log(Cookies.get('user')+" from APP.js")
        
    <div className=' ' >
      {/* <NoteState> */}
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home2/>}/>
          {/* <Route path='/' element={<Home/>}/> */}

          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/document' element={<Document />}/> */}
          
           

          <Route path='/document' element={<Sidebarr/>}/>


          <Route path='/about' element={<About/>}/>
            {/* <Route path='/ai' element={<Auth Component={ChatbotNew} bool={flag}/>}/> */}
            {/* <Route path='/ai' element={<Auth Component={Chatbot} bool={flag}/>}/> */}
            <Route path='/ai' element={<Auth Component={Chatbot2} bool={flag}/>}/>
        
          {/* <Route path='/sign' element={<SignLog/>}/> */}
          <Route path='/sign' element={ <Sigup2/>}/>
          {/* <Route path='/sign' element={<Signup3/>}/> */}


         
          <Route path='/jar' element={<Jar/>}/>
          <Route path='/jar3' element={<Jar2/>}/>

          {/* <Route path='/jar' element={<Jar2/>}/> */}
          <Route path='/avaz' element={<Avaz/>}/>
          <Route path='/obj' element={<Objdetec/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
          <Route path='/forgot' element={<Forget/>}/>


          
          

          {/* <Route path='/profile' element={<Auth Component={Profile}/>}/> */}
          <Route path='/profile' element={<Auth Component={Profilenew}/>}/>


            
          

        </Routes>
        {/* <Footer/> */}
        <Footer2/>
      </Router>
      {/* </NoteState> */}
    </div>
  );
}

export default App;
