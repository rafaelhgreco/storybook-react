import { Styled } from "./nav-menu.styles";
import Dropdown from "./dropdown.component";
import type { NavItem } from "../types/nav-item.types";

interface NavMenuProps {
    items: NavItem[];
}

export default function NavMenu({ items }: NavMenuProps) {
    return (
        <Styled.Nav>
            {items.map((item) => {
                return item.isButton ? (
                    <Dropdown
                        key={item.label}
                        highlightFirst
                        trigger={
                            <Styled.Button>
                                <Styled.Text>{item.label}</Styled.Text>
                            </Styled.Button>
                        }
                        items={item.dropdownItems || []}
                    />
                ) : (
                    <Styled.NavLink
                        key={item.label}
                        to={item.path}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <Styled.Text>{item.label}</Styled.Text>
                    </Styled.NavLink>
                );
            })}
        </Styled.Nav>
    );
}
