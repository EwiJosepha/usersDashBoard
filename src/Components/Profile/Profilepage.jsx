import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useLocalStorage from "use-local-storage";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
import { useContext, useEffect } from "react";
import { Appcontext } from "../../context/AppContext";
import Avatar from "./Avatar";




function Profilepage () {
  const [values, setValues] = useLocalStorage("userData", {
    defaultValue: {},
  });

  const navigate = useNavigate();

  const {user, setUser} = useContext(Appcontext)
  

  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    adress: Yup.string().required("Required"),
    password: Yup.string()
      .min(4, "Too Short!")
      .max(11, "Too Long!")
      .required("Require"),
  });

   const updatevalue = (values) => {
    setValues(values)
  }
  
  return (
   <>
   <center className="max-w-[55%] mx-auto bg-white p-8 border rounded shadow-md mt-10 mb-10">
        <h1 className=" text-2xl text-blue-600  font-bold mb-4">Register a new account</h1>
        <Avatar />
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            number: "",
            address: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            
            console.log(values);
            updatevalue(values)
           setUser(values)
           
            setValues(values);
            
              navigate("/Viewprofile")
        

          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="block  font-bold mb-2 float-left text-2xl text-blue-600">
                FirstName:
              </label>
              <Field
                type="text"
                name="firstname"
                placeholder="Enter your fullname"
                className="w-full px-3 py-2 border rounded-lg outline-none   text-black"
              />
              <ErrorMessage name="firstname" component="div" />
              <br />
              <label className="block text-2xl text-blue-600 font-bold mb-2 float-left">
                LastName:
              </label>
              <Field
                type="text"
                name="lastname"
                placeholder="Enter your fullname"
                className="w-full px-3 py-2 border rounded-lg outline-none last:text-black"
              />
              <ErrorMessage name="lastname" component="div" />
              <br />
              <label className="block text-2xl text-blue-600 font-bold mb-2 float-left">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email address"
                className="w-full px-3 py-2 border rounded-lg  outline-none  text-black"
              />
              <ErrorMessage name="email" component="div" />
              <br />
              <label className="block text-2xl text-blue-600 font-bold mb-2 float-left">
                Adress:
              </label>
              <Field
                type="adress"
                name="adress"
                placeholder="Enter address"
                className="w-full px-3 py-2 border rounded-lg outline-none text-black"
              />
              <ErrorMessage name="adress" component="div" />
              <br />
              <label className="block text-2xl text-blue-600 font-bold mb-2 float-left">
                Number:
              </label>
              <Field
                type="number"
                name="number"
                placeholder="Enter phone-number"
                className="w-full px-3 py-2 border rounded-lg  text-black"
              />
              <ErrorMessage name="number" component="div" />
              <br />
              <label className="block text-2xl text-blue-600 font-bold mb-2 float-left">
                Password:
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter phone-Password"
                className="w-full px-3 py-2 border text-black rounded-lg outline-none"
              />
              <ErrorMessage name="password" component="div" />
              <br />
              <br />
              <button
                type="submit"
                disabled={isSubmitting}
               
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 outline-none"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </center>

   </>
  )

}
export default Profilepage