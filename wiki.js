$(document).ready(function() {

//Will trigger when search button is clicked
  $("#search").click(function() {

    var search = $("#text").val();
    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + search + "&callback=?";

    $.getJSON(url, function(data) {

      if (search) {
        $("#list").html("<h4>Search results for " + search + "</h4>");
      }
      $.each(data.query, function(i, item) {
        $.each(item, function(key, val) {
          if (val.title != undefined) {
            $("#list").append("<div class='snip'><h4><strong>" + val.title + "</strong></h4><hr><p>" + val.snippet.charAt(0).toUpperCase() + val.snippet.slice(1) + "<strong>...</strong><a class='read text-center' href='https://en.wikipedia.org/wiki/" + val.title + "' target='_blank'>Go to Article</a></p></div>");
          }
        })
      })
      $("#list").hide();
      $("#list").fadeIn(400);

    })
  })
  //If 'Enter' is pressed, value will be searched
  $('input[type=text]').on('keydown', function(e) {
    if (e.which == 13) {
      $("#list").html(" ");
      $("#search").click();

    }
  });
});
