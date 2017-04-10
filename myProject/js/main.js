
window.onload = function () {

// slider	

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var playing = true;

function pauseSlideshow(){
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}


var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
    setTimeout(function(){
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
	},5000);
};
previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
    setTimeout(function(){
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
	},5000);  
};





document.onmouseover = function(event) {
	if (!event.target.hasAttribute('data-scale')) return;
	var zoom = event.target;
    zoom.classList.add("scale");
    };


document.onmouseout = function(event) {
	if (!event.target.hasAttribute('data-scale')) return;
	var deZoom = event.target;
      deZoom.classList.remove("scale");
    };

/*-------filtr-------*/

function filtr() {
var tabs = document.getElementsByClassName("no-padding");
var nav = document.getElementById("filtr").getElementsByTagName("a");
    for (var i = 0; i < nav.length; i++) {
        nav[i].onclick = function () {
	for (var i = 0; i < nav.length; i++) {
		nav[i].classList.remove("active")
}
this.classList.add("active");
 nava = this.getAttribute("data-filtre");
}
}
}
filtr();

$(function(){
  $('#all').click(function(){
    $('.img-responsive').fadeIn();
    return false;
  });
  
  $('#graphic-design').click(function(){
    $('.img-responsive').show();
    $('.img-responsive').not('.graphic-design').fadeOut();
    return false;
  });
  
  $('#illustration').click(function(){
    $('.img-responsive').show();
    $('.img-responsive').not('.illustration').fadeOut();
    return false;
  });
  
  $('#phtography').click(function(){
    $('.img-responsive').show();
    $('.img-responsive').not('.phtography').fadeOut();
    return false;
  });
  $('#web-design').click(function(){
    $('.img-responsive').show();
    $('.img-responsive').not('.web-design').fadeOut();
    return false;
  });
});

/*----contact--*/

 $('.up').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });
 $('#hom').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });

 $('#to-clients').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });

 $('#to-about').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });

 $('#to-contact').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });

 $('#ser').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });

  $('#to-work').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });

 $('.contact-us').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });
 $('#xIndex').click( function(){ 
 	$('.comment').addClass('hide');
 });

/*------calc-----*/
var olso = true;
	document.addEventListener('scroll', function () {
		var wh = window.pageYOffset + window.innerHeight;
        var gh = document.getElementById("calc").offsetTop;
        if (wh > gh) {
            if (olso) {
                calc();
                olso = false
           	}
        }
    });
function calc() {
	var a = document.getElementsByClassName("number");
    for (var i = 0; i < a.length; i++) {
    var c = a[i];
    var b = a[i].innerHTML;
    printNumbersInterval(c, b);
        function printNumbersInterval(c, b) {
            var i = 0;
            var timerId = setInterval(function () {
                if (i > b) {
                    i = b
                }
                c.innerHTML = parseInt(i);
                if (i == b) clearInterval(timerId);
                i += b / 300
            }, 10)
        }
    }
};

 $('#first').click(function(){
    $('#first-slide').removeClass('hide');
    $('.slider-3-slide').not('#first-slide').addClass('hide');
    return false;
  });

 $('#second').click(function(){
    $('#second-slide').removeClass('hide');
    $('.slider-3-slide').not('#second-slide').addClass('hide');
    return false;
  });

  $('#third').click(function(){
    $('#third-slide').removeClass('hide');
    $('.slider-3-slide').not('#third-slide').addClass('hide');
    return false;
  });
function fil() {
var dot = document.getElementById("navigation").getElementsByTagName("span");
    for (var i = 0; i < dot.length; i++) {
        dot[i].onclick = function () {
	for (var i = 0; i < dot.length; i++) {
		dot[i].classList.remove("nav-active")
}
this.classList.add("nav-active");
}
}
}
fil();



     function valid() {
         var a = document.getElementsByClassName("valid");
         for (var i = 0; i < a.length; i++) {
             a[i].onkeyup = function (e) {
                 var d = this.value;
                 var b = this.nextElementSibling;
                 var c = this.getAttribute('data-valid');
                 var r;

                 switch (c) {
                 case "name":
                     r = /^[a-z]*$/i;
                     break;
                 case "mail":
                     r = /^[0-9a-z_@.]*$/i;
                     break;
                 case "subject":
                     r = /^[0-9a-z]*$/i;
                     break;
                 default:
                     console.log("Valid error" + c)
                 }
                 if (!r.test(d)) {
                     b.classList.add("show")
                 } else {
                     b.classList.remove("show")
                 }
             }
         }
     }
     valid();


var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 4 },
  to: { color: '#ffe600', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value =80;
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value +'%');
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.8);  

 var bar = new ProgressBar.Circle(container2, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 4 },
  to: { color: '#ffe600', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value =98;
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value +'%');
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.98); 
var bar = new ProgressBar.Circle(container3, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 4 },
  to: { color: '#ffe600', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value =77;
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value +'%');
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.68); 
var bar = new ProgressBar.Circle(container4, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 4 },
  to: { color: '#ffe600', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value =98;
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value +'%');
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.68); 

 $('.por1').click(function(){
    $('#fi').removeClass('hide');
    $('.comment-cont').not('#fi').addClass('hide');
    return false;
  });
 $('.por2').click(function(){
    $('#se').removeClass('hide');
    $('.comment-cont').not('#se').addClass('hide');
    return false;
  });
 $('.por3').click(function(){
    $('#th').removeClass('hide');
    $('.comment-cont').not('#th').addClass('hide');
    return false;
  });

  $('.por4').click(function(){
    $('#f').removeClass('hide');
    $('.comment-cont').not('#f').addClass('hide');
    return false;
  });


}





   
