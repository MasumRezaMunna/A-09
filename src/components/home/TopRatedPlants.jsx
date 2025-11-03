import usePlants from "../../hooks/usePlants";
import PlantCard from "./PlantCard";
import LoadingSpinner from "../shared/LoadingSpinner";

const TopRatedPlants = () => {
  const [plants, loading] = usePlants();

  // Get top 6 rated plants
  const topPlants = [...plants].sort((a, b) => b.rating - a.rating).slice(0, 6);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-16">
      <h2 className="text-4xl font-serif text-center text-green-primary mb-12">
        Top Rated Indoor Plants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topPlants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </section>
  );
};

export default TopRatedPlants;
