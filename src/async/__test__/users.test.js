import getUsers from "../users";
// eslint-disable-next-line jest/no-mocks-import
import mockAxios from "../../async.mock/__mocks__/axios";

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const result = getUsers();
    expect(mockAxios.get).toBeCalledTimes(1);
    await expect(result).resolves.toEqual({});
  });
});
