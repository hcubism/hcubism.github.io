const initializeEverything = () => {
  if (sessionStorage.fontsLoaded) {
    document.documentElement.className += " fonts-loaded";
  } else {
    const serifFont = new FontFaceObserver('Merriweather');
    const sansFont = new FontFaceObserver('Merriweather Sans');
    const monoFont = new FontFaceObserver('Fira Code');

    Promise.all([
      serifFont.load(null, 10000),
      sansFont.load(null, 10000),
      monoFont.load(null, 10000),
    ]).then(() => {
      document.documentElement.className += " fonts-loaded";
      sessionStorage.fontsLoaded = true;
    }).catch(() => {
      sessionStorage.fontsLoaded = false;
    });
  }

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

  const sjs = SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: searchResults,
    json: '/search.json',
    searchResultTemplate: '<li class="search-result pb-4"><a href="{url}">{title}</a></li>',
    noResultsText: '<li class="pb-4">Nothing so far...</li>',
    debounceTime: 500,
  });

  const themeToggle = document.getElementsByClassName('js-theme-toggle')[0];
  themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (localStorage.themeIsDark === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.themeIsDark = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.themeIsDark = 'light';
    }
  });
}

initializeEverything();
