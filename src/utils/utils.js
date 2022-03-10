import {toast} from "react-toastify";

export const TOAST_TYPES = Object.freeze({
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warn",
    INFO: "info"
});

export const toaster = (message, type = TOAST_TYPES.INFO) => {
    toast[type](message, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    });
};