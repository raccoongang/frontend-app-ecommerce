/* eslint-disable import/no-extraneous-dependencies */

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mergeConfig } from '@edx/frontend-platform';

Enzyme.configure({ adapter: new Adapter() });

mergeConfig({
  COMMERCE_COORDINATOR_BASE_URL: process.env.COMMERCE_COORDINATOR_BASE_URL,
  ENABLE_B2C_SUBSCRIPTIONS: process.env.ENABLE_B2C_SUBSCRIPTIONS,
  SUBSCRIPTIONS_BASE_URL: process.env.SUBSCRIPTIONS_BASE_URL,
  SUBSCRIPTIONS_MARKETING_URL: process.env.SUBSCRIPTIONS_MARKETING_URL,
  SUBSCRIPTIONS_MINIMUM_PRICE: process.env.SUBSCRIPTIONS_MINIMUM_PRICE,
  SUBSCRIPTIONS_TRIAL_LENGTH: process.env.SUBSCRIPTIONS_TRIAL_LENGTH,
  SUPPORT_URL: process.env.SUPPORT_URL,
});

// These configuration values are usually set in webpack's EnvironmentPlugin however
// Jest does not use webpack so we need to set these so for testing
process.env.LMS_BASE_URL = 'http://localhost:18000';
