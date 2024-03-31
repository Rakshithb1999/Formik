"use client"
import { Field, FieldArray, Form, Formik } from 'formik'
import React from 'react'

const page = () => {
    return (
        <Formik
            initialValues={{
                employees: []
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => (
                <Form>
                    <p>Add Employees To DataBase</p>
                    <FieldArray name='employees' render={(arrayHelpers) => {
                        return (<>
                            {formik.values.employees.map((employee,index)=> (
                                <div className='mt-2' key={index}>
                                    <label className='block' htmlFor={`employees.${index}.firstName`}>First Name</label>
                                    <Field className="border border-gray-500" type="text" id={`employees.${index}.firstName`} name={`employees.${index}.firstName`} />
                                </div>
                            ))}
                            <div className='mt-2'>
                                <button type='button' onClick={()=>arrayHelpers.insert(formik.values.employees.length+1,{})} className='border border-red-400'>Add Employee</button>

                            </div>
                        </>
                        )
                        
                    }}>

                    </FieldArray>
                    <button type='submit' className='border mt-2 border-gray-500'>Submit</button>
                </Form>
            )}

        </Formik>
    )
}

export default page