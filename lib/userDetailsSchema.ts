import * as Yup from "yup";

export const userDetailsSchema = Yup.object().shape({
  phoneNumber: Yup.number()
    .integer()
    .min(5000000000, "Invalid Phone Number")
    .max(9999999999, "Invalid Phone Number")
    .required("Required"),
  college: Yup.string()
    .trim()
    .min(2, "Too Short For a College Name")
    .max(100, "Relaxxxxxx dude")
    .required("Required"),
  graduationYear: Yup.number()
    .integer()
    .min(1950, "Too Short!")
    .max(2050, "Too Long!")
    .required("Required"),
  course: Yup.string()
    .trim()
    .min(2, "Too Short For a Course Name!")
    .max(50, "Too Long For a Course Name!")
    .required("Required"),
  dob: Yup.string().trim().required("Required"),
  gender: Yup.string().trim().required("Required"),
  address: Yup.string()
    .trim()
    .min(2, "Too Short For a Address!")
    .max(200, "Relaxxxxxx dude")
    .required("Required"),
  state: Yup.string().trim().required("Required"),
  pinCode: Yup.number()
    .integer()
    .min(100000, "Not a valid Pin code")
    .max(999999, "Not a valid Pin code")
    .required("Required"),
});
