import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { FaStar, FaDollarSign, FaBoxes, FaSeedling } from "react-icons/fa";

const PlantDetails = () => {
  const { plantId } = useParams();
  const { user } = useAuth();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form state, pre-filled with user data
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPlant = data.find((p) => p.plantId == plantId);
        setPlant(foundPlant);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [plantId]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    console.log("Booking for:", {
      plant: plant.plantName,
      userName: name,
      userEmail: email,
    });

    toast.success(`Consultation booked for ${plant.plantName}!`);
    // Clear form
    setName(user?.displayName || "");
    setEmail(user?.email || "");
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!plant) {
    return (
      <div className="text-center text-red-500 p-10">Plant not found.</div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Plant Info Column */}
        <div className="lg:col-span-2">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-serif text-green-primary mt-6 mb-3">
            {plant.plantName}
          </h1>
          <p className="text-lg text-gray-text mb-6">{plant.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-green-light p-4 rounded-lg text-center shadow">
              <FaStar className="text-yellow-500 text-2xl mx-auto mb-2" />
              <span className="font-bold">{plant.rating}</span>
              <span className="text-sm block">Rating</span>
            </div>
            <div className="bg-green-light p-4 rounded-lg text-center shadow">
              <FaDollarSign className="text-green-primary text-2xl mx-auto mb-2" />
              <span className="font-bold">${plant.price}</span>
              <span className="text-sm block">Price</span>
            </div>
            <div className="bg-green-light p-4 rounded-lg text-center shadow">
              <FaBoxes className="text-green-accent text-2xl mx-auto mb-2" />
              <span className="font-bold">{plant.availableStock}</span>
              <span className="text-sm block">In Stock</span>
            </div>
            <div className="bg-green-light p-4 rounded-lg text-center shadow">
              <FaSeedling className="text-green-700 text-2xl mx-auto mb-2" />
              <span className="font-bold">{plant.careLevel}</span>
              <span className="text-sm block">Care Level</span>
            </div>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif text-green-primary mb-2">
              Provider
            </h3>
            <p className="text-gray-text">
              This plant is provided by:{" "}
              <span className="font-semibold">{plant.providerName}</span>
            </p>
          </div>
        </div>

        {/* Booking Form Column */}
        <div className="lg:col-span-1">
          <div className="bg-green-light p-6 rounded-lg shadow-lg sticky top-24">
            <h2 className="text-3xl font-serif text-green-primary mb-6 text-center">
              Book a Consultation
            </h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-success bg-green-primary text-white w-full"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
