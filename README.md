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
- Although I value check other fields so that template works for books of other formats, for this App I'm going to work of the assumption that a book will always have:
  .Title
  .Description
  .Image
  .Author
  .Price

## To Add
- If the app was bigger, would include a router & base the request for book data on route params for example. Was no need to do this here as only one route & url for data has already been provided
- I would personally use something like TailwindCSS in personal projects to make development easier/quicker, but since the brief specifically mentioned SCSS I did all the styling with SCSS alone.
