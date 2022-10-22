import React, {useRef, useEffect, useState} from 'react';
import {gsap} from 'gsap';
import './App.scss';
import Icons from './components/icons/Icons';


function Header() {
	/**
	 * STICKY HEADER
	 */
	const [fixed, setFixed] = useState(false);

	function setFixedHeader() {
		if (window.scrollY >= 80) {
			setFixed(true);
		} else {
			setFixed(false);
		}
	}

	window.addEventListener("scroll", setFixedHeader);

	/**
	 * GSAP COMPONENTS
	 */
	let menuRefs = useRef([]);
	let additionalRefs = useRef([]);
	let siteTitle = useRef(null);

	menuRefs.current = [];
	additionalRefs.current = [];
	
	const addToRefs = (el) => {
		if (el && !menuRefs.current.includes(el)) {
			menuRefs.current.push(el);
		}
	};

	const addAdditionalRefs = (el) => {
		if (el && !additionalRefs.current.includes(el)) {
			additionalRefs.current.push(el);
		}
	};

	useEffect(() => {
		const timeline = gsap.timeline();

		timeline.to( siteTitle, { opacity: 1, duration: .6, ease: "power4.in"})
		.to( menuRefs.current, { opacity: 1, y: 0, duration: .4, ease: "power4.in", stagger: .125})
		.to( additionalRefs.current, { opacity: 1, duration: .4, ease: "power4.in", stagger: .125})
	}, []);
	
	return (
		<header className={fixed ? 'site-header site-header-sticky' : 'site-header'} >
			<div className="header-title" ref={el => {siteTitle = el}}>
				<a href="/">Martin Spatovaliyski</a>
			</div>
			
			<div className="header-nav">
				<ul className="nav-menu">
					<li ref={addToRefs} className="nav-menu-item"><a href="#experience">Experience</a></li>
					<li ref={addToRefs} className="nav-menu-item"><a href="#work">Projects</a></li>
					<li ref={addToRefs} className="nav-menu-item"><a href="#contact">Contact</a></li>
					<li ref={addAdditionalRefs} className="nav-menu-item spacer icon item-additional"><a href="https://www.linkedin.com/in/martin-spatovaliyski-554622aa/" target="_blank" rel="noreferrer">{<Icons name="linkedin"/>}</a></li>
					<li ref={addAdditionalRefs} className="nav-menu-item icon item-additional"><a href="https://github.com/Spatovaliyski" target="_blank" rel="noreferrer">{<Icons name="github"/>}</a></li>
					<li ref={addAdditionalRefs} className="nav-menu-item icon item-additional"><a href="https://profiles.wordpress.org/mspatovaliyski/" target="_blank" rel="noreferrer">{<Icons name="wordpress"/>}</a></li>
					<li ref={addAdditionalRefs} className="nav-menu-item cv item-additional"><a href="https://spatovaliyski.com/wp-content/uploads/2022/10/Martins-Resume.pdf" target="_blank" rel="noreferrer">Portfolio</a></li>
				</ul>
			</div>
		</header>
	);
}

export default Header;