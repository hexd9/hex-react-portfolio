export const Footer=() => { 
  const githubLink = 'https://github.com/your-username'; // Replace with your GitHub profile link
  const linkedinLink = 'https://www.linkedin.com/in/your-profile'; // Replace with your LinkedIn profile link
  const emailLink = 'mailto:your.email@example.com'; // Replace with your email
  return (
    <footer style={footerStyle}>
      <div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <div>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <div>
        <a href={emailLink}>
          Email
        </a>
      </div>
    </footer>
  )
}
const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
  backgroundColor: '#6911C6',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  gap: '1rem',
};