import { Field } from "formik";
import React from "react";
import { FormInput } from "./FormInput";

interface Props {
  label: string;
  name: string;
  type: string;
}
export const FormField = ({ label, name, type }: Props) => {
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-lg font-bold" htmlFor={name}>
            {label}
          </label>
          <FormInput type={type} field={field} id={name} />
          <p className="text-xs font-bold text-red-600">{form.touched[name] && form.errors[name]}</p>
        </div>
      )}
    </Field>
  );
};
