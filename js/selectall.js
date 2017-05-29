Drupal.behaviors.selectAllTest = {
  attach: function (context, settings) {
    jQuery('.form-type-select').click(function(e) {
    	var select  = jQuery(this).find('select'),
          options = select.find('option'),
          chosen  = jQuery(this).find('.chosen-container');

        if (select.attr('multiple')) {
        	if(e.target.className === 'selec-all'){
	        	// .prop('selected', true) not supported
	        	for (var i=0; i<options.length; i++) {
	        		options[i].selected = options[i].value === '_none' ? false : true;
              chosen.length && select.trigger('chosen:updated');
			    }
	        } else if(e.target.className === 'unselec-all') {
	        	for (var i=0; i<options.length; i++) {
			    	options[i].selected = false;
            chosen.length && select.trigger('chosen:updated');
			    }
	        }
	        e.preventDefault()
        }
    });
  }
};
