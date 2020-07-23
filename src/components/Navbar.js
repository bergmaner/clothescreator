import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"

const Nav = styled.div`
flex-grow: 1;
`;

const Title = styled(Typography)`
flex-grow: 1;
`;

const NavHeader = styled(AppBar)`
background: black;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavHeader position='fixed'>
        <Toolbar>
          <Title variant="h6">
            Clothes Creator
          </Title>
        </Toolbar>
      </NavHeader>
    </Nav>
  );
}
export default Navbar