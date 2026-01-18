import DrawerNav from "../components/drawer-nav";
import Dropdown from "../components/dropdown.component";
import Footer from "../components/footer";
import Header from "../components/header";
// import NavBar from "../components/nav-bar";
import NavMenu from "../components/nav-menu";
import type { ComponentRegistry } from "../types/component-registry.types";
import type { NavItem } from "../types/nav-item.types";

const sampleNavItems: NavItem[] = [
	{
		label: "Home",
		path: "/",
		isButton: false,
	},
	{
		label: "Products",
		isButton: true,
		dropdownItems: [
			{
				id: "product-1",
				label: "Product 1",
				onClick: () => console.log("Product 1"),
			},
			{
				id: "product-2",
				label: "Product 2",
				onClick: () => console.log("Product 2"),
			},
		],
	},
	{
		label: "About",
		path: "/about",
		isButton: false,
	},
];

export const componentRegistry: ComponentRegistry = [
	{
		id: "drawer-nav",
		name: "Drawer Navigation",
		description: "Side drawer navigation with overlay and animations",
		component: DrawerNav,
		defaultProps: {
			items: sampleNavItems,
		},
		category: "navigation",
	},
	{
		id: "dropdown",
		name: "Dropdown Menu",
		description: "Customizable dropdown menu component",
		component: Dropdown,
		defaultProps: {
			label: "Select Option",
			items: [
				{ id: "1", label: "Option 1", onClick: () => console.log("Option 1") },
				{ id: "2", label: "Option 2", onClick: () => console.log("Option 2") },
				{ id: "3", label: "Option 3", onClick: () => console.log("Option 3") },
			],
		},
		category: "form",
	},
	{
		id: "footer",
		name: "Footer",
		description: "Page footer component",
		component: Footer,
		defaultProps: {},
		category: "layout",
	},
	{
		id: "header",
		name: "Header",
		description: "Page header component",
		component: Header,
		defaultProps: {},
		category: "layout",
	},
	// {
	// 	id: "nav-bar",
	// 	name: "Navigation Bar",
	// 	description: "Top navigation bar",
	// 	component: NavBar,
	// 	defaultProps: {
	// 		items: sampleNavItems,
	// 	},
	// 	category: "navigation",
	// },
	{
		id: "nav-menu",
		name: "Navigation Menu",
		description: "Navigation menu component",
		component: NavMenu,
		defaultProps: {
			items: sampleNavItems,
		},
		category: "navigation",
	},
];

export const getComponentById = (id: string) => {
	return componentRegistry.find((item) => item.id === id);
};

export const getComponentsByCategory = (category: string) => {
	return componentRegistry.filter((item) => item.category === category);
};
