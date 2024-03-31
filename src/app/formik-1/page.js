"use client"
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema=Yup.object({
    name:Yup.string().required("Name is Required").min(3,"Min 3 characters"),
    email:Yup.string().required("Email is Required"),

    message:Yup.string().required("Message is Required")
})

const page = () => {
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            message:""
        },
        onSubmit:(values) =>{
            console.log(values);
        },
        validationSchema
    })
    // console.log(formik.touched,"visited");

    // instead of useFormik hook we can use the formik components, for formik components we can pass initial value
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='mt-2'>
                    <label htmlFor='name'>Name:</label>
                    <input className='border border-black' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type='text' name='name' id='name' />
                    {/* instead of onChange, onBlur, value ... we can pass name props {...formik.getFieldProps("name")} */}
                </div>
                {formik.touched.name && formik.errors.name && <p className='text-red-500'>{formik.errors.name}</p>}

                <div className='mt-2'>
                    <label htmlFor='email'>Email:</label>
                    <input className='border border-black' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type='email' name='email' id='email' />
                </div>
                {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}


                <div className='mt-2'>
                    <label htmlFor='message'>Message:</label>
                    <input className='border border-black' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} type='text' name='message' id='message' />
                {formik.touched.message && formik.errors.message && <p className='text-red-500'>{formik.errors.message}</p>}
                </div>

                <div className='mt-1'>
                    <button type='submit' className='border border-gray-500'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default page