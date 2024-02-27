import React from "react";
import { Field, ErrorMessage } from "formik";

export function FormInput({
  label,
  name,
  disabled = false,
}: {
  label: string;
  name: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-grey-20">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        disabled={disabled}
        className="w-[400px] px-4 py-2 mt-1 rounded-md border-grey-10 shadow-md focus:border-blue-10 focus:ring focus:ring-blue-10 focus:ring-opacity-50 outline-none"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red text-sm mt-1"
      />
    </div>
  );
}
