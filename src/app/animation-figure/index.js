// 'use client';
// import { useEffect } from 'react';
// import * as THREE from 'three';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// export default function FigureAnimation() {
// 	useEffect(() => {
// 		gsap.registerPlugin(ScrollTrigger);

// 		let scene,
// 			camera,
// 			renderer,
// 			prisms = [];
// 		let initialPositions = [];
// 		let finalPositions = [];

// 		function init() {
// 			// Создаем сцену
// 			scene = new THREE.Scene();

// 			// Создаем камеру
// 			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 			camera.position.z = 5;

// 			// Создаем рендерер
// 			renderer = new THREE.WebGLRenderer({ antialias: true });
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 			renderer.setClearColor('#ccc');
// 			document.body.appendChild(renderer.domElement);

// 			// Добавляем освещение
// 			// const light = new THREE.DirectionalLight(0xffffff, 1);
// 			// const light = new THREE.DirectionalLight(0xffffff, 0.9);
// 			// light.position.set(1, 1, 1).normalize();
// 			// scene.add(light);
// 			//!
// 			const light1 = new THREE.DirectionalLight(0xffffff, 1);
// 			light1.position.set(10, 10, 10);
// 			scene.add(light1);

// 			const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
// 			light2.position.set(-10, -10, -10);
// 			scene.add(light2);
// 			//!

// 			// Создаем призмы
// 			const geometry = new THREE.BoxGeometry(1, 0.3, 1);
// 			for (let i = 0; i < 50; i++) {
// 				const material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });

// 				const prism = new THREE.Mesh(geometry, material);
// 				prism.position.x = Math.random() * 10 - 5;
// 				prism.position.y = Math.random() * 10 - 5;
// 				prism.position.z = Math.random() * 10 - 5;
// 				scene.add(prism);
// 				prisms.push(prism);
// 			}

// 			// Сохраняем начальные и финальные позиции после создания призм
// 			initialPositions = prisms.map((prism) => ({ x: prism.position.x, y: prism.position.y, z: prism.position.z }));
// 			// finalPositions = prisms.map(() => ({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: 0 }));
// 			finalPositions = prisms.map(() => ({ x: 1, y: 0, z: 2 }));

// 			prisms.forEach((prism, index) => {
// 				const finalPosition = finalPositions[index];

// 				gsap.to(prism.position, {
// 					x: finalPosition.x,
// 					y: finalPosition.y,
// 					z: finalPosition.z,
// 					scrollTrigger: {
// 						trigger: document.body,
// 						start: 'top top',
// 						end: 'bottom bottom',
// 						scrub: true,
// 					},
// 				});

// 				gsap.to(prism.rotation, {
// 					x: '+=2',
// 					y: '+=2',
// 					scrollTrigger: {
// 						trigger: document.body,
// 						start: 'top top',
// 						end: 'bottom bottom',
// 						scrub: true,
// 					},
// 				});
// 			});

// 			animate();
// 		}

// 		function animate() {
// 			requestAnimationFrame(animate);
// 			renderer.render(scene, camera);
// 		}

// 		init();
// 	});

// 	return <main></main>;
// }
//!

// 'use client';
// import { useEffect } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import gsap from 'gsap';

// export default function FigureAnimation() {
// 	useEffect(() => {
// 		// Сцена и камера
// 		const scene = new THREE.Scene();
// 		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 		const renderer = new THREE.WebGLRenderer();
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		document.body.appendChild(renderer.domElement);

// 		// Контролы
// 		const controls = new OrbitControls(camera, renderer.domElement);
// 		controls.enableDamping = true;
// 		controls.dampingFactor = 0.25;
// 		controls.enableZoom = true;

// 		// Создание текстуры
// 		const loader = new THREE.TextureLoader();
// 		const texture = loader.load('hero.jpg', (texture) => {
// 			// Создание геометрии и материала после загрузки текстуры
// 			const geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
// 			const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

// 			const plane = new THREE.Mesh(geometry, material);
// 			scene.add(plane);

// 			// Позиционирование камеры
// 			camera.position.z = 15;

// 			// Анимация (простое вращение для проверки)
// 			gsap.to(plane.rotation, {
// 				duration: 5,
// 				y: Math.PI * 2, // Полный оборот
// 				ease: 'power2.inOut',
// 				repeat: -1, // Повторять бесконечно
// 			});

