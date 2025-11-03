import usePlants from '../hooks/usePlants';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import PlantCard from '../components/home/PlantCard';

const Plants = () => {
  const [plants, loading] = usePlants();

  if (loading) {
    return <LoadingSpinner />;
  }
  
  const allPlants = plants; 

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-serif text-center text-green-primary mb-12">
        Our Full Plant Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPlants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Plants;