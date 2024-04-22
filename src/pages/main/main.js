import { NavLink } from "react-router-dom"
const Main = (props) => {
    return (
        <header className="App-header">
        <div className="albs"><NavLink to = "/al1">альбом 1</NavLink>
        <NavLink to = "/al2">альбом 2</NavLink></div>
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