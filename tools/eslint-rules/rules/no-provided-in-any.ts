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
import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';

// NOTE: The rule will be available in ESLint configs as "@nrwl/nx/workspace/no-provided-in-any"
export const RULE_NAME = 'no-provided-in-any';

const PROVIDED_IN = 'providedIn';

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: `Using providedIn:any is almost never correct and should be used sparingly.`,
      recommended: 'error',
    },
    schema: [],
    messages: {
      noProvidedInAny: `Using \`${PROVIDED_IN}\`: any is not allowed.`,
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ClassDeclaration: function (node: TSESTree.ClassDeclaration) {
        for (const decorator of node.decorators) {
          const value = ASTUtils.getDecoratorPropertyValue(
            decorator,
            PROVIDED_IN
          );
          if (ASTUtils.isLiteral(value) && value.value === 'any') {
            context.report({
              node: value,
              messageId: 'noProvidedInAny',
            });
          }
        }
      },
    };
  },
});

/**
 * export default function (context) {
  return {
    ClassDeclaration(node) {
      if (
        node.decorators &&
        node.decorators.some(
          (decorator) =>
            decorator.expression.callee.name === "Injectable" && decorator.expression.arguments.some((arg) => arg.properties.some((prop) => prop.key.name === "providedIn" && prop.value.type === "Literal" && prop.value.value === "any"))
        )
      ) {
        context.report({
          node,
          message: "No providedIn: any"
        });
      }
    }
  };
}

 */
