import React, { useContext } from 'react';
import { Context } from '../../client/context/Context';
// eslint-disable-next-line import/no-unresolved
import { SinglePeople } from './SinglePeople';

export const PeopleInCommunitie = () => {
  const {
    selectedCommunity,
    peoples,
  } = useContext(Context);
  return (
    <ul className="App__Communities-People">
      {
        peoples
        .filter((people) => people.communityId === selectedCommunity)
        .map((people) => (
          <SinglePeople people={people}/>
        ))
      }
    </ul>
  );
};
