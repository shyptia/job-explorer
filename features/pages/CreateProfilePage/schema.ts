import * as Yup from "yup";

export const CreateProfileSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  desiredJobTitle: Yup.string().required("Desired job title is required"),
  aboutMe: Yup
    .string()
    .required("About me is required")
    .min(10, "About me must be at least 10 characters")
    .max(500, "About me must be at most 500 characters"),
});
