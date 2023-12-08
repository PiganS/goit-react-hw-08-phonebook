import { Outlet } from 'react-router-dom';
import {
  ButtonOut,
  Container,
  Link,
  StyledHeader,
  StyledNav,
} from './Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/auth.selectors';
import { logOutThunk } from 'redux/auth/auth.reducer';

export const Layout = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <StyledHeader>
        <nav>
          <StyledNav>
            <li>
              <Link to="/">Home</Link>
            </li>
            {authenticated ? (
              <>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
                <ButtonOut onClick={onLogOut}>Log Out ✖</ButtonOut>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </StyledNav>
        </nav>
      </StyledHeader>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
