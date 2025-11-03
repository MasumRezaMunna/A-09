import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import PasswordToggle from "../components/auth/PasswordToggle";
import SocialLogin from "../components/auth/SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile, setLoading, logOut } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Reset error
    setPasswordError("");

    // Password Validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        // Update profile
        updateUserProfile(name, photo)
          .then(() => {
            // Log out user immediately after profile update
            // This is a common pattern to ensure auth state is clean
            logOut()
              .then(() => {
                toast.success("Registration successful! Please log in.");
                navigate("/login");
              })
              .catch((err) => {
                toast.error(err.message);
                setLoading(false);
              });
          })
          .catch((err) => {
            toast.error(err.message);
            setLoading(false);
          });
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen bg-green-light">
      <div className="hero-content flex-col">
        <div className="text-center mb-6">
          <FaLeaf className="text-4xl text-green-primary inline-block" />
          <h1 className="text-4xl font-bold text-green-primary font-serif">
            Join GreenNest
          </h1>
          <p className="py-4 text-gray-text">
            Sign up to start your journey with us.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="http://example.com/photo.jpg"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                className={`input input-bordered ${
                  passwordError ? "input-error" : ""
                }`}
                required
              />
              <PasswordToggle
                showPassword={showPassword}
                togglePassword={() => setShowPassword(!showPassword)}
              />
            </div>

            {passwordError && (
              <p className="text-red-500 text-xs mt-2">{passwordError}</p>
            )}

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success bg-green-primary text-white"
              >
                Register
              </button>
            </div>
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="link link-hover text-green-primary font-semibold"
              >
                Log In
              </Link>
            </p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
