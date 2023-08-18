import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/web";

const Star = ({ position, color }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.02, 16, 16]} />
    <meshBasicMaterial color={color} />
  </mesh>
);

const Constellation = ({ positions }) => {
  return (
    <>
      {positions.map((pos, index) => (
        <Star key={index} position={pos} color={0xffffff} />
      ))}
      <line position={[0, 0, 0]}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={["attributes", "position"]}
            array={new Float32Array(positions.flat())}
            count={positions.length}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={0xffffff} />
      </line>
    </>
  );
};

const ConstellationScene = () => {
  const positions = [
    [0, 0, 0],
    [1, 1, 1],
    // Add more star positions here
  ];

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Constellation positions={positions} />
    </Canvas>
  );
};

const AnimatedConstellation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const props = useSpring({
    opacity: isAnimating ? 0 : 1,
    from: { opacity: 1 },
    onRest: () => setIsAnimating(true),
  });

  return (
    <animated.div style={props}>
      <ConstellationScene />
    </animated.div>
  );
};

export default AnimatedConstellation;
