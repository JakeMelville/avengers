// var searchInput = document.getElementById("search-input");
var searchInput = "avengers"
var apiUrl = "https://api.twitter.com/2/tweets/search/recent?query="
var proxy = "https://cors-anywhere.herokuapp.com/"
var twitSearch = document.getElementById("twit-search");

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAACZXMwEAAAAAbTZ9SY0Z8d%2BTq1VFBrqDYs%2FWeKo%3Di1vVMs206mb6CvipDlLvJuGgxI1qzQlRceramS8GCUpNeNw5sx");
myHeaders.append("Cookie", "guest_id=v1%3A161367772454425496; personalization_id=\"v1_XvRSwPBrVMSD5+4Z3/QK7A==\"");

var queryString = proxy + apiUrl + searchInput;
console.log(queryString)




function twitterSearch(event) {
  event.preventDefault();

  fetch(queryString)
    .then(response => response.json())

    .then(function (searchData) {
      for (var i = 0; i < searchData.length; i++) {
        document.getElementById(`result-${i}`).textContent = searchData.data[i].text;
        console.log(searchData.data)
      }
    })


    .catch(error => console.log('error', error))

}


twitSearch.addEventListener("click", twitterSearch)








// 6KbkBqRDDdtNbMrLaovOHB7oy   -twitter api key
// C5oTLEOjXt55ifu7JMC0PtjuNnRmHxLk70hSSMBIR5W1Ybo71N      twitter secret api key
//  AAAAAAAAAAAAAAAAAAAAACZXMwEAAAAAIXtubGp2uDYSSKStFxUMcJrnPVQ%3Dyhg84UxwgwwSecQ55DS16LuAPYKwjl8EkdVvn4H8RcQj07yaDy  bearer token
// 270341803-UpfkaG90lEsSzWDvHefJBIhBcBy1gM9EMWtfEs1F     access token
//g2T6Yq0YXzTzkN90FGs58AdUS6RBJiZHovKxBF27oCN4W     access tokem secret
