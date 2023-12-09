import {
  StyledTitle,
  StyledTrendingTitle,
} from 'components/Layout/Layout.styled';
import React from 'react';

const Home = () => {
  return (
    <div>
      <StyledTrendingTitle>Hello! I'm your phonebook</StyledTrendingTitle>
      <StyledTitle>keep all your contacts in a safe place</StyledTitle>
    </div>
  );
};

export default Home;
