import axios from "axios";

export const getUserAuth = async () =>{
   try {
    let URL = 'http://localhost:4000/auth/login/success'
    return  await axios.get(URL, { withCredentials: true });
   } catch (error) {
    return console.log(error)
   }
}
