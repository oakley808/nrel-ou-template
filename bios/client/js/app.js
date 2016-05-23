/*
 *  moakley
 *  Set site-level variables (required)
 */
 'use strict'

$(document).ready( function(){
  window.nrel = $.extend({}, window.nrel)
  window.nrel.pagevars = $.extend({}, window.nrel.pagevars)
  window.nrel.pagevars.sitename = 'Research'
  window.nrel.pagevars.topnav   = 'research'
})


/**
 *  initialize plugins
 */
$(document).ready( function(){

  $('#research-select').multiselect({
			nonSelectedText: 'Select research area',
      enableHTML: false,
      numberDisplayed: 1
	})

})
