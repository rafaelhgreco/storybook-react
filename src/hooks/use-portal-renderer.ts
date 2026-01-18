import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface UsePortalRendererOptions {
	targetId?: string;
	createInternalDiv?: boolean;
}

export const usePortalRenderer = (options: UsePortalRendererOptions = {}) => {
	const { targetId, createInternalDiv = true } = options;
	const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
		null,
	);
	const internalContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (targetId) {
			// Use external div provided by user
			const externalDiv = document.getElementById(targetId);
			if (externalDiv) {
				setPortalContainer(externalDiv);
			} else {
				console.warn(`Target element with id "${targetId}" not found`);
			}
		} else if (createInternalDiv) {
			// Create internal div within component
			if (!internalContainerRef.current) {
				const div = document.createElement("div");
				div.className = "portal-internal-container";
				internalContainerRef.current = div;
			}
			setPortalContainer(internalContainerRef.current);
		}

		return () => {
			// Cleanup if needed
			if (!targetId && internalContainerRef.current?.parentNode) {
				internalContainerRef.current.parentNode.removeChild(
					internalContainerRef.current,
				);
			}
		};
	}, [targetId, createInternalDiv]);

	const renderPortal = (children: React.ReactNode) => {
		if (!portalContainer) return null;
		return createPortal(children, portalContainer);
	};

	return {
		portalContainer,
		internalContainerRef,
		renderPortal,
		isExternal: !!targetId,
	};
};
