import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").required("Required"),
  password: Yup.string().min(2, "Password too Weak!").required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email must follow this form: abc@abc.abc"),
  phone: Yup.number().required("Phone must be number").integer(),
  address: Yup.string().required("Required"),
});
