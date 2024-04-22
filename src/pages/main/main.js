import { NavLink } from "react-router-dom"
const Main = (props) => {
    return (
        <header className="App-header">
        {props.data.map(photos => {
            return(
                <>
                <div>{photos.title}</div>
                <NavLink to={photos.link}>
                <img src={photos.img} alt={photos.alt} className='photos'/>
                </NavLink>
                </>
            )
        })}
        </header>
    )
}
export default Main