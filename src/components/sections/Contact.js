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
				},
			});
		});
	}, []);

	const copyClipboard = (e) => {
		e.preventDefault();
		let mail = document.querySelector('#copy-clipboard-text').value;
		
		navigator.clipboard.writeText(mail);
		document.querySelector('#copy-clipboard-confirm').classList.add('is-visible');
		setTimeout(() => {
			document.querySelector('#copy-clipboard-confirm').classList.remove('is-visible');
		}, 1000);
	}

	return (
		<section id="contact" className="section section-contact">
			<div className="section-container">
				<div className="section-title">
					<div className="headline">
						<p className="headline-catch" ref={addToRefs}>Let's talk</p>
						<h2 className="headline-title headline-scaled" ref={addToRefs}>Get in touch</h2>
						
						<div className="copy">
							<p ref={addToRefs}>I'm currently not looking for new oportunities. The button below should open your preferred Email client with my Email address auto-fileld.</p>
						</div>

						<div className="contact-group" ref={addToRefs}>
							<a  href="mailto:martinspatovaliyski@gmail.com" rel="noopener noreferrer" target="_blank" className="button button-primary">Let's chat</a>
							<span className="contact-copy">
								<a onClick={copyClipboard} id="copy-chat-clipboard" href="copy-clipboard">Copy email to clipboard instead</a>
								<input id="copy-clipboard-text" type="hidden" value="martinspatovaliyski@gmail.com" />
								<span id="copy-clipboard-confirm" className="copy-chat-popup">Copied!</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
