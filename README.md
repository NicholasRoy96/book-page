# book-page

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Notes
- Although I value check other fields so that template works for books of other formats, for this App I'm going to work off the assumption that a book will always have:
  .Title
  .Book Type
  .Description
  .Image
  .Author
  .Price
- I realise that in theory the page shouldn't let you directly buy the book & should just link to other retailers (I included those links anyway), but thought it would be good to showcase some more complex functionality that just outputting content

## To Add
- If the app was bigger, would include a router & base the request for book data on route params for example. Was no need to do this here as only one route & url for data has already been provided
- I would personally use something like TailwindCSS in personal projects to make development easier/quicker, but since the brief specifically mentioned SCSS I did all the styling with SCSS alone.
- Could also check for things like sale price and handle cases like Out of Stock - I know that this book is listed as stock '0', but for the purposes of wanting to show add to bag functionality I treated the book as though it were in stock
- Could save the book data in state as soon as returned - maybe not necessary for PDP like this which is not too complex, but would avoid passing bookData down as props continually (think max I had to pass down is 2 child components deep for InfoTabs components so not too problematic)
- If expanding Vuex further could add getters as well e.g. getAuthor if that is reused several times - for the size of this I am just mapping state in each component rather than using specific getters, but getters may make code cleaner and less repetition
