import {useLocation} from 'react-router-dom'
import PdfViewer from '../../components/pdfViewer';
import VideoPlayer from '../../components/videoplayer';

const ActivityViewer = () => {
    const location = useLocation()
    const type = location.state.type
    console.log(location)

    return (
    <>
    {type==="pdf" && (<PdfViewer url={location.state.url}/>)}
    {type==="mp4" && (<VideoPlayer url={location.state.url}/>)}
    </>   
)};
export default ActivityViewer;

 