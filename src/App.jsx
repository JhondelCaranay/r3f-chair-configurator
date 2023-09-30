import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/mesh/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/CustomizationContext";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas
          dpr={[1, 2]}
          style={{
            touchAction: "none",
          }}
        >
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
