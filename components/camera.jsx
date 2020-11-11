function Camera() {
    const [ data, setData ] = React.useState('Not Found');

    return (
      <>
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(result.text)
            else {
                console.log(err)
                setData('Not Found')
            }
          }}
        />
        <p>{data}</p>
      </>
    )
}


