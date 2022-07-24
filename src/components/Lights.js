import React from 'react'

const Lights = () => {
  return (
    <>
      {/*<pointLight position={[3, 5, 0]} color={0xff0000} intensity={2.5} />*/}
      <directionalLight
        position={[5, 5, 5]}
        color={0xffffff}
        intensity={1.5}
        target-position={[10, 10, 10]}
        castShadow={true}
        shadow-bias={-0.001}
      />
      <ambientLight color={0xffffff} intensity={0.2} />
    </>
  )
}

export default Lights
