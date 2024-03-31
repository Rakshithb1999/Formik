"use client"
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const genderData = [
    { id: 1, label: "Mister.", value: "male" },
    { id: 2, label: "Miss.", value: "female" },
    { id: 3, label: "Other", value: "other" },
];

const selectData=[
    { id: 1, label: "Engineering", value: "engineering" },
  { id: 2, label: "Medical", value: "medical" },
  { id: 3, label: "Bca", value: "bca" },
]

const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().required("Email is required"),
    gender: Yup.string().required("Gender is Required"),
    college: Yup.string().required("College is Required"),
    dob: Yup.string().required("Dob is Required")
})
const page = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                gender: "male",
                college: "",
                dob: ""
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
                console.log(values);
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

                    <div className='pl-2 mt-2'>
                        {genderData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <label htmlFor={item.value}>{item.label}</label>
                                    <Field
                                        type="radio"
                                        name="gender"
                                        id={item.value}
                                        value={item.value}
                                    />
                                </div>
                            )
                        })}
                    </div>

                    <div className='pl-2 mt-2'>
                    <div>
                    <label
                      htmlFor="college"
                      className="block text-xs font-medium"
                    >
                      Your College
                    </label>
                    <Field
                      id="college"
                      name="college"
                      className="block w-1/3 rounded-md  text-dark font-medium placeholder:text-gray-400  sm:text-md"
                      as="select"
                    >
                      <option value="" className="font-medium">
                        Please select your college
                      </option>
                      {selectData.map((data, i) => (
                        <option key={i} value={data.value}>
                          {data.label}
                        </option>
                      ))}
                    </Field>
                  </div>
                    </div>
                    {errors.college && touched.college && (
                    <p className="text-red-500 pl-2 text-sm font-medium">
                      {errors.college}*
                    </p>
                  )}

                 <div className='mt-3 ml-2'>
                    <label
                      htmlFor="dob"
                      className='block'
                    >
                      Date of Birth
                    </label>
                    <Field
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder="Date of Birth"
                    />
                  </div>
                  {errors.dob && touched.dob && (
                    <p className="text-red-500 pl-2 text-sm font-medium">
                      {errors.dob}*
                    </p>
                  )}

                  <button type='submit' className='border ml-2 border-red-400'>Submit</button>
                </Form>
            )}

        </Formik>
    )
}

export default page