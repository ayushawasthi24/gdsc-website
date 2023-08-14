import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </ChakraProvider>
  );
}

export default App;
