import styled from "@emotion/styled";

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
    background-color: #f8f9fa;
    border-top: 1px solid #e9ecef;
    text-align: center;
    gap: 0.5rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
        padding: 1rem 4rem;
    }
`;

const Title = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: #212529;
    margin: 0;
`;

const Subtitle = styled.p`
    font-size: 0.875rem;
    color: #6c757d;
    margin: 0;
`;

const Copyright = styled.span`
    font-size: 0.75rem;
    color: #adb5bd;
    margin-top: 1rem;

    @media (min-width: 768px) {
        margin-top: 0;
    }
`;

export const Styled = {
    FooterContainer,
    Title,
    Subtitle,
    Copyright,
};
