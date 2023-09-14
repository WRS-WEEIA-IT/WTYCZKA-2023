import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const FormField = ({
  label,
  isRequired,
  fieldType,
  minLength,
  maxLength,
}: {
  label: string;
  isRequired: boolean;
  fieldType?: "numeric" | "text" | "mail";
  minLength: number;
  maxLength: number;
}) => {
  const { register, formState } = useFormContext();
  const [pattern, setPattern] = useState(/.*/g);
  const { errors } = formState;
  const { languageMode } = useLanguageModeContext();

  useEffect(() => {
    if (fieldType == "mail") {
      setPattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    } else if (fieldType == "numeric") {
      setPattern(/^[0-9]*$/g);
    } else {
      setPattern(/.*/g);
    }
  }, []);

  return (
    <div className="flex flex-col w-auto m-4 gap-1">
      <Typography variant="subtitle1">
        {label}{" "}
        <span className="text-primary-color">
          {isRequired &&
            (languageMode == "english" ? "(required)" : "(wymagane)")}
        </span>
      </Typography>
      <TextField
        type={fieldType == "mail" ? "email" : "text"}
        helperText={errors[label]?.message?.toString()}
        error={!!errors[label]}
        id="outlined-basic"
        variant="outlined"
        {...register(label, {
          required: isRequired,
          minLength: {
            value: minLength,
            message:
              languageMode == "english"
                ? `min ${minLength} letters`
                : `min. ${minLength} znaki`,
          },
          maxLength: {
            value: maxLength,
            message:
              languageMode == "english"
                ? `max ${maxLength} letters`
                : `maks. ${maxLength} znaków`,
          },
          pattern: {
            value: pattern,
            message:
              languageMode == "english"
                ? "invalid format"
                : "niepoprawny format",
          },
        })}
      />
    </div>
  );
};

export default FormField;
