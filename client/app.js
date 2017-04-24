/*alert('hello from the JS file');*/

var socket = io(); /* socket is now a reference to the socket.io library */


$('form').submit(function () {
  var text = $('#message').val();
  /* alert(text); */
  socket.emit('message', text); /* emit this instead of alert*/
  $('#message').val(''); /* clears line after sent*/
  return false;
});

socket.on('message', function(msg) {
    $('<li>').text(msg).appendTo('#history');
});