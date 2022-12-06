import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
var lerp = require("lerp");

export default function Cactus({ px, py, pz, ry, scrollTop }) {
  const group = useRef();
  useFrame(
    (state) => (
      (group.current.position.x = px),
      (group.current.position.y = py),
      (group.current.position.z = lerp(
        group.current.position.z,
        pz + scrollTop * 0.05,
        0.1
      )),
      (group.current.rotation.y = ry)
    )
  );
  const { nodes, materials } = useGLTF("/cactus.glb");
  return (
    <group rotation={[0, 1, 0]} ref={group} dispose={null}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.001"]}
        rotation={[0, -0.45, 0]}
      />
    </group>
  );
}

useGLTF.preload("/cactus.glb");
