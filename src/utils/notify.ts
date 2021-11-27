import { TypeOptions, ToastOptions,toast } from "react-toastify";

const notificationStyle:ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark'
};

interface InotificationType{
  info: TypeOptions;
  success: TypeOptions;
  error: TypeOptions;
}
const notificationType: InotificationType = {
  info: toast.TYPE.INFO,
  success: toast.TYPE.SUCCESS,
  error: toast.TYPE.ERROR
}

export default function notify(
  type: string,
  message: string,
) {
  const notiType = type === 'info' ? notificationType.info: type === 'success'? notificationType.success : notificationType.error;
  
  toast(message,{...notificationStyle,type: notiType});
}
