import {useLocation} from 'react-router-dom'
import PdfViewer from '../../components/pdfViewer';

const ActivityViewer = () => {
    const location = useLocation()
    console.log(location)
    return (
    <PdfViewer url={location.state.url}/>
)};
export default ActivityViewer;

 