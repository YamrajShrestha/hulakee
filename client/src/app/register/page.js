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
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const index = () => (
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
      Sign Up Page
    </h1>{" "}
    <br></br>
    <Formik
      initialValues={{
        phoneNumber: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: "",
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
            placeholder="Your Phone Number"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
          />{" "}
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
          <br />
          <Field
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
          />{" "}
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br />
          <Field
            name="address"
            placeholder="Your Address"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
          />{" "}
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
          ) : null}
          <br />
          <Field
            name="password"
            type="password"
            placeholder="Your Password"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
          />{" "}
          <br />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <Field
            name="confirmPassword"
            type="password"
            placeholder="Re-write Your Password"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
          />{" "}
          <br />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div>{errors.confirmPassword}</div>
          ) : null}
          <span className="text-white">Already registered ?</span>{" "}
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>{" "}
          <br />
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

export default index;
