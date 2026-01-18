import type { DropdownItem } from "./dropdown-item.types";

export type NavItem =
    | { label: string; path: string; isButton?: false }
    | {
          label: string;
          path?: string;
          isButton: true;
          dropdownItems?: DropdownItem[];
      };
