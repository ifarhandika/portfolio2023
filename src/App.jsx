import Introduction from "./pages/introduction"
import BaseHomepage from "./components/BaseHomepage"

import "./App.css"

function App() {
  return (
    <div className="text-white">
      <Introduction />
      <div className="h-screen">
        <BaseHomepage />
      </div>
    </div>
  )
}

export default App
