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
        <div className="max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto px-5">
          {dragons.map(({ id, name, flickr_images, description }) => (
            <Link key={id} to={`/dragons/${id}`}>
              {" "}
              <article className="relative background-color-black-700">
                <img
                  className="h-100 w-full object-cover"
                  src={flickr_images}
                  alt={name}
                  loading="lazy"
                />
                <h2 className="absolute bottom-5 left-5 font-bold text-white text-lg tracking-wide ">
                  {name}
                </h2>
                <p>{description}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Dragons;
