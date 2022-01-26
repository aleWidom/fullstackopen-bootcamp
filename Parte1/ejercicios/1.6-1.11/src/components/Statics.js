//Ej1.8-1.9-1.10
/* import React from 'react';
import Description from './Description'

const Statics = ({good, neutral, bad}) => {
  return (
   <>
    <Description title={"Good:"} count={good} />
    <Description title={"Neutral:"} count={neutral} />
    <Description title={"Bad:"} count={bad} />
    <Description title={"All:"} count={good+neutral+bad} />
    <Description title={"Average:"} count={good === 0 && neutral === 0 && bad === 0 ? 0 : (good-bad)/(good+neutral+bad)}/>
    <Description title={"Positive:"} title2={"%"} count={good === 0 && neutral === 0 && bad === 0 ? 0 : ((good)/(good+neutral+bad))*100}/>
   </>
    )
};

export default Statics;
 */


//Ej1.11
import React from 'react';
import Description from './Description'

const Statics = ({ good, neutral, bad }) => {
  return (
      <table>
          <tbody>
            <Description title={"Good:"} count={good} />
          <Description title={"Neutral:"} count={neutral} />
          <Description title={"Bad:"} count={bad} />
          <Description title={"All:"} count={good + neutral + bad} />
          <Description title={"Average:"} count={good === 0 && neutral === 0 && bad === 0 ? 0 : (good - bad) / (good + neutral + bad)} />
          <Description title={"Positive:"} count={good === 0 && neutral === 0 && bad === 0 ? 0 : (((good) / (good + neutral + bad)) * 100)+"%"} />
          </tbody>
      </table>
  )
};

export default Statics;