export default function Offer({ offer }) {
  return (
    <div className="offer-box offer-box1">
      <p className="offer-description">
        {offer.name}
        <br />
        {offer.isNew ? '(Nowość)' : ''}
      </p>
      <div className={offer.isNew ? 'ellipse' : 'ellipse-hidden'}></div>
    </div>
  );
}
