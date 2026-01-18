import type { ComponentType } from "react";

export interface ComponentRegistryItem {
	/**
	 * Identificador único do componente
	 */
	id: string;
	/**
	 * Nome de exibição do componente
	 */
	name: string;
	/**
	 * Descrição do componente
	 */
	description?: string;
	/**
	 * Componente React a ser renderizado
	 */
	component: ComponentType<any>;
	/**
	 * Props padrão para o componente
	 */
	defaultProps?: Record<string, any>;
	/**
	 * Categoria do componente
	 */
	category?: "navigation" | "layout" | "form" | "display";
}

export type ComponentRegistry = ComponentRegistryItem[];
