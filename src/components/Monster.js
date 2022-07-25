/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: wilsonghm99 (https://sketchfab.com/wilsonghm99)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/hallowen-creature-2e205be001ba444983a60ae8bef0448b
title: Hallowen Creature
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./models/monster/modelDraco.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.78}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_7.geometry}
              material={materials.ArmaduraMaterial}
              skeleton={nodes.Object_7.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_9.geometry}
              material={materials.CuernosMaterial}
              skeleton={nodes.Object_9.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_11.geometry}
              material={materials.CuernosMaterial}
              skeleton={nodes.Object_11.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_13.geometry}
              material={materials.TorsoMaterial}
              skeleton={nodes.Object_13.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_15.geometry}
              material={materials.TroncoMaterial}
              skeleton={nodes.Object_15.skeleton}
            />
          </group>
          <group
            position={[0.34, 2.15, 0.67]}
            rotation={[1.46, 0.03, 2.37]}
            scale={0}
          >
            <primitive object={nodes.GLTF_created_1_rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_85.geometry}
              material={materials.HadaMaterial}
              skeleton={nodes.Object_85.skeleton}
            />
          </group>
          <group
            position={[0, 0.09, 0.63]}
            rotation={[0, 0, 0.26]}
            scale={0.28}
          >
            <mesh
              geometry={nodes.Object_112.geometry}
              material={materials.RocasMaterial}
            />
          </group>
          <group position={[-0.43, -0.28, 0.49]} rotation={[2.19, 0.63, 0]}>
            <mesh
              geometry={nodes.Object_114.geometry}
              material={materials.GrassMaterial}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/monster/modelDraco.gltf')