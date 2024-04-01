import logo from './../../logo.svg';

import img1 from './../../img/1.avif'
const Main = () => {
    return (
        <header className="App-header">
            <img src={img1} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}
export default Main