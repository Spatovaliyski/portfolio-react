export default function PortfolioItem({imageLink, title, year, desc, techStack, link, redirects, animRef}) {
	if (redirects?.length === 0) {
		redirects = [];
	}
	return (
		<div className="portfolio-item" ref={animRef}>
			<picture className="portfolio-thumbnail">
				<img src={imageLink} alt="" />
			</picture>

			<div className="portfolio-item-info">
				<h2 className="portfolio-title"><a target="_blank" rel="noreferrer" href={link} className="portfolio-item-link">{title}</a></h2>
				<div className="portfolio-description">
					<p>{year}</p>
					<p>{desc}</p>
				</div>
			</div>
			<div className="portfolio-meta">
				<ul className="portfolio-stack-list">
					{techStack.map((item) => <li key={item} >{item}</li>)}
				</ul>

				<ul className="portfolio-source-links">
					{redirects.map(({icon, url}) => <li key={url}><a target="_blank" rel="noreferrer" href={url}>{icon}</a></li>)}
				</ul>
			</div>
		</div>
	)
}
