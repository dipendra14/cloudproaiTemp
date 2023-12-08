import React, { useEffect, useState } from "react";
import Link from "next/link";

const Index = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch("http://localhost:3000/api/services/cloudengineering/services")
      .then((response) => response.json())
      .then((parsed) => {
        setServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <div>
      <h2>Data Engineering Landing Page</h2>
      {services.map((service) => (
        <div key={service.slug}>
          <Link href={`/services/cloudengineering/${service.slug}`}>
            <h3>{service.title}</h3>
          </Link>

          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Index;
