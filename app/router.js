import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('fields');
  this.route('forms', { path: '/completed-forms' });
  this.route('submissions');
  this.route('templateFields');
  this.route('templates');

<<<<<<< HEAD
  // this.route('user', { path: 'users/:user_id' });
  this.route('page-not-found', { path: '/*wildcard' });
  this.route('user-forms');
  this.route('template-show', { path: 'templates/:template_id' });
  this.route('form', { path: 'completed-forms/:form_id' });
  this.route('new-template', {path: 'users/:user_id/new_template'});
=======
  this.route('user', { path: 'users/:user_id' });
  this.route('user-forms');
  this.route('template-show', { path: 'templates/:template_id' });
  this.route('form', { path: 'completed-forms/:form_id' });
  // wildcard route
  this.route('page-not-found', { path: '/*wildcard' });
>>>>>>> master
});

export default Router;
