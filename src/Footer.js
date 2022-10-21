const year = new Date().getFullYear();

function Footer() {
	return (
		<footer className="site-footer">
			<p>&copy; {year} - Martin Spatovaliyski <span className="sep">&nbsp; | &nbsp;</span> Made with <span style={{color: "red"}}>♥</span> using <a href="https://create-react-app.dev/" rel="noreferrer" target="_blank">Create React App</a> </p> 
		</footer>
	);
}

export default Footer;