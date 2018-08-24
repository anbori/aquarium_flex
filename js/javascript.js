// js //
// window.onload = function () {
    // var btn_prev = document.querySelector('#gallery .buttons .prev');
    // var btn_next = document.querySelector('#gallery .buttons .next');
    // var images = document.querySelectorAll('#gallery .photos img');
    // var i = 0;
    // btn_prev.onclick = function () {
        // images[i].classList.remove('showed');
        // i--;
        // if (i < 0) {
            // i = images.length - 1;
        // }
        // images[i].classList.add('showed');
    // }
    // btn_next.onclick = function () {
        // images[i].classList.remove('showed');
        // i++;
        // if (i >= images.length) {
            // i = 0;
        // }
        // images[i].classList.add('showed');
    // }
// }
// js with Constructor //
// window.onload = function () {
    // var images = document.querySelectorAll('.slider_gallery .photos img');
    // var slider = new Slider(images);
    // document.querySelector('#gallery .buttons .prev').onclick = function () {
        // slider.prev();
    // }
    // document.querySelector('#gallery .buttons .next').onclick = function () {
        // slider.next();
    // }
// }
// function Slider(images) {
    // this.images = images;
    // var i = 0;
    // this.prev = function () {
        // this.images[i].classList.remove('showed');
        // i--;
        // if (i < 0) {
            // i = this.images.length - 1;
        // }
        // this.images[i].classList.add('showed');
    // }
    // this.next = function () {
        // this.images[i].classList.remove('showed');
        // i++;
        // if (i >= this.images.length) {
            // i = 0;
        // }
        // this.images[i].classList.add('showed');
    // }
// }
// jquery //
$(function(){
	var btn_prev = $('#gallery .buttons .prev');
    var btn_next = $('#gallery .buttons .next');
    var images = $('#gallery .photos img');
    var i = 0;
    btn_prev.on("click", function () {
		images.eq(i).removeClass('showed');
        i--;
        if (i < 0) {
        i = images.length - 1;
        }
        images.eq(i).addClass('showed');
    })
    btn_next.on("click", function () {
        images.eq(i).removeClass('showed');
        i++;
        if (i >= images.length) {
        i = 0;
        }
        images.eq(i).addClass('showed');
    })
// кнопка наверх //	
	var btn_up=$(".up");
	function scroolBtn(){
        var top = $(this).scrollTop();
			if (top > 300) {
				btn_up.fadeIn(500);
			}
			else {
				btn_up.fadeOut(500);
			}
    }
    scroolBtn();
    $(document).on('scroll', scroolBtn);
	btn_up.on('click', function() {
		$('html, body').animate({
			scrollTop: 0
        }, 400);
	})
});
