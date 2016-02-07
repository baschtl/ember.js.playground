import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    }
  }
});
