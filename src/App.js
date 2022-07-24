import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'
import Camera from './components/Camera'
//import MeshWithTexture from './components/MeshWithTexture'
//import MeshWithTexture2 from './components/MeshWithTexture2'
import Lights from './components/Lights'
import Minecraft from './components/Minecraft'
function App() {
  return (
    <div className="Container">
      <Canvas
        gl={{
          antialias: true,
          toneMappingExposure: 1.5,
          toneMapping: THREE.ReinhardToneMapping,
        }}
        shadows={true}
        shadowMap
      >
        <Camera />
        <Lights />
        {/*     <mesh position={[-4, 0, 0]}>
          <torusKnotBufferGeometry args={[1, 0.3, 20, 20]} />
          <meshNormalMaterial flatShading={true} />
  </mesh>*/}
        <Suspense fallback={null}>
          {/*<MeshWithTexture />*/}
          {/*<MeshWithTexture2 />*/}
          <Minecraft />
          <Environment files={'./hdr/decor_shop_1k.hdr'} />
        </Suspense>

        <OrbitControls target={[1, 10, 0]} />
      </Canvas>
    </div>
  )
}

export default App
