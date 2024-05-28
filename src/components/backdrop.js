import { useCallback, useEffect } from "react";

export function useAdjustBackdropHeight(backdropElement, backdropEndElement, backdropEndFallbackElement,data,extraDependency=null) {

	const setBackdropHeight = useCallback((backdropHeight) => {
		backdropElement.current.style.setProperty('--height', `${backdropHeight}px`);
		backdropElement.current.querySelectorAll('svg').forEach((svgElement) => {
			if (
				(backdropElement.current.offsetWidth / backdropElement.current.offsetHeight)
				>
				(svgElement.width.baseVal.value / svgElement.height.baseVal.value)
			) {
				svgElement.style.setProperty('width', '100%');
				svgElement.style.setProperty('height', 'auto');
			} else {
				svgElement.style.setProperty('width', 'auto');
				svgElement.style.setProperty('height', '100%');
			}
		});
	},[backdropElement]);

	const getDistanceOfCenterFromBackdropTop = useCallback((elementRef) => {
		return (
			elementRef.current.getBoundingClientRect().top
			+ (elementRef.current.getBoundingClientRect().height / 2)
			- backdropElement.current.getBoundingClientRect().top
		);
	},[backdropElement]);

	const calculateBackdropHeight = useCallback(()=>{
		if (backdropEndElement.current) {
			setBackdropHeight(getDistanceOfCenterFromBackdropTop(backdropEndElement));
			if (backdropEndElement.current.dataset.backdropOffset) {
				backdropElement.current.style.setProperty('--offset', backdropEndElement.current.dataset.backdropOffset);
			}
		} else if (backdropEndFallbackElement && backdropEndFallbackElement.current) {
			setBackdropHeight(getDistanceOfCenterFromBackdropTop(backdropEndFallbackElement));
			if (backdropEndFallbackElement.current.dataset.backdropOffset) {
				backdropElement.current.style.setProperty('--offset', backdropEndFallbackElement.current.dataset.backdropOffset);
			}
		}
	},[backdropElement, backdropEndElement, backdropEndFallbackElement, getDistanceOfCenterFromBackdropTop, setBackdropHeight]);

	useEffect(() => {
		const resizeListener = () => {
			calculateBackdropHeight();
		};
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [calculateBackdropHeight]);

	useEffect(() => {

		calculateBackdropHeight();

		const initialIntervalID = setInterval(calculateBackdropHeight, 50);
		setTimeout(() => {
			clearInterval(initialIntervalID);
		}, 5000);

		// const intervalID = setInterval(calculateBackdropHeight, 50);
		// return () => {
		// 	clearInterval(intervalID);
		// };
	}, [calculateBackdropHeight,data,extraDependency]);

}
