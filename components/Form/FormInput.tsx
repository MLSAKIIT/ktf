import { Field } from "formik";
import React from "react";

interface Props {
  type: string;
  field: any;
  id: string;
}
export const FormInput = ({ type, field, id }: Props) => {
  return (
    <input
      {...field}
      type={type}
      id={id}
      className="focus:outline-none rounded-lg py-2 px-3 border border-[#F855FF] bg-transparent focus:border-[#F855FF] focus:ring-[#F855FF] focus:ring-1 sm:text-sm"
    />
  );
};
