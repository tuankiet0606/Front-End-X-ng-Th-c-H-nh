const $ = document.querySelector.bind(document);
const ulElement = $('#list-category-js');

const start = () => {
    getCategories()
}

function render(categories) {
    for(let category of categories ) {
        <li>`${category.title}`</li>
    }
}

const getCategories = () => {
    fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(categories => render(categories))
}
