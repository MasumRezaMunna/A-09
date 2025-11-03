const experts = [
  {
    name: "Dr. Elena Moss",
    specialization: "Plant Pathology",
    image: "https://i.ibb.co.com/fYcVr7fH/elena.png",
  },
  {
    name: "Samuel Green",
    specialization: "Indoor Landscaping",
    image: "https://i.ibb.co.com/GfJb3nSD/samuel.png",
  },
  {
    name: "Aisha Fern",
    specialization: "Rare & Tropicals",
    image: "https://i.ibb.co.com/yFcxJnJj/Aisha.png",
  },
];

const GreenExperts = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-serif text-center text-green-primary mb-12">
        Meet Our Green Experts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <div key={expert.name} className="card bg-base-100 shadow-xl">
            <figure className="h-80">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-2xl font-serif">{expert.name}</h3>
              <p className="text-green-accent font-semibold">
                {expert.specialization}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreenExperts;