// 			// Анимационный цикл
// 			const animate = () => {
// 				requestAnimationFrame(animate);
// 				controls.update();
// 				renderer.render(scene, camera);
// 			};
// 			animate();
// 		});

// 		loader.onError = (error) => {
// 			console.error('Ошибка загрузки текстуры:', error);
// 		};

// 		// Обработчик изменения размера окна
// 		const onWindowResize = () => {
// 			camera.aspect = window.innerWidth / window.innerHeight;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 		};
// 		window.addEventListener('resize', onWindowResize, false);

// 		// Очистка эффекта
// 		return () => {
// 			window.removeEventListener('resize', onWindowResize);
// 			document.body.removeChild(renderer.domElement);
// 		};
// 	}, []);

// 	return <main></main>;
// }

// //!
// 'use client';
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function FigureAnimation() {
// 	const containerRef = useRef(null);

// 	useEffect(() => {
// 		//! scene
// 		const scene = new THREE.Scene();

// 		//! camera
// 		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 		camera.position.set(0, 0, 15);
// 		camera.lookAt(0, 0, 0);

// 		//! render
// 		const renderer = new THREE.WebGLRenderer({ antialias: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		if (containerRef.current) {
// 			containerRef.current.appendChild(renderer.domElement);
// 		}

// 		//! create cylinder with different colors
// 		const radiusTop = 5;
// 		const radiusBottom = 5;
// 		const height = 10;
// 		const radialSegments = 10;
// 		const colors = [
// 			'#ff0000', // Red
// 			'#00ff00', // Green
// 			'#0000ff', // Blue
// 			'#ffff00', // Yellow
// 			'#ff00ff', // Magenta
// 			'#00ffff', // Cyan
// 		];

// 		const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);

// 		//Create colors for the sides
// 		const sideColors = new Float32Array(geometry.attributes.position.count * 3);
// 		for (let i = 0; i < geometry.attributes.position.count; i++) {
// 			const color = new THREE.Color(colors[i % colors.length]);
// 			sideColors[i * 3] = color.r;
// 			sideColors[i * 3 + 1] = color.g;
// 			sideColors[i * 3 + 2] = color.b;
// 		}
// 		geometry.setAttribute('color', new THREE.BufferAttribute(sideColors, 3));

// 		const sideMaterial = new THREE.MeshBasicMaterial({ vertexColors: true });
// 		const topBottomMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });

// 		const cylinder = new THREE.Mesh(geometry, sideMaterial);

// 		// Create and add top and bottom caps
// 		const topGeometry = new THREE.CircleGeometry(radiusTop, radialSegments);
// 		const bottomGeometry = new THREE.CircleGeometry(radiusBottom, radialSegments);
// 		topGeometry.rotateX(Math.PI / 2);
// 		bottomGeometry.rotateX(-Math.PI / 2);

// 		const topMesh = new THREE.Mesh(topGeometry, topBottomMaterial);
// 		const bottomMesh = new THREE.Mesh(bottomGeometry, topBottomMaterial);

// 		topMesh.position.set(0, height / 2, 0);
// 		bottomMesh.position.set(0, -height / 2, 0);

// 		scene.add(cylinder);
// 		scene.add(topMesh);
// 		scene.add(bottomMesh);

// 		const animate = () => {
// 			requestAnimationFrame(animate);
// 			renderer.render(scene, camera);
// 		};
// 		animate();

// 		// GSAP animation
// 		// gsap.to(cylinder.rotation, {
// 		// 	z: Math.PI * 2,
// 		// 	duration: 5,
// 		// 	repeat: -1,
// 		// 	ease: 'none',
// 		// });

// 		// Make cylinder draggable
// 		const onMouseDown = (event) => {
// 			event.preventDefault();
// 			const startX = event.clientX;
// 			const startY = event.clientY;
// 			const startRotationX = cylinder.rotation.x;
// 			const startRotationY = cylinder.rotation.y;

// 			const onMouseMove = (event) => {
// 				const deltaX = event.clientX - startX;
// 				const deltaY = event.clientY - startY;
// 				cylinder.rotation.x = startRotationX + deltaY * 0.01;
// 				cylinder.rotation.y = startRotationY + deltaX * 0.01;
// 			};

// 			const onMouseUp = () => {
// 				document.removeEventListener('mousemove', onMouseMove);
// 				document.removeEventListener('mouseup', onMouseUp);
// 			};

// 			document.addEventListener('mousemove', onMouseMove);
// 			document.addEventListener('mouseup', onMouseUp);
// 		};

// 		renderer.domElement.addEventListener('mousedown', onMouseDown);

// 		const handleResize = () => {
// 			camera.aspect = window.innerWidth / window.innerHeight;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 		};
// 		window.addEventListener('resize', handleResize);

// 		return () => {
// 			if (containerRef.current) {
// 				containerRef.current.removeChild(renderer.domElement);
// 			}
// 			window.removeEventListener('resize', handleResize);
// 			renderer.domElement.removeEventListener('mousedown', onMouseDown);
// 		};
// 	}, []);

// 	return <main ref={containerRef}></main>;
// }
//! cnter
// 'use client';
// import { useEffect } from 'react';
// import * as THREE from 'three';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function FigureAnimation() {
// 	useEffect(() => {
// 		// Сцена, камера и рендерер
// 		const scene = new THREE.Scene();
// 		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
// 		const renderer = new THREE.WebGLRenderer({ antialias: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		document.body.appendChild(renderer.domElement);

// 		// Загрузка текстуры
// 		const loader = new THREE.TextureLoader();
// 		loader.load(
// 			'hero.jpg',
// 			(texture) => {
// 				// Создание плоскости
// 				const width = 10;
// 				const height = 10;
// 				const widthSegments = 100;
// 				const heightSegments = 100;
// 				const planeGeometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
// 				const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
// 				const plane = new THREE.Mesh(planeGeometry, material);
// 				scene.add(plane);

// 				camera.position.z = 20;

// 				// Анимация сворачивания плоскости в трубочку
// 				ScrollTrigger.create({
// 					trigger: document.body,
// 					start: 'top top',
// 					end: 'bottom bottom',
// 					scrub: true,
// 					onUpdate: (self) => {
// 						const progress = self.progress;
// 						const angle = Math.PI * progress; // Угол сворачивания

// 						for (let i = 0; i <= widthSegments; i++) {
// 							const u = i / widthSegments;
// 							const theta = angle * (u - 0.5); // Угол для текущего сегмента (сдвиг от центра)
// 							const cosTheta = Math.cos(theta);
// 							const sinTheta = Math.sin(theta);

// 							for (let j = 0; j <= heightSegments; j++) {
// 								const index = i * (heightSegments + 1) + j;
// 								const x = planeGeometry.parameters.width * (u - 0.5);
// 								const y = planeGeometry.parameters.height * (j / heightSegments - 0.5);
// 								planeGeometry.attributes.position.setXYZ(index, cosTheta * x, y, sinTheta * x);
// 							}
// 						}

// 						planeGeometry.attributes.position.needsUpdate = true;
// 					},
// 				});

// 				// Функция анимации
// 				const animate = () => {
// 					requestAnimationFrame(animate);
// 					renderer.render(scene, camera);
// 				};
// 				animate();
// 			},
// 			undefined,
// 			(error) => {
// 				console.error('Ошибка загрузки текстуры:', error);
// 			}
// 		);

// 		// Обработчик изменения размера окна
// 		const onWindowResize = () => {
// 			camera.aspect = window.innerWidth / window.innerHeight;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 		};
// 		window.addEventListener('resize', onWindowResize, false);

// 		// Очистка эффекта
// 		return () => {
// 			window.removeEventListener('resize', onWindowResize);
// 			document.body.removeChild(renderer.domElement);
// 		};
// 	}, []);

// 	return <main></main>;
// }
//!
// 'use client';
// import { useEffect } from 'react';
// import * as THREE from 'three';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function FigureAnimation() {
// 	useEffect(() => {
// 		const scene = new THREE.Scene();
// 		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
// 		const renderer = new THREE.WebGLRenderer({ antialias: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		document.body.appendChild(renderer.domElement);

// 		// Загрузка текстуры
// 		const loader = new THREE.TextureLoader();
// 		loader.load(
// 			'hero.jpg',
// 			(texture) => {
// 				console.log(texture);
// 				const width = 10;
// 				const height = 10;
// 				const widthSegments = 100;
// 				const heightSegments = 100;
// 				const planeGeometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
// 				const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
// 				const plane = new THREE.Mesh(planeGeometry, material);
// 				scene.add(plane);
// 				texture.colorSpace = 'srgb';

// 				camera.position.z = 20;
// 				// plane.rotation.z = -Math.PI / 2;

// 				ScrollTrigger.create({
// 					trigger: document.body,
// 					start: 'top top',
// 					end: 'bottom bottom',
// 					scrub: true,
// 					onUpdate: (self) => {
// 						const progress = self.progress;
// 						const angle = Math.PI * progress;

// 						for (let i = 0; i <= widthSegments; i++) {
// 							const u = i / widthSegments;
// 							const theta = angle * u;
// 							const cosTheta = Math.cos(theta);
// 							const sinTheta = Math.sin(theta);

// 							for (let j = 0; j <= heightSegments; j++) {
// 								const index = i * (heightSegments + 1) + j;
// 								const x = planeGeometry.parameters.width * (u - 0.5);
// 								const y = planeGeometry.parameters.height * (j / heightSegments - 0.5);
// 								const newX = cosTheta * x - sinTheta * 0;
// 								const newZ = sinTheta * x + cosTheta * 0;
// 								planeGeometry.attributes.position.setXYZ(index, newX, y, newZ);
// 							}
// 						}

// 						planeGeometry.attributes.position.needsUpdate = true;
// 					},
// 				});

// 				const animate = () => {
// 					requestAnimationFrame(animate);
// 					renderer.render(scene, camera);
// 				};
// 				animate();
// 			},
// 			undefined,
// 			(error) => {
// 				console.error('Ошибка загрузки текстуры:', error);
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
// 			document.body.removeChild(renderer.domElement);
// 		};
// 	}, []);

// 	return <main></main>;
// }
//! verjnakan
// 'use client';
// import { useEffect } from 'react';
// import * as THREE from 'three';

// export default function FigureAnimation() {
// 	useEffect(() => {
// 		THREE.ColorManagement.legacyMode = false;
// 		THREE.ColorManagement.enabled = true;
// 		const scene = new THREE.Scene();
// 		const camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 0.1, 1000);
// 		const renderer = new THREE.WebGLRenderer({ antialias: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		renderer.setPixelRatio(window.devicePixelRatio);
// 		console.log(THREE.ColorManagement);

// 		const canvasContainer = document.getElementById('canvas-container');
// 		canvasContainer.appendChild(renderer.domElement);

// 		const loader = new THREE.TextureLoader();
// 		const imageSrc = 'hero.jpg';
// 		loader.load(
// 			imageSrc,
// 			(texture) => {
// 				console.log(texture);
// 				texture.colorSpace = 'display-p3';
// 				const sizePhoto = texture.image.width / texture.image.height;
// 				const width = sizePhoto * window.innerHeight;
// 				const height = window.innerHeight;
// 				const planeGeometry = new THREE.PlaneGeometry(width, height);
// 				const material = new THREE.MeshBasicMaterial({ map: texture });

// 				const plane = new THREE.Mesh(planeGeometry, material);
// 				plane.position.set(0, 0, 0);
// 				scene.add(plane);

// 				camera.position.z = 1;
// 			},
// 			undefined,
// 			(error) => {
// 				console.error('Ошибка загрузки текстуры:', error);
// 			}
// 		);

// 		const animate = () => {
// 			requestAnimationFrame(animate);
// 			renderer.render(scene, camera);
// 		};
// 		animate();

// 		const onWindowResize = () => {
// 			camera.left = window.innerWidth / -2;
// 			camera.right = window.innerWidth / 2;
// 			camera.top = window.innerHeight / 2;
// 			camera.bottom = window.innerHeight / -2;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 		};
// 		window.addEventListener('resize', onWindowResize, false);

// 		return () => {
// 			window.removeEventListener('resize', onWindowResize);
// 			canvasContainer.removeChild(renderer.domElement);
// 		};
// 	}, []);

// 	return <main id='canvas-container'></main>;
// }
//! ......... image prizm
// 'use client';
// import { useEffect } from 'react';
// import * as THREE from 'three';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function FigureAnimation() {
// 	useEffect(() => {
// 		const scene = new THREE.Scene();
// 		const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 4000);
// 		const renderer = new THREE.WebGLRenderer({ antialias: true });
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		document.body.appendChild(renderer.domElement);

// 		// Загрузка текстуры
// 		const loader = new THREE.TextureLoader();
// 		loader.load(
// 			'hero.jpg',
// 			(texture) => {
// 				console.log(texture);
// 				const width = 10;
// 				const height = 10;
// 				const widthSegments = 100;
// 				const heightSegments = 100;
// 				const planeGeometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
// 				const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
// 				const plane = new THREE.Mesh(planeGeometry, material);
// 				scene.add(plane);
// 				texture.colorSpace = 'srgb';

// 				camera.position.z = 15;
// 				// plane.rotation.z = -Math.PI / 2;

// 				ScrollTrigger.create({
// 					trigger: document.body,
// 					start: 'top top',
// 					end: 'bottom bottom',
// 					scrub: true,
// 					onUpdate: (self) => {
// 						const progress = self.progress;
// 						const angle = Math.PI * progress;

// 						for (let i = 0; i <= widthSegments; i++) {
// 							const u = i / widthSegments;
// 							const theta = angle * u;
// 							const cosTheta = Math.cos(theta);
// 							const sinTheta = Math.sin(theta);

// 							for (let j = 0; j <= heightSegments; j++) {
// 								const index = i * (heightSegments + 1) + j;
// 								const x = planeGeometry.parameters.width * (u - 0.5);
// 								const y = planeGeometry.parameters.height * (j / heightSegments - 0.5);
// 								const newX = cosTheta * x - sinTheta * 0;
// 								const newZ = sinTheta * x + cosTheta * 0;
// 								planeGeometry.attributes.position.setXYZ(index, newX, y, newZ);
// 							}
// 						}

// 						planeGeometry.attributes.position.needsUpdate = true;
// 					},
// 				});

// 				const animate = () => {
// 					requestAnimationFrame(animate);
// 					renderer.render(scene, camera);
// 				};
// 				animate();
// 			},
// 			undefined,
// 			(error) => {
// 				console.error('Ошибка загрузки текстуры:', error);
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
// 			document.body.removeChild(renderer.domElement);
// 		};
// 	}, []);

// 	return <main></main>;
// }

//! image tester
'use client';
import { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FigureAnimation() {
	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 4000);
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		// Загрузка текстуры
		const loader = new THREE.TextureLoader();
		loader.load(
			'hero.jpg',
			(texture) => {
				console.log(texture);
				const width = 10;
				const height = 10;
				const widthSegments = 100;
				const heightSegments = 100;
				const planeGeometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
				const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
				const plane = new THREE.Mesh(planeGeometry, material);
				scene.add(plane);
				texture.colorSpace = 'srgb';

				camera.position.z = 15;
				// plane.rotation.z = -Math.PI / 2;

				ScrollTrigger.create({
					trigger: document.body,
					start: 'top top',
					end: 'bottom bottom',
					scrub: true,
					onUpdate: (self) => {
						const progress = self.progress;
						const angle = Math.PI * progress;

						for (let i = 0; i <= widthSegments; i++) {
							const u = i / widthSegments;
							const theta = angle * u;
							const cosTheta = Math.cos(theta);
							const sinTheta = Math.sin(theta);

							for (let j = 0; j <= heightSegments; j++) {
								const index = i * (heightSegments + 1) + j;
								const x = planeGeometry.parameters.width * (u - 0.5);
								const y = planeGeometry.parameters.height * (j / heightSegments - 0.5);
								const newX = cosTheta * x - sinTheta * 0;
								const newZ = sinTheta * x + cosTheta * 0;
								planeGeometry.attributes.position.setXYZ(index, newX, y, newZ);
							}
						}

						planeGeometry.attributes.position.needsUpdate = true;
					},
				});

				const animate = () => {
					requestAnimationFrame(animate);
					renderer.render(scene, camera);
				};
				animate();
			},
			undefined,
			(error) => {
				console.error('Ошибка загрузки текстуры:', error);
			}
		);

		const onWindowResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', onWindowResize, false);

		return () => {
			window.removeEventListener('resize', onWindowResize);
			document.body.removeChild(renderer.domElement);
		};
	}, []);

	return <main></main>;
}
