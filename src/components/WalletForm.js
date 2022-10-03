import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRequest } from '../redux/actions/index';
import Table from './Table';

class WalletForm extends Component {
  state = {
    inputValue: '',
    selectCurrency: '',
    selectPayment: '',
    selectTag: '',
    inputDescription: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRequest());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      inputValue,
      selectCurrency,
      selectPayment,
      selectTag,
      inputDescription,
    } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              data-testid="value-input"
              type="text"
              name="inputValue"
              value={ inputValue }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select
              data-testid="currency-input"
              name="selectCurrency"
              value={ selectCurrency }
              id="currency"
              onChange={ this.handleChange }
            >
              {currencies.map((currency) => (
                <option value="currency" key={ currency }>
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select
              data-testid="method-input"
              name="selectPayment"
              value={ selectPayment }
              id="payment"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Tag:
            <select
              data-testid="tag-input"
              name="selectTag"
              value={ selectTag }
              id="tag"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="description-input">
            Descrição:
            <textarea
              data-testid="description-input"
              name="inputDescription"
              value={ inputDescription }
              id="description"
              cols="25"
              rows="1"
              onChange={ this.handleChange }
            />
          </label>
          <button type="button">Adicionar despesa</button>
        </form>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps)(WalletForm);
