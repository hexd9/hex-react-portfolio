export const Footer=() => { 
  const githubLink = 'https://github.com/hexd9'; 
  const linkedinLink = 'https://www.linkedin.com/in/hector-d-b23689167/'; 
  const emailLink = 'mailto:hectorjr_805@yahoo.com'; 
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