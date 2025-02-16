import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingState } from "../components";

function SingleDragon() {
  const [singleDragon, setDragon] = useState({}); 
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleDragons = async () => {
      try {
        const res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`);
        const data = await res.json();
        setDragon(data);
      } catch (error) {
        console.log("Error is here", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleDragons();
  }, [id]);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <section className="py-32">
      <div className="max-width grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 max-w-4xl mx-auto px-5">
        <article>
          {singleDragon.flickr_images &&
          singleDragon.flickr_images.length > 0 ? (
            <img src={singleDragon.flickr_images[0]} alt={singleDragon.name} />
          ) : (
            <p>No Image Available</p>
          )}
        </article>
      </div>
    </section>
  );
}

export default SingleDragon;
