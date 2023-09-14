import { FormProvider, useForm } from "react-hook-form";
import FormField from "./FormField";
import { DevTool } from "@hookform/devtools";
import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import FormSelect from "./FormSelect";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pesel: string;
  sex: string;
  postalCode: string;
  city: string;
  street: string;
};

const RegistrationForm = () => {
  const methods = useForm<FormValues>({ mode: "onBlur" });
  const { languageMode } = useLanguageModeContext();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3">
          <FormField
            label={languageMode == "english" ? "First name" : "Imię"}
            isRequired={true}
            minLength={2}
            maxLength={15}
          />
          <FormField
            label={languageMode == "english" ? "Last name" : "Nazwisko"}
            isRequired={true}
            minLength={3}
            maxLength={15}
          />
          <FormField
            label={languageMode == "english" ? "E-mail adress" : "Adres e-mail"}
            isRequired={true}
            fieldType="mail"
            minLength={3}
            maxLength={20}
          />
          <FormField
            label={languageMode == "english" ? "Phone number" : "Telefon"}
            isRequired={true}
            fieldType="numeric"
            minLength={9}
            maxLength={9}
          />
          <FormField
            label="PESEL"
            isRequired={true}
            fieldType="numeric"
            minLength={11}
            maxLength={11}
          />
          <FormSelect
            label="Sex"
            isRequired={true}
            options={["male", "female"]}
          />
          <FormField
            label={languageMode == "english" ? "Sex" : "Płeć"}
            isRequired={true}
            minLength={3}
            maxLength={6}
          />
          <FormField
            label={languageMode == "english" ? "Postal code" : "Kod pocztowy"}
            isRequired={true}
            fieldType="numeric"
            minLength={6}
            maxLength={6}
          />
          <FormField
            label={languageMode == "english" ? "City" : "Miasto"}
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
            isRequired={true}
            minLength={3}
            maxLength={20}
          />
        </div>
        <div>
          <FormField
            label={languageMode == "english" ? "Force" : "Jednostka"}
            isRequired={true}
            minLength={3}
            maxLength={20}
          />
          <FormField
            label={languageMode == "english" ? "Index number" : "Numer indeksu"}
            isRequired={true}
            minLength={6}
            maxLength={6}
          />
        </div>
        <button type="submit" className="button-round button-filled">
          Submit
        </button>
      </form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default RegistrationForm;
