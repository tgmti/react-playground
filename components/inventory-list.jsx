function InventoryList({products}) {

    // <li>{ product.code } - { product.description }<li/>
        // <ul>
        // { products.map(product => (
        //     `<li>${ product }<li/>`
        // )) }
        // <ul/>
    return (
        <p>{ products }</p>
    );
}