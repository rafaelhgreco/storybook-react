import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import DrawerNav from "../components/drawer-nav";
import type { NavItem } from "../types/nav-item.types";

const meta: Meta<typeof DrawerNav> = {
	title: "Components/DrawerNav",
	component: DrawerNav,
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"Componente de navegação em drawer lateral com suporte a itens simples e dropdowns. Inclui overlay, animações e integração com React Router.",
			},
		},
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
	argTypes: {
		items: {
			control: "object",
			description: "Lista de itens de navegação do drawer",
		},
	},
};

export default meta;
type Story = StoryObj<typeof DrawerNav>;

const basicNavItems: NavItem[] = [
	{
		label: "Home",
		path: "/",
		isButton: false,
	},
	{
		label: "About",
		path: "/about",
		isButton: false,
	},
	{
		label: "Contact",
		path: "/contact",
		isButton: false,
	},
];

const navItemsWithDropdown: NavItem[] = [
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
				onClick: () => alert("Product 1 clicked"),
			},
			{
				id: "product-2",
				label: "Product 2",
				onClick: () => alert("Product 2 clicked"),
			},
			{
				id: "product-3",
				label: "Product 3",
				onClick: () => alert("Product 3 clicked"),
			},
		],
	},
	{
		label: "About",
		path: "/about",
		isButton: false,
	},
];

const complexNavItems: NavItem[] = [
	{
		label: "Dashboard",
		path: "/dashboard",
		isButton: false,
	},
	{
		label: "Categories",
		isButton: true,
		dropdownItems: [
			{
				id: "electronics",
				label: "Electronics",
				onClick: () => console.log("Electronics selected"),
			},
			{
				id: "clothing",
				label: "Clothing",
				onClick: () => console.log("Clothing selected"),
			},
			{
				id: "books",
				label: "Books",
				onClick: () => console.log("Books selected"),
			},
			{
				id: "sports",
				label: "Sports",
				onClick: () => console.log("Sports selected"),
			},
		],
	},
	{
		label: "Settings",
		isButton: true,
		dropdownItems: [
			{
				id: "profile",
				label: "Profile",
				onClick: () => alert("Profile clicked"),
			},
			{
				id: "preferences",
				label: "Preferences",
				onClick: () => alert("Preferences clicked"),
			},
			{
				id: "logout",
				label: "Logout",
				onClick: () => alert("Logout clicked"),
			},
		],
	},
	{
		label: "Help",
		path: "/help",
		isButton: false,
	},
];

export const Default: Story = {
	args: {
		items: basicNavItems,
	},
};

export const WithDropdown: Story = {
	args: {
		items: navItemsWithDropdown,
	},
};

export const ComplexNavigation: Story = {
	args: {
		items: complexNavItems,
	},
};

export const SingleItem: Story = {
	args: {
		items: [
			{
				label: "Home",
				path: "/",
				isButton: false,
			},
		],
	},
};

export const OnlyDropdowns: Story = {
	args: {
		items: [
			{
				label: "Main Menu",
				isButton: true,
				dropdownItems: [
					{
						id: "option-1",
						label: "Option 1",
						onClick: () => console.log("Option 1"),
					},
					{
						id: "option-2",
						label: "Option 2",
						onClick: () => console.log("Option 2"),
					},
				],
			},
			{
				label: "Secondary Menu",
				isButton: true,
				dropdownItems: [
					{
						id: "action-1",
						label: "Action 1",
						onClick: () => console.log("Action 1"),
					},
					{
						id: "action-2",
						label: "Action 2",
						onClick: () => console.log("Action 2"),
					},
				],
			},
		],
	},
};

export const EmptyDropdown: Story = {
	args: {
		items: [
			{
				label: "Empty Section",
				isButton: true,
				dropdownItems: [],
			},
			{
				label: "Home",
				path: "/",
				isButton: false,
			},
		],
	},
};
