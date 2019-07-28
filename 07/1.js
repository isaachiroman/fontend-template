 $(function(){

 	// init Isotope
	// var $grid = $('.grid').isotope({
	  // options...
	// }); 

	$hieuung = $('.noidung').isotope({
	  // options
	  itemSelector: '.khoianh',
	  layoutMode: 'masonry'
	});

	// layout Isotope after each image loads
	$hieuung.imagesLoaded().progress( function() {
	  $hieuung.isotope('layout');
	});

	//xu ly cac nut loc noi dung
	$('.danhmuc a').click(function(event) {
		/* Act on the event */
		// xu ly chuyen mau
		$('.danhmuc a').removeClass('duocchon');//cho phep chi chon duoc mot cai khi minh tich sang cho khac
		$(this).addClass('duocchon');//tai vi tri click bat ky thi them class duoc chon
		// het xu ly chuyen mau

		//xu ly loc
		tendanhmuc = $(this).attr('href'); // moi lan click thi se chon duoc href cua thang do
			// console.log(tendanhmuc);
		$hieuung.isotope({ filter: tendanhmuc });
		//het xu ly loc

		return false; //khi click vao the <a> thi no dung yen tai do luon
	});
})  
 