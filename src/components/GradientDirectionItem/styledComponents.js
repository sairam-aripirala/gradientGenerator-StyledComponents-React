// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  background-color: white;
  width: 120px;
  color: #334155;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 10px 25px;
  margin: 5px;
  cursor: pointer;
  opacity: ${props => (props.isSelected ? 1 : 0.5)};
`
