import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  btnVerify = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
    } = this.state;

    const lintMagicNumber = 0;
    const lintMagicNumberNoventa = 90;
    const maxValue = 210;

    const stringValues = [cardName, cardDescription, cardImage];
    const numValues = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];

    const isStringValid = stringValues.every((elem) => elem.length > 0);
    const isNumValid = numValues
      .every((elem) => (elem >= lintMagicNumber && elem <= lintMagicNumberNoventa));
    const isSumValid = numValues.reduce((a, c) => a + c, 0) <= maxValue;
    const allValid = isStringValid && isNumValid && isSumValid && cardRare;
    this.setState({ isSaveButtonDisabled: !allValid });
  };

  onInputChange = (id, value) => {
    this.setState({ [id]: value }, this.btnVerify);
  };

  onSaveButtonClick = (e) => {
    console.log(e);
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
