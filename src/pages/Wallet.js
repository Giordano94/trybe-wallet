import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="value-input">
            Value:
            <input data-testid="value-input" type="text" name="inputValue" />
          </label>
          <label htmlFor="current-input">
            Current:
            <select name="current" id="current">
              <option value="USD">USD</option>
            </select>
          </label>
          <label htmlFor="payment-input">
            Método de pagamento:
            <select name="payment" id="payment">
              <option value="dinheiro">dinheiro</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Tag:
            <select name="tag" id="tag">
              <option value="alimentação">alimentação</option>
            </select>
          </label>
          <label htmlFor="description-input">
            Descrição:
            <textarea name="description" id="description" cols="25" rows="1" />
          </label>
          <button type="button">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

export default Wallet;
