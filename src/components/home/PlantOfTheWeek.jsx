import { Link } from "react-router-dom";

const PlantOfTheWeek = () => {
  return (
    <section className="py-16">
      <div className="hero min-h-[400px] bg-green-light rounded-lg shadow-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/1pxyFXg/monstera.png"
            className="max-w-sm rounded-lg shadow-2xl w-full lg:w-1/2"
            alt="Plant of the week"
          />
          <div className="lg:w-1/2 lg:pr-10">
            <h3 className="text-xl font-semibold text-green-accent">
              Plant of the Week
            </h3>
            <h1 className="text-5xl font-bold font-serif text-green-primary">
              Monstera Deliciosa
            </h1>
            <p className="py-6 text-gray-text">
              Famous for its iconic split leaves, the Monstera brings a bold,
              tropical feel to any room. It's relatively easy to care for and a
              fast grower.
            </p>
            <Link
              to="/plant/2"
              className="btn btn-success bg-green-primary text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
