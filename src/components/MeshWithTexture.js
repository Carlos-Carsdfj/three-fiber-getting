import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const MeshWithTexture = () => {
  const matCap = useLoader(TextureLoader, './matcaps/matcap4.png')
  return (
    <mesh position={[4, 0, 0]}>
      <torusKnotBufferGeometry args={[1, 0.3, 100, 100]} />
      <meshMatcapMaterial matcap={matCap} />
    </mesh>
  )
}

export default MeshWithTexture
