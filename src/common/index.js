import * as Yup from 'yup';

const MOBILE_REGEX =
  /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

export const contactUsSchema = Yup.object({
  email: Yup.string()
    .email('Must be a valid email !')
    .max(255)
    .required('Email is required !'),
  fullName: Yup.string().max(255).required('Name is required !'),
  mobileNumber: Yup.string()
    .max(255)
    .required('Phone number is required !')
    .matches(MOBILE_REGEX, 'Must be a valid phone number !'),
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
  contactNumber: Yup.string()
    .required('Contact Number is required !')
    .matches(MOBILE_REGEX, 'Must be a valid contact number !'),
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
