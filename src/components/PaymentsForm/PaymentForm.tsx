"use client";
import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import FormField from "../RegistrationForm/FormField";
import UploadFileIcon from "@mui/icons-material/UploadFile";

type FormValues = {
  name: string;
  email: string;
  pesel: string;
  file: FileList;
};

const PaymentsForm = () => {
  const { languageMode } = useLanguageModeContext();
  const methods = useForm<FormValues>({ mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="md:px-32 md:py-8 px-4 py-4 flex flex-col gap-1 justify-center items-center"
        >
          <Typography variant="h5" className=" text-center">
            {languageMode == "english"
              ? "Number of account for payment: xx xxxx xxxx xxxx xxxx"
              : "Numer konta do płatności: xx xxxx xxxx xxxx xxxx"}
          </Typography>
          <div className="grid grid-cols-1 gap-1 justify-center items-center  md:min-w-[30rem]">
            <FormField
              label={languageMode == "english" ? "Name" : "Imię"}
              isRequired={false}
              minLength={3}
              maxLength={30}
              registerName="name"
            />
            <FormField
              label={
                languageMode == "english" ? "E-mail address" : "Adres e-mail"
              }
              isRequired={false}
              minLength={3}
              maxLength={30}
              registerName="email"
            />
            <FormField
              label={"PESEL"}
              isRequired={false}
              minLength={3}
              maxLength={30}
              registerName="pesel"
            />
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
          </div>
          <div className="flex gap-4 py-8 justify-center items-center">
            <button type="submit" className="button-round button-filled">
              {languageMode == "english"
                ? "Send payment confirmation"
                : "Wyślij potwierdzenie płatności"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PaymentsForm;
