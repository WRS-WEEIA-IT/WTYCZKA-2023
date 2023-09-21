import { FormProvider, useForm } from "react-hook-form";
import FormField from "./FormField";
import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import FormSelect from "./FormSelect";
import {
  AdditionalConsentLabel,
  DegreeOptions,
  DietOptions,
  FacultyOptions,
  InvoiceOptions,
  PersonalConsentLabel,
  SessionOptions,
  SexOptions,
  ShirtSizeOptions,
  SourceOptions,
  StatuteConsentLabel,
} from "./selectOptions";
import { CircularProgress, Typography } from "@mui/material";
import FormCheckbox from "./FormCheckbox";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { registrationType, registrationTypeInitial } from "./registrationType";
import { useEffect, useState } from "react";
import Toast from "../Toast/Toast";

const RegistrationForm = () => {
  const methods = useForm<registrationType>({
    mode: "onBlur",
    defaultValues: registrationTypeInitial,
  });
  const { languageMode } = useLanguageModeContext();
  const registrationCollectionRef = collection(db, "registration");
  const [open, setOpen] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isFetchError, setIsFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setRegistrationState = async () => {
      try {
        const data = await getDocs(collection(db, "formStates"));
        const forms = data.docs.map((doc) => ({
          ...doc.data(),
        }));
        const registration = forms.filter(
          (state) => state.form === "registration"
        );
        setIsRegistrationOpen(registration[0].isOpen);
      } catch (e) {
        setIsFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };

    setRegistrationState();
  }, []);

  const onSubmit = async (data: registrationType) => {
    try {
      await addDoc(registrationCollectionRef, data);
    } catch (e) {
      setIsSubmitError(true);
    } finally {
      setIsSubmitError(false);
      setOpen(true);
      methods.reset();
    }
  };

  if (isFetchError) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Typography
          variant="h3"
          className=" text-center pb-4 text-primary-color"
        >
          {languageMode == "english"
            ? "Something went wrong"
            : "Coś poszło nie tak"}
        </Typography>
        <Typography variant="h6" className="text-primary-color p-4">
          {languageMode == "english"
            ? "Try again later"
            : "Spróbuj ponownie później"}
        </Typography>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <CircularProgress color="primary" />
      </div>
    );
  } else if (!isRegistrationOpen) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Typography
          variant="h3"
          className=" text-center pb-4 text-primary-color"
        >
          {languageMode == "english"
            ? "Registration is closed"
            : "Zapisy są zamknięte"}
        </Typography>
        <Typography variant="h6" className="text-primary-color p-4">
          {languageMode == "english"
            ? "Try again later"
            : "Spróbuj ponownie później"}
        </Typography>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography variant="h3" className=" text-center pb-4">
          {languageMode == "english"
            ? "Sign up for the trip"
            : "Zapisz się na wyjazd"}
        </Typography>
        <Typography variant="h6" className="text-primary-color p-4">
          {languageMode == "english"
            ? "Participant information"
            : "Informacje o uczestniku"}
        </Typography>
        <div className="flex flex-col md:grid md:grid-cols-3">
          <FormField
            label={languageMode == "english" ? "First name" : "Imię"}
            registerName="firstName"
            isRequired={true}
            minLength={2}
            maxLength={15}
          />
          <FormField
            label={languageMode == "english" ? "Last name" : "Nazwisko"}
            registerName="lastName"
            isRequired={true}
            minLength={3}
            maxLength={15}
          />
          <FormField
            label={languageMode == "english" ? "E-mail adress" : "Adres e-mail"}
            registerName="email"
            isRequired={true}
            fieldType="mail"
            minLength={3}
            maxLength={20}
          />
          <FormField
            label={languageMode == "english" ? "Phone number" : "Telefon"}
            registerName="phone"
            isRequired={true}
            fieldType="numeric"
            minLength={9}
            maxLength={9}
          />
          <FormField
            label="PESEL"
            registerName="pesel"
            isRequired={true}
            fieldType="numeric"
            minLength={11}
            maxLength={11}
          />
          <FormSelect
            label={languageMode == "english" ? "Sex" : "Płeć"}
            registerName="sex"
            isRequired={true}
            options={languageMode == "english" ? SexOptions.EN : SexOptions.PL}
          />
          <FormField
            label={languageMode == "english" ? "Postal code" : "Kod pocztowy"}
            registerName="postalCode"
            isRequired={true}
            fieldType="postal-code"
            minLength={6}
            maxLength={6}
          />
          <FormField
            label={languageMode == "english" ? "City" : "Miasto"}
            registerName="city"
            isRequired={true}
            minLength={2}
            maxLength={15}
          />
          <FormField
            label={
              languageMode == "english"
                ? "Street, house number"
                : "Ulica, numer domu"
            }
            registerName="street"
            isRequired={true}
            minLength={3}
            maxLength={20}
          />
        </div>
        <Typography
          variant="h6"
          className="text-primary-color "
          sx={{ margin: "1rem" }}
        >
          {languageMode == "english" ? "Student details" : "Dane studenta"}
        </Typography>
        <div className="flex flex-col md:grid md:grid-cols-3">
          <FormField
            label={languageMode == "english" ? "Force" : "Jednostka"}
            registerName="force"
            isRequired={true}
            minLength={3}
            maxLength={20}
          />
          <FormField
            label={languageMode == "english" ? "Index number" : "Numer indeksu"}
            registerName="indexNumber"
            isRequired={true}
            minLength={6}
            maxLength={6}
          />
          <FormSelect
            label={languageMode == "english" ? "Degree" : "Stopień studiów"}
            registerName="degree"
            isRequired={true}
            options={
              languageMode == "english" ? DegreeOptions.EN : DegreeOptions.PL
            }
          />
          <FormSelect
            label={languageMode == "english" ? "Session" : "Semestr"}
            registerName="session"
            isRequired={true}
            options={SessionOptions.PL}
          />
        </div>
        <Typography
          variant="h6"
          className="text-primary-color"
          sx={{ margin: "1rem" }}
        >
          {languageMode == "english"
            ? "Additional questions"
            : "Dodatkowe informacje"}
        </Typography>
        <div className="flex flex-col md:grid md:grid-cols-3">
          <FormSelect
            label={languageMode == "english" ? "Diet" : "Dieta"}
            registerName="diet"
            isRequired={true}
            options={
              languageMode == "english" ? DietOptions.EN : DietOptions.PL
            }
          />
          <FormSelect
            registerName="shirtSize"
            label={
              languageMode == "english" ? "T-shirt size" : "Rozmiar koszulki"
            }
            isRequired={true}
            options={ShirtSizeOptions.PL}
          />
          <FormSelect
            label={
              languageMode == "english"
                ? "How do you know about Wtyczka"
                : "Skąd wiesz o Wtyczce"
            }
            registerName="source"
            isRequired={true}
            options={
              languageMode == "english" ? SourceOptions.EN : SourceOptions.PL
            }
          />
          <FormSelect
            label={languageMode == "english" ? "Invoice" : "Faktura"}
            registerName="invoice"
            isRequired={true}
            options={
              languageMode == "english" ? InvoiceOptions.EN : InvoiceOptions.PL
            }
          />
        </div>
        <div className="flex flex-col m-4">
          <FormCheckbox label={StatuteConsentLabel} name="statuteAccept" />
          <FormCheckbox
            label={PersonalConsentLabel}
            name="personalDataAccept"
          />
          <FormCheckbox
            label={AdditionalConsentLabel}
            name="additionalAccept"
          />
        </div>
        <div className="flex gap-4 items-center justify-center m-8">
          <button type="submit" className="button-round button-filled ">
            Submit
          </button>
        </div>
      </form>
      <Toast setOpen={setOpen} open={open} error={isSubmitError} />
    </FormProvider>
  );
};

export default RegistrationForm;
