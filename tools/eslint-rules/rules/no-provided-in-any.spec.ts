import { convertAnnotatedSourceToFailureCase } from '@angular-eslint/utils';
import { TSESLint } from '@typescript-eslint/utils';
import { rule, RULE_NAME } from './no-provided-in-any';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run(RULE_NAME, rule, {
  valid: [
    `@Injectable({
      providedIn: 'root'
    })
    class Test{}
    `,
  ],
  invalid: [
    convertAnnotatedSourceToFailureCase({
      description: 'Should fail if @Injectable has providedIn: any',
      annotatedSource: `
        @Injectable({
          providedIn: 'any'
                      ~~~~~
        })
        class Test {}
      `,
      messageId: 'noProvidedInAny',
    }),
  ],
});
