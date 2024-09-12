// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import './style.css';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const RenderingComponent = () => {
// 	const renderingComponent = useRef();
// 	const canvasRef = useRef();

// 	useEffect(() => {
// 		const scene = new THREE.Scene();

// 		const geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10, 10, 10, 10);
// 		const material = new THREE.MeshBasicMaterial({ color: 'red', wireframe: true });
// 		const mesh = new THREE.Mesh(geometry, material);
// 		scene.add(mesh);

// 		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
// 		camera.position.z = 3;
// 		scene.add(camera);

// 		const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);

// 		const controls = new OrbitControls(camera, canvasRef.current);
// 		controls.enableDamping = true;
// 		// controls.dampingFactor = 0.25;
// 		controls.enableZoom = false;

// 		const animate = () => {
// 			requestAnimationFrame(animate);
// 			controls.update();
// 			renderer.render(scene, camera);
// 		};

// 		animate();

// 		const onWindowResize = () => {
// 			camera.aspect = window.innerWidth / window.innerHeight;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 		};

// 		window.addEventListener('resize', onWindowResize, false);

// 		return () => {
// 			window.removeEventListener('resize', onWindowResize);
// 		};
// 	}, []);

// 	return (
// 		<div
// 			className='renderingComponent'
// 			ref={renderingComponent}>
// 			<canvas ref={canvasRef}></canvas>
// 		</div>
// 	);
// };

// export default RenderingComponent;

