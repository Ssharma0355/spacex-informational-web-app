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
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mt-10 lg:gap-20 px-5">
                {/* About Section */}
                <article>
                  <h2 className="font-bold border-b-2 border-white text-xl mb-3 uppercase tracking-wider">
                    About
                  </h2>
                  <ul className="text-sm opacity-75">
                    <li className="mb-1">
                      {company.name} was founded by {company.founder} in the
                      year {company.founded}.
                    </li>
                    <li className="mb-1">
                      It has {company.employees} employees,
                    </li>
                    <li className="mb-1">{company.vehicles} vehicles,</li>
                    <li className="mb-1">
                      {company.launch_sites} launch sites,
                    </li>
                    <li className="mb-1">
                      {company.test_sites} test sites, and
                    </li>
                    <li className="mb-1">
                      is valued at $
                      {company.valuation?.toLocaleString() || "N/A"} B.
                    </li>
                  </ul>
                </article>

                {/* Headquarter Section */}
                <article>
                  <h2 className="font-bold border-b-2 border-white text-xl mb-3 uppercase tracking-wider">
                    Headquarter
                  </h2>
                  <ul className="text-sm opacity-75">
                    <li className="mb-1">
                      {company.headquarters?.address || "N/A"}
                    </li>
                    <li className="mb-1">
                      {company.headquarters?.city || "N/A"}
                    </li>
                    <li className="mb-1">
                      {company.headquarters?.state || "N/A"}
                    </li>
                  </ul>
                </article>

                {/* Useful Links Section */}
                <article>
                  <h2 className="font-bold border-b-2 border-white text-xl mb-3 uppercase tracking-wider">
                    Useful Links
                  </h2>
                  <ul className="text-sm opacity-75">
                    <li className="mb-1">
                      <a
                        href={company.links?.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href={company.links?.flickr}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Flickr
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href={company.links?.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href={company.links?.elon_twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Elon’s Twitter
                      </a>
                    </li>
                  </ul>
                </article>
              </div>

              {/* Summary */}
              <p className="max-w-3xl mx-auto text-center mt-10">
                {company.summary}
              </p>
            </article>
          </div>
        </section>
      )}
    </>
  );
}

export default HomePage;
