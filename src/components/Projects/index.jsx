import projectone from "../../images/bitmoji.png"
import projecttwo from "../../images/regexpress.webp"
import projectthree from "../../images/SVGlogo.png"
import projectfour from "../../images/notetaker.png"
import projectfive from "../../images/refractor.png"
import projectsix from "../../images/Password_Generator.png"
import projectseven from "../../images/fitness+.png"
const projectsData = [
  {
    id: 1,
    title: 'Coding Canvas',
    description: 'Portfolio',
    imageUrl: projectone,
    githubLink: 'https://github.com/hexd9/coding-canvas'
  },
  {
    id: 2,
    title: 'Hex-Regexpress',
    description: 'Regex Tutorial',
    imageUrl: projecttwo,
    githubLink: 'https://github.com/hexd9/hex-regexpress'
  },
  {
    id: 3,
    title: 'Hex-Logo-Designer',
    description: 'SVG Logo Maker',
    imageUrl: projectthree,
    githubLink: 'https://github.com/hexd9/hex-logo-designer'
  },
  {
    id: 4,
    title: 'Business Notes',
    description: 'Note Taking Application',
    imageUrl: projectfour,
    githubLink: 'https://github.com/hexd9/Business-Notes'
  },
  {
    id: 5,
    title: 'Refractor',
    description: 'Code Refactor',
    imageUrl: projectfive,
    githubLink: 'https://github.com/hexd9/Module-Challenge-1'
  },
  {
    id: 6,
    title: 'Password Generator',
    description: 'Javascript Random Password Generator',
    imageUrl: projectsix,
    githubLink: 'https://github.com/hexd9/password-generator'
  },
  {
    id: 7,
    title: 'Project 3',
    description: 'Interactive MERN Stack Single-Page Application',
    imageUrl: projectseven,
    githubLink: 'https://github.com/hexd9/password-generator'
  },

];

export const Projects=() => {
    return (
      <div style={gridContainerStyle}>
      {projectsData.map((project) => (
        <div key={project.id} style={projectCardStyle}>
          <img src={project.imageUrl} alt={project.title} style={imageStyle} />
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        </div>
      ))}
    </div>
    )
  }

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px'
  };
  
  const projectCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px'
  };
  
  const imageStyle = {
    width: '100%',
    marginBottom: '10px'
  };