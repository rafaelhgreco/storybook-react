import { useEffect, useState } from "react";
import { theme } from "../theme";

export function useIsMobile() {
	const mobileBreakpoint = theme.breakpoints.mobile;

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint})`);

		setIsMobile(mediaQuery.matches);

		const handleChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, [mobileBreakpoint]);

	return isMobile;
}
