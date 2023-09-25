export const Resume=() => {
  const handleDownload = () => {
    const resumeUrl =  'https://docs.google.com/document/d/1MyUAO04VwNDOQ8RnXyg8_ivjciR_9MYq0lHMFbyzuuM/edit';
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
