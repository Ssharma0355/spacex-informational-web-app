import {useEffect, useState} from "react";
import { LoadingState } from "../components";
import { Link } from "react-router-dom";

function Dragons() {
    const [dragons, setDragons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchDragons = async ()=>{
            try{
                  const res = await fetch("https://api.spacexdata.com/v4/dragons");
            const data = await res.json();
            setDragons(data);

            }
            catch(error){
                console.log("Error fetching crew data:", error);
            }
            finally{
                setLoading(false);
            }
        };
        fetchDragons();
    },[]);

    if(loading){
        return <LoadingState />
    }
  return (
    <>
      <section className="py-32">
        <h1 className="heading text-center mb-10">Dragons</h1>

        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 px-5">
          {dragons.map(({ id, name, flickr_images, description }) => (
            <Link to={`/dragons/${id}`} key={id}>
              <article>
                <img
                  src={flickr_images[0]}
                  alt={name}
                  className="h-96 object-cover"
                />
                <div className="bg-zinc-900 p-5">
                  <h2 className="text-white text-lg mb-3 font-bold tracking-wide">
                    {name}
                  </h2>
                  <p className="text-white opacity-75 mb-8">{`${description.substring(
                    0,
                    200
                  )}...`}</p>
                  <Link to={`/dragons/${id}`} className="btn">
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Dragons;
