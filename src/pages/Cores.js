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
          {cores.map(({ block, reuse_count }) => (
            <artile key={block}>
              <ul>
                <li>{reuse_count}</li>
                <li>Sample</li>
              </ul>
            </artile>
          ))}
        </div>
      </section>
    </>
  );
}

export default Cores;
