import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useLocalStorage from "use-local-storage";
import { useContext } from "react";
// import { useContext } from "react";
function Profilepage () {
  const [username, setUsername]=useContext()
  const [values, setValues] = useLocalStorage("userData", {
    defaultValue: {},
  });

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
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

   const updatevalue = (values, username) => {
    setValues(values)
    setUsername (values)
  }
  
  return (
   <>
   <center className="max-w-md mx-auto bg-white p-8 border rounded shadow-md">
        <h1 className=" text-gray-700">Register a new account</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            number: "",
            adress: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            
            console.log(values);
            updatevalue(values)
           
           
            setValues(values);

          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="block text-gray-700 font-bold mb-2 float-left">
                Name:
              </label>
              <Field
                type="text"
                name="name"
                placeholder="Enter your fullname"
                className="w-full px-3 py-2 border rounded-lg outline-none bg-gray-700  text-white"
              />
              <ErrorMessage name="name" component="div" />
              <br />
              <label className="block text-gray-700 font-bold mb-2 float-left">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email address"
                className="w-full px-3 py-2 border rounded-lg bg-gray-700 outline-none  text-white"
              />
              <ErrorMessage name="email" component="div" />
              <br />
              <label className="block text-gray-700 font-bold mb-2 float-left">
                Adress:
              </label>
              <Field
                type="adress"
                name="adress"
                placeholder="Enter address"
                className="w-full px-3 py-2 border rounded-lg outline-none bg-gray-700  text-white"
              />
              <ErrorMessage name="adress" component="div" />
              <br />
              <label className="block text-gray-700 font-bold mb-2 float-left">
                Number:
              </label>
              <Field
                type="number"
                name="number"
                placeholder="Enter phone-number"
                className="w-full px-3 py-2 border rounded-lg  bg-gray-700 outline-none  text-white"
              />
              <ErrorMessage name="number" component="div" />
              <br />
              <label className="block text-gray-700 font-bold mb-2 float-left">
                Password:
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter phone-Password"
                className="w-full px-3 py-2 border bg-gray-700 text-white rounded-lg outline-none"
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

      {username}
   </>
  )

}
export default Profilepage