import '@testing-library/jest-dom'
import { setGlobalConfig } from '@storybook/testing-react'
import { getWorker } from 'msw-storybook-addon'
import * as globalStorybookConfig from '../.storybook/preview'
import { vi } from "vitest";

setGlobalConfig(globalStorybookConfig)

// Ensure MSW connections are closed
// @ts-expect-error https://github.com/mswjs/msw-storybook-addon/issues/65
afterAll(() => getWorker().close())

beforeAll(() => {
  const date = new Date(2017, 0, 1);

  vi.useFakeTimers();
  vi.setSystemTime(date);
});
  