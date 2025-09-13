import { Link } from "react-router-dom";
import authimage from "/src/assets/images/auth-image.svg";

const Home = () => {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center w-full">
        <h1 className="font-lemonmilk text-3xl">Auth-System</h1>
        <div className="flex flex-row gap-10">
          <Link to={"/register"}>
            <button className="px-8 py-3 cursor-pointer bg-[#000A26] text-white rounded-full border border-transparent hover:bg-white hover:border-2 hover:border-black hover:text-black">
              Sign-Up
            </button>
          </Link>
          <Link to={"/login"}>
            <button className="px-8 py-3 cursor-pointer text-black rounded-full border-2 border-black hover:bg-[#000A26] hover:text-white">
              Login
            </button>
          </Link>
        </div>
      </nav>
      <div className="flex flex-col items-center">
        <div className="w-52 mx-auto">
          <img src={authimage} alt="authimage" className="align-top" />
        </div>
        <div className="text-center mt-4">
          <h1 className="font-mont text-3xl">Welcome to Our Page</h1>
          <h2 className="mt-4 text-2xl">
            This demonstrates the authentication setup that is simple, secure,
            and hassle-free for your applications.
          </h2>
          <button className="mt-8 bg-[#D4AF37] px-8 py-2 rounded-full cursor-pointer text-black">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
