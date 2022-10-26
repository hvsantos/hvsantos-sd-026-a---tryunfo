import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input type="text" id="nome" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea id="description" data-testid="description-input" />
        </label>
        <label htmlFor="attr01">
          Attr01
          <input type="number" id="attr01" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr02">
          Attr02
          <input type="number" id="attr02" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr03">
          Attr03
          <input type="number" id="attr03" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="url" id="image" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select data-testid="rare-input" id="rarity">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" id="trunfo" data-testid="trunfo-input" />
          Super Trybe Tryunfo
        </label>
        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}
