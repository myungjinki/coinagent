"use client";

import { useEffect, useRef } from "react";

import * as THREE from "three";

export default function BackgroundAnimation() {
	const mountRef = useRef<HTMLDivElement>(null);
	const directionRef = useRef({ x: 0.1, y: 0 });

	useEffect(() => {
		const mount = mountRef.current;
		if (!mount) return;

		// Scene setup
		const width = window.innerWidth * 0.7;
		const height = window.innerHeight * 0.7;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(width, height);
		renderer.setClearColor(0x000000, 0); // Set background to transparent

		mount.appendChild(renderer.domElement);

		// Create snake
		const snakeLength = 8;
		const snake: THREE.Line[] = [];
		const geometry = new THREE.SphereGeometry(2, 1, 1); // Use SphereGeometry for rounded segments
		const edges = new THREE.EdgesGeometry(geometry); // Create edges geometry

		for (let i = 0; i < snakeLength; i++) {
			const color = new THREE.Color(`hsl(${(i / snakeLength) * 360}, 100%, 50%)`); // Rainbow color
			const material = new THREE.LineBasicMaterial({ color });
			const segment = new THREE.LineSegments(edges, material);
			segment.position.x = -i;
			snake.push(segment);
			scene.add(segment);
		}

		camera.position.z = 10;
		// Handle mouse move

		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			const centerX = width / 2;
			const centerY = height / 2;

			const deltaX = clientX - centerX;
			const deltaY = clientY - centerY;

			const angle = Math.atan2(deltaY, deltaX);
			const speed = 0.05;

			directionRef.current = { x: -speed * Math.cos(-angle), y: speed * Math.sin(angle) };
		};

		window.addEventListener("mousemove", handleMouseMove);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);

			// Move snake
			for (let i = snake.length - 1; i > 0; i--) {
				snake[i].position.copy(snake[i - 1].position);
			}
			snake[0].position.x += directionRef.current.x;
			snake[0].position.y += directionRef.current.y;
			// Convert window dimensions to world coordinates
			let halfWidth = (width / height) * camera.position.z;
			let halfHeight = camera.position.z;

			halfWidth -= 6;
			halfHeight -= 6;

			// Check for collision with window edges
			if (snake[0].position.x < -halfWidth || snake[0].position.x > halfWidth) {
				directionRef.current.x = -directionRef.current.x;
			}
			if (snake[0].position.y < -halfHeight || snake[0].position.y > halfHeight) {
				directionRef.current.y = -directionRef.current.y;
			}

			// Move back the snake if it goes out of bounds
			if (snake[0].position.x < -halfWidth) {
				snake[0].position.x = -halfWidth;
			}
			if (snake[0].position.x > halfWidth) {
				snake[0].position.x = halfWidth;
			}
			if (snake[0].position.y < -halfHeight) {
				snake[0].position.y = -halfHeight;
			}
			if (snake[0].position.y > halfHeight) {
				snake[0].position.y = halfHeight;
			}

			renderer.render(scene, camera);
		};

		// Set initial direction to 50 degrees
		const initialAngle = THREE.MathUtils.degToRad(10);
		directionRef.current = { x: 0.1 * Math.cos(initialAngle), y: 0.1 * Math.sin(initialAngle) };

		animate();

		// Cleanup on unmount
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			mount.removeChild(renderer.domElement);
		};
	}, []);

	return <div ref={mountRef}></div>;
}
