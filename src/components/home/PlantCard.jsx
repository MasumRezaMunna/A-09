import { Link } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";

const PlantCard = ({ plant }) => {
  const { plantId, plantName, image, price, rating } = plant;

  return (
    <div className="card w-full bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl overflow-hidden">
      <figure className="h-64">
        <img
          src={image}
          alt={plantName}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-serif text-2xl">{plantName}</h2>
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-lg">
            <FaDollarSign className="text-green-primary" />
            <span className="font-bold text-green-primary">{price}</span>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/plant/${plantId}`}
            className="btn btn-success bg-green-accent text-white w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
