import React from "react";

const SnackbarContext = React.createContext(null);
function useSnackbarContext() {
  const context = React.useContext(SnackbarContext);
  if (!context) {
    throw new Error(
      `useSnackbarContext must be used within a SnackbarProvider`
    );
  }
  return context;
}

function SnackbarProvider(props) {
  const [open, setOpen] = React.useState(false);
  const defaultProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    message: "No snackbar message",
    action: [],
    variant: "success",
    className: "",
    autoHideDuration: 4000,
  };
  const [snackbarProps, setSnackbarProps] = React.useState(defaultProps);

  const openSnackbar = (props) => {
    setOpen(false);
    setSnackbarProps({ ...defaultProps, ...props });
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  const isOpen = open;

  const value = { isOpen, openSnackbar, closeSnackbar, snackbarProps };
  return <SnackbarContext.Provider value={value} {...props} />;
}

export { SnackbarProvider, useSnackbarContext };
export default SnackbarContext;
