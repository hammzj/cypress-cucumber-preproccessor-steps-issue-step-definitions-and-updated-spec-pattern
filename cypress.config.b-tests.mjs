import {defineConfig} from 'cypress';
import baseConfig from './cypress.config.mjs';

const mutatedConfig = baseConfig;

// Edits
mutatedConfig.e2e.specPattern = 'cypress/e2e/features/b-tests-tests/**/*.feature';
mutatedConfig.e2e.env.stepDefinitions = [
    "cypress/e2e/features/stepDefinitions/**/*.{js,mjs,cjs}",
    "cypress/e2e/features/b-tests-tests/[filepart]/stepDefinitions/**/*.{js,mjs,cjs}"
]

// Export new config
export default defineConfig(mutatedConfig);
