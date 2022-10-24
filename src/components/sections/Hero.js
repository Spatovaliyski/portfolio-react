import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import HeroLottie from '../../assets/lotties/lottie_developer';
import gsap from 'gsap';

export default function Hero() { 
	const [isLoaded, setIsLoaded] = useState(false);
	const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (isLoaded) {
			setIsPageLoaded(true);
		}
	}, [isLoaded]);

	/**
	 * Handle data-context animation for each HTML tag
	 */
	if (isPageLoaded) {
		let attribute = document.querySelectorAll('[data-context]');

		attribute.forEach((a) => {
			let component = a;
		
			component.setAttribute('data-context', component.textContent);
		});
	}

	/**
	 * Lottie options
	 */
	const lottieDefaultOptions = {
		loop: true,
		autoplay: true,
		animationData: HeroLottie,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	/**
	 * GSAP
	 */
	let contactRefs = useRef([]);
	contactRefs.current = [];
 
	const addToRefs = (el) => {
		 if (el && !contactRefs.current.includes(el)) {
			 contactRefs.current.push(el);
		 }
	};
	 
	useEffect(() => {
		let counter = 0.4;
		contactRefs.current.forEach((el) => {
			gsap.fromTo( el, {
				autoAlpha: 0,
				y: 30, 
			}, {
				y: 0,
				duration: counter+=.3, 
				autoAlpha: 1,
				ease: "power2.inOut", 
				scrollTrigger: {
					trigger: el,
				},
			});
		});
	}, []);
	return (
		<section className="section section-welcome">
			<div className="section-container">
				<div className="section-title" ref={addToRefs}>
					<div className="headline">
						<h1 className="headline-title headline-scaled">
							<p data-context>Heya,</p>&nbsp;
							<br/>
							<span data-context>I'm</span>&nbsp;
							<p data-context>Martin Spatovaliyski</p>
						</h1>
						<h3 className="headline-subtitle" data-context>web developer / WordPress enthusiast, core contributor</h3>
					</div>

					<div className="copy animation-reveal">
						<p data-context>I'm a Front-end developer who does theme building, plugin development, end-to-end website development with and without WordPress for just over 5 years.</p>
					</div>
				</div>

				<aside className="section-aside" ref={addToRefs}>
					<Lottie 
						options={lottieDefaultOptions}
						height={"100%"}
						width={"100%"}
					/>
				</aside>
			</div>
		</section>
	)
}
 

