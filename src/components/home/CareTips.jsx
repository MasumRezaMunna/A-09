import { FaSun, FaWater, FaSeedling } from "react-icons/fa";

const tips = [
  {
    icon: <FaWater className="text-4xl text-blue-500" />,
    title: "Watering Wisely",
    desc: 'Most indoor plants prefer "deep" watering. Water thoroughly, then let the top 1-2 inches of soil dry out before watering again.',
  },
  {
    icon: <FaSun className="text-4xl text-yellow-500" />,
    title: "The Right Light",
    desc: 'Match your plant to your light. "Bright, indirect light" is a safe bet for many, but some (like ZZ plants) tolerate low light.',
  },
  {
    icon: <FaSeedling className="text-4xl text-green-600" />,
    title: "Fertilizing Facts",
    desc: "Feed your plants during their growing season (spring/summer). A balanced liquid fertilizer every 4-6 weeks is usually enough.",
  },
];

const CareTips = () => {
  return (
    <section className="py-16 bg-green-light rounded-lg">
      <h2 className="text-4xl font-serif text-center text-green-primary mb-12">
        Plant Care Essentials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">{tip.icon}</div>
            <h3 className="text-2xl font-serif text-green-primary mb-3">
              {tip.title}
            </h3>
            <p className="text-gray-text">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareTips;
