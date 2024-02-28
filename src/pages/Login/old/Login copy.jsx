import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
function Login() {
    const navigate =useNavigate();  

    const googleAuth = () => {

        window.open(
            `http://localhost:4000/auth/google/callback`, "_self"
        )
        navigate( "/dashboard")
    }
    return (
        <div>
            <h2>Inicia sesión para ingresar a la plataforma</h2>
            {/* <Form>

                <Formik>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Passowrd" />
                    <button type="submit" >  Login</button>
                </Formik>
            </Form> */}
            <p>Or</p>
            <button onClick={googleAuth} className="bg-blueone flex g-2 text-white"  >
                <img src="" alt="Logo google" />
                <span> Login with Google</span>
            </button>
            <p>
                ¿Eres nuevo?
                <Link to="/signup">SignUp</Link>
            </p>
        </div>
    );
}

export default Login;