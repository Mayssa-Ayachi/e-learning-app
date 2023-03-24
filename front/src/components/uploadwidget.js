import { useEffect,useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';

const UploadWidget = (props) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

  useEffect(() => {
    // Store the Cloudinary window instance to a ref when the page renders
    cloudinaryRef.current = window.cloudinary;

    widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName:  "dyizrug8d",
        uploadPreset:  "pcd_2023"
    },function (error, result) {
        if ( error || result.event === 'success' ) {
          console.log(result);
          props.changeURL(result.info.url);
        }
      })
  })

 

  return (
    <Button variant="outline-dark" onClick={()=>widgetRef.current.open()}>
      Upload
    </Button>
  )
}

export default UploadWidget;