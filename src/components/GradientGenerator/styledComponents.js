// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.form`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${props => props.gradientDetails};
`
