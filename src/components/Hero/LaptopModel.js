import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const LaptopModel = () => {
  const { scene } = useGLTF('/models/laptop.glb');
  
  return (
    <Canvas style={{ height: '500px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <primitive object={scene} scale={2} />
      <OrbitControls />
    </Canvas>
  );
};

export default LaptopModel;
