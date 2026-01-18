import { theme } from "@aurora-pkg/ui";
import styled from "@emotion/styled";
import { NavLink as RouterNavLink } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    gap: ${theme.spacing.lg};
    background-color: #5932e673;
    border-radius: ${theme.borderRadius.lg};
    border: 1px solid ${theme.colors.neutral.border};
    padding: ${theme.spacing.xs};
    backdrop-filter: blur(20px);
    align-items: stretch;
    margin: 0 auto;
    height: 38px;
    box-sizing: border-box;
`;

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 ${theme.spacing.md};

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    height: calc(38px - (${theme.spacing.xs} * 2));

    &::after {
        background-color: ${theme.colors.primary.light};
        border-radius: ${theme.borderRadius.lg};
        content: "";

        position: absolute;
        top: -${theme.spacing.xs};
        left: -${theme.spacing.xs};
        width: calc(100% + (${theme.spacing.xs} * 7));
        height: calc(100% + (${theme.spacing.xs} * 2));

        opacity: 0;
        transform: scale(0.8);
        transition: all 0.3s cubic-bezier(0.35, 0, 0, 1);
        transition-property: opacity, transform;
        z-index: -1;
    }

    &:hover::after {
        opacity: 1;
        transform: scale(1);
    }

    &:focus {
        outline: none;
    }
`;

const Text = styled.p`
    margin: 0;
    color: ${theme.colors.neutral.white};
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.sizes.md};
    font-weight: ${theme.typography.weights.medium};
`;

const NavLink = styled(RouterNavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    padding: 0 ${theme.spacing.sm};

    &::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 80%;
        height: 2px;
        background-color: transparent;
        transition: background-color 0.2s;
        margin: 0 10%;
    }

    &.active::before {
        background-color: ${theme.colors.primary.light};
        opacity: 80%;
    }

    &::after {
        background-color: ${theme.colors.primary.light};
        border-radius: ${theme.borderRadius.lg};
        content: "";

        position: absolute;
        top: -${theme.spacing.xs};
        left: -${theme.spacing.xs};
        width: calc(100% + (${theme.spacing.xs} * 2));
        height: calc(100% + (${theme.spacing.xs} * 2));

        opacity: 0;
        transform: scale(0.8);
        transition: all 0.3s cubic-bezier(0.35, 0, 0, 1);
        transition-property: opacity, transform;
        z-index: -1;
    }

    &:hover::after {
        opacity: 1;
        transform: scale(1);
    }
`;

export const Styled = {
    Nav,
    Button,
    Text,
    NavLink,
};
