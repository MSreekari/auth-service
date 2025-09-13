const Register = () => {
  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="bg-[#000A26] rounded-lg p-10 w-[400px]">
        <form className="flex flex-col gap-6 text-white">
          <h1 className="text-center text-2xl font-bold mb-4 font-mont">
            Please fill your details
          </h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Firstname"
              className="flex-1 min-w-0 px-3 py-2 rounded-md text-white bg-transparent border border-gray-700"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="flex-1 min-w-0 px-3 py-2 rounded-md text-white bg-transparent border border-gray-700"
            />
          </div>
          <input
            type="email"
            placeholder="Enter email"
            className="px-3 py-2 rounded-md text-white bg-transparent border border-gray-700"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="px-3 py-2 rounded-md text-white bg-transparent border border-gray-700"
          />
          <input
            type="password"
            placeholder="Re-enter your password"
            className="px-3 py-2 rounded-md text-white bg-transparent border border-gray-700"
          />
          <button className="mt-4 bg-[#D4AF37] text-black px-8 py-2 rounded-full self-center transition cursor-pointer">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
