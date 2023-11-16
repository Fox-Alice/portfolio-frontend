import './Main.css';
import Header from '../Header/Header';
import image from '../images/main_image.JPG';



function Main() {
  return (
    <main className="main">
        <Header/>
        <div className='cover'>
            <div className='content'>
                <h1 className='title'>Эльвира&nbsp; 
                <span>Муравьёва</span>
                </h1>
                <div className='subtitle'>
                <span className='profession'>
                    <b className='profession__is-visible'>Фронтенд&nbsp;</b>
                    <b className='profession__is-hidden'>Бэкенд&nbsp;</b>

                    </span>
                <h4 className='profession__static'>разработчик</h4>
                </div>
            </div>
        <img className="image" src={image} alt="Фото"> 
        </img>
        {/* <a
          className="App-link"
          href="https://vk.com/elis4ever"
          target="_blank"
          rel="noopener noreferrer"
        >
          ВК
        </a> */}
        </div>
      </main>
  );
}

export default Main;
