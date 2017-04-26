function clickHandler() {
  var searchGrab = $("#userIngredients").val().split(", ").join("+");

  $.ajax({
    url: "http://api.yummly.com/v1/api/recipes?_app_id=8b179134&_app_key=56876edd0f74ccb4a82644fef0feaa47&q=" + searchGrab + "&requirePictures=true",

    success: function(recipes) {
    	var searchResults = recipes.matches;

    	for (var i = 0; i < searchResults.length; i++) {
        var recipeImagesUrl = searchResults[i].smallImageUrls;
        var recipeTitle = searchResults[i].recipeName;
        var recipeId = searchResults[i].id;
        var listText = $("<a>", {text: recipeTitle, href: "http://www.yummly.com/recipe/external/" + recipeId}).appendTo("#foodList");
        }
      $("a").wrap("<li>");
    }
  });

}

$("#searchBtn").on("click", clickHandler);
