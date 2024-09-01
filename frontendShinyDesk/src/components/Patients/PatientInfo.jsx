"use client";
import React from "react";
import { Field, Form, Formik, ErrorMessage, useFormikContext } from "formik";
import { useState, useEffect } from "react";
import { genderOptions, ciudadesCaldas } from "../Table/data";
import axios from "axios";
import SkeletonInfo from "./SkeletonInfo";
import * as yup from "yup";
import { getCookie } from "../../utils/utils";
import { toast, useToast } from "../../../components/ui/use-toast";
import { getPatient } from "@/src/services/patients.Service";
import { calculateAge } from "@/src/hooks/hooks";

const FormSchema = yup.object().shape({
    // name: yup.string().required("Por Favor ingrese un nombre"),
    // last_name: yup.string().required("Por Favor ingrese el primer apellido"),
    // email: yup.string().required("El campo email es requerido"),
    // second_last_name: yup.string().required("Ingrese el segundo apellido"),
    // birthday: yup.date().required("Ingrese Fecha de nacimiento"),
    // identification_card_number: yup
    //   .string()
    //   .required("El documento es necesario"),
});

export default function PatientInfo({ user, imageUrl }) {
const { toast } = useToast();
  const [edit, setEdit] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(true);
  const size = "full";
  const [initialValues, setInitialValues] = useState({
    name: user.name,
    last_name: "",
    second_last_name: "",
    email: "",
    phone_number: "",
    identification_card_number: "",
    gender: "",
    birthday: "",
    occupation: "",
    responsible_phone_number: "",
    responsible_person_name: "",
    eps: "",
    enrollment_date: Date.now(),
    birth_place: "",
    usual_residence: "",
  });
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [placeholder, setPlaceholder] = useState({
    gender: "",
    residence: "",
  });

  useEffect(() => {
    fetchUser();
  }, [user.id]);

  const fetchUser = async () => {
    if (user.id) {
      const token = getCookie("token");
      const response = await getPatient(user.id);
      setInitialValues({
        name: response.name,
        last_name: response.last_name,
        second_last_name: response.second_last_name,
        email: response.User.email,
        phone_number: response.phone_number,
        identification_card_number:
          response.identification_card_number,
        gender: response.gender,
        birthday: response.birthday,
        occupation: response.occupation,
        responsible_phone_number: response.responsible_phone_number,
        responsible_person_name: response.responsible_person_name,
        eps: response.eps,
        birth_place: response.birth_place,
        usual_residence: response.usual_residence,
      });
      setPlaceholder((prevState) => ({
        ...prevState,
        gender: response.gender,
        residence: response.usual_residence,
      }));
      setDataLoaded(true);
    }
  }; 

  
    const startRegister = async (values) => {
        let dataAuth = {
            name: values.name,
            last_name: values.last_name,
            second_last_name: values.second_last_name,
            email: values.email,
            phone_number: values.phone_number,
            identification_card_number: values.identification_card_number,
            gender: values.gender,
            birthday: values.birthday,
            occupation: values.occupation,
            responsible_phone_number: values.responsible_phone_number,
            responsible_person_name: values.responsible_person_number,
            eps: values.eps,
            birth_place: values.birth_place,
            usual_residence: values.usual_residence,
        };

        let userData = {
            status: "Active",
        };

        try {
            const token = getCookie("token");
            const [responsePut, responsePut2] = await axios.all([
                axios.put(
                    `https://adso-shinydesk.onrender.com/api/v1/patients/${id}`,
                    dataAuth,
                    {
                        // Reemplaza 'URL_PUT' con la URL de tu solicitud PUT y 'dataPut' con los datos que quieres enviar
                        headers: {
                            Authorization: `Bearer ${token}`, // Reemplaza 'token' con tu token
                        },
                    }
                ),
                axios.put(
                    `https://adso-shinydesk.onrender.com/api/v1/users/${userId}`,
                    userData,
                    {
                        // Reemplaza 'URL_PATCH' con la URL de tu solicitud PATCH y 'dataPatch' con los datos que quieres enviar
                        headers: {
                            Authorization: `Bearer ${token}`, // Reemplaza 'token' con tu token
                        },
                    }
                ),
            ]);
            if (responsePut.data.status === 200 || responsePut2.data.status === 200) {
                toast({
                    description: "Paciente editado correctamente",
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Algo fallo :C",
            });
            console.error(error);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={FormSchema}
            onSubmit={(values) => {
                startRegister(values);
            }}
        >
            {({ setFieldValue, values }) => (
                <div>
                    <div className="w-full h-screen">
                        <div className="containerPI p-10">
                            <div className="contPI">
                                <div className="left-infoPI">
                                    <div className="img-contPI">
                                        {imageUrl && <img src={imageUrl} alt="Imagen del paciente" className="h-full w-full rounded-full" />}
                                    </div>
                                    <div className="middle-numbersPI">
                                        <div className="numberPI number-leftPI">
                                            <p>8</p>
                                            <p>visitas</p>
                                            <p>{user.name}</p>
                                        </div>
                                        <div className="numberPI number-rightPI">
                                            <p>6</p>
                                            <p>pendientes</p>
                                        </div>
                                    </div>

                                </div>

                                {isDataLoaded ? (
                                    <Form className="w-full flex">
                                    <div className="right-infoPI">

                                        <div className="relative z-0 w-full mb-6 group">
                                            <Field
                                                value={values.name}
                                                type="text"
                                                name="name"
                                                disabled={edit}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                                            />
                                            <label
                                                htmlFor="floating_password"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Nombre
                                            </label>
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="error text-sm   text-red-600"
                                            />
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <Field
                                                type="text"
                                                name="last_name"
                                                disabled={edit}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                                            />
                                            <label
                                                htmlFor="floating_password"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Primer Apellido
                                            </label>
                                            <ErrorMessage
                                                name="last_name"
                                                component="div"
                                                className="error text-sm   text-red-600"
                                            />
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <Field
                                                type="text"
                                                name="second_last_name"
                                                disabled={edit}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                                            />
                                            <label
                                                htmlFor="floating_password"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Segundo Apellido
                                            </label>
                                            <ErrorMessage
                                                name="second_last_name"
                                                component="div"
                                                className="error text-sm   text-red-600"
                                            />
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <Field
                                                type="text"
                                                name="identification_card_number"
                                                disabled={edit}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                                            />
                                            <label
                                                htmlFor="floating_password"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Documento
                                            </label>
                                            <ErrorMessage
                                                name="identification_card_number"
                                                component="div"
                                                className="error text-sm   text-red-600"
                                            />
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <Field
                                                type="text"
                                                name="birthday"
                                                disabled={edit}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                                            />
                                            <label
                                                htmlFor="floating_password"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Fecha de nacimiento
                                            </label>
                                            <ErrorMessage
                                                name="birthday"
                                                component="div"
                                                className="error text-sm   text-red-600"
                                            />
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <Field
                                                type="text"
                                                name="birth_place"
                                                disabled={edit}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                                            />
                                            <label
                                                htmlFor="floating_password"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Lugar de nacimiento
                                            </label>
                                            <ErrorMessage
                                                name="birth_place"
                                                component="div"
                                                className="error text-sm   text-red-600"
                                            />
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <Field
                                                type="text"
                                                name="phone_number"
                                                disabled={edit}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                                            />
                                            <label
                                                htmlFor="floating_password"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Numero de telefono
                                            </label>
                                            <ErrorMessage
                                                name="phone_number"
                                                component="div"
                                                className="error text-sm   text-red-600"
                                            />
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <Field
                                                type="text"
                                                name="email"
                                                disabled={edit}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
                                            />
                                            <label
                                                htmlFor="floating_password"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Email
                                            </label>
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="error text-sm   text-red-600"
                                            />
                                        </div>
                                    </div>
                                </Form>
                                ) : (
                                    <SkeletonInfo />
                                )}
                            </div>

                            <div className="optionsPI">

                            </div>
                        </div>
                    </div>


                </div>
            )}
        </Formik>
    );
}
