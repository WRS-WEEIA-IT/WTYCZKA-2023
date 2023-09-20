export type registrationType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pesel: string;
  sex: string;
  postalCode: string;
  city: string;
  street: string;
  force: string;
  indexNumber: string;
  degree: string;
  session: string;
  diet: string;
  shirtSize: string;
  source: string;
  invoice: string;
  statuteAccept: boolean;
  personalDataAccept: boolean;
  additionalAccept: boolean;
};

export const registrationTypeInitial: registrationType = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  pesel: "",
  sex: "",
  postalCode: "",
  city: "",
  street: "",
  force: "",
  indexNumber: "",
  degree: "",
  session: "",
  diet: "",
  shirtSize: "",
  source: "",
  invoice: "",
  statuteAccept: false,
  personalDataAccept: false,
  additionalAccept: false,
};