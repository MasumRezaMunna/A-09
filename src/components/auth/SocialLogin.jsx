import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithGoogle, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Signed in with Google");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      <div className="divider">or</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-success w-full"
      >
        <FaGoogle /> Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
