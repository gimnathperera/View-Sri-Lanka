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

export const customTourSchema = Yup.object({
  fullName: Yup.string().max(255).required('Full name is required !'),
  country: Yup.string().max(255).required('Country is required !'),
  dateOfArrival: Yup.string()
    .max(255)
    .required('Date of arrival is required !'),
  dateOfDiparture: Yup.string()
    .max(255)
    .required('Date of departure is required !'),
  noOfAdults: Yup.string().max(255).required('Number of adults is required !'),
  noOfChildren: Yup.string()
    .max(255)
    .required('Number of children is required !'),
  contactNumber: Yup.string().max(255).required('Contact Number is required !'),
  email: Yup.string()
    .email('Must be a valid email !')
    .max(255)
    .required('Email is required !'),
  tourDuration: Yup.string().max(255).required('Tour duration is required !'),
  preferredTourPackage: Yup.string()
    .max(255)
    .required('Prefered tour package is required !'),
  notes: Yup.string().max(255).required('Note is required !'),
});
