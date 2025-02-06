import { useState, useEffect } from "react";

/*Using API to fetch my repositories from my github to show my projects*/ 
const Projects = () => {
  const URL = "https://api.github.com/users/SaraJohlu/repos"; // My github repos
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Gick inte att hämta");
        }
        const result = await response.json(); // COnverting JSON file to Javascript
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Fel: ", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Mina projekt</h2>
      {data.map((repo) => (
        <article key={repo.id}>
        <a href={repo.html_url}>
          <h3>{repo.name}</h3></a>
        </article>
      ))}
    </>
  );
}

export default Projects;
