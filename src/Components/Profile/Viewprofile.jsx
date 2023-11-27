import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Appcontext } from "../../App";
import Editepage from "./Editepage";
function Viewprofile () {

  const {user, setUser} = useContext(Appcontext)

  console.log("user from contex", user);
  
  const values = JSON.parse(localStorage.getItem('userData'))
  

// useEffect(()=>{
//   console.log('values', values);
// },[])

  return <>

  <div className="px-8 py-6 max-w-md mx-auto bg-white p-8 border rounded shadow-md">
    <div className="font-bold text-xl mb-2">
      <p className= " text-3xl font-bold underline w-full px-6 py-2 border text-indigo-700">User's Information</p><br/>
      <p className="text-2xl text-blue-600">FirstName: {user.firstname}.</p><br/>
      <p className="text-2xl text-blue-600">LastName: {user.lastname}.</p><br/>
      <p className="text-2xl text-blue-600">Email: {user.email}.</p><br/>
      <p className="text-2xl text-blue-600">Number: {user.number}.</p><br/>
      <p className="text-2xl text-blue-600">Address: {user.address}.</p><br/>
      <p className="text-2xl text-blue-600">Password: {user.password}.</p><br/>
     
    </div>
    <Link to="/Editepage"><button className=" bg-indigo-700 text-2xl text-white font-bold underline w-full px-3 py-2 border">Edit Data</button></Link>

    </div>
  </>

}

export default Viewprofile