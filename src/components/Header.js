import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    return (
      <div>
        <p data-testid="email-field">{userEmail}</p>
        <p data-testid="total-field">
          {expenses
            ?.reduce((accExpenses, eleCurr) => {
              const { currency } = eleCurr;
              const sumValues = Number(eleCurr.exchangeRates[currency].ask)
                * Number(eleCurr.value);
              const total = accExpenses + sumValues;
              return total;
            }, 0)
            .toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default connect(mapStateToProps)(Header);
