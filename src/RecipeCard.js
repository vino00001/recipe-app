import React, { useState } from 'react';
import RecipeCardSmall from './RecipeCardSmall';
import RecipeCardLarge from './RecipeCardLarge';

const RecipeCard = ({ recipe }) => {
  //Detta är ett anti-pattern. Det är dåligt att spara faktiskta react-komponenter i state.
  //Anledningen är att props som du skickar in fixeras vid tillfället då du lägger in 
  //komponenten i state, och det riskerar då att hamna i osynk när denna komponent renderas om  
/*   const [renderedComponent, setRenderedComponent] = useState(
    <RecipeCardSmall recipe={recipe} switchScene={switchToFullWidth} />
  );

  console.log(recipe);
  const [columnStyling, setColumnStyling] = useState('column is-one-third');

  const switchToNormal = () => {
    setColumnStyling('column is-one-third');
    setRenderedComponent(
      <RecipeCardSmall recipe={recipe} switchScene={switchToFullWidth} />
    );
  };

  const switchToFullWidth = () => {
    setColumnStyling('column is-full');
    setRenderedComponent(
      <RecipeCardLarge recipe={recipe} switchScene={switchToNormal} />
    );
  }; */

  //en bättre lösning
  const [isFullWidth, setIsFullWidth] = useState(false);
  const columnStyling = isFullWidth ? 'column is-full' : 'column is-one-third'; 
  const renderedComponent = isFullWidth 
    ? <RecipeCardLarge recipe={recipe} switchScene={() => setIsFullWidth(false)} />
    : <RecipeCardSmall recipe={recipe} switchScene={() => setIsFullWidth(true)} />

  return <div className={columnStyling}>{renderedComponent}</div>;
};

export default RecipeCard;
