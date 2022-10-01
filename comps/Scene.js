import ReactDOM from "react-dom";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Cactus from "../public/Cactus";
import useScrollTop from "../hooks/useScrollTop";
import { PerspectiveCamera } from "@react-three/drei";
import { themes } from "../utils/variables";
import { useTheme } from "../utils/provider";

export const Scene = ({ scrollTop, position, windowSize }) => {
  const { theme } = useTheme();

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        zIndex: -100,
        background: themes[theme].primary,
      }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera
          fov={75}
          makeDefault
          rotation={[0, 0, 0]}
          position={windowSize.width > 500 ? [0, 0, 0] : [0, 0, 10]}
        />
        <ambientLight />
        <pointLight position={[-10, -10, 10]} />
        <pointLight
          position={[-10, -10, 100]}
          color={themes[theme].primary}
          intensity={5}
        />
        <Cactus px={5} py={-5} pz={-10} ry={1} scrollTop={scrollTop} />
        <Cactus px={-10} py={-5} pz={-30} ry={2} scrollTop={scrollTop} />
      </Suspense>
    </Canvas>
  );
};
