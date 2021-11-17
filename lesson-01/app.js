const img =
    'https://lh3.googleusercontent.com/ZcZD45UN5Mw5uCgKEZrzWQi8kHgTFTsarJV-uMDClmEh9bNIafh2f5CGCc1KsdJvU0VcqEWSzuQ_aMrY4gg=w500-rw'

const getProducts = () => {
    fetch('https://60ae0d5e80a61f00173324bc.mockapi.io/products')
        .then(response => response.json())
        .then(response => {
            const data = response
            let html = ''
            data.map(e => {
                html += `
                        <div class="product">
                            <img src="${e.image ? e.image : img}" alt="${e.name}" />
                            <h5 class="name">${e.name}</h5>
                            <p><strong>Error:</strong> ${e.errorDescription}</p>
                            <p><strong>SKU:</strong> ${e.sku}</p>
                            <p><strong>ID:</strong> ${e.id}</p>
                            <p><strong>Color:</strong> ${e.color ? e.color : 0}</p>
                        </div>
                        `
            })

            document.getElementById('products').innerHTML = html
        })
}

getProducts()