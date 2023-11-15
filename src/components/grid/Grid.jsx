// Grid
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Grid() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		document.body.addEventListener('keydown', handleKeyDown);
		return () => document.body.removeEventListener('keydown', handleKeyDown);
	}, []);

	function handleKeyDown(e) {
		if (e.key === 'g') {
			setIsVisible((prev) => !prev);
			console.log('Grid visibility toggled');
		}
	}
	return (
		<div id="grid-ctn" className={clsx(
			'ctn',
			isVisible && 'grid-visible',
		)}>
			<div id="grid">
				<div className="gridSizer | col-1 | t:col-1 | m:col-1"></div>
				<div className="gridSizer | gut-1 | t:gut-1 | m:gut-1"></div>
				<div className="gridSizer | vph"></div>

				<div id="gridWrapper">
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
					<div className="gridCol | col-1 | t:col-1 | m:col-1"></div>
				</div>
			</div>

		</div>
	)
}
