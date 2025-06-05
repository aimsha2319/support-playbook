import React from 'react';
import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #000;
  padding: 0.75rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: transparent;
  font-weight: 600;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const HomeIconStyled = styled(HomeIcon)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  color: white;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  padding: 0.5rem 1rem;
  width: 200px;
  font-size: 0.875rem;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: #4f46e5;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #4f46e5;
  }
`;

const SearchIconButton = styled(SearchIcon)`
  width: 1rem;
  height: 1rem;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <HomeButton to="/">
          <HomeIconStyled />
          Home
        </HomeButton>
        <SearchContainer>
          <SearchInput placeholder="Search scenarios..." />
          <SearchButton>
            <SearchIconButton />
            Search
          </SearchButton>
        </SearchContainer>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
