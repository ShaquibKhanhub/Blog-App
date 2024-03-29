import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to={"/"}>Blog Market</Link>
        </h1>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] ">
          <h1 className="text-xl font-bold text-left  ">Create an account</h1>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 outline-0 rounded-md"
            placeholder="Enter your username"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border-2 outline-0 rounded-md"
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="w-full px-4 py-2 border-2 outline-0 rounded-md"
            placeholder="Password your password"
          />
          <button className="w-full px-4 py-2 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-400 hover:text-black transition-all delay-150 ">
            Register
          </button>
          <div className="flex justify-center items-center space-x-3 ">
            <p> Already a user?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
