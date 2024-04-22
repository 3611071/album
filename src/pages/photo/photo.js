import { useParams } from "react-router-dom";
const Photo = (props) => {
    const {id} = useParams();
    const phot = props.data[id]
    return(
        <img src={phot.img}/>
    )
}
export default Photo;