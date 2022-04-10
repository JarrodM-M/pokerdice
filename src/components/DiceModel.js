import React, { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { useSpring, animated, config } from '@react-spring/three'
import diceOneTexture from '../assets/images/textures/dice_1.jpeg'
import diceTwoTexture from '../assets/images/textures/dice_2.jpeg'
import diceThreeTexture from '../assets/images/textures/dice_3.jpeg'
import diceFourTexture from '../assets/images/textures/dice_4.jpeg'
import diceFiveTexture from '../assets/images/textures/dice_5.jpeg'
import diceSixTexture from '../assets/images/textures/dice_6.jpeg'

function Box() {

    const texture_1 = useLoader(TextureLoader, diceFiveTexture)
    const texture_2 = useLoader(TextureLoader, diceTwoTexture)
    const texture_3 = useLoader(TextureLoader, diceThreeTexture)
    const texture_4 = useLoader(TextureLoader, diceFourTexture)
    const texture_5 = useLoader(TextureLoader, diceOneTexture)
    const texture_6 = useLoader(TextureLoader, diceSixTexture)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    const [position, setPosition] = useState([0,0,0])

    const textures = [ texture_1, texture_2, texture_3, texture_4, texture_5, texture_6 ]
    
    const mesh = useRef()
    // useFrame(() => {
    //     mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    // })
    const {scale} = useSpring({
        scale: hovered ? 2 : 1.5,
        config: config.wobbly
    })
    
    return (
        <animated.mesh 
          ref={mesh}
          scale={scale}
          onClick={(event) => {click(!clicked); setPosition([6,2,0])}}
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
          position = {position}
        >
            <boxBufferGeometry attach="geometry" />
            {textures.map((texture, index) => 
              <meshStandardMaterial 
                key={index} 
                map={texture} 
                attach={`material-${index}`}
                color={clicked ? 'rgb(127, 103, 143)' : 'white'} 
              />)
            }
        </animated.mesh>
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

