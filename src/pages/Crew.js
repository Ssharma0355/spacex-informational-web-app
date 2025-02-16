import { useState, useEffect } from "react";
import LoadingState from "../components/LoadingState";
import { Link } from "react-router-dom";

function Crew() {
  const [crew, setCrew] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchCrew = async () => {
      try {
        const res = await fetch("https://api.spacexdata.com/v4/crew");
        const data = await res.json();
        setCrew(data);
      } catch (error) {
        console.error("Error fetching crew data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchCrew();
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <section className="py-32">
      <h1 className="heading text-center mb-10"> Crew</h1>
      <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto px-5">
        {crew.map(({ id, name, image }) => (
          <Link key={id} to={`/crew/${id}`}>
            {" "}
            {/* Added key prop to Link */}
            <article className="relative">
              <img
                className="h-96 w-full object-cover"
                src={image}
                alt={name}
                loading="lazy"
              />
              <h2 className="absolute bottom-5 left-5 font-bold text-white text-lg tracking-wide ">
                {name}
              </h2>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Crew;
