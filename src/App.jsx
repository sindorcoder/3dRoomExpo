import { OrbitControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

function Room() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]}/>
        <meshStandardMaterial color="gray"/>
      </mesh>

      <mesh position={[0, 2.5, -5]}>
        <boxGeometry args={[10, 5, 0.5]}/>
        <meshStandardMaterial color="orange"/>
      </mesh>

      <mesh position={[-5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 5, 0.5]}/>
        <meshStandardMaterial color="lightblue"/>
      </mesh>

      <mesh position={[5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 5, 0.5]}/>
        <meshStandardMaterial color="lightgreen"/>
      </mesh>

      <mesh position={[0, 2.5, 5]}>
        <boxGeometry args={[10, 5, 0.5]}/>
        <meshStandardMaterial color="black"/>
      </mesh>

      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 1, 1]}/>
        <meshStandardMaterial color="red"/>
      </mesh>
    </group>
  )
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[10, 10, 10]} intensity={1}/>

        <Sky sunPosition={[100, 20, 100]}/>

        <Room/>


        <OrbitControls
          mouseButtons={{
            MIDDLE: THREE.MOUSE.DOLLY,
            LEFT: THREE.MOUSE.ROTATE
          }}

          screenSpacePanning={true}

          maxPolarAngle={Math.PI / 2}
        />

        {/* <PointerLockControls />*/}
      </Canvas>

    </div>
  )
}