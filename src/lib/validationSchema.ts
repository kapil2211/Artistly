import * as yup from "yup";

export const artistSchema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required").min(20, "Bio must be at least 20 characters"),
  category: yup.array().of(yup.string()).required().min(1, "Select at least one category"),
  languages: yup.array().of(yup.string()).required().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});
