import { convertAnnotatedSourceToFailureCase } from '@angular-eslint/utils';
import { TSESLint } from '@typescript-eslint/utils';
import { rule, RULE_NAME } from './no-standalone-components';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run(RULE_NAME, rule, {
  valid: [
    `
    @Component({
      templateUrl: './valid.html',
      styleUrls: ['./valid.scss'],
      selector: 'valid-component',
      changeDetection: ChangeDetectionStrategy.OnPush,
    })
    export class ValidComponent {}
    `,
    `
    @Component({
      templateUrl: './valid.html',
      styleUrls: ['./valid.scss'],
      selector: 'valid-component',
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
    })
    export class ValidComponent {}
    `,
    `
    @Directive({
      selector: 'valid-directive',
    })
    export class Directive {}
    `,
    `
    @Injectable({
      providedIn: 'root'
    })
    export class ValidService {}
    `,
  ],
  invalid: [
    convertAnnotatedSourceToFailureCase({
      description: 'Should fail if component has standalone: true',
      messageId: 'noStandaloneComponents',
      annotatedSource: `
        @Component({
          standalone: true,
          ~~~~~~~~~~~~~~~~
          templateUrl: './valid.html',
          styleUrls: ['./valid.scss'],
          selector: 'valid-component',
          changeDetection: ChangeDetectionStrategy.OnPush
        })
        export class InvalidComponent {}
      `,
    }),
  ],
});
