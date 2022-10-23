import { useEffect, useRef } from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
	/**
	 * GSAP COMPONENTS
	 */
	let headlineRefs = useRef([]);
	let skillsRefs = useRef([]);
	let skillsRefsSecond = useRef([]);

	headlineRefs.current = [];
	skillsRefs.current = [];
	skillsRefsSecond.current = [];

	const addToHeadlineRefs = (el) => {
		if (el && !headlineRefs.current.includes(el)) {
			headlineRefs.current.push(el);
		}
	};

	const addToRefs = (el) => {
		if (el && !skillsRefs.current.includes(el)) {
			skillsRefs.current.push(el);
		}
	};

	const addToRefsSecond = (el) => {
		if (el && !skillsRefsSecond.current.includes(el)) {
			skillsRefsSecond.current.push(el);
		}
	};

	useEffect(() => {
		gsap.to( skillsRefs.current, { opacity: 1, y: 0, duration: .4, ease: "power2.inOut", scrollTrigger: { trigger: '.section-experience .copy'}, stagger: .08})
		gsap.to( skillsRefsSecond.current, { opacity: 1, y: 0, duration: .6, ease: "power2.inOut", scrollTrigger: { trigger: '.section-experience .copy'}, stagger: .08})
		gsap.to( headlineRefs.current, { opacity: 1, y: 0, duration: .8, ease: "power2.inOut", scrollTrigger: { trigger: '.section-experience .copy'}, stagger: .125})
	}, []);

  return (
	<section id="experience" className="section section-experience">
		<div className="section-container">
			<div className="section-title">
				<div className="headline">
					<p className="headline-catch" ref={addToHeadlineRefs}>Who am I?</p>
					<h2 className="headline-title headline-scaled" ref={addToHeadlineRefs}>Why am I <span>worth</span>&nbsp;your time?</h2>
				</div>

				<div className="copy">
					<p ref={addToHeadlineRefs}>My passion for web development starts around 2007-2008 in the early days of WYSIWYG Web builder when I doodled my very first form.</p>
					<p ref={addToHeadlineRefs}>Obviously, that didn’t go full circle, as later on I picked up HTML and CSS. I did various small projects here and there, and finally, in late 2013 I sold my very first project: otovica.com</p>
					<p ref={addToHeadlineRefs}>In the following years, I learned a little bit of JS and picked up jQuery, some PHP, and JSON manipulation, which improved my projects for clients as a freelancer</p>
					<p ref={addToHeadlineRefs}>In 2017, whilst still at University, I applied for my first real professional career. I worked there until 2021, when I left to dedicate my resources and work for a client as a freelance contractor</p>
				</div>
			</div>

			<aside className="section-aside">
				<div className="skills-table">
					<h3  ref={addToRefs}>Skills I possess</h3>
					<ul className="skills-tab hook">
						<li ref={addToRefs} className="skill highlight">HTML5</li>
						<li ref={addToRefs} className="skill highlight">SCSS/CSS</li>
						<li ref={addToRefs} className="skill highlight">Git</li>
						<li ref={addToRefs} className="skill highlight">ACF</li>
						<li ref={addToRefs} className="skill highlight">jQuery</li>
						<li ref={addToRefs} className="skill highlight">JavaScript (ES6)</li>
						<li ref={addToRefs} className="skill highlight">Ajax</li>
						<li ref={addToRefs} className="skill highlight">GSAP</li>
						<li ref={addToRefs} className="skill highlight">WordPress</li>
						<li ref={addToRefs} className="skill highlight">React</li>
						<li ref={addToRefs} className="skill highlight">Gulp</li>
						<li ref={addToRefs} className="skill highlight">JSON</li>
						<li ref={addToRefs} className="skill highlight">Foundation 5</li>
						<li ref={addToRefs} className="skill highlight">Adobe Suite</li>
					</ul>

					<h3 ref={addToRefsSecond}>Additionally, I have dabbled with</h3>
					<ul className="skills-tab">
						<li ref={addToRefsSecond} className="skill">Locomotive.js</li>
						<li ref={addToRefsSecond} className="skill">PHP</li>
						<li ref={addToRefsSecond} className="skill">Vue</li>
						<li ref={addToRefsSecond} className="skill">XML</li>
						<li ref={addToRefsSecond} className="skill">SQL</li>
						<li ref={addToRefsSecond} className="skill">WooCommerce</li>
						<li ref={addToRefsSecond} className="skill">LAMP</li>
						<li ref={addToRefsSecond} className="skill">Figma</li>
						<li ref={addToRefsSecond} className="skill">E2E Development</li>
						<li ref={addToRefsSecond} className="skill">Project Leadership</li>
					</ul>
				</div>
			</aside>
		</div>
	</section>
  )
}
