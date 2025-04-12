import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';

export default function IronManScene() {
  return (
    <div className="w-full h-[60vh]">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
        <Suspense fallback={null}>
          <Stage>
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="red" />
            </mesh>
          </Stage>
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}