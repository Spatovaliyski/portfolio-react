import Header from './Header';
import Footer from './Footer';
import Sections from './components/sections/index';
import { hotjar } from 'react-hotjar';


function App() {
	hotjar.initialize('3194541', '6');

	return (	
		<div className="site-container">
			<Header />
			
			<main className="sections">
				<Sections />
			</main>

			<Footer />
		</div>
	);
}

export default App;
