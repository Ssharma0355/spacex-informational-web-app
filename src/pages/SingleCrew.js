import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingState } from "../components";

function SingleCrew() {
  const [singleCrew, setSingleCrew] = useState({});
  const [loading, setLoading] = useState(true); 
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleCrew = async () => {
      try {
        const res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`);
        const data = await res.json();
        setSingleCrew(data);
      } catch (error) {
        console.error("Error fetching crew data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleCrew();
  }, [id]);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <section className="py-32">
      <div className="max-width grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 max-w-4xl mx-auto px-5">
        <article>
          <img src={singleCrew.image} alt={singleCrew.name} />
        </article>
        <article>
          <h1 className="heading mb-10">{singleCrew.name}</h1>
          <h2 className="font-bold text-white mb-5 text-lg">Details</h2>
          <ul className="text-white opacity-75 text-sm">
            <li className="mb-2 ">Currently at {singleCrew.agency}</li>
            <li className="mb-2 ">{singleCrew.launches?.length} Launches</li>
            {singleCrew.status === "active" ? (
              <li className="text-emerald-500 ">Status: Active</li>
            ) : (
              <li className="text-rose-500 ">Status: {singleCrew.status}</li>
            )}
          </ul>
          <ul className="flex items-center justify-start mb-5 mt-5 space-x-4">
            <li>
              <a
                href={singleCrew.wikipedia}
                target="_blank"
                rel="noreferrer"
                className="btn mt-10"
              >
                Wikipedia
              </a>
            </li>
            <li className="text-white opacity-75 text-sm hover:opacity-100">
              <Link to="/crew">&larr; Back</Link>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default SingleCrew;
