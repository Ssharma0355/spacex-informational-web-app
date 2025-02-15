import {useState,useEffect} from 'react'

function Capsules() {
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
      const fetchCapsules = async () => {
        const res = await fetch("https://api.spacexdata.com/v4/capsules");
        const data = await res.json();
        setCapsules(data);
      };
      fetchCapsules();
    }, [])
  return (
    <>
      <section>
        <h1 className="heading text-center mb-5"> Capsules</h1>
        <div>
          {capsules.map(
            ({
              id,
              type,
              status,
              serial,
              launches,
              last_update,
              land_landings,
              water_landings,
              reuse_count,
            }) => (
              <article key={id} className="articles">
                <h2>
                  {type},<span>{serial}</span>
                </h2>
                <ul>
                  <li>{launches.length} Launches</li>
                  <li>{land_landings} land landings </li>
                  <li>{water_landings} water landings</li>
                  <li>Reused {reuse_count} times</li>
                  {status === "active" ? (
                    <li className="text-emerald-500">Active</li>
                  ) : (
                    <li className="text-rose-500">Inactive</li>
                  )}
                </ul>
                <p>{last_update}</p>
              </article>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Capsules
