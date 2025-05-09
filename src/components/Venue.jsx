const Venue = ({ name, street, city, photo, instructions }) => (
    <section className="venue">
      <h2>Místo konání</h2>
      <h3>{name}</h3>
      <p>{street}, {city}</p>
      <p>{instructions}</p>
      <img src={photo} alt={name} width="300" />
    </section>
  );
  
  export default Venue;