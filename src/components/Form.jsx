import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            id="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ (e) => onInputChange(e.target.id, e.target.value) }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            id="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ (e) => onInputChange(e.target.id, e.target.value) }
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr01
          <input
            type="number"
            id="cardAttr1"
            data-testid="attr1-input"
            max="90"
            min="1"
            value={ cardAttr1 }
            onChange={ (e) => onInputChange(e.target.id, e.target.value) }
          />
        </label>
        <label htmlFor="cardAttr2">
          Attr02
          <input
            type="number"
            id="cardAttr2"
            data-testid="attr2-input"
            max="90"
            min="1"
            value={ cardAttr2 }
            onChange={ (e) => onInputChange(e.target.id, e.target.value) }
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr03
          <input
            type="number"
            id="cardAttr3"
            data-testid="attr3-input"
            max="90"
            min="1"
            value={ cardAttr3 }
            onChange={ (e) => onInputChange(e.target.id, e.target.value) }
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            type="url"
            id="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ (e) => onInputChange(e.target.id, e.target.value) }
          />
        </label>
        <label htmlFor="cardRare">
          Raridade
          <select
            data-testid="rare-input"
            id="cardRare"
            value={ cardRare }
            onChange={ (e) => onInputChange(e.target.id, e.target.value) }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          <input
            type="checkbox"
            id="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ (e) => {
              onInputChange(e.target.id, e.target.checked);
              if (!hasTrunfo) {
                onInputChange('hasTrunfo', !hasTrunfo);
              }
            } }
          />
          Super Trybe Tryunfo
        </label>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
