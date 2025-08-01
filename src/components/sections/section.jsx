import React from 'react';

const Section = ({ id, className, children }) => {
	return (
		<section id={id} className={className}>
			{children}
		</section>
	);
};

export { Section };
