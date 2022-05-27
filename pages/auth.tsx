import { authWithGoogle } from "@utils/authWithGoogle";
import { MouseEvent, useState, useEffect } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BiErrorCircle } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userDetailsSchema } from "@lib/userDetailsSchema";
import { FormField } from "@components/Form/FormField";
import { stateData } from "@lib/stateData";

const Auth = () => {
  const router = useRouter();
  const [error, setError] = useState<null | string>(null);
  const [googleAuthSuccess, setGoogleAuthSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleGoogleAuth = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data, err } = await authWithGoogle();
    if (err) {
      return setError(err);
    }
    if (data) {
      /**
       * TODO: Save auth Data to mongodb { savaAuthDataToDatabase(data) }
       * TODO: Save the local storage data to mongodb { saveLocalStorageDataToDatabase(data) }
       */
      setGoogleAuthSuccess(true);
      setError(null);
    }
  };
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setGoogleAuthSuccess(true);
      setLoading(false);
    } else {
      setGoogleAuthSuccess(false);
      setLoading(false);
    }
  });
  useEffect(() => {
    const removeErr = setTimeout(() => {
      setError(null);
    }, 5000);
    return () => {
      clearTimeout(removeErr);
    };
  }, [error]);

  if (loading) {
    return (
      <div className="min-h-screen relative text-white flex  justify-center overflow-hidden">
        <Image
          src="/auth-bg.png"
          alt="Auth background"
          layout="fill"
          className="absolute inset-0 object-cover -z-10"
        />
      </div>
    );
  }
  interface IValues {
    college: string;
    phoneNumber: number | undefined;
    graduationYear: number | undefined;
    course: string;
    dob: string;
    gender: string;
    address: string;
    state: string;
    pinCode: number | undefined;
  }
  const initialValues: IValues = {
    /**
     * TODO: Bug - A component is changing an uncontrolled input
     */
    college: "",
    phoneNumber: undefined,
    graduationYear: undefined,
    course: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    pinCode: undefined,
  };
  return (
    <div className="min-h-screen relative text-white flex  justify-center overflow-hidden transition-all duration-300">
      <Image
        src="/auth-bg.png"
        alt="Auth background"
        layout="fill"
        className="absolute inset-0 object-cover -z-10"
      />
      {googleAuthSuccess ? (
        <div className="bg-[#441E48]/30 w-11/12 sm:max-w-2xl m-2 py-4  sm:py-8 rounded-lg backdrop-blur-xl flex flex-col items-center gap-8">
          <h1 className="font-bold text-3xl">Tell us something about you</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={userDetailsSchema}
            onSubmit={(value, actions) => {
              /**
               * TODO: Save Data to mongodb { savaUserDetailsToDatabase(value) }
               * TODO: If user come from cart then redirect to cart else home
               */
              console.log({ value, actions });
              actions.setSubmitting(false);
            }}
          >
            {(props) => (
              <Form className="flex flex-col w-full items-center gap-8">
                <div className="bg-[#220F24]/70 w-full sm:p-4 p-2 flex flex-col sm:flex-row sm:gap-8">
                  <div className="flex-1 flex flex-col gap-4 ">
                    <FormField label="Your College Name" name="college" type="text" />
                    <FormField label="Graduation Year" name="graduationYear" type="number" />
                    <FormField label="Contact Number" name="phoneNumber" type="tel" />
                    <FormField label="Course Name" name="course" type="text" />
                    <FormField label="Date of Birth" name="dob" type="date" />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mt-4">
                      <label className="text-lg font-bold" htmlFor="gender">
                        Gender
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className=" w-full focus:outline-none rounded-lg py-2 px-3 border border-[#F855FF] bg-transparent focus:border-[#F855FF] focus:ring-[#F855FF] focus:ring-1 sm:text-sm"
                      >
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </Field>
                      <p className="text-xs font-bold text-red-600">
                        {props.touched.gender && props.errors.gender}
                      </p>
                    </div>

                    <FormField label="Address" name="address" type="text" />
                    <div className="flex flex-col gap-2 mt-4">
                      <label className="text-lg font-bold" htmlFor="state">
                        State
                      </label>
                      <Field
                        as="select"
                        name="state"
                        className=" w-full focus:outline-none rounded-lg py-2 px-3 border border-[#F855FF] bg-transparent focus:border-[#F855FF] focus:ring-[#F855FF] focus:ring-1 sm:text-sm"
                      >
                        <option value="">Select State</option>
                        {stateData.map((state) => (
                          <option key={state.key}>{state.name}</option>
                        ))}
                      </Field>
                      <p className="text-xs font-bold text-red-600">
                        {props.touched.state && props.errors.state}
                      </p>
                    </div>
                    <FormField label="Pin Code" name="pinCode" type="number" />
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    console.log(props);
                  }}
                  className="bg-[#220F24]/70 font-bold py-3 w-fit px-6 rounded-lg flex gap-2"
                >
                  Continue
                  <IoIosArrowForward size={24} color="#F855FF" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div className="bg-[#441E48]/30 h-fit mt-40 sm:mt-24 w-11/12  sm:max-w-lg px-4 m-2 py-16 sm:px-24 sm:py-20 rounded-lg backdrop-blur-xl flex flex-col items-center gap-8">
          <h1 className="font-bold text-4xl">Welcome to KTF !</h1>
          <div className="bg-[#883B91]/70 flex justify-center items-center rounded-lg">
            <h1 className="font-bold text-lg p-20 px-24">LOGO</h1>
          </div>
          <button
            onClick={handleGoogleAuth}
            className="bg-[#883B91]/70 rounded-lg py-3 w-full font-bold flex justify-center items-center gap-4"
          >
            <FcGoogle size={32} />
            Sign in with Google
          </button>
        </div>
      )}
      {error && (
        <div className="bg-red-500 text-red-200 px-4 py-2 rounded-lg flex gap-2 justify-center absolute right-2 bottom-2">
          <BiErrorCircle size={24} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default Auth;
