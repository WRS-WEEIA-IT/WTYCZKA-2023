import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { Typography } from "@mui/material";
import FormField from "../RegistrationForm/FormField";
import { FormProvider, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
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
          className="px-32 py-8 flex flex-col gap-1 justify-center items-center"
        >
          <Typography variant="h4">
            {languageMode == "english"
              ? "Contact form"
              : "Formularz kontaktowy"}
          </Typography>
          <FormField
            label={languageMode == "english" ? "Name" : "Imię"}
            isRequired
            minLength={3}
            maxLength={30}
            registerName="name"
          />
          <FormField
            label={languageMode == "english" ? "Email" : "Email"}
            isRequired
            minLength={3}
            maxLength={30}
            registerName="email"
          />
          <FormField
            label={languageMode == "english" ? "Message" : "Wiadomość"}
            isRequired
            minLength={3}
            maxLength={30}
            registerName="message"
            multiline={true}
          />
          <div className="flex gap-4 py-8">
            <button type="submit" className="button-round button-outlined">
              {languageMode == "english"
                ? "Contact via facebook"
                : "Skontaktuj się przez facebooka"}
            </button>
            <button type="submit" className="button-round button-filled">
              {languageMode == "english" ? "Send" : "Wyślij"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
