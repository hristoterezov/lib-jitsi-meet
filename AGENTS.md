# Repo Guidelines

## Coding style
- Use 4 spaces for indentation and Unix line endings.
- Keep lines under 120 characters.
- Sort object keys alphabetically to satisfy the ESLint rule.
- Order class members according to `@typescript-eslint/member-ordering`:
  signature, private static fields, protected static fields, public static fields,
  private instance fields, protected instance fields, public instance fields,
  constructor, private instance methods, protected instance methods,
  public instance methods.

## Development
- Run `npm run build`, `npm run lint` and `npm test` before committing. Both must succeed.

## Commit messages
- Follow Conventional Commits style: `type(scope): short description`.

## Pull requests
- Summarize the changes and include a short note about test results in the PR body.
