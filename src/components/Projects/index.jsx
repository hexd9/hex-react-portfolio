import projectone from "../../images/bitmoji.png"
const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: projectone,
    githubLink: 'https://github.com/username/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: 'path/to/image2.jpg',
    githubLink: 'https://github.com/username/project2'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3',
    imageUrl: 'path/to/image3.jpg',
    githubLink: 'https://github.com/username/project3'
  },
  // Add more projects as needed
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