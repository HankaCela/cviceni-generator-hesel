const WorkshopIntro = ({ title, description, intro }) => (
    <section className="intro">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{intro}</p>
    </section>
  );
  
  export default WorkshopIntro;