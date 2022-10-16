export default function Contact() {
	return (
		<section id="contact" className="section section-contact">
			<div className="section-container">
				<div className="section-title">
					<div className="headline">
						<p className="headline-catch">Let's talk</p>
						<h2 className="headline-title headline-scaled">Get in touch</h2>
						
						<div className="copy">
							<p>I'm currently looking for new oportunities! The button below should open an email client with my Email address auto-filled.</p>
						</div>

						<div className="contact-group">
							<a href="mailto:martinspatovaliyski@gmail.com" rel="noopener noreferrer" target="_blank" className="button button-primary">Let's chat</a>
							<span className="contact-copy">
								<a id="copy-chat-clipboard" href="martinspatovaliyski@gmail.com">Copy email to clipboard instead</a>
								<span className="copy-chat-popup">Copied!</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
