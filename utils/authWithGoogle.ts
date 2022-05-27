import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@lib/firebase";
import { FirebaseError } from "@firebase/util";
import _ from "lodash";

export const authWithGoogle = async ()  => {
  let err: null | string = null;
  let data;
  const provider = new GoogleAuthProvider();
  try {
    const res = await signInWithPopup(auth, provider);
    if (res) {
      const {
        user: { displayName, email, phoneNumber, photoURL, uid },
      } = res;
      data = { displayName, email, phoneNumber, photoURL, uid };
    }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      err = _.capitalize((error.code as string).split("/")[1].replace(/-/g, " "));
    } else {
      err = "Unknown Error Occurred";
    }
  }
  return {
    data,
    err,
  };
};
