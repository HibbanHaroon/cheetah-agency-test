import toast from "react-hot-toast";

export function toastMessage(message, icon) {
  toast(message, {
    duration: 1500,
    position: "top-center",

    style: {
      fontFamily: "Arial",
    },
    className: "",

    icon: icon,

    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
}
