import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => (
  <StyledLoader>
    <RotatingLines
      strokeColor="red"
      strokeWidth="5"
      animationDuration="0.75"
      width="30"
      visible={true}
    />
  </StyledLoader>
);