//!
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import './style.css';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const RenderingComponent = () => {
// 	const renderingComponent = useRef();
// 	const canvasRef = useRef();

// 	useEffect(() => {
// 		const scene = new THREE.Scene();

// 		const geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10, 10, 10, 10);
// 		const material = new THREE.MeshBasicMaterial({ color: 'red', wireframe: true });
// 		const mesh = new THREE.Mesh(geometry, material);
// 		scene.add(mesh);

// 		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
// 		camera.position.z = 3;
// 		scene.add(camera);

// 		const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);

// 		const controls = new OrbitControls(camera, canvasRef.current);
// 		controls.enableDamping = true;
// 		// controls.dampingFactor = 0.25;
// 		controls.enableZoom = false;

// 		// //! light
// 		const whiteLight = new THREE.HemisphereLight('orange', 1);
// 		whiteLight.position.set(4, 2, 0);
// 		scene.add(whiteLight);

// 		const dirLight = new THREE.DirectionalLight('blue', 0.7);
// 		dirLight.position.set(0, 1, 0);
// 		scene.add(dirLight);

// 		const loader = new GLTFLoader();
// 		let mixer;
// 		loader.load(
// 			'/Fox.glb',
// 			(gltf) => {
// 				const model = gltf.scene;
// 				mixer = new THREE.AnimationMixer(gltf.scene);
// 				const action = mixer.AnimationMixer;
// 				console.log(mixer);
// 				// model.position.set(0, 0, 0);
// 				// console.log(mixer);
// 				// const action = mixer.clipAction(gltf.animations[0]);
// 				// action.play();
// 				model.traverse((node) => {
// 					if (node.isMesh) {
// 						// node.material = new THREE.MeshBasicMaterial({ color: 'blue', wireframe: true });
// 					}
// 				});
// 				model.position.set(0, 0, 0);
// 				model.scale.set(0.01, 0.01, 0.01);
// 				scene.add(model);
// 			},
// 			(xhr) => {
// 				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
// 			},
// 			(error) => {
// 				console.error('An error happened while loading the model', error);
// 			}
// 		);

// 		const animate = () => {
// 			requestAnimationFrame(animate);
// 			controls.update();
// 			renderer.render(scene, camera);
// 		};

// 		animate();

// 		const onWindowResize = () => {
// 			camera.aspect = window.innerWidth / window.innerHeight;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 		};

// 		window.addEventListener('resize', onWindowResize, false);

// 		return () => {
// 			window.removeEventListener('resize', onWindowResize);
// 		};
// 	}, []);

// 	return (
// 		<div
// 			className='renderingComponent'
// 			ref={renderingComponent}>
// 			<canvas ref={canvasRef}></canvas>
// 		</div>
// 	);
// };

// export default RenderingComponent;

//!!!

//!
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import './style.css';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const RenderingComponent = () => {
// 	const renderingComponent = useRef();
// 	const canvasRef = useRef();

// 	useEffect(() => {
// 		const scene = new THREE.Scene();

// 		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
// 		camera.position.z = 3;
// 		scene.add(camera);

// 		const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);

// 		const controls = new OrbitControls(camera, canvasRef.current);
// 		controls.enableDamping = true;
// 		// controls.dampingFactor = 0.25;
// 		controls.enableZoom = false;

// 		// //! light
// 		const whiteLight = new THREE.HemisphereLight('white', 'white', 1);
// 		whiteLight.position.set(0, 0, 0);
// 		scene.add(whiteLight);

// 		// const dirLight = new THREE.DirectionalLight('blue', 0.7);
// 		// dirLight.position.set(0, 1, 0);
// 		// scene.add(dirLight);

// 		const loader = new GLTFLoader();
// 		let mixer;
// 		loader.load(
// 			'/Fox-2.glb',
// 			(glb) => {
// 				console.log(glb);
// 				const model = glb.scene;
// 				mixer = new THREE.AnimationMixer(glb.scene);
// 				const action = mixer.clipAction(glb.animations[2]);
// 				console.log(action);
// 				action.play();
// 				model.traverse((node) => {
// 					if (node.isMesh) {
// 						// node.material = new THREE.MeshBasicMaterial({ color: 'blue', wireframe: true });
// 					}
// 				});
// 				model.position.set(0, -0.5, 0);
// 				model.scale.set(0.01, 0.01, 0.01);
// 				scene.add(model);
// 			},
// 			(xhr) => {
// 				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
// 			},
// 			(error) => {
// 				console.error('An error happened while loading the model', error);
// 			}
// 		);
// 		const clock = new THREE.Clock();

// 		const animate = () => {
// 			const delta = clock.getDelta();
// 			requestAnimationFrame(animate);
// 			controls.update();
// 			if (mixer) {
// 				mixer.update(delta);
// 			}
// 			renderer.render(scene, camera);
// 		};

// 		animate();

// 		const onWindowResize = () => {
// 			camera.aspect = window.innerWidth / window.innerHeight;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 		};

// 		window.addEventListener('resize', onWindowResize, false);

// 		return () => {
// 			window.removeEventListener('resize', onWindowResize);
// 		};
// 	}, []);

// 	return (
// 		<div
// 			className='renderingComponent'
// 			ref={renderingComponent}>
// 			<canvas ref={canvasRef}></canvas>
// 			<div>run</div>
// 			<div>speedrun</div>
// 		</div>
// 	);
// };

// export default RenderingComponent;
//! fox runing
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import './style.css';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const RenderingComponent = () => {
// 	const renderingComponent = useRef();
// 	const canvasRef = useRef();
// 	const [mixer, setMixer] = useState(null);
// 	const [actions, setActions] = useState([]);
// 	const [activeAction, setActiveAction] = useState(null);
// 	const [index, setIndex] = useState(0);

// 	useEffect(() => {
// 		const scene = new THREE.Scene();

// 		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
// 		camera.position.z = 3;
// 		scene.add(camera);

// 		const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 		const controls = new OrbitControls(camera, canvasRef.current);
// 		controls.enableDamping = true;
// 		controls.enableZoom = false;

// 		const whiteLight = new THREE.HemisphereLight('white', 'darkslategray', 1);
// 		scene.add(whiteLight);

// 		const loader = new GLTFLoader();
// 		const clock = new THREE.Clock();

// 		loader.load(
// 			'/Fox-2.glb',
// 			(glb) => {
// 				const model = glb.scene;
// 				const newMixer = new THREE.AnimationMixer(model);
// 				const newActions = glb.animations.map((animation) => newMixer.clipAction(animation));

// 				setMixer(newMixer);
// 				setActions(newActions);

// 				if (newActions.length > 0) {
// 					setActiveAction(newActions[index]);
// 					newActions[index].play();
// 				}

// 				model.position.set(0, -0.5, 0);
// 				model.scale.set(0.01, 0.01, 0.01);
// 				scene.add(model);

// 				const animate = () => {
// 					const delta = clock.getDelta();
// 					requestAnimationFrame(animate);
// 					controls.update();
// 					if (newMixer) {
// 						newMixer.update(delta);
// 					}
// 					renderer.render(scene, camera);
// 				};

// 				animate();
// 			},
// 			(xhr) => {
// 				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
// 			},
// 			(error) => {
// 				console.error('An error happened while loading the model', error);
// 			}
// 		);

// 		const onWindowResize = () => {
// 			camera.aspect = window.innerWidth / window.innerHeight;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 		};

// 		window.addEventListener('resize', onWindowResize, false);

// 		return () => {
// 			window.removeEventListener('resize', onWindowResize);
// 			if (renderer) {
// 				renderer.dispose();
// 			}
// 			if (scene) {
// 				scene.clear();
// 			}
// 		};
// 	}, []);

// 	useEffect(() => {
// 		if (mixer && actions.length > 0) {
// 			const newAction = actions[index];
// 			if (activeAction) {
// 				activeAction.crossFadeTo(newAction, 0.5).play();
// 			} else {
// 				newAction.fadeIn(0.5).play();
// 			}
// 			setActiveAction(newAction);
// 		}
// 	}, [index, mixer, actions]);

// 	const handleAnimationChange = (newIndex) => {
// 		setIndex(newIndex);
// 	};

// 	return (
// 		<div
// 			className='renderingComponent'
// 			ref={renderingComponent}>
// 			<canvas ref={canvasRef}></canvas>
// 			<div onClick={() => handleAnimationChange(0)}>run</div>
// 			<div onClick={() => handleAnimationChange(1)}>speedrun</div>
// 			<div onClick={() => handleAnimationChange(2)}>jump</div>
// 		</div>
// 	);
// };

// export default RenderingComponent;
//! wine
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const RenderingComponent = () => {
	const renderingComponent = useRef();
	const canvasRef = useRef();
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
		camera.position.z = 20;
		scene.add(camera);

		const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);

		const controls = new OrbitControls(camera, canvasRef.current);
		controls.enableDamping = true;
		// controls.dampingFactor = 0.25;
		controls.enableZoom = false;

		//! light
		const dirLight = new THREE.DirectionalLight('white', 1);
		dirLight.position.set(1, 1, 1);
		scene.add(dirLight);

		//! texture
		const glassMaterial = new THREE.MeshPhysicalMaterial({
			roughness: 0,
			transmission: 0.5,
			thickness: 0.5,
		});

		// const bgTexture = new THREE.TextureLoader().load('1.jpg');

		// const bgGeometry = new THREE.PlaneGeometry(5, 5);
		// const bgMaterial = new THREE.MeshBasicMaterial({ map: bgTexture });
		// const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
		// bgMesh.position.set(0, 0, -5);
		// bgMesh.scale.set(2, 2, 2);
		// scene.add(bgMesh);

		const loader = new GLTFLoader();
		let mixer;
		loader.load(
			'/wine.gltf',
			(glb) => {
				const model = glb.scene;
				mixer = new THREE.AnimationMixer(glb.scene);
				console.log(glb);
				const action = mixer.clipAction(glb.animations[0]);

				action.time = 0;
				action.play();
				action.paused = true;
				mixer.update(0);

				// const action = mixer.clipAction(glb.animations[0]);
				// action.setLoop(THREE.LoopOnce);
				// action.clampWhenFinished = true;
				// action.play();
				// action.paused = true;

				model.traverse((node) => {
					if (node.isMesh) {
						node.material = glassMaterial;
						// 	node.material = new THREE.MeshBasicMaterial({ color: 'black', wireframe: true });
					}
				});
				model.position.set(0, -0.5, 0);
				model.scale.set(0.01, 0.01, 0.01);
				scene.add(model);
				gsap.to(action, {
					duration: glb.animations[0].duration,
					time: glb.animations[0].duration,

					scrollTrigger: {
						trigger: renderingComponent.current,
						start: 'top top',
						end: 'bottom bottom',
						scrub: true,
						markers: true,
					},
					onUpdate: () => {
						action.paused = false;
						mixer.update(0);
						action.paused = true;
					},
				});
			},
			(xhr) => {
				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
			},
			(error) => {
				console.error('An error happened while loading the model', error);
			}
		);
		const clock = new THREE.Clock();

		const animate = () => {
			const delta = clock.getDelta();
			// 	if (mixer) {
			// 		mixer.update(delta);
			// 	}
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		};

		animate();

		const onWindowResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		};

		window.addEventListener('resize', onWindowResize, false);

		return () => {
			window.removeEventListener('resize', onWindowResize);
		};
	}, []);

	return (
		<div
			className='renderingComponent'
			ref={renderingComponent}>
			<canvas ref={canvasRef}></canvas>
		</div>
	);
};

