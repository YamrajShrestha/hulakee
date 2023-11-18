"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Home = () => (
  <div className="mx-auto">
    <Image
      className="mx-auto"
      // src="/logo-black.png"
      // src="/logo-color.png"
      // src="/logo-no-background.png"
      src="/logo-white.png"
      width={300}
      height={300}
      alt="Picture of the author"
    />{" "}
    <br></br>
    <h1 className="flex justify-center font-extrabold text-white">
      Login Page
    </h1>{" "}
    <br></br>
    <Formik
      initialValues={{
        phoneNumber: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col justify-start items-center mx-auto">
          <Field
            name="phoneNumber"
            placeholder="phoneNumber"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
          />{" "}
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}{" "}
          <br />
          <Field
            name="password"
            type="password"
            placeholder="password"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
          />{" "}
          <br></br>
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <span className="text-white">Don't have an account yet ?</span>{" "}
          <Link href="/register">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>{" "}
          <br></br>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Home;
