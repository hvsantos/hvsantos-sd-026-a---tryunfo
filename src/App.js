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
    savedCards: [],
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
    e.preventDefault();
    const {
      cardTrunfo, savedCards,
      cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    const newValue = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState({
      savedCards: [...savedCards, newValue],
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  deleteCard = (nameToRemove, check) => {
    const { savedCards } = this.state;
    const removeCard = savedCards.filter(({ cardName }) => cardName !== nameToRemove);
    if (check) {
      this.setState({
        hasTrunfo: false,
      });
    }
    this.setState({ savedCards: removeCard });
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      savedCards,
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
        <div>
          <h1>Preview</h1>
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
        <div>
          <h1>Cartas Salvas</h1>
          { savedCards.map((obj) => (
            <div key={ obj.cardName }>
              <Card
                cardName={ obj.cardName }
                cardDescription={ obj.cardDescription }
                cardAttr1={ obj.cardAttr1 }
                cardAttr2={ obj.cardAttr2 }
                cardAttr3={ obj.cardAttr3 }
                cardImage={ obj.cardImage }
                cardRare={ obj.cardRare }
                cardTrunfo={ obj.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.deleteCard(obj.cardName, obj.cardTrunfo) }
              >
                Excluir
              </button>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

export default App;
