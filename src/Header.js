import React from 'react';
import './App.scss';
import Icons from './components/icons/Icons';

function Header() {
	return (
		
		<header className="site-header">
			
			<div className="header-title">
				<a href="/">Martin Spatovaliyski</a>
			</div>

			<div className="header-nav">
				<ul className="nav-menu">
					<li className="nav-menu-item"><a href="#">Experience</a></li>
					<li className="nav-menu-item"><a href="#">Projects</a></li>
					<li className="nav-menu-item"><a href="#">Contact</a></li>
					<li className="nav-menu-item spacer icon"><a href="https://www.linkedin.com/in/martin-spatovaliyski-554622aa/" target="_blank" rel="noreferrer">{<Icons name="linkedin"/>}</a></li>
					<li className="nav-menu-item icon"><a href="https://github.com/Spatovaliyski" target="_blank" rel="noreferrer">{<Icons name="github"/>}</a></li>
					<li className="nav-menu-item icon"><a href="https://profiles.wordpress.org/mspatovaliyski/" target="_blank" rel="noreferrer">{<Icons name="wordpress"/>}</a></li>
					<li className="nav-menu-item cv"><a href="https://spatovaliyski.com/wp-content/uploads/2022/10/Martins-Resume.pdf" target="_blank" rel="noreferrer">Portfolio</a></li>
				</ul>
			</div>
		</header>
	);
}

export default Header;