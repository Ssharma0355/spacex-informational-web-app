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
              <artile key={id}>
                <h2>{serial}</h2>
                <ul>
                  <li> Reused {reuse_count} times</li>
                  <li>{launches.length} launches</li>
                  <li>{asds_landings} ASDS landings</li>
                  <li>{rtls_landings} RTLS Landings</li>
                  {status === "active" ? (
                    <li className="text-emerald-500">Active</li>
                  ) : (
                    <li className="text-rose-500">{status}</li>
                  )}
                </ul>
                <p>{last_update}</p>
              </artile>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Cores;
