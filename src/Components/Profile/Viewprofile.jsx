import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Editepage from "./Editepage";
import { Appcontext } from "../../context/AppContext";
function Viewprofile() {
  const { user, setUser } = useContext(Appcontext);

  console.log("user from contex", user);

  const values = JSON.parse(localStorage.getItem("userData"));
  const targetimg = localStorage.getItem("targetimg");

  return (
    <>
      <div className="px-8 py-6 max-w-md mx-auto bg-white p-8 border rounded shadow-md">
        <div className="font-bold text-xl mb-2">
          <p className=" text-3xl font-bold underline w-full px-6 py-2 border text-indigo-700">
            User's Information
          </p>
          <br />
          <img src={targetimg} />
          <br />
          <p className="text-2xl text-blue-600">FirstName: {user.firstname}.</p>
          <br />
          <p className="text-2xl text-blue-600">LastName: {user.lastname}.</p>
          <br />
          <p className="text-2xl text-blue-600">Email: {user.email}.</p>
          <br />
          <p className="text-2xl text-blue-600">Number: {user.number}.</p>
          <br />
          <p className="text-2xl text-blue-600">Address: {user.adress}.</p>
          <br />
          <p className="text-2xl text-blue-600">Password: {user.password}.</p>
          <br />
        </div>
        <Link to="/Editepage">
          <button className=" bg-indigo-700 text-2xl text-white font-bold underline w-full px-3 py-2 border">
            Edit Info
          </button>
        </Link>
        <Link to="/">
          <button className=" bg-indigo-700 text-2xl text-white font-bold underline w-full px-3 py-2 border">
            Home-Page
          </button>
        </Link>
      </div>
    </>
  );
}

function checkpass () {
  let count = 0
  const limit = 3
  let error = false
  const password = "password"
  let res 
  if(count > limit){
    while(res !== password && error === false){
      res = window.prompt("specify your pass word")
      count ++
      alert('u got it')
    }
  }else{
    error = true
    alert("too many trials")
  }

}

export default Viewprofile;
