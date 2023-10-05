import { Routes, Route,Navigate} from 'react-router-dom'
import ErrorPage from "./errorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const loggedIn = true;
  return (
    <>
        <Routes>
          <Route path="/login" element={ loggedIn ? (<Login />): (<Navigate replace to={"/"}/>)}/>
          <Route path="/register" element={ loggedIn ? (<Register />): (<Navigate replace to={"/"}/>)}/>
          <Route path="/" element={ loggedIn ? (<Home />): (<Navigate replace to={"/login"}/>)} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  )
}

export default App
