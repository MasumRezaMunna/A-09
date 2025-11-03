import HeroSlider from "../components/home/HeroSlider";
import TopRatedPlants from "../components/home/TopRatedPlants";
import CareTips from "../components/home/CareTips";
import GreenExperts from "../components/home/GreenExperts";
import PlantOfTheWeek from "../components/home/PlantOfTheWeek";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <div className="container mx-auto px-4">
        <TopRatedPlants />
        <CareTips />
        <GreenExperts />
        <PlantOfTheWeek />
      </div>
    </div>
  );
};

export default Home;
