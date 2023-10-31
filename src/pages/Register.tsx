
export default function Register() {
  return (
    
    <div className=" mx-auto border rounded border-white w-max p-4 my-5 bg-primary ">
      <h1 className="font-bold text-3xl my-4 text-white text-center">Register</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center flex-col p-4">
          <h2 className="font-bold text-white">Username</h2>
          <label htmlFor="username" className="mb-2 flex flex-col">
            <input className="border border-white rounded h-8 w-48 mb-4 " type="text" name="username" />
          </label>
          <h2 className="font-bold text-white">Email</h2>
          <label htmlFor="email" className=" felx flex-col">
            <input className="border border-white rounded h-8 w-48" type="email" name="email" />
          </label>
        </div>
        <div className="flex justify-center items-center flex-col p-4">
          <h2 className="font-bold text-white">Password</h2>
          <label htmlFor="password" className="mb-2 flex flex-col">
            <input className="border border-white rounded h-8 w-48 mb-4 " type="password" name="password" />
          </label>
          <h2 className="font-bold text-white">Password</h2>
          <label htmlFor="password" className="mb-2 felx flex-col">
            <input className="border border-white rounded h-8 w-48 mb-4" type="password" name="password" />
          </label>
        </div>
      </div>
      <div className="flex flex-row justify-center">
      <input className="border border-white w-24 rounded mb-4 p-2 font-bold text-white hover:bg-white hover:text-primary cursor-pointer" value="Login" type="button"/>
      </div>
    </div>
  )
}

