function Camera() {

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const WebcamCapture = () => {
        const webcamRef = React.useRef(null);

        const capture = React.useCallback(
            () => {
            const imageSrc = webcamRef.current.getScreenshot();
            },
            [webcamRef]
    );

    return (
        <div>
            <Barcode/>
            <Webcam />
        </div>
    );
}


