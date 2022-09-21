import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    <div data-testid="missions" />;
    return (
      <div data-test-id="missions">
        <Title headline="Missões" />
        {
          missions.map((my, index) => (<MissionCard
            key={ index }
            name={ my.name }
            year={ my.year }
            country={ my.country }
            destination={ my.destination }
          />))
        }
      </div>
    );
  }
}
export default Missions;
