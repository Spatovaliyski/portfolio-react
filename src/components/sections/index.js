import Contact from './Contact';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Skills from './Skills';

export default function index() {
	return (
		<>
			{/* Organise sections in a list. Order of sections can be switched here. By default Hero should be first */}
			<Hero id="hero" />
			<Skills id="experience" />
			<Portfolio id="projects" />
			<Contact id="contact" />
		</>
		
	)
}
