var $grid = $('.collection-lists').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetfilterbtns();
  $(this).addClass('active-filter-btn')
  $grid.isotope({ filter: filterValue });
});


var filterbtn = $(".filter-button-group").find('button');
function resetfilterbtns(){
  filterbtn.each(function(){
    $(this).removeClass('active-filter-btn');
  });

}