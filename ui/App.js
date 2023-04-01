import React, { useContext } from 'react';
import { Context } from '../client/context/Context';
// eslint-disable-next-line import/no-unresolved
import { SelectCommunity } from './components/SelectCommunity';
// eslint-disable-next-line import/no-unresolved
import { PeopleInCommunitie } from './components/PeopleInCommunitie';
import { Texts } from '../infra/constants';

export const App = () => {
  const {
    selectedCommunity,
  } = useContext(Context);
  return (
    <div>
      <h1>{Texts.HOME_TITLE}</h1>
      <SelectCommunity />
      { (selectedCommunity != '') && <PeopleInCommunitie/>}
    </div>
  );
};
