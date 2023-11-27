import { useContext } from "react";
import { Appcontext } from "../../App";
import useLocalStorage from "use-local-storage";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

function Editepage() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(Appcontext);
  const [values, setValues] = useLocalStorage("userData", {
    defaultValue: {},
  });

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
    setValues(values);
  };
  return (
    <>
      <center className="max-w-md mx-auto bg-white p-8 border rounded shadow-md">
        <h1 className=" text-gray-700">Edit your profile</h1>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            number: "",
            adress: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values

            console.log(values);
            updatevalue(values);
            setUser(values);

            setValues(values);

            navigate("/Viewprofile");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="block text-gray-700 font-bold mb-2 float-left">
                FirstName:
              </label>

              <Field
                type="text"
                name="firstname"
                placeholder="Enter your fullname"
                className="w-full px-3 py-2 border rounded-lg outline-none bg-gray-700  text-white"
              />

              <p className=" text-2xl text-red-700">
                Current FirstName: {user.firstname}.
              </p>
              <br />
              <ErrorMessage name="firstname" component="div" />

              <br />
              <label className="block text-gray-700 font-bold mb-2 float-left">
                LastName:
              </label>
              <Field
                type="text"
                name="lastname"
                placeholder="Enter your fullname"
                className="w-full px-3 py-2 border rounded-lg outline-none bg-gray-700  text-white"
              />
              <p className=" text-2xl text-red-700">
                Current LastName: {user.lastname}.
              </p>
              <br />
              <ErrorMessage name="lastname" component="div" />

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

              <p className=" text-2xl text-red-700">
                Current Email: {user.email}.
              </p>
              <br />
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
              <p className=" text-2xl text-red-700">
                Current Adress: {user.adress}.
              </p>
              <br />
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
              <p className=" text-2xl text-red-700">
                Current Number: {user.number}.
              </p>
              <br />
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
              <p className=" text-2xl text-red-700">
                Current Password: {user.password}.
              </p>
              <br />
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
  );
}

export default Editepage;
