# Book Page
This site is hosted with Netlify and can be accessed **[here](https://focused-gates-c646d2.netlify.app/)**. Alternatively, you can clone the repo and check out the site locally.
## How to run locally
```
git clone https://github.com/NicholasRoy96/book-page.git
cd book-page
yarn install
yarn dev / npm run dev
```
## Extra Features
In addition to the required features, I have added some extra functionality:
- **Shopping cart** - the book (and other books if they existed) can be added to cart & removed (all saved in state)
- **Currency switcher** - there is an option to toggle between currencies, with current currency saved in state. This also recalculates and dynamically changes cart totals.
- **State / filters / helpers etc.** - I've tried to build the app in a way that in can be easily scaled up. This means using a good component structure, separating useful/commonly used functions into helpers and filters, and storing data in state as often as possible (modals, currency, cart, book data).
## Notes
Although I value check many fields so that the template works for books of other formats, for this App (for time reasoons & having a usable design) I'm going to work off the assumption that a book will always have:
  - Title
  - Description
  - Image
  - Author
  - At least one price

I realise that in theory the page shouldn't let you directly buy the book & should just link to other retailers (I included those links anyway), but thought it would be good to showcase some more complex functionality other than just outputting content.

## To Add
- If the app was bigger, I would include a router & base the request for book data on route params for example. There was no need to do this here as only one route & url for data has already been provided.
- I would personally use something like TailwindCSS in personal projects to make development easier/quicker, but since the brief specifically mentioned SCSS I did all the styling with SCSS alone.
- Could also check for things like sale price and handle cases like Out of Stock. I know that this book is listed as *stock 0*, but for the purposes of wanting to show add to cart functionality I treated the book as though it were in stock.