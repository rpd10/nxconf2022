import {
  RULE_NAME as noStandaloneComponentsName,
  rule as noStandaloneComponents,
} from './rules/no-standalone-components';
import {
  RULE_NAME as noProvidedInAnyName,
  rule as noProvidedInAny,
} from './rules/no-provided-in-any';
/**
 * Import your custom workspace rules at the top of this file.
 *
 * For example:
 *
 * import { RULE_NAME as myCustomRuleName, rule as myCustomRule } from './rules/my-custom-rule';
 *
 * In order to quickly get started with writing rules you can use the
 * following generator command and provide your desired rule name:
 *
 * ```sh
 * npx nx g @nrwl/linter:workspace-rule {{ NEW_RULE_NAME }}
 * ```
 */

module.exports = {
  /**
   * Apply the imported custom rules here.
   *
   * For example (using the example import above):
   *
   * rules: {
   *  [myCustomRuleName]: myCustomRule
   * }
   */
  rules: {
    [noProvidedInAnyName]: noProvidedInAny,
    [noStandaloneComponentsName]: noStandaloneComponents,
  },
};
