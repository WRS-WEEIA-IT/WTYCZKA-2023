import { FormProvider, useForm } from "react-hook-form";
import FormField from "./FormField";
import { DevTool } from "@hookform/devtools";

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

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <FormField label="Imię" isRequired={true} />
          <FormField label="Nazwisko" isRequired={true} />
          <FormField label="Adres e-mail" isRequired={true} isMail={true} />
          <FormField label="Telefon" isRequired={true} />
          <FormField label="PESEL" isRequired={true} />
          <FormField label="Płeć" isRequired={true} />
          <FormField label="Kod pocztowy" isRequired={true} />
          <FormField label="Miejscowość" isRequired={true} />
          <FormField label="Ulica, numer domu" isRequired={true} />
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
