// CSS IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'

// COMPONENTS IMPORTS
import MyNavbar from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'

// COMPONENT FUNCTION

const App = function () {
  return (
    <>
      <header className="mb-3">
        <MyNavbar />
      </header>
      <main>
        <Welcome />
        <AllTheBooks />
      </main>
      <footer className="text-center py-3 bg-light">
        <MyFooter />
      </footer>
    </>
  )
}

export default App

// 82c26041 <- API key
