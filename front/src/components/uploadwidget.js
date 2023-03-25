import { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';

const UploadWidget = (props) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    cloudinaryRef.current = window.cloudinary;

    widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName:  "dyizrug8d",
        uploadPreset:  "pcd_2023"
    },function (error, result) {
        if ( error || result.event === 'success' ) {
          console.log(result);
          props.changeURL(result.info.url);
          props.changeType(result.info.format);
        }
      })

  return (
    <Button variant="outline-dark" onClick={()=>widgetRef.current.open()}>
      Upload
    </Button>
  )
}

export default UploadWidget;