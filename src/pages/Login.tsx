export default function Login() {
  return (
    <div className="container mx-auto border rounded border-black w-96 p-4 my-5">
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-bold text-3xl my-4">Login Page</h1>
        <h2 className="font-bold">Email</h2>
        <label htmlFor="email" className="mb-2 flex flex-col">
           
          <input className="border border-black rounded h-8 w-48 mb-4" type="email" name="email" />
        </label>
        <h2 className="font-bold">Password</h2>
        <label htmlFor="password" className="mb-2 felx flex-col">
          
          <input className="border border-black rounded h-8 w-48 mb-4" type="password" name="password" />
        </label>
        <input className="border border-black w-24 rounded mb-4 p-2 font-bold" value="Login" type="button"/>
      </div>
    </div>
  )
}

