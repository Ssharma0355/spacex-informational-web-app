import { useState, useEffect } from "react";

function Cores() {
  const [cores, setCores] = useState([]);
  useEffect(() => {
    const fetchCores = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/cores");
      const data = await res.json();
      setCores(data);
    };
    fetchCores();
  });
  return (
    <>
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
              <artile key={id} className="articles">
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
              </artile>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Cores;
