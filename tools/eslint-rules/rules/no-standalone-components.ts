/**
 * This file sets you up with with structure needed for an ESLint rule.
 *
 * It leverages utilities from @typescript-eslint to allow TypeScript to
 * provide autocompletions etc for the configuration.
 *
 * Your rule's custom logic will live within the create() method below
 * and you can learn more about writing ESLint rules on the official guide:
 *
 * https://eslint.org/docs/developer-guide/working-with-rules
 *
 * You can also view many examples of existing rules here:
 *
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/rules
 */

import { ASTUtils } from '@angular-eslint/utils';
import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';

// NOTE: The rule will be available in ESLint configs as "@nrwl/nx/workspace/no-standalone-components"
export const RULE_NAME = 'no-standalone-components';

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: `Using standalone Angular components is not yet allowed, until we have collectively decided on the best architecture for their usage.`,
      recommended: 'error',
    },
    schema: [],
    messages: {
      noStandaloneComponents: `Using standalone components is not allowed (yet).`,
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ClassDeclaration: function (node: TSESTree.ClassDeclaration) {
        for (const decorator of node.decorators) {
          const value = ASTUtils.getDecoratorPropertyValue(
            decorator,
            'standalone'
          );
          if (value && ASTUtils.isLiteral(value) && value.value === true) {
            context.report({
              node: ASTUtils.getDecoratorProperty(decorator, 'standalone'),
              messageId: 'noStandaloneComponents',
            });
          }
        }
      },
    };
  },
});
