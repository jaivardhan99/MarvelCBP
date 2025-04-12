
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

function IronManModel() {
  const { scene } = useGLTF('/attached_assets/ironman.glb');
  
  return (
    <motion.group
      initial={{ rotateY: 0 }}
      animate={{ 
        rotateY: 360,
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }}
    >
      <primitive object={scene} scale={2} position={[0, -2, 0]} />
    </motion.group>
  );
}

export default function IronManScene() {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} color="#ff0000" intensity={0.5} />
        <IronManModel />
        <Sparkles count={100} scale={10} size={2} speed={0.4} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
