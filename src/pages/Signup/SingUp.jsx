import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
function SignUp() {

    return (
        <div>
                        <h2>Crea una cuenta</h2>
            {/* <Form>

                <Formik>
                    <input type="text" placeholder="Nombres" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Passowrd" />
                    <button type="submit" >  Login</button>
                </Formik>
            </Form> */}
            <p>Or</p>
            <button className="bg-blueone flex g-2 text-white"  >
                <img src="" alt="Logo google" />
                <span> Sign up in with Google</span>
            </button>
            <p>
            ¿Ya tienes una cuenta?
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default SignUp;