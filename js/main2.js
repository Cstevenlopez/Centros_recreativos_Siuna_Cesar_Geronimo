const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');


const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});
/*codigo para los cometarios*/
$('.capa-data').hide();
$('.container-data').hide();
$('#loadPhoto').hide();

$('.container-data').css({
    
    bottom: '-450px'
    
});


$('.request').on('click', function(){
    
        $('.capa-data').fadeIn();

        $('.container-data').show();

        $('.container-data').animate({

            bottom: '0px'

        });
})

$('.capa-data').on('click', function(){
    
    $(this).fadeOut();
    
     $('.container-data').animate({

            bottom: '-450px'

        });
    
    
});


$('.perfil-photo').on('click', function(){
    $('#loadPhoto').click();
})



$(function() {
  $('#loadPhoto').change(function(e) {
      addImage(e); 
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;
    
      if (!file.type.match(imageType))
       return;
  
      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }
  
     function fileOnload(e) {
      var result=e.target.result;
      $('#photoSelect').attr("src",result);
     }
    });