import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'

function Box() {
  const texture_1 = useLoader(TextureLoader, 'textures/dice_1.jpeg')
  const texture_2 = useLoader(TextureLoader, 'textures/dice_2.jpeg')
  const texture_3 = useLoader(TextureLoader, 'textures/dice_3.jpeg')
  const texture_4 = useLoader(TextureLoader, 'textures/dice_4.jpeg')
  const texture_5 = useLoader(TextureLoader, 'textures/dice_5.jpeg')
  const texture_6 = useLoader(TextureLoader, 'textures/dice_6.jpeg')
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      <meshStandardMaterial map={texture_6} attachArray="material" />
    </mesh>
  )
}

export default function DiceModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  )
}
