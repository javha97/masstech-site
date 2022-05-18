import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { actionCodeSettings, auth, db, storage } from "./firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const app = express();
const router = express.Router();

// App configure
dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(bodyParser.json());
app.use("/", router);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
const addEmailToFirebase = async (email) => {
  try {
    const docRef = await addDoc(collection(db, process.env.userCol), {
      email: email,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    res.status(400).json({ success: false, error });
  }
};

// CONTROLLER/////////////////////////////////////////// CONTROLLER
const getCategories = (req, res, next) => {
  res.status(200).json({
    data: [
      {
        product1: "1",
        product2: "2",
        product3: "3",
      },
    ],
    success: true,
  });
};

const loginPost = (req, res, next) => {
  const { email, password } = req.body;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user);
      res.status(200).json({ success: true, user });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      res.status(400).json({ success: false, errorMessage });
    });
};

const subscribeEmail = (req, res, next) => {
  const password = "12345678";
  const { email } = req.body;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          // window.localStorage.setItem("emailForSignIn", email);
          res.status(200).json({ success: true, user });
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          res.status(400).json({ success: false, errorMessage });
          // ...
        });
      // ...
    })
    .catch((error) => {
      if(error.code === "auth/email-already-in-use"){
        res.status(400).json({ success: false, errorMessage: 'Хэрэглэгч бүртгэлтэй байна.' });
      }
      else{
        const errorMessage = error.message;
        res.status(400).json({ success: false, errorMessage });
      }
    });
};

const checkValidate = async (req, res, next) => {
  const email = auth.currentUser.email;
  if (isSignInWithEmailLink(auth, `http://localhost:5500${req.url}`)) {
    console.log(` isSignInWithEmailLink  ajillaj baina`);
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    if (!email) {
      console.log(` isSignInWithEmailLink  !email ajillaj baina`);
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      // email = window.prompt('Please provide your email for confirmation');
      res.status(200).json({
        success: true,
        errorMessage: "Please provide your email for confirmation",
      });
    }
    // The client SDK will parse the code from the link for you.
    console.log(auth, email, req.url);
    try {
      const result = await signInWithEmailLink(
        auth,
        email,
        `http://localhost:5500${req.url}`
      );
      console.log(`result ======================>`, result);
      await addEmailToFirebase(email);
      res.status(200).json({
        success: true,
        message: "Amjilttai burtgullee",
      });
    } catch (e) {
      console.log(` result  aldaa shvv`);
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
      res.status(400).json({ success: false, e });
    }
  } else {
    res.status(200).json({ error: "False Aldaa" });
  }
};

const saveStorageData = async(req, res, next) => {
  const product1Ref = ref(storage, 'products/product1');
  // const product1Ref = ref(storage, )
};

// ROUTER/////////////////////////////////////////// ROUTER
router.route("/").get(getCategories).post(subscribeEmail);
router.route("/login").post(loginPost);
router.route("/validate").get(checkValidate);

router.route('/storage').get(saveStorageData);
