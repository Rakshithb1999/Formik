"use client"
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required")
})

const page = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(value) => {
                console.log(value);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className='pl-2'>
                    <label
                        htmlFor="name"
                        className="block text-xs font-medium"
                    >
                        Name
                    </label>
                    <Field type="text" id="name" className="border border-gray-400" placeholder="Enter a name" name="name" />
                    {errors.name && touched.name && (
                        <p className="text-red-500 pl-2 text-sm font-medium mt-1">
                            {errors.name}*
                        </p>)}
                    </div>
                    <div className='pl-2 mt-2'>
                    <label
                        htmlFor="email"
                        className="block text-xs font-medium"
                    >
                        Email
                    </label>
                    <Field type="text" id="email" className="border border-gray-400" placeholder="Enter a Email" name="email" />
                    {errors.email && touched.email && (
                        <p className="text-red-500 pl-2 text-sm font-medium mt-1">
                            {errors.email}*
                        </p>)}
                    </div>
                    <button type='submit' className='border  ml-2 border-red-300 mt-2'>Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default page