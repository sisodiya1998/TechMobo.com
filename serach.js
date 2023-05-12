function search() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var contentElements = document.querySelectorAll("#your-content-selector");
  
    var matchingElements = [];
  
    contentElements.forEach(function(element) {
      var elementText = element.textContent.toLowerCase();
      if (elementText.includes(searchTerm)) {
        matchingElements.push(element);
      }
    });
  
    displaySearchResults(matchingElements);
  }
  
  function displaySearchResults(results) {
    var searchResultsDiv = document.getElementById("search-results");
    searchResultsDiv.innerHTML = "";
  
    if (results.length === 0) {
      searchResultsDiv.textContent = "No results found.";
    } else {
      results.forEach(function(result) {
        searchResultsDiv.appendChild(result.cloneNode(true));
      });
    }
  }
  