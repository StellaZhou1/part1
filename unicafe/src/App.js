import React, { useState } from 'react'

const Button = (props) =>{
  return (<button onClick={props.handleClick}>{props.text}</button>)
}

const StatisticLine = (props) =>{
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  let sum=props.good+props.bad+props.neutral
  let average=0
  let positiveRate=0
  const calAverage = ()=>{
    average = (props.good-props.bad)/sum
    positiveRate = props.good/sum*100
  }
  if (sum === 0){
    return (
      <div>
        <h1> statistics </h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else{
    calAverage()
    let positiveRateStr = positiveRate.toString()+"%"
    return (
      <div>
        <h1> statistics </h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good}/>
            <StatisticLine text="neutral" value={props.neutral}/>
            <StatisticLine text="bad" value={props.bad}/>
            <StatisticLine text="all" value={sum}/>
            <StatisticLine text="average" value={average}/>
            <StatisticLine text="positive" value={positiveRateStr}/>
          </tbody>
        </table>
        
      </div>
    )
  }
}

const App = () => {
  // save number of clicks of each button as separate states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  return (
    <div>
      <h1> give feadback </h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App