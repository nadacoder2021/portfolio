import React from 'react';
import {useLoader} from "@react-three/fiber"
import {TextureLoader} from "three/src/loaders/TextureLoader"
import texture from "../../assets/pic2.jpg"
import {Sphere, MeshDistortMaterial} from "@react-three/drei"


function SphereAnimation() {
    const colorMap = useLoader(TextureLoader, texture)

    return (
      <mesh rotation={[90, 0, 20]}>
        <Sphere visible args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#AE67FA"
            attach="material"
            distort={0.8}
            speed={2.5}
          />
        </Sphere>
      </mesh>
    );
}

export default SphereAnimation;