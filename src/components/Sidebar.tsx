import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const categories = [
  { id: 1, name: 'Technical Issues', slug: 'technical-issues' },
  { id: 2, name: 'Account Management', slug: 'account-management' },
  { id: 3, name: 'Billing', slug: 'billing' },
  { id: 4, name: 'Product Features', slug: 'product-features' },
  { id: 5, name: 'Shipping & Delivery', slug: 'shipping-delivery' },
];

const SidebarContainer = styled.div`
  position: fixed;
  inset: 0;
  left: 0;
  z-index: 30;
  width: 16rem;
  background: white;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    position: static;
    inset: auto;
  }
`;

const SidebarHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const SidebarNav = styled.nav`
  padding: 1rem;
`;

const NavItem = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <h2>Support Playbook</h2>
      </SidebarHeader>
      <SidebarNav>
        <NavItem to="/category/account-management">Account Management</NavItem>
        <NavItem to="/category/billing">Billing</NavItem>
        <NavItem to="/category/product-features">Product Features</NavItem>
        <NavItem to="/category/shipping">Shipping & Delivery</NavItem>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
