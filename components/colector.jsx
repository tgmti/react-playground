function Colector({ setProducts }) {

    const useState = React.useState

    // const {commentID} = props;
    const [productCode, setProductCode] = useState(false);


    return (
        <>
            <h2> Camera </h2>
            <Camera></Camera>
            <hr/>
            <label>Código do Produto</label>
            <input type="text" value={ productCode } onChange={setProductCode} />
        </>

    );
}