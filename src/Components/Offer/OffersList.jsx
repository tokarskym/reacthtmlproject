import Offer from './Offer';
import { offers } from '../../Data/OfferData';

export default function OffersList() {
  return (
    <div className="flex-row">
      {offers.map((offer) => (
        <Offer key={offer.id} offer={offer}></Offer>
      ))}
    </div>
  );
}
