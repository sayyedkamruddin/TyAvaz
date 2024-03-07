import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState=(props)=>{
    
    const [state,setState]= useState({
        "Token":false,  //for login page
        "Fname":"",
        "Lname":"",
        "Email":"",
        "Phone":"",
        "City":""
    });
    const update=(data)=>{
        const {Fname, Lname, Email, Phone, City }=data;
          setState({
            "Token":true,
            "Fname":Fname,
            "Lname":Lname,
            "Email":Email,
            "Phone":Phone,
            "City":City
          })  
        
    }
    const logout=()=>{
        // const {Fname, Lname, Email, Phone, City }=data;
          setState({
            "Token":false,  //for login page
        "Fname":"",
        "Lname":"",
        "Email":"",
        "Phone":"",
        "City":""
          })  
        
    }
    return(
        <NoteContext.Provider value={{state,update,logout}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;