export const Resume=() => {
  const handleDownload = () => {
    const resumeUrl =  'https://drive.google.com/file/d/1yY7roH8Ob_NXjPzmPSnlBbnxM197mxuP/view?usp=sharing';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
            <section id="Resume" className="background">
        <h2 className="Section-Header">Resume</h2>
        
      </section>
      <button onClick={handleDownload}>
      Download Resume
    </button>
     
    </div>
  )
}
