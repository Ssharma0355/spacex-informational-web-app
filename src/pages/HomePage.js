import React, { useState, useEffect } from "react";

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
    <section className="showcase">
      <div className="overlay">
        <article>
          <h1 className="heading text-center capitalize">
            All the SpaceX data in One Place
          </h1>
        </article>
        <article>
          <ul>
              <li>
                {company.headquarters?.address}, 
              </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default HomePage;
