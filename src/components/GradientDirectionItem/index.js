// Write your code here
import './index.css'
import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemDetails, onChangeTab, selectedDirection} = props
  const {value, displayText} = itemDetails

  const onClickTab = () => {
    onChangeTab(value)
  }
  const isSelected = selectedDirection === value
  return (
    <li className="direction-type-list-item">
      <DirectionButton
        type="button"
        className="direction-type-btn"
        onClick={onClickTab}
        isSelected={isSelected}
      >
        {displayText}
      </DirectionButton>
    </li>
  )
}

export default GradientDirectionItem
