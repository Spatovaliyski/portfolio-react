import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
	let contactRefs = useRef([]);
	contactRefs.current = [];

	const addToRefs = (el) => {
		if (el && !contactRefs.current.includes(el)) {
			contactRefs.current.push(el);
		}
	};

	useEffect(() => {
		let counter = .4;
		contactRefs.current.forEach((el) => {
			gsap.fromTo( el, {
				autoAlpha: 0,
				y: 30, 
			}, {
				y: 0,
				duration: counter+=.2, 
				autoAlpha: 1,
				ease: "power2.inOut", 
				scrollTrigger: {
					trigger: el,
					start: 'top center+=150',
				},
			});
		});
	}, []);

	return (
		<section id="contact" className="section section-contact">
			<div className="section-container">
				<div className="section-title">
					<div className="headline">
						<p className="headline-catch" ref={addToRefs}>Let's talk</p>
						<h2 className="headline-title headline-scaled" ref={addToRefs}>Get in touch</h2>
						
						<div className="copy">
							<p ref={addToRefs}>I'm currently looking for new oportunities! The button below should open an email client with my Email address auto-filled.</p>
						</div>

						<div className="contact-group" ref={addToRefs}>
							<a href="mailto:martinspatovaliyski@gmail.com" rel="noopener noreferrer" target="_blank" className="button button-primary">Let's chat</a>
							<span className="contact-copy">
								<a id="copy-chat-clipboard" href="martinspatovaliyski@gmail.com">Copy email to clipboard instead</a>
								<span className="copy-chat-popup">Copied!</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
