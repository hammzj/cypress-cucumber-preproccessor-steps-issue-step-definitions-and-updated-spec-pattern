# What

This project is to serve as an example for an issue with the Cypress Cucumber Preprocessor.

A developer is unable to specify the `[filepart]` or `[filepath]` matchers for the preprocessor's "stepDefinitions" when
the `specPattern` is changed within the Cypress configuration file.



### Expectations

* When running `cypress:run`, the `cypress.config.mjs` file is used.
    * Feature files matching this pattern shall be run: `cypress/e2e/features/**/*.feature`
      * This includes `features/a/**/*.feature` and `features/b/**/*.feature`
    * Steps should be included from these places:
        * cypress/e2e/stepDefinitions/steps.mjs, for all features
        * cypress/e2e/a/stepDefinitions/steps.mjs, but is only loaded for features in `features/a/**/*.feature`
        * cypress/e2e/b/stepDefinitions/steps.mjs, but is only loaded for features in `features/b/**/*.feature`
    * All feature files should complete successfully.

* When running `cypress:run:A`, the `cypress.config.a-tests.mjs` file is used.
  * Feature files matching this pattern shall be run: `cypress/e2e/features/a/**/*.feature`
  * Steps should be included from these places:
    * cypress/e2e/stepDefinitions/steps.mjs
    * cypress/e2e/a/stepDefinitions/steps.mjs
  * All feature files should complete successfully.


* When running `cypress:run:B`, the `cypress.config.b-tests.mjs` file is used.
    * Feature files matching this pattern shall be run: `cypress/e2e/features/b/**/*.feature`
    * Steps should be included from these places:
        * cypress/e2e/stepDefinitions/steps.mjs
        * cypress/e2e/b/stepDefinitions/steps.mjs
    * All feature files should complete successfully.

### Actual Result

* Running `cypress:run`, which does not have an updated spec pattern, runs successfully.
* Running `cypress:run:A` fails due to not finding spec patterns from `cypress/e2e/a/stepDefinitions/steps.mjs` .
* Running `cypress:run:B` fails due to not finding spec patterns from `cypress/e2e/b/stepDefinitions/steps.mjs`.
