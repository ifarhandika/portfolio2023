import { motion } from "framer-motion"

import Introduction from "./pages/Introduction"
import Header from "./components/Header"
import Pages from "./components/Pages"

import "./App.css"
import Menu from "./components/Menu"

function App() {
  return (
    <div className="p-8 h-screen">
      {/* <Introduction /> */}
      <div className="border h-full p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.75 }}>
          <div className="text-white">
            <Header />
            <div className="mt-14 grid grid-cols-2">
              <Menu />
              <Pages />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default App
