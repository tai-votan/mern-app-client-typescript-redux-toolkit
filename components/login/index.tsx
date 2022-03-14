import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  email: string;
  password: string;
}

export const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Hashnode</title>
        <meta name="description" content={t("Hashnode.")} />
      </Head>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form className="mt-8 space-y-6 bg-white rounded-md p-8 shadow">
              <div>
                <label className="text-slate-700">Email</label>
                <Field
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="Email"
                  className="w-full py-2 px-4 border rounded-md focus:outline-0 mt-1"
                />
              </div>
              <div>
                <label className="text-slate-700">Password</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full py-2 px-4 border rounded-md focus:outline-0 mt-1"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800"
                >
                  Sign in
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
