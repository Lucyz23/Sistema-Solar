import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetas">
          {planets.map((ty, index) => (<PlanetCard
            key={ index }
            planetName={ ty.name }
            planetImage={ ty.image }
          />))}
        </div>
      </div>
    );
  }
}
export default SolarSystem;
