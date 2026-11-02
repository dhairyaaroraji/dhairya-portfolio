'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ArchitecturalSculpture() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Warm Ambient Lighting & Directional Spotlight
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff3d6, 2.5);
    dirLight.position.set(5, 8, 6);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0xb8934c, 1.2);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    // Materials: Travertine Stone & Brushed Gold/Brass
    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: 0xded8d0,
      roughness: 0.85,
      metalness: 0.1,
    });

    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.35,
      metalness: 0.85,
    });

    const darkGraniteMaterial = new THREE.MeshStandardMaterial({
      color: 0x242222,
      roughness: 0.7,
      metalness: 0.2,
    });

    // Group containing the architectural objects
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Classical Plinth Base
    const baseGeo = new THREE.CylinderGeometry(1.6, 1.7, 0.3, 48);
    const baseMesh = new THREE.Mesh(baseGeo, darkGraniteMaterial);
    baseMesh.position.y = -2.1;
    baseMesh.receiveShadow = true;
    sculptureGroup.add(baseMesh);

    // 2. Travertine Arch / Torus Section
    const archGeo = new THREE.TorusGeometry(1.4, 0.22, 24, 64, Math.PI);
    const archMesh = new THREE.Mesh(archGeo, stoneMaterial);
    archMesh.position.y = -1.0;
    archMesh.rotation.z = Math.PI;
    archMesh.castShadow = true;
    sculptureGroup.add(archMesh);

    // 3. Floating Brass Armillary Ring
    const brassRingGeo = new THREE.TorusGeometry(1.7, 0.05, 16, 64);
    const brassRing = new THREE.Mesh(brassRingGeo, brassMaterial);
    brassRing.position.y = 0.2;
    brassRing.rotation.x = Math.PI / 4;
    brassRing.castShadow = true;
    sculptureGroup.add(brassRing);

    const innerRingGeo = new THREE.TorusGeometry(1.2, 0.04, 16, 64);
    const innerRing = new THREE.Mesh(innerRingGeo, brassMaterial);
    innerRing.position.y = 0.2;
    innerRing.rotation.y = Math.PI / 3;
    sculptureGroup.add(innerRing);

    // 4. Central Geometric Polyhedron (The Core)
    const polyGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const polyMesh = new THREE.Mesh(polyGeo, stoneMaterial);
    polyMesh.position.y = 0.2;
    polyMesh.castShadow = true;
    sculptureGroup.add(polyMesh);

    // 5. Floating Polished Brass Sphere
    const sphereGeo = new THREE.SphereGeometry(0.28, 32, 32);
    const sphereMesh = new THREE.Mesh(sphereGeo, brassMaterial);
    sphereMesh.position.set(1.4, 1.5, 0.3);
    sphereMesh.castShadow = true;
    sculptureGroup.add(sphereMesh);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow organic rotation
      polyMesh.rotation.y = elapsedTime * 0.35;
      polyMesh.rotation.x = elapsedTime * 0.2;

      brassRing.rotation.z = elapsedTime * 0.25;
      innerRing.rotation.x = -elapsedTime * 0.3;

      sphereMesh.position.y = 1.4 + Math.sin(elapsedTime * 1.5) * 0.15;

      // Smooth parallax response
      sculptureGroup.rotation.y += (mouseX * 0.45 - sculptureGroup.rotation.y) * 0.05;
      sculptureGroup.rotation.x += (-mouseY * 0.35 - sculptureGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[460px] lg:min-h-[620px] relative flex items-center justify-center pointer-events-auto"
      style={{ cursor: 'grab' }}
      title="Interactive 3D Architectural Monolith (Move mouse to rotate)"
    />
  );
}
