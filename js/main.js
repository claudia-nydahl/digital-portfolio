// menu functionality 

$('.menu-icon').click(function() {
	$('.drop-menu').fadeToggle();
})

// Show and hide differenet portfolio categories, change focus states on menu items

$('.all-btn').click(function() {
	$('.category-1').fadeIn();
	$('.category-2').fadeIn();
	$('.category-3').fadeIn();

	$('#selectors a').removeClass('selected');
	$('.all-btn').addClass('selected');
})

$('.category-1-btn').click(function() {
	$('.category-1').fadeIn();
	$('.category-2').hide();
	$('.category-3').hide();

	$('#selectors a').removeClass('selected');
	$('.category-1-btn').addClass('selected');
})

$('.category-2-btn').click(function() {
	$('.category-2').fadeIn();
	$('.category-1').hide();
	$('.category-3').hide();

	$('#selectors a').removeClass('selected');
	$('.category-2-btn').addClass('selected');
})

$('.category-3-btn').click(function() {
	$('.category-3').fadeIn();
	$('.category-2').hide();
	$('.category-1').hide();

	$('#selectors a').removeClass('selected');
	$('.category-3-btn').addClass('selected');
})

// Home page icon hover functions 

$('.skill-icon').on('mouseover', function(event){
	var element = $(event.target);
	var image_src = element.attr('src');

	element.attr('src', element.attr('data-hover-image'));
	element.attr('data-hover-image', image_src);
})

$('.skill-icon').on('mouseout', function(event){
	var element = $(event.target);
	var image_src = element.attr('src');

	element.attr('src', element.attr('data-hover-image'));
	element.attr('data-hover-image', image_src);
})

// Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (slides.length > 0) {
	  if (n > slides.length) {slideIndex = 1} 
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none"; 
	  }

	  slides[slideIndex-1].style.display = "block"; 
   }
}

