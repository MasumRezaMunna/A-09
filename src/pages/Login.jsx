import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import PasswordToggle from "../components/auth/PasswordToggle";
import SocialLogin from "../components/auth/SocialLogin";

const Login = () => {
  const { signIn, resetPassword, setLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signIn(email, password)
      .then((result) => {
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError("Invalid email or password.");
        toast.error("Invalid email or password.");
        setLoading(false);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen bg-green-light">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-10">
          <h1 className="text-5xl font-bold text-green-primary">
            Welcome Back!
          </h1>
          <p className="py-6 text-gray-text">
            Log in to manage your plant family, book consultations, and continue
            growing your indoor garden with GreenNest.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="text-center mb-4">
              <FaLeaf className="text-4xl text-green-primary inline-block" />
              <h2 className="text-3xl font-serif">Login</h2>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <PasswordToggle
                showPassword={showPassword}
                togglePassword={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className="form-control mt-2">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="label-text-alt link link-hover text-green-accent"
              >
                Forgot password?
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success bg-green-primary text-white"
              >
                Login
              </button>
            </div>
            <p className="text-center mt-4 text-sm">
              New to GreenNest?{" "}
              <Link
                to="/register"
                className="link link-hover text-green-primary font-semibold"
              >
                Sign Up
              </Link>
            </p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
