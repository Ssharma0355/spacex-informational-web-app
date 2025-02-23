import { useState } from "react";
// import video from "../assets/video.mp4";
import gifBackground from "../assets/bg-login.png";
import { SiSpacex } from "react-icons/si";

function AuthModal({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video> */}
      <img
        src={gifBackground}
        alt="Background Animation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative bg-gray-900 bg-opacity-40 p-8 rounded-lg shadow-lg text-white w-96 backdrop-blur-sm">
        <div className="flex items-center justify-start mb-4">
          <SiSpacex className="text-8xl text-white" />
          <h1 className="font-bold uppercase">Welcome to SpaceX</h1>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-bold"
          onClick={handleAuth}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
