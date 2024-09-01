// "use client";
// import React from "react";
// import { Field, Form, Formik, ErrorMessage, useFormikContext } from "formik";
// import { useState, useEffect } from "react";
// import { genderOptions, ciudadesCaldas } from "../Table/data";
// import axios from "axios";
// import * as yup from "yup";
// import { getCookie } from "../../utils/utils";
// import { toast, useToast } from "../../../components/ui/use-toast";


// const FormSchema = yup.object().shape({
//   // name: yup.string().required("Por Favor ingrese un nombre"),
//   // last_name: yup.string().required("Por Favor ingrese el primer apellido"),
//   // email: yup.string().required("El campo email es requerido"),
//   // second_last_name: yup.string().required("Ingrese el segundo apellido"),
//   // birthday: yup.date().required("Ingrese Fecha de nacimiento"),
//   // identification_card_number: yup
//   //   .string()
//   //   .required("El documento es necesario"),
// });

// export default function FullInfoModal({ id, resetInfo, userId }) {
//   const { toast } = useToast();
//   const [edit, setEdit] = useState(true);
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const [isSubmitting, setIsSubmitting] = useState(true);
//   const size = "full";
//   const [initialValues, setInitialValues] = useState({
//     name: "",
//     last_name: "",
//     second_last_name: "",
//     email: "",
//     phone_number: "",
//     identification_card_number: "",
//     gender: "",
//     birthday: "",
//     occupation: "",
//     responsible_phone_number: "",
//     responsible_person_name: "",
//     eps: "",
//     enrollment_date: Date.now(),
//     birth_place: "",
//     usual_residence: "",
//   });
//   const [isDataLoaded, setDataLoaded] = useState(false);
//   const [placeholder, setPlaceholder] = useState({
//     gender: "",
//     residence: "",
//   });

//   useEffect(() => {
//     fetchUser();
//   }, [id]);

//   const fetchUser = async () => {
//     if (id) {
//       const token = getCookie("token");
//       const response = await axios.get(
//         `https://adso-shinydesk.onrender.com/api/v1/patients/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setInitialValues({
//         name: response.data.data.name,
//         last_name: response.data.data.last_name,
//         second_last_name: response.data.data.second_last_name,
//         email: response.data.data.User.email,
//         phone_number: response.data.data.phone_number,
//         identification_card_number:
//         response.data.data.identification_card_number,
//         gender: response.data.data.gender,
//         birthday: response.data.data.birthday,
//         occupation: response.data.data.occupation,
//         responsible_phone_number: response.data.data.responsible_phone_number,
//         responsible_person_name: response.data.data.responsible_person_name,
//         eps: response.data.data.eps,
//         birth_place: response.data.data.birth_place,
//         usual_residence: response.data.data.usual_residence,
//       });
//       setPlaceholder((prevState) => ({
//         ...prevState,
//         gender: response.data.data.gender,
//         residence: response.data.data.usual_residence,
//       }));
//       setDataLoaded(true);
//     }
//   };

//   const startRegister = async (values) => {
//     let dataAuth = {
//       name: values.name,
//       last_name: values.last_name,
//       second_last_name: values.second_last_name,
//       email: values.email,
//       phone_number: values.phone_number,
//       identification_card_number: values.identification_card_number,
//       gender: values.gender,
//       birthday: values.birthday,
//       occupation: values.occupation,
//       responsible_phone_number: values.responsible_phone_number,
//       responsible_person_name: values.responsible_person_number,
//       eps: values.eps,
//       birth_place: values.birth_place,
//       usual_residence: values.usual_residence,
//     };

//     let userData = {
//       status: "Active",
//     };

