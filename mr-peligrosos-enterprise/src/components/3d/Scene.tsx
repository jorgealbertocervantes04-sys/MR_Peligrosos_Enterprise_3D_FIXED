import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { SafetyDiamond } from "./SafetyDiamond";
import { TruckModel } from "./TruckModel";

type SceneProps = {
  mode: "diamond" | "truck";
};

export function Scene({ mode }: SceneProps) {
  return (
    <div className="canvas-shell absolute inset-0">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[9, 6, 12]} fov={45} />

          <ambientLight intensity={0.65} />

          <directionalLight
            position={[8, 12, 6]}
            intensity={2.2}
            castShadow
          />

          <pointLight
            position={[-6, 5, -2]}
            intensity={18}
            color="#22d3ee"
            distance={15}
          />

          <Environment preset="city" />

          {mode === "diamond" ? (
            <group position={[0, 2.3, 0]}>
              <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.5}>
                <SafetyDiamond />
              </Float>

              <Text
                position={[0, -2.5, 0]}
                fontSize={0.3}
                color="#cbd5e1"
                anchorX="center"
                anchorY="middle"
              >
                NFPA 704
              </Text>
            </group>
          ) : (
            <group position={[0, -0.6, 0]} scale={0.78}>
              <TruckModel />
            </group>
          )}

          <OrbitControls
            enablePan={false}
            minDistance={7}
            maxDistance={20}
            target={[0, 1.2, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
