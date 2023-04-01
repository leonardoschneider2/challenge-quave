import React from 'react';

export function SinglePeople({ people }) {
  return (
    <li key={people._id} className="App__people">
      <span className="App__people__fullname">
        {`${people.firstName} ${people.lastName}`}
      </span>
      <span className="App__people__company-name">
        { people.companyName}
      </span>
      <span className="App__people__title">
        { people.title ? people.title : 'No title' }
      </span>
      <span className="App__people__check-in-date">
        { people.checkInDate ? people.checkInDate : 'Not have check in date' }
      </span>
      <span className="App__people__check-out-date">
        { people.checkOutDate ? people.checkOutDate : 'Not have check in date' }
      </span>
    </li>
  );
}
