# Frontend assessment for Blazesoft

## Requirements

### Create a Bookstore using React

1. It should be a single page with book details, the main page should have a book list showing book name, price, category and a delete button at the end for each book. There should be an add button at the top so the user can add a book.
2. Once you click the add a book button, it should popup a page, let the user add a book ( name, price, category and description ).
3. The book should be clickable, if the user clicks the book, it will show a popup page, letting the user be able to modify the book name, price, category and description. After modification: the book details should be updated in the main page.
4. Once clicked delete button, the book should be deleted from the main page.

## Stack
- Front End: [React](https://reactjs.org/)(Redux,Hooks)
- UI: HTML, CSS


## Demo
https://github.com/ShahAashka/BlazesoftAssessment/assets/35736445/c24e420d-dea8-43e1-a5c2-bbe3ae08ff41


## **Running the app locally**

### **Prerequisites**

1. `node` and `npm` are required to run the app and install dependencies

### **Steps**

1. Clone the repository:

```bash
git clone https://github.com/ShahAashka//BlazesoftAssessment

```

2. Install the dependencies

```bash
npm install
```

3. Run on `dev` should start the `next dev` script

```bash
npm run dev
```

4. Next.js should automatically open your default browser and navigation to [http://localhost:3000](http://localhost:3000) and render 4 default books


## Rendering

The application uses Next.js to utilize server-side rendering rather than CRA's client-side rendering.