import { useIsMobile } from "../hooks/use-is-mobile";
import type { NavItem } from "../types/nav-item.types";
import DrawerNav from "./drawer-nav";
import { Styled } from "./header.styles";
import NavMenu from "./nav-menu";

interface HeaderProps {
	logo?: string;
	items: NavItem[];
}

export default function Header({ logo, items }: HeaderProps) {
	const isMobile = useIsMobile();

	return (
		<Styled.Header>
			{logo && <Styled.Logo alt={"Logo"} src={logo} />}
			{isMobile ? <DrawerNav items={items} /> : <NavMenu items={items} />}
		</Styled.Header>
	);
}
