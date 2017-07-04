// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require rails-ujs
//= require turbolinks
//= require cocoon
//= require_tree .


/*
// wrap in the turbolinks callback
$(document).on('turbolinks:load', function(){
  //capture when the user clicks on the remove record
  $('form').on('click'), '.remove_record', function(event){
    // find the previous hidden and set to 1
    $(this).prev('input[type=hidden]').val('1');
    // hide the previous tr
    $(this).closest('tr').hide();
    // don't take us from the page.
    return event.preventDefault();
  })


  // capture when user clicks on the add fields
  $('form').on('click', '.add_fields', function(event){
    var regexp, time;
    time = new Date().getTime();
    // capture the regex of the data that we passed in
    regexp = new RegExp($(this).data('id'), 'g');
    // on fields class append replace hte regexp id with the new time
    $('.fields').append($(this).data('fields').replace(regexp, time));
    // don't take us off the page.
    return event.preventDefault();
  });

});
*/
