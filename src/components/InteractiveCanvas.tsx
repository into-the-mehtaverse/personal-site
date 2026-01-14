import { useEffect, useRef } from 'react';

export default function InteractiveCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const cleanupRef = useRef<(() => void) | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set canvas size
		const setCanvasSize = () => {
			const container = canvas.parentElement;
			if (container) {
				const maxWidth = Math.min(container.clientWidth, 600);
				canvas.width = maxWidth;
				canvas.height = 300;
			}
		};

		setCanvasSize();
		window.addEventListener('resize', setCanvasSize);

		// Placeholder: Simple animated background
		let animationFrameId: number;
		let time = 0;

		const animate = () => {
			ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.strokeStyle = `hsl(${(time * 0.5) % 360}, 70%, 50%)`;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc(
				canvas.width / 2,
				canvas.height / 2,
				50 + Math.sin(time * 0.01) * 20,
				0,
				Math.PI * 2
			);
			ctx.stroke();

			time++;
			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		// Cleanup function
		cleanupRef.current = () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener('resize', setCanvasSize);
		};

		// Return cleanup
		return cleanupRef.current;
	}, []);

	// Additional cleanup on unmount
	useEffect(() => {
		return () => {
			if (cleanupRef.current) {
				cleanupRef.current();
			}
		};
	}, []);

	return (
		<div style={{ marginTop: '2rem', width: '100%' }}>
			<canvas
				ref={canvasRef}
				style={{
					width: '100%',
					maxWidth: '600px',
					height: '300px',
					border: '1px solid var(--border-color, #e0e0e0)',
					borderRadius: '4px',
				}}
			/>
			<p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
				Placeholder canvas component. Ready for three.js or custom canvas work.
			</p>
		</div>
	);
}
