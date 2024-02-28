import Login from "../Login/Login";

function Dashboard() {
    let tokenExistAndStillValid = (localStorage.getItem('token')).exp * 1000 > Date.now();
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('nombre'));
    console.log(localStorage.getItem('apellido'));
    console.log(localStorage.getItem('email2'));
    return (
        <>
        {
           tokenExistAndStillValid ? <Login/> : null  
        }
        </>
    );
}

export default Dashboard;