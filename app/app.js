import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  rootElement: '#main_container'
});

// Global error handlers written by Chris Foral on 10-12-16
// Global error handler in Ember Run Loop
Ember.onerror = function (error) {
  console.log('Ember.onerror handler', error);
};

// Global error handler for promises
Ember.RSVP.on('error', function (error) {
  console.log('Ember.RSVP error handler', error);
});

// Global error handler that prints the arguments to the console with an error icon, red text and a stack trace
Ember.Logger.error = function (message, cause, stack) {
  console.log('Ember.Logger.error handler', message, cause, stack);
};

loadInitializers(App, config.modulePrefix);

export default App;
