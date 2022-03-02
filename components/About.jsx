const About = () => {
	return (
		<div class="about-wrapper">
			<h1>JSXtra Starter</h1>
			<p>
				Take a peek in the developer tools, components are
				web-components under the hood!
			</p>
			{/* These styles are scoped to the component using the Shadow DOM
			CSS custom properties penetrate through */}
			<style>{`
			.about-wrapper {
				text-align: center;
				margin-top: 40px;
			}

			h1 {
				font-size: 64px;
				color: var(--dark-grey);
				margin: 0;
			}

			p {
				color: var(--light-grey);
				font-style: italic;
				margin-bottom: 64px;
			}

			img {
				max-width: 100%;
			}
		`}</style>
		</div>
	);
};

export default About;
