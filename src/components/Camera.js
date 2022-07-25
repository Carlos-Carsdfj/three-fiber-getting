import { PerspectiveCamera } from '@react-three/drei/core'

const Camera = () => {
  return <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={25} />
}

export default Camera
