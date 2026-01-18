import { Styled } from "./footer.styles";

export interface FooterProps {
    title: string;
    subtitle: string;
    name: string;
}

export default function Footer({ title, subtitle, name }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.FooterContainer>
            <div>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Subtitle>{subtitle}</Styled.Subtitle>
            </div>
            <Styled.Copyright>
                &copy; {currentYear} {name}. All rights reserved.
            </Styled.Copyright>
        </Styled.FooterContainer>
    );
}
