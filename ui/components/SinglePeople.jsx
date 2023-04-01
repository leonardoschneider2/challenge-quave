import React from 'react';
import { Meteor } from 'meteor/meteor';

export function SinglePeople({ people }) {
  const {
    _id,
    firstName,
    lastName,
    companyName,
    title,
    checkInDate,
    checkOutDate,
  } = people;

  const checkIn = () => {
    Meteor.call('people.update-checkin', _id);
  };

  const checkOut = () => {
    Meteor.call('people.update-checkout', _id);
  };

  const pad2 = (number) => (number < 10 ? '0' : '') + number;

  const getDateFormat = (date) => {
    const DATE = new Date(date);

    const YYYY = DATE.getFullYear();
    const MM = pad2(DATE.getMonth());
    const DD = pad2(DATE.getDay());

    const HH = pad2(DATE.getHours());
    const mm = pad2(DATE.getMinutes());

    return `${MM}/${DD}/${YYYY}, ${HH}:${mm}`;
  };

  return (
    <li key={_id} className="App__people">
      <span className="App__people__field">
      <span className="App__people__field-name">Full Name: </span>
        <span className="App__people__field-content">
          {`${firstName} ${lastName}`}
        </span>
      </span>
      <span className="App__people__field">
        <span className="App__people__field-name">Company Name: </span>
        <span className="App__people__field-content">
          { companyName ? `${companyName}` : '#OpenToWork'}
        </span>
      </span>
      <span className="App__people__field">
        <span className="App__people__field-name">Title in Company: </span>
        <span className="App__people__field-content">
          { title ? `${title}` : 'No title' }
        </span>
      </span>
      <span className="App__people__field">
        <span className="App__people__field-name">Check In Date: </span>
        <span className="App__people__field-content">
          { checkInDate ? `${getDateFormat(checkInDate)}` : 'Not have check in date' }
        </span>
      </span>
      <span className="App__people__field">
        <span className="App__people__field-name">Check Out Date: </span>
        <span className="App__people__field-content">
          { checkOutDate ? `${getDateFormat(checkOutDate)}` : 'Not have check in date' }
        </span>
      </span>

      <div className="App__people__button-place">
        { !checkInDate && (
          <button
            className="App__people__check-in-button"
            onClick={() => checkIn()}
          >
            {`Check In ${firstName} ${lastName}`}
          </button>
        ) }
        { (checkInDate && !checkOutDate) && (
          <button
            className="App__people__check-out-button"
            onClick={() => checkOut()}
          >
            {`Check Out ${firstName} ${lastName}`}
          </button>
        ) }
        { (checkInDate && checkOutDate) && (
          <span className="App__people__checked">
            This people just check-out event
          </span>
        ) }
      </div>
    </li>
  );
}
