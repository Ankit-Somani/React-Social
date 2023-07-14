import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Detail from "./pages/detail/Detail";
import { Route,Routes} from "react-router";
import { BrowserRouter, Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";

function App() {

    const {user} = useContext(AuthContext)
    axios.defaults.baseURL = "http://localhost:8800/api";
    return(
        <BrowserRouter>
            <Routes>
            <Route exact path="/"  element={user ? <Home /> : <Login/>} />
            <Route exact path="/profile/:username" element={<Profile />} />
            <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register/>} />
            <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
            <Route exact path="/detail" element={user ? <Detail /> : <Navigate to="/" />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;