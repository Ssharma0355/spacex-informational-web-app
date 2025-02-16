import { useState, useEffect } from "react";
import LoadingState from "../components/LoadingState"; // Ensure correct import

function Cores() {
  const [cores, setCores] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchCores = async () => {
      try {
        const res = await fetch("https://api.spacexdata.com/v4/cores");
        const data = await res.json();
        setCores(data);
      } catch (error) {
        console.error("Error fetching cores:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };
    fetchCores();
  }, []); // Dependency array added

  if (loading) {
    return <LoadingState />;
  }

  return (
    <section className="py-32">
      <h1 className="heading text-center mb-10">Cores</h1>
      <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto px-5">
        {cores.map(
          ({
            id,
            status,
            last_update,
            reuse_count,
            asds_landings,
            rtls_landings,
            serial,
            launches,
          }) => (
            <article key={id} className="articles">
              {" "}
              {/* Fixed <article> typo */}
              <h2 className="text-lg font-bold border-b-2 border-white mb-5 uppercase tracking-wider">
                {serial}
              </h2>
              <ul>
                <li className="mb-1"> Reused {reuse_count} times</li>
                <li className="mb-1">{launches.length} launches</li>
                <li className="mb-1">{asds_landings} ASDS landings</li>
                <li className="mb-1">{rtls_landings} RTLS Landings</li>
                {status === "active" ? (
                  <li className="text-emerald-500">Active</li>
                ) : (
                  <li className="text-rose-500 capitalize">{status}</li>
                )}
              </ul>
              <p className="mt-5 opacity-75">{last_update}</p>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Cores;
