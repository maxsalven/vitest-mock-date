import { beforeAll } from "vitest";
import { vi } from "vitest";

beforeAll(() => {
  const date = new Date(2017, 0, 1);

  vi.useFakeTimers();
  vi.setSystemTime(date);
});
