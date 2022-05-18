import * as THREE from 'three';
import {  useFrame } from '@react-three/fiber'
import React from 'react'


const CanvasContent = () => {
  const myMesh = React.useRef(null);

    useFrame(({ clock }) => {
      myMesh.current.rotation.x += 0.01;
      myMesh.current.rotation.y += 0.01;
    });

    return (
    <>
      <mesh ref={myMesh} position={[1,0,2.5]} >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
    );
}

export default CanvasContent;
