import {Component} from 'react'
import {GradientContainer} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

import './index.css'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    colorInput1: '#8ae323',
    colorInput2: '#014f7b',
    selectedDirection: gradientDirectionsList[0].value,
    gradientDetails: `linear-gradient(to top,#8ae323,#014f7b)`,
  }

  onChangeTab = id => {
    this.setState({selectedDirection: id})
  }

  changeColor1 = event => {
    this.setState({colorInput1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({colorInput2: event.target.value})
  }

  onGenerate = event => {
    event.preventDefault()
    const {colorInput1, colorInput2, selectedDirection} = this.state
    const gradient = `linear-gradient(to ${selectedDirection},${colorInput1},${colorInput2})`
    this.setState({gradientDetails: gradient})
  }

  render() {
    const {
      colorInput1,
      colorInput2,
      selectedDirection,
      gradientDetails,
    } = this.state
    return (
      <GradientContainer
        gradientDetails={gradientDetails}
        onSubmit={this.onGenerate}
        data-testid="gradientGenerator"
      >
        <h1 className="main-heading">Generate a CSS Color Gradient</h1>
        <p className="choose-direction-text">Choose Direction</p>
        <ul className="directions-list-container">
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              itemDetails={each}
              selectedDirection={selectedDirection}
              onChangeTab={this.onChangeTab}
            />
          ))}
        </ul>
        <p className="choose-direction-text">Pick the Colors</p>
        <div className="colors-inputs-container">
          <div className="color-container">
            <p htmlFor="color1">{colorInput1}</p>
            <input
              type="color"
              className="color-input"
              value={colorInput1}
              onChange={this.changeColor1}
            />
          </div>
          <div className="color-container">
            <p htmlFor="color2">{colorInput2}</p>
            <input
              type="color"
              className="color-input"
              value={colorInput2}
              onChange={this.changeColor2}
            />
          </div>
        </div>
        <button type="submit" className="generate-btn">
          Generate
        </button>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
