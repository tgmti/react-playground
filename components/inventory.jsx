function Inventory() {

    const useState = React.useState

    // const {commentID} = props;
    const [products, setProducts] = useState(false);

    return (
        <>
            <h2> Coletor </h2>
            <Colector onSaveProducts="setProducts"/>
            <hr/>
            <h2> Produtos </h2>
            <InventoryList products="products"/>
        </>

    );
}