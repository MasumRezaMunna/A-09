import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordToggle = ({ showPassword, togglePassword }) => {
  return (
    <button
      type="button"
      onClick={togglePassword}
      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  );
};

export default PasswordToggle;
