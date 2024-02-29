import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

export const Msg = ({ closeToast, toastProps, text_toast, rout }) => (

  <div>
    <p className="text-black font-medium text-center">{text_toast}</p>
    <div className="flex w-full justify-center mt-2 gap-2 items-center">
    <Link className=" text-base hover:text-white hover:bg-black bg-green py-2 px-3 pl-3 text-white rounded font-medium flex items-center  " to={rout}>Iniciar Sesión     <FaPaperPlane className="ml-2 text-md"/> </Link>


    </div>
  </div>
);