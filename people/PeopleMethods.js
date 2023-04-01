import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { People } from './people';

Meteor.methods({
  'people.update-checkin'(peopleId) {
    check(peopleId, String);
    People.update(
      { _id: peopleId }, // filter
      {
        $set: { checkInDate: Date.now() },
      } // changes
    );
  },
  'people.update-checkout'(peopleId) {
    check(peopleId, String);
    People.update(
      { _id: peopleId }, // filter
      {
        $set: { checkOutDate: Date.now() },
      } // changes
    );
  },
});
