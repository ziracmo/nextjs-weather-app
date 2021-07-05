import Noty from "noty";

export const showToast = (
  text: string,
  type: "alert" | "success" | "error" | "warning" | "info" = "alert"
) => {
  new Noty({ text, type, theme: "nest", timeout: 3000 }).show();
};
