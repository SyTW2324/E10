import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddSongForm from './songs.component';
import '@testing-library/jest-dom';

describe('AddSongForm tests', () => {

it('renders AddSongForm', () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText } = render(<AddSongForm onSubmit={onSubmit} />);

  expect(getByPlaceholderText('Name')).toBeInTheDocument();
  expect(getByPlaceholderText('Author')).toBeInTheDocument();
  expect(getByPlaceholderText('Duration')).toBeInTheDocument();
  expect(getByPlaceholderText('Genres')).toBeInTheDocument();
  expect(getByPlaceholderText('Reproductions')).toBeInTheDocument();
});

});