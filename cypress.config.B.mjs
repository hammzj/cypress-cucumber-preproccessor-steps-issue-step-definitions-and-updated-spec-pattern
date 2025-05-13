import {defineConfig} from 'cypress';
import baseConfig from './cypress.config.mjs';

const bConfig = baseConfig;

// Edits
bConfig.e2e.specPattern = 'cypress/e2e/features/b/**/*.feature';

// Export new config
export default defineConfig(bConfig);
