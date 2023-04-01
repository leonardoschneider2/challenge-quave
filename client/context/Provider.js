/* eslint-disable no-console */
import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Communities } from '../../communities/communities';
import { People } from '../../people/people';
import { Context } from './Context';

export const Provider = ({ children }) => {
  // calling db
  const communities = useTracker(() => Communities.find().fetch());
  const peoples = useTracker(() => People.find().fetch());
  // end: calling db

  // setting states to provide app
  const [selectedCommunity, setCommunity] = useState(''); // controled by select in home page

  // debugging provided values
  console.log('peoples: ', peoples);
  console.log('communities: ', communities);
  console.log('selectedCommunitie: ', selectedCommunity);
  // end: debugging provided values

  const myContext = {
    communities,
    peoples,
    selectedCommunity,
    setCommunity,
  };

  return (
    <Context.Provider value={myContext}>
      { children }
    </Context.Provider>
  );
};
