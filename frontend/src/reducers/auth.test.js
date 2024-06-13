import { authentication } from './auth.reducer';
import { userConstants } from '../constants/user.constants';

describe('authentication reducer', () => {
  it('deberia devolver el estado inicial', () => {
    expect(authentication(undefined, {})).toEqual({});
  });

  it('deberia manejar la alerta LOGIN_REQUEST', () => {
    expect(
      authentication({}, {
        type: userConstants.LOGIN_REQUEST,
        user: { username: 'testuser' }
      })
    ).toEqual({
      loggingIn: true,
      user: { username: 'testuser' }
    });
  });

  it('deberia manejar la alerta LOGIN_SUCCESS', () => {
    expect(
      authentication({}, {
        type: userConstants.LOGIN_SUCCESS,
        user: { username: 'testuser' }
      })
    ).toEqual({
      loggedIn: true,
      user: { username: 'testuser' }
    });
  });

  it('deberia manejar la alerta LOGIN_FAILURE', () => {
    expect(
      authentication({}, {
        type: userConstants.LOGIN_FAILURE
      })
    ).toEqual({});
  });

  it('deberia manejar la alerta LOGOUT', () => {
    expect(
      authentication({}, {
        type: userConstants.LOGOUT
      })
    ).toEqual({});
  });
});