import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="container mx-auto border rounded border-white w-96 p-4 my-5 bg-primary ">
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-bold text-3xl my-4 text-white">Login</h1>
        <h2 className="font-bold text-white">Email</h2>
        <label htmlFor="email" className="mb-2 flex flex-col">
          <input className="border border-white rounded h-8 w-48 mb-4 " type="email" name="email" />
        </label>
        <h2 className="font-bold text-white">Password</h2>
        <label htmlFor="password" className="mb-2 felx flex-col">
          <input className="border border-white rounded h-8 w-48 mb-4" type="password" name="password" />
        </label>
        <input className="border border-white w-24 rounded mb-4 p-2 font-bold text-white" value="Login" type="button"/>
      </div>
      <h2 className="text-white font-bold "><NavLink to="/register">Sing up</NavLink></h2>
    </div>
  )
}