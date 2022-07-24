import { PerspectiveCamera } from '@react-three/drei/core'

const Camera = () => {
  return <PerspectiveCamera makeDefault position={[-20, 20, 20]} fov={40} />
}

export default Camera
