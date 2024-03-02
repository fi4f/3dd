import { Box, Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HalfSpaceCollider, Physics, RigidBody } from "./@react-three/rapier";
import { Suspense } from "react";

function App() {
  return (
    <Canvas style={{
      position: "absolute",
      top   : "0px",
      left  : "0px",
      width : "100dvw",
      height: "100dvh"
    }}>
      <OrbitControls/>
      <Grid infiniteGrid/>
      <Suspense>
        <Physics debug gravity={[0, -9.81, 0]}>
          <HalfSpaceCollider args={[{ x: 0, y: 1, z: 0 }]}/>
          <RigidBody position={[0, 10, 0]}> <Box/> </RigidBody>
          <RigidBody position={[0, 20, 0]}> <Box/> </RigidBody>
          <RigidBody position={[0, 30, 0]}> <Box/> </RigidBody>
          <RigidBody position={[0, 40, 0]}> <Box/> </RigidBody>
          <RigidBody position={[0, 50, 0]}> <Box/> </RigidBody>
          <RigidBody position={[0, 60, 0]}> <Box/> </RigidBody>
          <RigidBody position={[0, 70, 0]}> <Box/> </RigidBody>
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App;