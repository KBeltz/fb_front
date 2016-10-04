import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('fields');
  this.route('forms');
  this.route('submissions');
  this.route('templateFields');
  this.route('templates');
  this.route('user', { path: 'users/:user_id' });
  this.route('page-not-found', { path: '/*wildcard' });
  this.route('user-forms');
});

export default Router;