export default RenderingComponent;
//! wine-texture
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import './style.css';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import gsap from 'gsap/all';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const RenderingComponent = () => {
// 	const renderingComponent = useRef();
// 	const canvasRef = useRef();
// 	gsap.registerPlugin(ScrollTrigger);

// 	useEffect(() => {
// 		const scene = new THREE.Scene();
// 		const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);

// 		let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
// 		camera.position.set(0, 0, 20);
// 		scene.add(camera);

// 		const controls = new OrbitControls(camera, canvasRef.current);
// 		controls.enableDamping = true;
// 		controls.enableZoom = false;

// 		const loader = new GLTFLoader();
// 		let mixer;
// 		loader.load(
// 			'/wine-3.gltf',
// 			(glb) => {
// 				console.log(glb);
// 				const model = glb.scene;
// 				mixer = new THREE.AnimationMixer(model);
// 				const action = mixer.clipAction(glb.animations[0]);

// 				action.time = 0;
// 				action.play();
// 				action.paused = true;
// 				mixer.update(0);

// 				model.position.set(0, -0.5, 0);
// 				model.scale.set(0.01, 0.01, 0.01);
// 				scene.add(model);

// 				//! camera file
// 				if (glb.cameras.length > 0) {
// 					const gltfCamera = glb.cameras[0];
// 					gltfCamera.aspect = window.innerWidth / window.innerHeight;
// 					gltfCamera.updateProjectionMatrix();
// 					camera = gltfCamera;
// 					camera.position.set(10, 10, 10);
// 					controls.object = camera; // Update controls to use the new camera
// 					scene.add(camera);
// 				}

// 				//!textures
// 				model.traverse((child) => {
// 					if (child.isMesh) {
// 						const mesh = child;
// 						const material = mesh.material;
// 						if (material.map) {
// 							console.log('Texture found:', material.map);
// 						} else {
// 							console.log('No texture found on', mesh.name);
// 						}
// 					}
// 				});

// 				//! light file
// 				model.traverse((child) => {
// 					if (child.isLight) {
// 						scene.add(child);
// 					}
// 				});

// 				gsap.to(action, {
// 					duration: glb.animations[0].duration,
// 					time: glb.animations[0].duration,
// 					scrollTrigger: {
// 						trigger: renderingComponent.current,
// 						start: 'top top',
// 						end: 'bottom bottom',
// 						scrub: true,
// 						markers: true,
// 					},
// 					onUpdate: () => {
// 						action.paused = false;
// 						mixer.update(0);
// 						action.paused = true;
// 					},
// 				});
// 			},
// 			(xhr) => {
// 				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
// 			},
// 			(error) => {
// 				console.error('An error happened while loading the model', error);
// 			}
// 		);

// 		const animate = () => {
// 			requestAnimationFrame(animate);
// 			controls.update();
// 			renderer.render(scene, camera);
// 		};

// 		animate();

// 		const onWindowResize = () => {
// 			camera.aspect = window.innerWidth / window.innerHeight;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 		};

// 		window.addEventListener('resize', onWindowResize, false);

// 		return () => {
// 			window.removeEventListener('resize', onWindowResize);
// 		};
// 	}, []);

// 	return (
// 		<div
// 			className='renderingComponent'
// 			ref={renderingComponent}>
// 			<canvas ref={canvasRef}></canvas>
// 		</div>
// 	);
// };

// export default RenderingComponent;
