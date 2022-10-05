import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getUserEmail } from '../redux/actions';

class Login extends Component {
  state = {
    inputPassword: '',
    inputEmail: '',
    isDisabled: true,
    redirect: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      const MAX_CHAR = 6;
      const { inputEmail, inputPassword } = this.state;
      const regex = /\S+@\S+\.\S+/;
      const validEmail = regex.test(inputEmail);
      const validPassword = inputPassword.length >= MAX_CHAR;
      const enableButton = !(validEmail && validPassword);
      this.setState({ isDisabled: enableButton });
    });
  };

  handleCLick = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { inputEmail } = this.state;
    dispatch(getUserEmail(inputEmail));
    this.setState({ redirect: true });
  };

  render() {
    const { isDisabled, redirect } = this.state;
    return (
      <div>
        {redirect && <Redirect to="/carteira" />}
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              data-testid="email-input"
              type="text"
              name="inputEmail"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Password:
            <input
              data-testid="password-input"
              type="password"
              name="inputPassword"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleCLick }
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
