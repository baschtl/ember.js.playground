import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]/*, hash*/) {
  return communityPropertyTypes.contains(type) ? 'Community' : 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
