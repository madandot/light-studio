"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactPage = () => {
   // Validation schema using Yup
   const validationSchema = Yup.object().shape({
      fullname: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
   });

   const handleSubmit = (values, { setSubmitting }) => {
      // Perform form submission logic here
      console.log("Form values:", values);
      // You can make API calls or other actions with the form data
      setSubmitting(false);
   };

   return (
      <div className=' md:h-screen md:mx-0 mx-8'>
         <div className='max-w-lg mx-auto'>
            <Formik
               initialValues={{
                  fullname: "",
                  email: "",
                  subject: "",
                  message: "",
               }}
               validationSchema={validationSchema}
               onSubmit={handleSubmit}
            >
               {({ isSubmitting }) => (
                  <Form className='rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white text-black'>
                     <h1 className='text-2xl font-bold'>Send a message</h1>
                     <label htmlFor='fullname' className='font-light mt-8'>
                        Full name<span className='text-red-500 dark:text-gray-50'>*</span>
                     </label>
                     <Field
                        type='text'
                        name='fullname'
                        className='bg-transparent rounded border-2 border-[#767676] py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500'
                     />
                     <ErrorMessage name='fullname' component='div' className='text-red-500' />

                     {/* Other fields and their respective error messages */}
                     <label htmlFor='fullname' className='font-light mt-8'>
                        E-mail<span className='text-red-500 '>*</span>
                     </label>
                     <Field
                        type='email'
                        name='email'
                        className='bg-transparent rounded border-2 border-[#767676] py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500'
                     />
                     <ErrorMessage name='email' component='div' className='text-red-500' />
                     <label htmlFor='fullname' className='font-light mt-8'>
                        Message<span className='text-red-500 '>*</span>
                     </label>
                     <Field
                        type='text'
                        name='message'
                        className='bg-transparent rounded border-2 border-[#767676] py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500'
                     />
                     <ErrorMessage name='message' component='div' className='text-red-500' />
                     {/* <label htmlFor='fullname' className='font-light mt-8'>
                        Message<span className='text-red-500 '>*</span>
                     </label>
                     <Field
                        type='text'
                        name='Message'
                        className='bg-transparent rounded border-2 border-[#767676] py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500'
                     />
                     <ErrorMessage name='fullname' component='div' className='text-red-500' /> */}
                     <div className='flex flex-row items-center justify-start'>
                        <button
                           type='submit'
                           disabled={isSubmitting}
                           className='px-10 mt-8 py-2 bg-[#000] text-gray-50 font-light rounded-md text-lg flex flex-row items-center'
                        >
                           {isSubmitting ? "Sending..." : "Send"}
                        </button>
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   );
};

export default ContactPage;
