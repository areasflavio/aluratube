import styled from 'styled-components';

const StyledBanner = styled.div`
  display: flex;
  height: calc(100vh / 6);

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: 50% -50px;
  }
`;

export function Banner(props) {
  return (
    <StyledBanner>
      <img src={props.url} alt="" />
    </StyledBanner>
  );
}
