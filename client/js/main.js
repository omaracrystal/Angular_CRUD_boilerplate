$(document).on('ready', function() {
  getBeers();
});

// handle form submission
$('form').on('submit', function(e){
  e.preventDefault();
  // clear message
  $('#message').html('');
  // create payload on form submit
  var payload = {
    name: $('#name').val(),
    type:$('#type').val(),
    abv: $('#abv').val()
  };
  // send post request to server
  $.post('/api/v1/beers', payload, function(data) {
    // append 'Added' to DOM
    $('.message-section').show();
    $('#message').html('Added a new beer. Thanks!');
    // get all penguins
    getBeers();
  });
});

// get all beers
function getBeers() {
  // clear all beers
  $('#all-beers').html('');
  // send get request to server
  $.get('/api/v1/beers', function(data) {
    if(data.length === 0) {
      $('.beer-section h2').html('No beers! Add a beer above.');
    } else {
      $('.beer-section h2').html('All beers');
      // loop through array of objects, appending each to the DOM
      for (var i = 0; i < data.length; i++) {
        $('#all-beers').append('<tr>'+
          '<td>'+data[i].name+'</td>'+
          '<td>'+data[i].type+'</td>'+
          '<td>'+data[i].abv+'</td>'+
          '<tr>'
        );
      }
      $('form input').val('');
    }
  });
}
