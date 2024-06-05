import { alert } from './alert.reducer';
import { alertConstants } from '../constants/alert.constants';

describe('alert reducer', () => {
  it('deberia devolver el estado inicial', () => {
    expect(alert(undefined, {})).toEqual({});
  });

  it('deberia manejar la alerta SUCCESS', () => {
    expect(
      alert({}, {
        type: alertConstants.SUCCESS,
        message: 'Success message'
      })
    ).toEqual({
      type: 'alert-success',
      message: 'Success message'
    });
  });

  it('deberia manejar la alerta ERROR', () => {
    expect(
      alert({}, {
        type: alertConstants.ERROR,
        message: 'Error message'
      })
    ).toEqual({
      type: 'alert-danger',
      message: 'Error message'
    });
  });

  it('deberia manejar la alerta CLEAR', () => {
    expect(
      alert({}, {
        type: alertConstants.CLEAR
      })
    ).toEqual({});
  });
});