import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useProgress } from '@react-three/drei'
import * as THREE from 'three'
import Camera from './components/Camera'
//import MeshWithTexture from './components/MeshWithTexture'
//import MeshWithTexture2 from './components/MeshWithTexture2'
import Lights from './components/Lights'
import Monster from './components/Monster'

function App() {
  const { progress, total, loaded } = useProgress()
  return (
    <div className="Container">
      {total === loaded ? (
        <h1>Ready</h1>
      ) : (
        <h1> Loadin :{progress.toString().slice(0, 5)}%</h1>
      )}
      <Canvas
        gl={{
          antialias: true,
          toneMappingExposure: 1.5,
          toneMapping: THREE.ReinhardToneMapping,
        }}
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
          <Monster />
          <Environment files={'./hdr/decor_shop_1k.hdr'} />
        </Suspense>

        <OrbitControls target={[0, 1, 0]} />
      </Canvas>
    </div>
  )
}

export default App
