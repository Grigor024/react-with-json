import { useEffect, useState } from 'react';
import burger from "./icon/burger-bar.png"
import { motion, AnimatePresence } from "framer-motion";
import card from "/images/background.png";
import '@fortawesome/fontawesome-free/css/all.min.css';


const TrendNews = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [tnews, setTnews] = useState([])
  const [articles, setArticles] = useState([])

  useEffect(() => {
  fetch('/db.json')
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      setTnews(data.tnews);
      setArticles(data.articles);
    })
    .catch(err => console.error('Ошибка загрузки:', err));
}, []);

  return (
    <div className="flex flex-col items-center space-y-[8em]">
      <header className="fixed w-full px-20 py-4 bg-slate-500 bg-opacity-[0.15] backdrop-blur-md z-50 flex justify-evenly items-center">
        <h1 className="text-xl font-bold text-black">Material Tailwind</h1>

        <nav className="hidden w-[60%] lg:flex justify-evenly items-center gap-32 text-black text-lg font-medium">
          <ul className="flex gap-8 items-center text-black text-lg">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M6.75 2A2.75 2.75 0 004 4.75v14.5A2.75 2.75 0 006.75 22h10.5A2.75 2.75 0 0020 19.25V8.309a2.75 2.75 0 00-.806-1.944l-3.56-3.56A2.75 2.75 0 0013.69 2H6.75zm6.5 6.25a.75.75 0 01.75-.75H17a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM9 11.25a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 019 11.25zM9.75 14a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" />
              </svg>
              <a href="#" onClick={() => setIsOpen(false)}>Page</a>
            </li>

            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path fillRule="evenodd" d="M12 2a5 5 0 00-3.536 8.536A7.5 7.5 0 004.5 18.75V21a.75.75 0 001.5 0v-2.25a6 6 0 1112 0V21a.75.75 0 001.5 0v-2.25a7.5 7.5 0 00-3.964-6.714A5 5 0 0012 2zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
              </svg>
              <a href="#" onClick={() => setIsOpen(false)}>Account</a>
            </li>

            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M6 4a2 2 0 00-2 2v11.25a.75.75 0 001.28.53l.47-.47A2.5 2.5 0 017.77 16h8.96a.75.75 0 00.75-.75V6a2 2 0 00-2-2H6z" />
                <path d="M18 8.25a.75.75 0 011.5 0v9a2 2 0 01-2 2H8.75a.75.75 0 010-1.5H17a.5.5 0 00.5-.5v-9z" />
              </svg>
              <a href="#" onClick={() => setIsOpen(false)}>Docs</a>
            </li>
          </ul>


          <div className="flex gap-3">
            <button className="bg-white text-black py-2 px-4 rounded-lg text-sm font-bold">
              SIGN IN
            </button>
            <button className="bg-black text-white py-2 px-4 rounded-lg text-sm font-bold">
              BLOCKS
            </button>
          </div>
        </nav>

        <img
          src={burger}
          alt="Menu"
          className="w-8 cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[65px] left-0 w-full bg-slate-200 text-[30px] shadow-lg flex flex-col items-center gap-4 px-10 py-6 lg:hidden z-40">
              <ul className="flex flex-col gap-4 items-center text-black ">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M6.75 2A2.75 2.75 0 004 4.75v14.5A2.75 2.75 0 006.75 22h10.5A2.75 2.75 0 0020 19.25V8.309a2.75 2.75 0 00-.806-1.944l-3.56-3.56A2.75 2.75 0 0013.69 2H6.75zm6.5 6.25a.75.75 0 01.75-.75H17a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM9 11.25a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 019 11.25zM9.75 14a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" />
                  </svg>
                  <a href="#" onClick={() => setIsOpen(false)}>Page</a>
                </li>

                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 2a5 5 0 00-3.536 8.536A7.5 7.5 0 004.5 18.75V21a.75.75 0 001.5 0v-2.25a6 6 0 1112 0V21a.75.75 0 001.5 0v-2.25a7.5 7.5 0 00-3.964-6.714A5 5 0 0012 2zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
                  </svg>
                  <a href="#" onClick={() => setIsOpen(false)}>Account</a>
                </li>

                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M6 4a2 2 0 00-2 2v11.25a.75.75 0 001.28.53l.47-.47A2.5 2.5 0 017.77 16h8.96a.75.75 0 00.75-.75V6a2 2 0 00-2-2H6z" />
                    <path d="M18 8.25a.75.75 0 011.5 0v9a2 2 0 01-2 2H8.75a.75.75 0 010-1.5H17a.5.5 0 00.5-.5v-9z" />
                  </svg>
                  <a href="#" onClick={() => setIsOpen(false)}>Docs</a>
                </li>
              </ul>


              <button
                className="bg-white border border-black text-black py-2 px-4 rounded-lg text-sm font-bold" onClick={() => setIsOpen(false)}>
                SIGN IN
              </button>
              <button
                className="bg-black text-white py-2 px-4 rounded-lg text-sm font-bold"
                onClick={() => setIsOpen(false)}>
                BLOCKS
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>


      <section className="flex flex-col items-center justify-center px-4 py-12 space-y-10 font-bold text-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Web Development Blog @ <br className="hidden sm:block" />
          Material Tailwind
        </p>
        <p className="text-base sm:text-lg md:text-xl font-normal max-w-2xl">
          Expand your web development knowledge with our tutorials and learning articles.
        </p>

        <div className="w-full max-w-xl flex flex-col lg:flex-row lg:gap-3 items-center space-y-4 lg:space-y-0">
          <input
            type="text"
            placeholder="name@creative-tim.com"
            className="w-full lg:w-2/3 py-2 px-4  border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black"
          />
          <button className="w-full lg:w-1/3 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition duration-200 text-sm">
            GET STARTED
          </button>
        </div>
        <div className="w-[85%] flex">
          <p>See our <span className="underline">Terms and Conditions</span></p>
        </div>
      </section>

      <section className="flex justify-center">
        <img src={card} alt="card" className="w-[80%]" />
      </section>

      <section className="flex justify-center items-center">
        <ul className="w-[40em] flex justify-evenly items-center py-3 text-lg font-semibold rounded-md bg-gray-300">
          <li><a href="#">Trends</a></li>
          <li><a href="#">Frontend</a></li>
          <li><a href="#">Backend</a></li>
          <li><a href="#">Cloud</a></li>
          <li><a href="#">AI</a></li>
          <li><a href="#">Tools</a></li>
        </ul>
      </section>

      <section className="flex flex-col justify-center items-center">
        <p className="font-bold">Latest Blog Posts</p>
        <h1 className="text-[4em] font-bold">Trends News</h1>
        <p className="text-gray-500">Check out what's new in the web development and tech worls! Do not forget to  <br />subscribe to our blog and we will notify you with the latest news.</p>
      </section>



      <section className="w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-6">
        {tnews.map((item) => (
          <div key={item.id} className="flex flex-col bg-white p-4 rounded-lg shadow-md">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover rounded-md"
            />
            <div className="py-4">
              <p className="text-blue-400 text-left font-bold mb-4">{item.beforetitle}</p>
              <h1 className="text-xl text-left font-semibold mb-4">{item.title}</h1>
              <p className="text-sm text-gray-600 mb-4 text-left">{item.text}</p>
            </div>
            <div className="flex items-center">
              <img src={item.avatar} alt="Author" className="w-8 h-8 rounded-full" />
              <div className="text-left px-5">
                <p>{item.author}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <h1 className='font-bold text-lg'>
       <i class="fa fa-arrow-down" aria-hidden="true"></i> VIEW MORE</h1>



      <div className='w-[65%] text-left flex flex-col gap-10'>
        <h1 className='font-bold text-[40px] mb-4'>Other Articles</h1>
        <p className='w-[50%] text-lg text-gray-400 md:w-[38%]'>Check out what's new in the web development and tech worls! Do not forget to subscribe to our blog and we will notify you with the latest news.</p>




        <section className="w-full mx-auto grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 p-6">
          {articles.map((item) => (
            <div key={item.id} className="relative rounded-lg overflow-hidden shadow-md bg-white">
              <img src={item.img} alt="" className="w-full h-[30rem] object-cover" />
              <div className="absolute bottom-0 left-0 text-white p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h1 className="text-[25px] font-bold mb-3">{item.title}</h1>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </section>
      </div>


      <section className="w-[60%] flex flex-col justify-center items-center gap-6 rounded-xl bg-slate-900 p-[30px]">
        <h1 className='text-white text-[30px]'>Join our community!</h1>
        <p className='text-white'>Get news in your inbox every week! We hate spam too, so no worries about this.</p>
        <div className='flex gap-6'>
          <input type="text" placeholder='Email' className='w-[20rem] px-[10px] bg-transparent border-2 text-white rounded-md' />
          <button className='text-black bg-white rounded-lg text-[15px] font-bold px-10 py-3'>SUBSCRIBE</button>
        </div>
      </section>


      <section className='w-[60%] flex flex-col justify-between items-center gap-4 lg:flex-row'>
        <h1 className='font-bold text-[20px]'>Material Tailwind</h1>
        <div >
          <ul className='flex gap-5'>
            <li>Company</li>
            <li>About Us</li>
            <li>Team</li>
            <li>Products</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className='flex gap-3 md:flex'>
          <i className="fa-brands fa-github text-lg"></i>
          <i className="fa-brands fa-instagram text-lg"></i>
          <i className="fa-brands fa-youtube text-lg"></i>
          <i className="fa-brands fa-twitter text-lg"></i>
        </div>
      </section>


      <footer className='p-6'>© 2025 Made with Material Tailwind by Creative Tim.</footer>

    </div>
  );
};

export default TrendNews;
