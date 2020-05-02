import React from 'react'
import styled from 'styled-components'

export const StyledA = styled.a`
  text-decoration: underline;
  color: var(
    --colour-on-background,
    ${({ theme }) => theme.colours.grey[900]}
  );
  text-decoration-color: var(
    --colour-on-background,
    ${({ theme }) => theme.colours.grey[900]}
  );
  &:hover {
    opacity: 0.5;
  }
`

export const A = props => {
  return (
    <StyledA {...props} id={props.id}>
      {props.children}
    </StyledA>
  )
}
