import React, {useRef, useEffect, useState} from 'react';
import {gsap} from 'gsap';
import './App.scss';
import Icons from './components/icons/Icons';


function Header() {
	/**
	 * MENU CLICK ANIMATION
	 */
	 function clickAnimation(e) {
		let body = document.querySelector('body');
		const container = document.querySelector(".sections");
		let sections = container.querySelectorAll('.section');

		e.preventDefault();
		if (body.classList.contains('is-animation-ongoing')) {
			return false;
		}

		function clearState() {
			for(let i = 0; i <= sections.length - 1; i++) {
				sections[i].classList.remove('hide-section', 'show-section');
			}
		}
		clearState();

		body.classList.add('is-animation-ongoing');
		for(let i = 0; i <= sections.length - 1; i++) {
			sections[i].classList.add('hide-section');
		}
		
		let link = e.target.hash;
		setTimeout(() => {
			for(let i = 0; i <= sections.length - 1; i++) {
				sections[i].classList.remove('hide-section');
				sections[i].classList.add('show-section');
			}

			document.querySelector(link).scrollIntoView({
				block: 'start',
				behavior: 'instant'
			});
			window.scrollBy(0, -120);
		}, 1000);

		setTimeout(() => {
			body.classList.remove('is-animation-ongoing');
			clearState();
		}, 2000);
	};
	
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
	
	/**
	 * HANDLE MOBILE MENU TOGGLE
	 */
	const openMenu = (event) => {
		const siteNavigation = document.getElementById( 'navigation' );
		const siteBody = document.body;
		
		siteBody.classList.toggle( 'is-menu-opened' );
		siteNavigation.classList.toggle( 'toggled' );

		// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
		document.addEventListener( 'click', function( event ) {
			const isClickInside = siteNavigation.contains( event.target );
			const isHomeTabButton = event.target.parentNode;
			console.log(isHomeTabButton);
			
			if ( ! isClickInside ) {
				siteNavigation.classList.remove( 'toggled' );
				siteBody.classList.remove( 'is-menu-opened' );
			}

			// If the button contains one of the portfolio "click to scroll to" classs "home-tab" > close menu components and proceed with scroll behavior
			if ( isHomeTabButton.classList.contains('home-tab') ) {
				siteNavigation.classList.remove( 'toggled' );
				siteBody.classList.remove( 'is-menu-opened' );
			}
		});

	}
	
	return (
		<header className={fixed ? 'site-header site-header-sticky' : 'site-header'} >
			<div className="header-title" ref={el => {siteTitle = el}}>
				<a href={process.env.PUBLIC_URL}>Martin Spatovaliyski</a>
			</div>
			
			<nav className="header-nav" id="navigation">
				<ul className="nav-menu">
					<li ref={addToRefs} onClick={clickAnimation} className="nav-menu-item home-tab"><a href="#experience">Experience</a></li>
					<li ref={addToRefs} onClick={clickAnimation} className="nav-menu-item home-tab"><a href="#work">Projects</a></li>
					<li ref={addToRefs} onClick={clickAnimation} className="nav-menu-item home-tab"><a href="#contact">Contact</a></li>
					<li ref={addAdditionalRefs} className="nav-menu-item spacer icon item-additional"><a href="https://www.linkedin.com/in/martin-spatovaliyski-554622aa/" target="_blank" rel="noreferrer">{<Icons name="linkedin"/>}</a></li>
					<li ref={addAdditionalRefs} className="nav-menu-item icon item-additional"><a href="https://github.com/Spatovaliyski" target="_blank" rel="noreferrer">{<Icons name="github"/>}</a></li>
					<li ref={addAdditionalRefs} className="nav-menu-item icon item-additional"><a href="https://profiles.wordpress.org/mspatovaliyski/" target="_blank" rel="noreferrer">{<Icons name="wordpress"/>}</a></li>
					<li ref={addAdditionalRefs} className="nav-menu-item cv item-additional"><a href="https://wp.spatovaliyski.com/wp-content/uploads/2022/10/Martins-Resume.pdf" target="_blank" rel="noreferrer">Portfolio</a></li>
				</ul>

				<a onClick={openMenu} className="menu-toggle" aria-controls="primary-menu" aria-expanded="false" href='#nav-open'>
					<svg className="hamburger hamburger-rotate" viewBox="0 0 100 100" width="80">
						<path className="line top"
								d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
						<path className="line middle"
								d="m 70,50 h -40" />
						<path className="line bottom"
								d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
					</svg>
				</a>
			</nav>
		</header>
	);
}

export default Header;