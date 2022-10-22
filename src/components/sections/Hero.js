import { useEffect, useState } from 'react';
import { ReactComponent as Blob } from '../../assets/images/hero_logo.svg';


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
			console.log(component);
		});
	}

	return (
		<section className="section section-welcome">
			<div className="section-container">
				<div className="section-title">
					<div className="headline">
						<p className="headline-catch" data-context>Let's keep it simple</p>
						<h1 className="headline-title headline-scaled">
							<p data-context>Heya,</p>
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

				<aside className="section-aside">
					<Blob />
				</aside>
			</div>
		</section>
	)
}
 

