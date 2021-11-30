import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel send', () => {
  fetchData.mockReturnValue('{}');
  getLevel(1);
  expect(fetchData).toBeCalledTimes(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('getLevel ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: '2' });
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 2');
});

test('getLevel false', () => {
  fetchData.mockReturnValue({ status: 'false' });
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
