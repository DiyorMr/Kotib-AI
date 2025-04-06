import { About, Contact, Faq, Footer, Kotib, Navbar, Plans, Storie, Works } from './components'
import './plugins/i18n'
import './styles/global.scss'

function App() {
  return (
    <div className='body'>
      <Navbar />
      <About />
      <Works />
      <Kotib />
      <Plans />
      <Storie />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
