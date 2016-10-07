/**
 * Created by kristin.beltz on 10/6/16.
 */
import Ember from 'ember';

export default Ember.Helper.helper(function(indexNum){
  return indexNum[0] + 1;

});
