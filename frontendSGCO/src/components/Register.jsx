import { Field, Form, Formik ,ErrorMessage} from "formik";
import {Spinner} from "@/components/ui/spinner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as yup from "yup";
const FormSchema = yup.object().shape({
  email: yup.string().required("El campo email es requerido"),
  password: yup.string().required("Debe llenar la contrasena"),

});


function Register() {

  const router = useRouter();
const [errors,setErrors] = useState(""); 
const [isSubmitting, setIsSubmitting] = useState(false);




  const startLogin = async ({ email, password }) => {

    setErrors(<Spinner color="default"/>);
    setIsSubmitting(true);
    let dataAuth = {
      email: email,
      password: password,
    };
  
  
      try {
        let res = await fetch(
          "https://adso-shinydesk.onrender.com/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataAuth),
          }
        );
  
        const redirect = async () => {
            router.push("/ShinyDesk/General")
        };
  
        let data = await res.json();
        if (data.status !='FAILED') {

          document.cookie = `token=${data.data}; path=/; SameSite=None; Secure`;   
          if(data.status === 200){
            redirect();
          }
        } else {
          setErrors(data.data);
          setIsSubmitting(false);

  
        }
      } catch (error) {
        console.log(error);
  
        return null;
      }
  };
  



  return (
    <Formik
      initialValues={{
        email: "",
        password: "",

      }}
      validationSchema={FormSchema}
      onSubmit={startLogin}
    >
      {() => (
          <Form className="flex flex-col w-full h-auto shadow-xl  rounded gap-12 p-7 border-2 sm:mt-[95px]">
            <div className="text-center font-semibold text-2xl text-principalBlue">Ingreso</div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="email"
                name="email"
                id="email"
                disabled={isSubmitting} 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
                
              />

              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondaryBlue peer-focus:dark:text-secondaryBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo Electronico
              </label>
              <ErrorMessage name="email" component="div" className="error text-red-600" />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="password"
                name="password"
                id="floating_password"
                disabled={isSubmitting} 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
                
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondaryBlue peer-focus:dark:text-secondaryBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contraseña
              </label>
              <ErrorMessage name="password" component="div" className="error  text-red-600" />
            </div>
            <button
            disabled={isSubmitting}
              type="submit"
              className="text-white bg-principalBlue hover:bg-principalBlue focus:ring-4 focus:outline-none focus:ring-principalBlue font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-principalBlue dark:hover:bg-principalBlue dark:focus:ring-principalBlue"
            >
              Ingresar
            </button>
            <div className="text-center"><p  className="text-red-700">
              { errors}</p>
              </div>
            <div className="text-center font-semibold  text-principalBlue">Olvidaste tu contrasena?</div>
        </Form>
      )}
    </Formik>
  );
}



export default Register;
