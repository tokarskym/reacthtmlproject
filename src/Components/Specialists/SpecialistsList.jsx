import Specialist from './Specialist';
import { specialists } from '../../Data/SpecialistsData';

export default function SpecialistsList() {
  return (
    <>
      {specialists.map((specialist) => (
        <Specialist key={specialist.id} specialist={specialist}></Specialist>
      ))}
    </>
  );
}
