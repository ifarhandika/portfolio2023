import { motion } from "framer-motion"

import Introduction from "./pages/Introduction"
import Header from "./components/Header"
import Pages from "./components/Pages"
import Menu from "./components/Menu"

import "./App.css"

function App() {
  return (
    <>
      <Introduction />
      <div className="p-8 h-screen relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.75 }}
          className="border h-full p-8">
          <div>
            <div className="text-white">
              <Header />
              <div className="mt-14 grid sm:grid-cols-1 md:grid-cols-2">
                <Menu />
                <Pages />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default App
