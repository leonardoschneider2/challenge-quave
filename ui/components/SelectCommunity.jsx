import React, { useContext } from 'react';
import { Context } from '../../client/context/Context';

export const SelectCommunity = () => {
  const {
    communities,
    selectedCommunity,
    setCommunity,
  } = useContext(Context);
  return (
    <select
      value={selectedCommunity}
      onChange={({ target }) => setCommunity(target.value)}
    >
      <option value="">void</option>
      { communities.map((community) => (
        <option value={community._id} key={community._id}>
          { community.name }
        </option>
      )) }
    </select>
  );
};
