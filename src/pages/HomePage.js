import React, { useState, useEffect } from "react";
import { LoadingState } from "../components";

function HomePage() {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await fetch("https://api.spacexdata.com/v4/company");
        const data = await res.json();
        setCompany(data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    fetchCompany();
  }, []);

  return (
    <>
      {!company ? (
        <LoadingState />
      ) : (
        <section className="showcase text-white">
          <div className="overlay">
            <article>
              <h1 className="heading text-center capitalize">
                All the SpaceX data in One Place
              </h1>
            </article>
            <article>
              <h2>Headquarter</h2>
              <ul>
                <li>{company.headquarters?.address}</li>
                <li>{company.headquarters?.city}</li>
                <li>{company.headquarters?.state}</li>
              </ul>
            </article>
            <article>
              <h2>Headquarter</h2>
              <ul>
                <li>
                  <a href={company.links?.website}>Website</a>
                </li>
                <li>
                  <a href={company.links?.flickr}>flickr</a>
                </li>
                <li>
                  <a href={company.links?.twitter}>twitter</a>
                </li>
                <li>
                  <a href={company.links?.elon_twitter}>elon_twitter</a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      )}
    </>
  );
}

export default HomePage;
