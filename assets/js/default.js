const initializeEverything = () => {
  let isSearchOpen = false;

  const searchButton = document.getElementsByClassName('js-search-button')[0];
  const searchOverlay = document.getElementsByClassName('js-search-overlay')[0];
  const searchClose = searchOverlay.getElementsByClassName('js-close-search')[0];

  const toggleSearchOverlay = () => {
    if (isSearchOpen) {
      searchOverlay.classList.remove('hidden');
    } else {
      searchOverlay.classList.add('hidden');
    }
  }

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    isSearchOpen = !isSearchOpen;
    toggleSearchOverlay();
  });

  searchClose.addEventListener('click', (e) => {
    e.preventDefault();
    isSearchOpen = false;
    toggleSearchOverlay();
  });

  const searchInput = searchOverlay.getElementsByClassName('js-search-input')[0];
  const searchResults = searchOverlay.getElementsByClassName('js-search-results')[0];

  var sjs = SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: searchResults,
    json: '/search.json',
    searchResultTemplate: '<li class="search-result pb-4"><a href="{url}">{title}</a> - {date}</li>',
    noResultsText: '<li class="pb-4">Nothing so far...</li>',
    debounceTime: 500,
  });
}

initializeEverything();
