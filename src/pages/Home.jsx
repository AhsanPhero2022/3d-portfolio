import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Island from "../models/Island";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <mesh />
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
