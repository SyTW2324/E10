import { users } from './users.reducer';
import { userConstants } from '../constants/user.constants';

describe('users reducer', () => {
  it('deberia devolver el estado inicial', () => {
    expect(users(undefined, {})).toEqual({});
  });

  it('deberia manejar la alerta GETALL_REQUEST', () => {
    expect(
      users({}, {
        type: userConstants.GETALL_REQUEST
      })
    ).toEqual({
      loading: true
    });
  });

  it('deberia manejar la alerta GETALL_SUCCESS', () => {
    expect(
      users({}, {
        type: userConstants.GETALL_SUCCESS,
        users: [{ id: 1, name: 'testuser' }]
      })
    ).toEqual({
      items: [{ id: 1, name: 'testuser' }]
    });
  });

  it('deberia manejar la alerta GETALL_FAILURE', () => {
    expect(
      users({}, {
        type: userConstants.GETALL_FAILURE,
        error: 'Fetch failed'
      })
    ).toEqual({
      error: 'Fetch failed'
    });
  });
});