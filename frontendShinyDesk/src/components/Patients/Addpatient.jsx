"use client";

import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { getCookie } from "../../utils/utils";
import { genderOptions } from "@/src/utils/data";
import { SelectPlace } from "./SelectPlace";
import { createPatient } from "@/src/services/patients.Service";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const FormSchema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio').matches(/^[a-zA-Z\s]*$/, 'El nombre solo debe contener letras y espacios'),
  last_name: yup.string().required('El apellido es obligatorio').matches(/^[a-zA-Z\s]*$/, 'El apellido solo debe contener letras y espacios'),
  second_last_name: yup.string().required('El segundo apellido es obligatorio').matches(/^[a-zA-Z\s]*$/, 'El segundo apellido solo debe contener letras y espacios'),
  email: yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio'),
  phone_number: yup.string().matches(/^\d+$/, 'El número de teléfono solo debe contener dígitos').required('El número de teléfono es obligatorio'),
  identification_card_number: yup.string().matches(/^\d+$/, 'El número de la tarjeta de identificación solo debe contener dígitos').required('El número de la tarjeta de identificación es obligatorio'),
  responsible_phone_number: yup.string().matches(/^\d+$/, 'El número de teléfono del responsable solo debe contener dígitos').required('El número de teléfono del responsable es obligatorio'),
  responsible_person_name: yup.string().required('El nombre de la persona responsable es obligatorio').matches(/^[a-zA-Z\s]*$/, 'El nombre de la persona responsable solo debe contener letras y espacios'),
});

function Addpatient() {
  const { toast } = useToast();
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null)
  const [preview, setPreview] = useState();
  const [userId, setUserId] = useState(null);
  const [idImageUser, SetidImageUser] = useState(null);
  const [errors, setErrors] = useState("");
  const [gender, setGender] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");




  const uploadFile = async () => {

    const formData = new FormData();
    formData.append('image', file);
    if (!file) {
      toast({
        variant: "destructive",
        description: "No se ha seleccionado una imagen",
      });
      return;
    }
    try {
      const response = await axios.post(
        "https://adso-shinydesk.onrender.com/api/v1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data.url;
      setFileUrl(data)
    } catch (error) {
      console.error('Error al subir el archivo', error);
    }
  };



  useEffect(() => {
    if (fileUrl && userId) { // Comprueba que tanto fileUrl como userId estén definidos
      uploadImage(userId);
    }
  }, [fileUrl, userId]);


  const uploadImage = async (id) => {
    const profile = {
      profile_picture: fileUrl
    }

    const token = getCookie("token")
    const response = await axios.put(
      `https://adso-shinydesk.onrender.com/api/v1/users/${id}`,
      profile,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response
  }

  const startRegister = async (values) => {
    uploadFile();
    let dataAuth = {
      name: values.name,
      last_name: values.last_name,
      second_last_name: values.second_last_name,
      email: values.email,
      phone_number: values.phone_number,
      identification_card_number: values.identification_card_number,
      gender: gender,
      birthday: values.birthday,
      occupation: values.occupation,
      responsible_phone_number: values.responsible_phone_number,
      responsible_person_name: values.responsible_person_name,
      eps: values.eps,
      enrollment_date: Date.now(),
      birth_place: values.birth_place,
      usual_residence: values.usual_residence,
    };

    try {
      const response = await createPatient(dataAuth);
      setUserId(response.id)
      if (response.id !== undefined ? response.id : null) {
        const id = response.id;
        toast({
          description: "Paciente creado con exito!!",
        });
        router.push(`/ShinyDesk/patients/${id}`);
      } else {

      }

    } catch (error) {
      toast({
        variant: "destructive",
        description: "No se puede crear este paciente",
      });
      console.error("Error creating user:", error);
    }
  };

  const handleFileChange = (event) => {
    const newFile = event.target.files[0];
    const newPreview = URL.createObjectURL(newFile);
    setFile(newFile);
    setPreview(newPreview);
  };


  const router = useRouter();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        last_name: "",
        second_last_name: "",
        phone_number: "",
        identification_card_number: "",
        gender: "",
        birthday: "",
        occupation: "",
        responsible_phone_number: "",
        responsible_person_name: "",
        eps: "",
        birth_place: "",
        usual_residence: "",
      }}
      validationSchema={FormSchema}
      onSubmit={async (values) => {
        await uploadFile();
        startRegister(values);
      }}
    >
      {({ setFieldValue, values }) => (
        <div className="flex justify-center p-2">
          <Form className="grid justify-items-center grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-5 lg:grid-rows-3 p-10 gap-20 items-center w-full">
            <div className="input-containerPI flex justify-center">
              <input type="file" id="file" hidden onChange={handleFileChange} />
              <label
                htmlFor="file"
                className="w-[10rem] h-[10rem] border-1 border-principalBlue rounded-full cursor-pointer flex items-center justify-center"
              >
                {preview ? (
                  <img src={preview} alt="Preview" className="h-full w-full rounded-full" />
                ) : (
                  <p className="text-center">Imagen del Paciente</p>
                )}
              </label>
            </div>


            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="name"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Primer Apellido
              </label>
              <ErrorMessage
                name="last_name"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="second_last_name"
                id="second_last_name"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Segundo Apellido
              </label>
              <ErrorMessage
                name="second_last_name"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="identification_card_number"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Documento
              </label>
              <ErrorMessage
                name="identification_card_number"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="date"
                name="birthday"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Fecha de Nacimiento
              </label>
              <ErrorMessage
                name="birthday"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>
            <Field name="birth_place" component={SelectPlace} />
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="phone_number"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Numero de telefono
              </label>
              <ErrorMessage
                name="phone_number"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="email"
                name="email"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
              <ErrorMessage
                name="email"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>

            <Select
                onValueChange={(value) => {
                  console.log(value)
                  setGender(value)
                }}
            >
              <SelectTrigger className="w-[180px] mb-4">
                <SelectValue placeholder="Genero" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {genderOptions.map((gender) => (
                    <SelectItem
                    onSelect={()=>{
                      console.log(gender.value)
                      setGender(gender.value)
                    }}
                    key={gender.value} value={gender.value}>
                      {gender.label}
                    </SelectItem>
                  ))}  
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="eps"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Eps
              </label>
              <ErrorMessage
                name="eps"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="occupation"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ocupacion
              </label>
              <ErrorMessage
                name="occupation"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="usual_residence"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Direccion
              </label>
              <ErrorMessage
                name="usual_residence"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="responsible_person_name"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Responsable del paciente
              </label>
              <ErrorMessage
                name="responsible_person_name"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="responsible_phone_number"
                id="floating_password"
                disabled={isSubmitting}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-principalBlue focus:outline-none focus:ring-0 focus:border-principalBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-principalBlue peer-focus:dark:text-principalBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Numero del responsable
              </label>
              <ErrorMessage
                name="responsible_phone_number"
                component="div"
                className="error text-sm  text-red-600"
              />
            </div>

            <div className="flex gap-10">
              <Button type="submit">
                Crear Paciente
              </Button>
              <Button
                variant="outiline"
                className="border-1"
                onClick={() => {
                  router.push("/ShinyDesk/patients");
                }}
              >
                Cancelar
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Addpatient;
