$(document).ready(function() {


});


var isCtrl = false;

$(document).keyup(function (e) {
 
	if(e.which == 17) isCtrl=false;
});

$(document).keydown(function (e) {
 
	if(e.which == 17) isCtrl=true;
	if(e.which == 69 && isCtrl == true) {
 		
 		$('textarea').val('');
 		$('div').hide();
 		$('form').show();
		$('textarea').focus();

		return false;
	}
});


$('textarea').keyup(function (e) {
 
	if(e.which == 17) isCtrl=false;
});


$('textarea').keydown(function (e) {
 
	if(e.which == 17) isCtrl=true;
	if(e.which == 83 && isCtrl == true) {
 		
 		$('div').html( $('textarea').val() );
 		$('form').hide();
 		$('div').show();

		return false;
	}

	if (e.which == 27) {

		$('form').hide();
 		$('div').show();
	}
 		
});