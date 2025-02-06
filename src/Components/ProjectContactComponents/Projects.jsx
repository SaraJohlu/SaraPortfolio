import { useState, useEffect } from "react";
import '../style.css'
import '../../mediaQ.css'

// Fetch my gh repos for showing projects with API 
const Projects = () => {
  const URL = "https://api.github.com/users/SaraJohlu/repos";  // My gh repos URL
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Gick inte att hämta");
        }
        const result = await response.json(); // Make JSON file too javascript. Using this code make the possible to convert too JS and use it in JS file.
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
      <h2 className="project-h2">My Projects</h2>
      <p>Projects fetched from my github</p>
      {data.map((repo) => (
        <article className="repo-contianer" key={repo.id}>
        <a className="repo-link" href={repo.html_url}>
          <h3 className="repo-name">{repo.name}</h3></a>
        </article>
      ))}
    </>
  );
}

export default Projects;