//     try {
//       const token = getCookie("token");
//       const [responsePut, responsePut2] = await axios.all([
//         axios.put(
//           `https://adso-shinydesk.onrender.com/api/v1/patients/${id}`,
//           dataAuth,
//           {
//             // Reemplaza 'URL_PUT' con la URL de tu solicitud PUT y 'dataPut' con los datos que quieres enviar
//             headers: {
//               Authorization: `Bearer ${token}`, // Reemplaza 'token' con tu token
//             },
//           }
//         ),
//         axios.put(
//           `https://adso-shinydesk.onrender.com/api/v1/users/${userId}`,
//           userData,
//           {
//             // Reemplaza 'URL_PATCH' con la URL de tu solicitud PATCH y 'dataPatch' con los datos que quieres enviar
//             headers: {
//               Authorization: `Bearer ${token}`, // Reemplaza 'token' con tu token
//             },
//           }
//         ),
//       ]);
//       if (responsePut.data.status === 200 || responsePut2.data.status === 200) {
//         toast({
//           description: "Paciente editado correctamente",
//         });
//       }
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         description: "Algo fallo :C",
//       });
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       {isDataLoaded ? (
//         <Formik
//           initialValues={initialValues}
//           validationSchema={FormSchema}
//           onSubmit={(values) => {
//             startRegister(values);
//           }}
//         >
//           {({ setFieldValue, values }) => (
//             <div>
//               <Button className="buttonPI" onPress={onOpen}>
//                 Ver informacion y editar
//               </Button>
//               <Modal
//                 shouldBlockScroll={false}
//                 size={size}
//                 isOpen={isOpen}
//                 onOpenChange={onOpenChange}
//                 isDismissable={false}
//               >
//                 <ModalContent>
//                   {(onClose) => (
//                     <>
//                       <ModalHeader className="flex flex-col gap-1 border ">
//                         <div className="w-full px-10 flex justify-between items-center">
//                           Edicion de paciente{" "}
//                           <Button
//                             className="bg-principalBlue text-white"
//                             onClick={() => {
//                               setEdit(!edit);
//                             }}
//                           >
//                             {edit ? "Activar edicion" : "desactivar edición"}
//                           </Button>
//                         </div>
//                       </ModalHeader>
//                       <ModalBody className="overflow-y-auto">
//                         <Form className="grid justify-items-center grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-5 lg:grid-rows-3 p-10 gap-20 items-center w-full">
//                           <div className="input-containerPI flex justify-center">
//                             <div type="file" id="file" hidden />
//                             <label
//                               htmlFor="file"
//                               className="w-[10rem] h-[10rem] bg-blue-500 rounded-full cursor-pointer flex items-center justify-center"
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 className="h-8 w-8 text-white"
//                               >
//                                 <path
//                                   stroke-linecap="round"
//                                   stroke-linejoin="round"
//                                   stroke-width="2"
//                                   d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
//                                 ></path>
//                               </svg>
//                             </label>
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="name"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Nombre
//                             </label>
//                             <ErrorMessage
//                               name="name"
//                               component="div"
//                               className="error text-sm   text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="last_name"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Primer Apellido
//                             </label>
//                             <ErrorMessage
//                               name="last_name"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="second_last_name"
//                               id="second_last_name"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                               placeholder=""
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Segundo Apellido
//                             </label>
//                             <ErrorMessage
//                               name="second_last_name"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="identification_card_number"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Documento
//                             </label>
//                             <ErrorMessage
//                               name="identification_card_number"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="date"
//                               name="birthday"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Fecha de Nacimiento
//                             </label>
//                             <ErrorMessage
//                               name="birthday"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="birth_place"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Lugar de nacimiento
//                             </label>
//                             <ErrorMessage
//                               name="birth_place"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="phone_number"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Numero de telefono
//                             </label>
//                             <ErrorMessage
//                               name="phone_number"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="email"
//                               name="email"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Email
//                             </label>
//                             <ErrorMessage
//                               name="email"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <Field
//                             as={Select}
//                             name="gender"
//                             label="genero"
//                             className="max-w-xs mb-8"
//                             isDisabled={edit}
//                             defaultSelectedKeys={[`${placeholder.gender}`]}
//                             onChange={(event) =>
//                               setFieldValue("gender", event.target.value)
//                             }
//                           >
//                             {genderOptions.map((gender) => (
//                               <SelectItem
//                                 key={gender.value}
//                                 value={gender.value}
//                               >
//                                 {gender.label}
//                               </SelectItem>
//                             ))}
//                           </Field>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="eps"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Eps
//                             </label>
//                             <ErrorMessage
//                               name="eps"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="occupation"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Ocupacion
//                             </label>
//                             <ErrorMessage
//                               name="occupation"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="usual_residence"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Direccion
//                             </label>
//                             <ErrorMessage
//                               name="usual_residence"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="responsible_person_name"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Responsable del paciente
//                             </label>
//                             <ErrorMessage
//                               name="responsible_person_name"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>
//                           <div className="relative z-0 w-full mb-6 group">
//                             <Field
//                               type="text"
//                               name="responsible_phone_number"
//                               disabled={edit}
//                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-800 focus:outline-none focus:ring-0 focus:border-pink-800 peer"
//                             />
//                             <label
//                               htmlFor="floating_password"
//                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#96005a] peer-focus:dark:text-[#96005a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                               Numero del responsable
//                             </label>
//                             <ErrorMessage
//                               name="responsible_phone_number"
//                               component="div"
//                               className="error text-sm  text-red-600"
//                             />
//                           </div>

//                           <div className="w-full flex justify-between">
//                             <Button
//                               type="submit"
//                               disabled={edit}
//                               className="bg-principalBlue text-white"
//                             >
//                               Actualizar
//                             </Button>
//                             <Button
//                               type="submit"
//                               color="danger"
//                               onClick={() => { }}
//                               disabled={edit}
//                               className="bg-slate-100 text-principalBlue border-1 border-principalBlue"
//                             >
//                               cancelar
//                             </Button>
//                           </div>
//                         </Form>
//                       </ModalBody>
//                       <ModalFooter>
//                         <Button
//                           color="danger"
//                           variant="light"
//                           onPress={onClose}
//                         >
//                           Cerrar
//                         </Button>
//                       </ModalFooter>
//                     </>
//                   )}
//                 </ModalContent>
//               </Modal>
//             </div>
//           )}
//         </Formik>
//       ) : (
//         <div>
 
//         </div>
//       )}
//     </>
//   );
// }
