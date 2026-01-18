import { useIsMobile } from "../hooks/use-is-mobile";
import type { NavItem } from "../types/nav-item.types";
import DrawerNav from "./drawer-nav";
import { Styled } from "./header.styles";
// import logo from "../assets/espaco.svg";
import NavMenu from "./nav-menu";

interface HeaderProps {
	items: NavItem[];
}

export default function Header({ items }: HeaderProps) {
	const isMobile = useIsMobile();

	return (
		<Styled.Header>
			<Styled.Logo alt={"Logo"} />

			{isMobile ? <DrawerNav items={items} /> : <NavMenu items={items} />}
		</Styled.Header>
	);
}
