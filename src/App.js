import Header from './Header';
import Footer from './Footer';
import Sections from './components/sections/index.js';


function App() {
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
