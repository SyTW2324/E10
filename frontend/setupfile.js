global.localStorage = {
    getItem: jest.fn((key) => {
        if (key === 'user') {
          return JSON.stringify({ name: 'Test User' }); // replace with a mock user object
        }
      }),
    setItem: jest.fn(),
    clear: jest.fn()
  };