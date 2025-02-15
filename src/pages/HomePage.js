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
            <div className="grid grid-cols gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <article>
                <h2>About</h2>
                <ul className="text-sm opacity-75">
                  <li>{company.name} was founded by</li>
                  <li>{company.founder}in the year</li>
                  <li>{company.founded}.</li>
                  <li>It has {company.employees} employees,</li>
                  <li>{company.vehicles} vehicles,</li>
                  <li>{company.launch_sites} launch sites</li>
                  <li> and {company.test_sites} test sites and </li>
                  <li>is valued at {company.valuation.toLocaleString()} B</li>
                </ul>
              </article>
              <article>
                <h2>Headquarter</h2>
                <ul className="text-sm opacity-75">
                  <li>{company.headquarters?.address}</li>
                  <li>{company.headquarters?.city}</li>
                  <li>{company.headquarters?.state}</li>
                </ul>
              </article>
              <article>
                <h2>Useful Links</h2>
                <ul className="text-sm opacity-75">
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
            <p>{company.summary}</p>
             </article>
          </div>
        </section>
      )}
    </>
  );
}

export default HomePage;
