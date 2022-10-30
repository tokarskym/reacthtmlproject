export default function Specialist({ specialist }) {
  return (
    <div className="specialist-box">
      <div className="specialist-photo" style={{ backgroundImage: `url(${specialist.photo})` }}></div>
      <div className="specialist-description">
        <h4 className="name-surname">
          {specialist.name} {specialist.department}
        </h4>
        <p className="about-specialist">{specialist.description}</p>
      </div>
    </div>
  );
}
