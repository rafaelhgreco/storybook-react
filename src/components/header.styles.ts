import styled from "@emotion/styled";
import { theme } from "../theme";

const Header = styled.header`
    width: 100%;
    height: 60px;
    background-color: inherit;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    ${theme.media.mobile} {
        height: 50px;
        padding: 0 10px;
    }
`;

const Logo = styled.img`
    max-width: 100px;
    height: auto;
    ${theme.media.mobile} {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Styled = {
	Header,
	Logo,
};
