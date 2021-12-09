import { VelibContextProvider } from "./contexts/Velib"
import Velib from "./components/Velib"
import './App.css'

const App = () => {
  return (
    <VelibContextProvider>
      <Velib />
    </VelibContextProvider>
  );
}

export default App
