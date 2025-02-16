import {useState, useEffect} from 'react'
import { LoadingState } from '../components';
import { Link } from 'react-router-dom';

function Crew() {
const [crew, setCrew] = useState([]);

useEffect(() => {
    const fetchCrew = async()=>{
        const res = await fetch("https://api.spacexdata.com/v4/crew");
        const data = await res.json();
        setCrew(data);
    }
fetchCrew();
},[])

  return (
    <>
      {!crew ? (
        <LoadingState />
      ) : (
        <section className="py-32">
          <h1 className="heading text-center mb-10"> Crew</h1>
          <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto px-5">
            {crew.map(({ id, name, image }) => (
              <Link to={`/crew/${id}`}>
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
      )}
    </>
  );
}

export default Crew
