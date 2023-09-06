import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  ${'' /* width: 400px; */}
  justify-content: space-around;
  align-items: center;
`;
export const Button = styled.button`
  width: 100px;

  font-weight: 600;
  text-transform: uppercase;
  height: 50px;
  padding: 5px;
  background-color: #eeeee4;
  outline: none;
  border: 2px solid rgba(183, 106, 106, 0.82);
  border-radius: 5px;
  cursor: pointer;

  & :focus,
  :hover {
    background-color: rgba(183, 106, 106, 0.82);
  }
`;