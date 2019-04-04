const { defaults } = require('jest-config')
const child_process = require('child_process')
const scCfg = require('../app/.cli/config')

let SC_APP_ID
let SC_APP_HOST
let SC_APP_PORT
let SC_APP_CONFIG

try {
  SC_APP_CONFIG = scCfg
  const match = /^grpc-((\w+).+)?(:(\d+))$/.exec(SC_APP_CONFIG.application.url)
  SC_APP_HOST = match[1]
  SC_APP_ID = match[2]
  SC_APP_PORT = match[4]

  const scEnv = child_process.execSync(`sc-cli env -dir app`).toString()

  scEnv.split(' ').forEach((pair) => {
    const [k, v] = pair.split('=')
    process.env[k] = v
  })
} catch (e) {
  console.error('Unable to load application config, failed with error:', e)
}

const tsJestConfig = {
  skipBabel: true,
}

const config = {
  rootDir: '..',
  transform: /** @type {any} */ ({
    '^.+\\.(ts|tsx)$': 'ts-jest',
  }),
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).ts?(x)',
  ],
  globals: {
    'ts-jest': tsJestConfig,
    SC_APP_ID,
    SC_APP_HOST,
    SC_APP_PORT,
    SC_APP_CONFIG,
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

module.exports = config
