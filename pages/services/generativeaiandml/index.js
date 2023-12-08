import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Index = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch('http://localhost:3000/api/services/generativeaiandml/services')
      .then((response) => response.json())
      .then((parsed) => {
        setServices(parsed);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });

  }, []);

  return (
    <div>
      <h2>Generative AI and ML Landing Page </h2>
      {services.map((service) => (
        <div key={service.slug}>
          <Link href={`/services/generativeaiandml/${service.slug}`}>
  <h3>{service.title}</h3>
</Link>








          
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Index;
