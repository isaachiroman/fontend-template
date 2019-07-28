 $(function(){

 	$hieuung = $('.noidung').isotope({
  	// options
	  itemSelector: '.khoianh',
	  layoutMode: 'masonry'
	});

 	// layout Isotope after each image loads
	$hieuung.imagesLoaded().progress( function() {
	  $hieuung.isotope('layout');
	});

	$('.danhmuc a').click(function(event) {
		/* Act on the event */
		$('.danhmuc a').removeClass('duocchon');
		$(this).addClass('duocchon');

		tendanhmuc = $(this).attr('href');
		$hieuung.isotope({ filter: tendanhmuc });
		return false;
	});

 })