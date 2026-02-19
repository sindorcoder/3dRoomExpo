import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Circle = ({ cameraControlsRef }) => {
  const meshRef = useRef()

  const targetPosition = new THREE.Vector3(0, 0.05, 0)

  useFrame((state) => {
    const raycaster = state.raycaster
    const intersects = raycaster.intersectObjects(state.scene.children, true)

    if (intersects.length > 0) {
      const foundPoint = intersects[0].point
      targetPosition.set(foundPoint.x, 0, foundPoint.z)
    }

    if (meshRef.current) {
      meshRef.current.position.lerp(targetPosition, 1)
    }
  })

  const handleDoubleClick = (event) => {
    event.stopPropagation()
    const { point } = event

    cameraControlsRef.current?.setLookAt(
      point.x, point.y + 1, point.z,
      point.x, point.y , point.z,
      true
    )
  }

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      onDoubleClick={handleDoubleClick}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      <circleGeometry args={[0.1, 100]}/>
      <meshBasicMaterial
        color="white"
        transparent
        opacity={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Circle