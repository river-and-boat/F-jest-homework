const mockAxios = jest.createMockFromModule("axios");

mockAxios.get = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.post = jest.fn(() => Promise.resolve({ data: "success" }));

export default mockAxios;
