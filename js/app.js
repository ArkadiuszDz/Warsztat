$(document).ready(function(){

var chairsList = $('#calculator').find('form').find('select[name="chairs"]');
var colorsList = $('#calculator').find('form').find('select[name="colors"]');
var fabriqueList = $('#calculator').find('form').find('select[name="fabrique"]');
var chairPrice = $('#calculator').find('.rightColumn').find('#chairPrice');
var fabriquePrice = $('#calculator').find('.rightColumn').find('#fabriquePrice');
var transportPrice = $('#calculator').find('.rightColumn').find('#transportPrice');
var yourChair = $('#calculator').find('.leftColumn').find('#yourChair');
var fabrique = $('#calculator').find('.leftColumn').find('#fabrique');
var transport = $('#calculator').find('.leftColumn').find('#transport');
var checkbox = $('#calculator').find('.column').find('.check').find('input');
var totalPrice = $('#calculator').find('.column').find('#totalPrice');
var leftArrow = $('#slide').find('#leftArrow').find('img');
var rightArrow = $('#slide').find('#rightArrow').find('img');
var picturesList = $('#slide').find('ul');
var sliderImage = $('#slide').find('ul').find('li');
var width = 380;
var index = 1;

picturesList.append(sliderImage.first().clone());
picturesList.prepend(sliderImage.last().clone());
picturesList.css('width', (sliderImage.length+2)*width + 'px');
picturesList.css('left', -width+'px');

function animateSliderNext(){
  if (index < sliderImage.length){
    picturesList.animate({left: -width*(index+1)+'px'},500);
  }

  if (index == sliderImage.length){
    picturesList.animate({left: -width*(index+1)+'px'},{complete:function(){picturesList.css('left',-width+'px');}},500);
    index = 0;
  }
  index++;
}

function animateSliderPrev(){
  if (index == 1){
    picturesList.animate({left: 0},{complete:function(){picturesList.css('left',-width*sliderImage.length+'px');}},500);
    index = sliderImage.length;
  } else if (index > 1){
    index--;
    picturesList.animate({left: -width*(index)+'px'},500);
  }
}

rightArrow.on('click',animateSliderNext);
leftArrow.on('click',animateSliderPrev);



chairsList.on('change',function(){
  chairPrice.text(chairsList.find('option:selected').attr("data-price"));
  yourChair.text(chairsList.val());
  totalPrice.text(Number(chairPrice.text()) + Number(fabriquePrice.text()) + Number(transportPrice.text()));
});

// colorsList.on('change',function(){
//   console.log(colorsList.find('option:selected').attr("data-price"));
// });

fabriqueList.on('change',function(){
  //console.log(fabriqueList.find('option:selected').attr("data-price"));
  fabriquePrice.text(fabriqueList.find('option:selected').attr("data-price"));
  fabrique.text(fabriqueList.val());
  totalPrice.text(Number(chairPrice.text()) + Number(fabriquePrice.text()) + Number(transportPrice.text()));
});

checkbox.on('click',function(){
  if (this.checked){
    transportPrice.text('80');
    transport.text('Transport');
    totalPrice.text(Number(chairPrice.text()) + Number(fabriquePrice.text()) + Number(transportPrice.text()));
  } else {
    transportPrice.text('');
    transport.text('');
    totalPrice.text(Number(chairPrice.text()) + Number(fabriquePrice.text()) + Number(transportPrice.text()));
  }
});





});
