import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormSelect = ({
  label,
  options,
  isRequired,
}: {
  label: string;
  options: string[];
  isRequired: boolean;
}) => {
  const { control, formState } = useFormContext();
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
      <Controller
        control={control}
        name={label}
        render={({ field }) => (
          <Select
            error={!!errors[label]}
            variant="outlined"
            color="primary"
            {...field}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default FormSelect;
