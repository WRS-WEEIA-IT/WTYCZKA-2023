import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

const FormField = ({
  label,
  isRequired,
  isMail,
}: {
  label: string;
  isRequired: boolean;
  isMail?: boolean;
}) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const { languageMode } = useLanguageModeContext();

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
        type={isMail ? "email" : "text"}
        helperText={errors[label]?.message?.toString()}
        error={!!errors[label]}
        id="outlined-basic"
        variant="outlined"
        {...register(label, { required: isRequired })}
      />
    </div>
  );
};

export default FormField;
