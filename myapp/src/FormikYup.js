import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function FormikYup() {
    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string().required("Password is required").min(8, "Password is too short")
    })
    const initialValues = { email: "", password: "" };
    return (
        <Formik initialValues={initialValues} validationSchema={SignUpSchema} onSubmit={(values) => console.log(values)}>
            {(formik) => {
                const {errors,touched,isValid,dirty} = formik;
                return (
                <>
                    <h1> Sign up Form</h1>
                    <Form>
                        <label> Email :</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="span" /><br />
                        <label> Password :</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="span" /><br />
                        <button type="submit" disabled={!isValid && dirty}>Sign In </button>
                    </Form>
                </>
            )
    }}
        </Formik>
    )
}
