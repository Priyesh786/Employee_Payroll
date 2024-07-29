document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.search-icon')
    const searchBar = document.getElementById('searchBar');

    searchIcon.addEventListener('click', () => {
        if(searchBar.style.display === 'block') {
            searchBar.style.display = 'none';
        } else{
            searchBar.style.display = 'block'
        }
    })
})
  