import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-item: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${props => props.theme.darkGrayColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">INSTAGRAM정보</Link>
      </ListItem>
      <ListItem>
        <Link href="#">지원</Link>
      </ListItem>
      <ListItem>
        <Link href="#">홍보 센터</Link>
      </ListItem>
      <ListItem>
        <Link href="#">api</Link>
      </ListItem>
      <ListItem>
        <Link href="#">채용 정보</Link>
      </ListItem>
      <ListItem>
        <Link href="#">개인정보처리방침</Link>
      </ListItem>
      <ListItem>
        <Link href="#">약관</Link>
      </ListItem>
      <ListItem>
        <Link href="#">디렉터리</Link>
      </ListItem>
      <ListItem>
        <Link href="#">프로필</Link>
      </ListItem>
      <ListItem>
        <Link href="#">해시태그</Link>
      </ListItem>
      <ListItem>
        <Link href="#">언어</Link>
      </ListItem>
    </List>
    <Copyright>Instagram_Clone {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
