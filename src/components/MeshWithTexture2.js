import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const MeshWithTexture2 = () => {
  //const stone = useLoader(TextureLoader, './block/stone.png')
  //stone.minFilter = THREE.NearestFilter
  //stone.magFilter = THREE.NearestFilter
  const basecolor = useLoader(TextureLoader, './bricks/basecolor.jpg')
  const normalMap = useLoader(TextureLoader, './bricks/normal.jpg')
  const aoMap = useLoader(TextureLoader, './bricks/ao.jpg')
  const roughnessMap = useLoader(TextureLoader, './bricks/roughness.jpg')
  const displacementMap = useLoader(TextureLoader, './bricks/displacement.png')
  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry args={[2, 2, 2, 100, 100, 100]} />
      <meshStandardMaterial
        map={basecolor}
        normalMap={normalMap}
        aoMap={aoMap}
        roughnessMap={roughnessMap}
        displacementMap={displacementMap}
        displacementScale={0.02}
      />
    </mesh>
  )
}

export default MeshWithTexture2
