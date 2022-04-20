import React, { useRef, Suspense, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useSpring, animated, config } from "@react-spring/three";
import diceOneTexture from "../assets/images/textures/dice_1.jpeg";
import diceTwoTexture from "../assets/images/textures/dice_2.jpeg";
import diceThreeTexture from "../assets/images/textures/dice_3.jpeg";
import diceFourTexture from "../assets/images/textures/dice_4.jpeg";
import diceFiveTexture from "../assets/images/textures/dice_5.jpeg";
import diceSixTexture from "../assets/images/textures/dice_6.jpeg";

const getRotation = diceNumber => {
  // function to change the 3d dice face shown corresponding with the number rolled from Dice.js and it's rotation value [x,y,z]
  switch (diceNumber) {
    case 1:
      return [0, 0, 0];
    case 2:
      return [0, 1.55, 0];
    case 3:
      return [1.57, 0, 0];
    case 4:
      return [-1.57, 0, 0];
    case 5:
      return [0, 4.71, 0];
    case 6:
      return [0, 3.15, 1.571];
    default:
      return [Math.PI / 0.65, 0.25, 0.2];
    // throw new Error(`She's gone too high Cap'n!`)
  }
};

const handleColor = booleanValue => {
  // function to switch color of dice to show if it's been toggled
  return booleanValue;
};

const Box = ({ number, toggleFunc, toggleState }) => {
  // getting the rolled dice value, function that sets toggle state, and toggle State from Dice.js
  const texture_1 = useLoader(TextureLoader, diceFiveTexture);
  const texture_2 = useLoader(TextureLoader, diceTwoTexture);
  const texture_3 = useLoader(TextureLoader, diceThreeTexture);
  const texture_4 = useLoader(TextureLoader, diceFourTexture);
  const texture_5 = useLoader(TextureLoader, diceOneTexture);
  const texture_6 = useLoader(TextureLoader, diceSixTexture);
  const [hovered, hover] = useState(false);

  const textures = [
    texture_1,
    texture_2,
    texture_3,
    texture_4,
    texture_5,
    texture_6
  ];

  const mesh = useRef();

  const { rotation } = useSpring({
    rotation: getRotation(number)
  });

  const { scale } = useSpring({
    // adjust the size of the die and size when hovered
    scale: hovered ? 3.2 : 2.9,
    config: config.wobbly
  });

  useFrame(() => {
    if (
      number === 1 ||
      number === 2 ||
      number === 3 ||
      number === 4 ||
      number === 5 ||
      number === 6
    ) {
    } else {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <animated.mesh
      ref={mesh}
      scale={scale}
      onClick={event => {
        toggleFunc(!toggleState);
      }}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
      rotation={rotation}

      //dice face = rotation number; 1= [0, 0, 0], 2= [0, 1.55, 0], 3= [1.57, 0, 0], 4= [-1.57, 0, 0], 5= [0, 4.71, 0], 6= [0, 3.15, 1.571]
    >
      <boxBufferGeometry attach="geometry" />
      {textures.map((
        texture,
        index // maps the textures and attaches them to the box
      ) => (
        <meshStandardMaterial
          key={index}
          map={texture}
          attach={`material-${index}`}
          color={handleColor(toggleState) ? "rgb(127, 103, 143)" : "white"}
        />
      ))}
    </animated.mesh>
  );
};

export default function DiceModel(props) {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <Box {...props} />
      </Suspense>
    </Canvas>
  );
}
