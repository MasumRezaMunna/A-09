import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaImage } from "react-icons/fa";

const MyProfile = () => {
  const { user, updateUserProfile, setLoading, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading Profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Please log in to view profile.
      </div>
    );
  }

  const [name, setName] = useState(user.displayName || "");
  const [photo, setPhoto] = useState(user.photoURL || "");

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    setLoading(true);
    updateUserProfile(name, photo)
      .then(() => {
        toast.success("Profile updated successfully!");
        setLoading(false);
        
        
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-2xl">
      <div className="bg-black shadow-xl rounded-lg p-6 md:p-10">
        <h1 className="text-4xl font-serif text-green-primary mb-8 text-center">
          My Profile
        </h1>

        {/* Profile Display */}
        <div className="flex flex-col items-center mb-8">
          <div className="avatar mb-4">
            <div className="w-32 rounded-full ring ring-green-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user.photoURL || "https://i.ibb.co/6Xb7N2c/default-avatar.png"
                }
                alt="User"
              />
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-gray-500">
            {user.displayName || "No Name Set"}
          </h2>
          <p className="text-gray-500 text-lg">{user.email}</p>
        </div>

        {/* Update Profile Form */}
        <div className="border-t pt-8">
          <h3 className="text-2xl font-serif text-green-primary mb-6">
            Update Your Information
          </h3>
          <form onSubmit={handleProfileUpdate}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full pl-10"
                  placeholder="Your Full Name"
                />
              </div>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <div className="relative">
                <FaImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="input input-bordered w-full pl-10"
                  placeholder="http://example.com/image.png"
                />
              </div>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Email (Read-only)
                </span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={user.email}
                  className="input input-bordered w-full pl-10 bg-gray-100"
                  readOnly
                  disabled
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success bg-green-primary text-white"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
