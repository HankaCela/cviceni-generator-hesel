const Instructor = ({ name, email, profession, bio, avatar }) => (
    <section className="instructor">
      <h2>Instruktor</h2>
      {avatar && <img src={avatar} alt={name} width="150" />}
      <h3>{name}</h3>
      <p><strong>{profession}</strong></p>
      <p>{bio}</p>
      <p>Kontakt: <a href={`mailto:${email}`}>{email}</a></p>
    </section>
  );
  
  export default Instructor;