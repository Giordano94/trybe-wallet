import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

const email = 'email@trybe.com';
const password = 'trybe123';

describe('', () => {
  test('check that the login page contains all the required elements', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getAllByTestId('email-input');
    expect(inputEmail).toBeDefined();

    const inputPassword = screen.getAllByTestId('password-input');
    expect(inputPassword).toBeDefined();

    const enterButton = screen.getByRole('button', { name: /entrar/i });
    expect(enterButton).toBeDefined();
  });
  test('check if ./ is the route to login page', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  it('check that when filling in the inputs and clicking on the button, you are redirected to the wallet page', () => {
    const { history } = renderWithRouterAndRedux(<App />, {
      initialEntries: ['/'],
    });
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const enterButton = screen.getByRole('button', { name: /entrar/i });
    expect(enterButton).toBeInTheDocument();

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);

    userEvent.click(enterButton);
    console.log(history);

    expect(history.location.pathname).toBe('/carteira');
  });

  test('check that the wallet page contains all the required elements', () => {
    const { history } = renderWithRouterAndRedux(<App />, {
      initialEntries: ['/carteira'],
    });

    expect(history.location.pathname).toBe('/carteira');

    const inputValue = screen.getByTestId('value-input', { name: /valor/i });
    expect(inputValue).toBeDefined();

    const inputCurrency = screen.getByTestId('currency-input', {
      name: /moeda:/i,
    });
    expect(inputCurrency).toBeDefined();

    const methodInput = screen.getByTestId('method-input', {
      name: /método de pagamento/i,
    });
    expect(methodInput).toBeDefined();

    const tagInput = screen.getByTestId('tag-input', {
      name: /tag/i,
    });
    expect(tagInput).toBeDefined();

    const descriptionInput = screen.getByTestId('description-input', {
      name: / Descrição:/i,
    });
    expect(descriptionInput).toBeDefined();

    const addExpensesButton = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });
    expect(addExpensesButton).toBeInTheDocument();
  });
  test('checks if the "total field" and "exchange" elements start with "0" and "BRL"', () => {
    renderWithRouterAndRedux(<App />, {
      initialEntries: ['/carteira'],
    });

    const totalField = screen.getByTestId('total-field');
    expect(totalField).toHaveTextContent('0');

    const currencyField = screen.getByTestId('header-currency-field');
    expect(currencyField).toHaveTextContent('BRL');
  });
});
