'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export default function TitleAnim() {
	const mainCanvasRef = useRef();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0xffffff);

		//! camera
		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
		camera.position.set(0, 0, 15);
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		mainCanvasRef.current.appendChild(renderer.domElement);
		renderer.setPixelRatio(window.devicePixelRatio);

		//! Light
		// const ambientLight = new THREE.AmbientLight(0x404040);
		// scene.add(ambientLight);

		// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		// directionalLight.position.set(10, 10, 10);
		// scene.add(directionalLight);
		//!
		const light1 = new THREE.DirectionalLight(0xffffff, 1);
		light1.position.set(10, 10, 10);
		scene.add(light1);

		const light2 = new THREE.DirectionalLight(0xffffff, 1);
		light2.position.set(-10, -10, -10);
		scene.add(light2);

		//!

		const loader = new FontLoader();
		loader.load(
			'fonts/fonts-canvas/edu.json',
			(font) => {
				console.log('Font loaded successfully');
				const words = 'Concept Studio';

				const letterMeshes = [];
				const letterWidth = 1; // letter width
				const spacing = 0.2; // letter space
				const widthItem = []; //width

				words.split('').forEach((letter, index) => {
					const textGeometry = new TextGeometry(letter, {
						font: font,
						size: letterWidth, // Size Shrift
						depth: 0.3, // Xorutyun
					});
					//!
					textGeometry.computeBoundingBox();
					const boundingBox = textGeometry.boundingBox;
					const width = boundingBox.max.x - boundingBox.min.x;
					if (width != Infinity) {
						if (width != -Infinity) {
							widthItem.push(width + spacing);
						} else {
							widthItem.push(letterWidth / 2);
						}
					} else {
						widthItem.push(letterWidth / 2);
					}
					//!

					const textMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
					const textMesh = new THREE.Mesh(textGeometry, textMaterial);

					//!start position
					const angle = Math.random() * Math.PI * 2; //angle
					const radius = Math.random() * 10; // distance

					textMesh.position.set(
						radius * Math.cos(angle), // X
						radius * Math.sin(angle), // Y
						Math.random() * 10 - 5 // Z
					);

					textMesh.rotation.set(
						Math.random() * Math.PI, // raotate  X
						Math.random() * Math.PI, // raotate  Y
						Math.random() * Math.PI // raotate  Z
					);

					scene.add(textMesh);
					letterMeshes.push(textMesh);
				});

				const totalWidth = widthItem.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

				const startX = -totalWidth / 2;
				letterMeshes.forEach((mesh, index) => {
					//! End coordinate
					const endX = startX + widthItem.slice(0, index).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

					gsap.fromTo(
						mesh.position,
						{
							x: mesh.position.x,
							y: mesh.position.y,
							z: mesh.position.z,
						},
						{
							x: endX,
							y: 0,
							z: 0,
							duration: 1,
							delay: index * 0.1,
							scrollTrigger: {
								trigger: 'body',
								start: 'top top',
								end: 'bottom bottom',
								scrub: true,
							},
						}
					);

					gsap.fromTo(
						mesh.rotation,
						{
							x: mesh.rotation.x,
							y: mesh.rotation.y,
							z: mesh.rotation.z,
						},
						{
							x: 0,
							y: 0,
							z: 0,
							duration: 1,
							delay: index * 0.1,
							scrollTrigger: {
								trigger: 'body',
								start: 'top top',
								end: 'bottom bottom',
								scrub: true,
							},
						}
					);
				});
			},
			undefined,
			(error) => {
				console.error('Error loading font', error);
			}
		);

		function animate() {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		}
		animate();

		window.addEventListener('resize', () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		});

		return () => {
			mainCanvasRef.current.removeChild(renderer.domElement);
		};
	}, []);

	return <main ref={mainCanvasRef}></main>;
}
