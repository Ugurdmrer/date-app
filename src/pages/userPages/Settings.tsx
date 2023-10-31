export default function Settings() {
  return (
    <div>
        <div className="flex">
            <div className="basis-2/4 flex justify-center ">
                <div className="flex flex-col">
                    <h2 className="font-bold mb-4">
                        Personal settings
                    </h2>
                    <div>
                        <h3 className="font-bold mb-3">
                            Profile picture
                        </h3>
                        <input className="border border-white rounded h-8 w-48 mb-4" type="file" name="profilePicture" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold mb-3">
                            Name
                        </h3>
                        <input className="border border-white rounded h-8 w-48 mb-4" type="text" name="name" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold mb-3">
                            Description
                        </h3>
                        <input className="border border-white rounded h-24 w-64 mb-4" type="text" name="description" />
                    </div>
                </div>
            </div>
            <div className="basis-2/4 flex justify-center ">
                <div className="flex flex-col">
                    <h2 className="font-bold mb-4">
                        Account settings
                    </h2>
                    <div className="flex flex-col">
                            <h3 className="font-bold mb-3">
                                Username
                            </h3>
                            <input className="border border-white rounded h-8 w-48 mb-4" type="text" name="username" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-bold mb-3">
                                Email
                            </h3>
                            <input className="border border-white rounded h-8 w-48 mb-4" type="email" name="email" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-bold mb-3">
                                Password
                            </h3>
                            <input className="border border-white rounded h-8 w-48 mb-4" type="password" name="password" />
                        </div>
                </div>
            </div>
            
        </div>
        <div className="flex justify-center">
            <input className="border border-white w-24 rounded mb-4 p-2 font-bold text-dark hover:bg-primary hover:text-white cursor-pointer" value="Save" type="button"/>
        </div>
    </div>
  )
}

