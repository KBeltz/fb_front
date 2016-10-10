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
  this.route('new-template', { path: 'users/:user_id/new-template'})

  this.route('user', { path: 'users/:user_id' });
  this.route('user-forms');
  // template show
  this.route('template-show', { path: 'templates/:template_id' }, function() {
    this.route('send-template');
  });

  this.route('form', { path: 'completed-forms/:form_id' });
  this.route('user-forms-index', { path: 'user-forms/:user_id/forms'});
  // wildcard route
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
