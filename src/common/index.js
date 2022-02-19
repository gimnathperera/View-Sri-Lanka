import * as Yup from 'yup';

export const contactUsSchema = Yup.object({
  email: Yup.string()
    .email('Must be a valid email !')
    .max(255)
    .required('Email is required !'),
  fullName: Yup.string().max(255).required('Name is required !'),
  mobileNumber: Yup.string().max(255).required('Phone number is required !'),
  message: Yup.string().max(255).required('Message is required !'),
});
