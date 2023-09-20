import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { Alert, Snackbar } from "@mui/material";
import { SetStateAction } from "react";

const Toast = ({
  setOpen,
  open,
  error,
}: {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
  error: boolean;
}) => {
  const { languageMode } = useLanguageModeContext();
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const message = () => {
    if (error) {
      return languageMode == "polish"
        ? "Wystąpił błąd, spróbuj ponownie"
        : "An error occurred, please try again";
    } else {
      return languageMode == "polish"
        ? "Przesłano pomyślnie"
        : "Successfully send";
    }
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        color={error ? "error" : "success"}
        variant="filled"
        sx={{ width: "100%", color: "white" }}
      >
        {message()}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
