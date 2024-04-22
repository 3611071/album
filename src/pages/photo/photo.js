import { NavLink, useParams } from "react-router-dom";
const Photo = (props) => {
    const {id} = useParams();
    const phot = props.data[id];
    return(
        <>
            <img src={phot.img}/>   
            <div>
            <NavLink to={props.home} >Home</NavLink>
            </div>
        </>

    )
}
export default Photo;