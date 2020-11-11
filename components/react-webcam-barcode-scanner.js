// import React from 'react'
// import { BrowserMultiFormatReader, Result } from '@zxing/library'
// import Webcam from 'react-webcam'

const BrowserMultiFormatReader = ZXing.BrowserMultiFormatReader
const Result = ZXing.Result

const hasGetUserMedia = () => {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

const BarcodeScannerComponent = ({
  width,
  height,
  onUpdate
}) => {
  const webcamRef = React.useRef(null)
  const codeReader = new BrowserMultiFormatReader()

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef?.current?.getScreenshot()
      // console.log(imageSrc)
      if (imageSrc) {
        codeReader.decodeFromImage(undefined, imageSrc).then(result => {
          onUpdate(null, result)
        }).catch((err) => {
          onUpdate(err)
        })
      }
    },
    [codeReader, onUpdate]
  )

  React.useEffect(() => {
    alert("hasGetUserMedia: " + hasGetUserMedia())
    // setInterval(capture, 100)
  }, []);

  return (
    <>
    <Webcam
      width={width}
      height={height}
      ref={webcamRef}
      screenshotFormat="image/png"
      videoConstraints={{
        facingMode: 'environment'
      }}
    />
    <button onClick={capture}>Capture</button>
    </>
  )
}