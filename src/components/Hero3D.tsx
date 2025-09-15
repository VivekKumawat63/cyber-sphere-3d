import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import * as THREE from 'three';
import cyberHeroBg from '@/assets/cyber-hero-bg.jpg';

interface CyberPanelProps {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  subtitle: string;
  color: string;
  onClick: () => void;
}

const CyberPanel: React.FC<CyberPanelProps> = ({ position, rotation, title, subtitle, color, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <Box
        ref={meshRef}
        args={[2, 3, 0.2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={hovered ? 0.8 : 0.6}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </Box>
      <Text
        position={[0, 0.5, 0.15]}
        fontSize={0.3}
        color="#00FFFF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/orbitron-regular.woff"
      >
        {title}
      </Text>
      <Text
        position={[0, -0.5, 0.15]}
        fontSize={0.15}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        {subtitle}
      </Text>
    </group>
  );
};

const Scene3D: React.FC<{ onPanelClick: (panel: string) => void }> = ({ onPanelClick }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const panels = [
    {
      title: "Ethical Hacking",
      subtitle: "Master the art of ethical penetration testing",
      position: [4, 0, 0] as [number, number, number],
      rotation: [0, -Math.PI / 2, 0] as [number, number, number],
      color: "#00FFFF",
      id: "ethical-hacking"
    },
    {
      title: "PenTesting",
      subtitle: "Real-world vulnerability assessment",
      position: [0, 0, 4] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      color: "#00FF00",
      id: "pentesting"
    },
    {
      title: "Cloud Security",
      subtitle: "Secure AWS, Azure, and GCP environments",
      position: [-4, 0, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, 0] as [number, number, number],
      color: "#6600FF",
      id: "cloud-security"
    },
    {
      title: "Digital Forensics",
      subtitle: "Investigate cybercrimes and recover evidence",
      position: [0, 0, -4] as [number, number, number],
      rotation: [0, Math.PI, 0] as [number, number, number],
      color: "#FF0099",
      id: "digital-forensics"
    }
  ];

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
      
      <group ref={groupRef}>
        {panels.map((panel, index) => (
          <CyberPanel
            key={index}
            position={panel.position}
            rotation={panel.rotation}
            title={panel.title}
            subtitle={panel.subtitle}
            color={panel.color}
            onClick={() => onPanelClick(panel.id)}
          />
        ))}
      </group>
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minDistance={8}
        maxDistance={15}
      />
    </>
  );
};

const Hero3D: React.FC = () => {
  const handlePanelClick = (panelId: string) => {
    console.log(`Clicked panel: ${panelId}`);
    // TODO: Navigate to specific course page
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 matrix-bg"
        style={{
          backgroundImage: `url(${cyberHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90"></div>
      
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Scene3D onPanelClick={handlePanelClick} />
        </Canvas>
      </div>
      
      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold text-gradient mb-6 animate-glow">
            Defend the Future
          </h1>
          <h2 className="font-rajdhani text-2xl md:text-3xl text-foreground/90 mb-8">
            Learn Cybersecurity Like Never Before
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the next generation of cybersecurity experts. Hands-on training in 
            Ethical Hacking, PenTesting, and Digital Forensics with immersive 3D learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="cyber-glow font-rajdhani text-lg px-8 py-6">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="cyber-border font-rajdhani text-lg px-8 py-6">
              Explore Courses
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-float">
        <div className="flex flex-col items-center">
          <span className="text-sm font-rajdhani mb-2">Interact with the panels</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;