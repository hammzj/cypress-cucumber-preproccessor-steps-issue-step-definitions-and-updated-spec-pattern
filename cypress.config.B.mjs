import {defineConfig} from 'cypress';
import baseConfig from './cypress.config.mjs';

const aConfig = baseConfig;

// Edits
aConfig.e2e.specPattern = 'cypress/e2e/features/b/**/*.feature';

// Export new config
export default defineConfig(aConfig);
