import './Main.css';
import Header from '../Header/Header';
import background from '../images/background1.png';



function Main() {
  return (
    <main className="main">
        <Header/>
        <img className="background" src={background} alt="logo">
            </img>
        {/* <p>
          Скоро здесь что-то появится
        </p>
        <a
          className="App-link"
          href="https://vk.com/elis4ever"
          target="_blank"
          rel="noopener noreferrer"
        >
          ВК
        </a> */}
      </main>
  );
}

export default Main;
