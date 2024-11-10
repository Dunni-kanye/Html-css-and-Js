document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('results');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        searchProducts(searchTerm);
    });

    function searchProducts(searchTerm) {
        resultsDiv.innerHTML = '<p>Searching...</p>';

        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(products => {
                const filteredProducts = products.filter(product => 
                    product.title.toLowerCase().includes(searchTerm) || 
                    product.category.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm)
                );

                if (filteredProducts.length === 0) {
                    resultsDiv.innerHTML = '<p>No products found.</p>';
                } else {
                    displayProducts(filteredProducts);
                }
            })
            .catch(error => {
                resultsDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
            });
    }

    function displayProducts(products) {
        resultsDiv.innerHTML = '';
        products.forEach(product => {
            const productElement = createProductElement(product);
            resultsDiv.appendChild(productElement);
        });
    }

    function createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-info">
                <h2 class="product-name">${product.title}</h2>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <p class="product-category">Category: ${product.category}</p>
            </div>
        `;
        return productDiv;
    }
});