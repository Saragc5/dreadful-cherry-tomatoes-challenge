## Dreadful Cherry Tomatoes

### My solution to the challenge provided by Rviewer:

It is done with ReactJS, TypeScript and CSS modules.

The interfaces for the components are in the settings.ts file.

### I made it with 3 principal components inserted in App.js:

**Header** with the logo.

**Home** with several components like:

- Searchbar: to search for movies.

- MoviesCard to render the movies in the container. This component also renders another one called ShowDetails which shows the details when each movies is hovered.

- Pagination to render the movies separate, ten by ten each page.


**Footer** with Apple, Android and Dreadful Tomatoes logos and the Copyright.

**MyContext** where all the fetches to the URL provided by Rviewer are done and paginate and provided to the whole App.