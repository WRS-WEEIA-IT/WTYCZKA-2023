"use client";
import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import FormField from "../RegistrationForm/FormField";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { DevTool } from "@hookform/devtools";
import useDaysLeft from "@/hooks/useDaysLeft";
import { PAYMENT_DATE } from "@/constants/eventDates";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { paymentType } from "./paymentType";
import { storage } from "@/config/firebase";
import { ref, uploadBytes } from "firebase/storage";

const PaymentsForm = () => {
  const { languageMode } = useLanguageModeContext();
  const methods = useForm<paymentType>({ mode: "onBlur" });
  const paymentCollectionRef = collection(db, "payment");
  const daysLeft = useDaysLeft(PAYMENT_DATE);

  const onSubmit = async (data: paymentType) => {
    try {
      await addDoc(paymentCollectionRef, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        pesel: data.pesel,
      });
      const storageRef = ref(
        storage,
        `payment/${data.firstName}_${data.lastName}`
      );
      uploadBytes(storageRef, data.file[0]);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      methods.reset();
    }
  };

  const setPaymentStage = () => {
    if (daysLeft <= 0) {
      return (
        <div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col gap-1 justify-center items-center"
            >
              <Typography variant="h5" className=" text-center">
                {languageMode == "english"
                  ? "Number of account for payment: xx xxxx xxxx xxxx xxxx"
                  : "Numer konta do płatności: xx xxxx xxxx xxxx xxxx"}
              </Typography>
              <Typography variant="h5" className=" text-center">
                {languageMode == "english"
                  ? "Title of the transfer: WTYCZKA2023-FirstNameLastName  Amount: xxx zł"
                  : "Tytuł przelewu: WTYCZKA2023-ImieNazwisko  Kwota: xxx zł "}
              </Typography>
              <div className="grid grid-cols-1 gap-1 justify-center items-center  md:min-w-[30rem]">
                <div className="xl:flex-row gap-1 flex flex-col">
                  <FormField
                    label={languageMode == "english" ? "Name" : "Imię"}
                    isRequired={false}
                    minLength={3}
                    maxLength={30}
                    registerName="firstName"
                  />
                  <FormField
                    label={languageMode == "english" ? "Surname" : "Nazwisko"}
                    isRequired={false}
                    minLength={3}
                    maxLength={30}
                    registerName="lastName"
                  />
                </div>
                <FormField
                  label={
                    languageMode == "english"
                      ? "E-mail address"
                      : "Adres e-mail"
                  }
                  isRequired={true}
                  minLength={3}
                  maxLength={30}
                  registerName="email"
                />
                <FormField
                  label={"PESEL"}
                  isRequired={true}
                  minLength={11}
                  maxLength={11}
                  registerName="pesel"
                />
              </div>
              <div className="flex flex-col w-auto m-4 gap-1">
                <Typography variant="subtitle1">
                  {languageMode == "english"
                    ? "Confirmation of the payment"
                    : "Potwierdzenie wykonania przelewu"}
                </Typography>
                <TextField
                  type="file"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <UploadFileIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                  }}
                  {...methods.register("file")}
                />
              </div>
              <button type="submit" className="button-round button-filled">
                {languageMode == "english"
                  ? "Send payment confirmation"
                  : "Wyślij potwierdzenie płatności"}
              </button>
            </form>
          </FormProvider>
        </div>
      );
    } else {
      return (
        <Typography variant="h5">
          {languageMode == "english"
            ? "Currently we are not accepting payments!"
            : "Obecnie nie przyjmujemy wpłat!"}
        </Typography>
      );
    }
  };

  return <>{setPaymentStage()}</>;
};

export default PaymentsForm;
