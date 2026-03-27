# Boilerplate - React Next.js

React Next.js 프로젝트 Boilerplate으로서, 아래 내용들에 대한 설정이 적용되어 있습니다.

<br />

<!-- Next.js 프로젝트 생성 -->
<details>

<summary><strong>Next.js 프로젝트 생성</strong></summary>
<br />

```bash
npx create-next-app@14.2.3 .

✔️ Would you like to use TypeScript? Yes
✔️ Would you like to use ESLint? Yes
✔️ Would you like to use Tailwind CSS? Yes
✔️ Would you like to use `src/` directory? Yes
✔️ Would you like to use App Router? (recommended) Yes
✔️ Would you like to customize tje default import alias (@/*)? Yes
✔️ What import alias would you like configured? @/*
```

</details>

<br />

<!-- Prettier 설정 -->
<details>

<summary><strong>Prettier 설정</strong></summary>
<br />

```bash
yarn add -D prettier
```

```json
/* .vscode/settings.json */

{
  "editor.formatOnSave": true,

  "[markdown]": {
    "editor.defaultFormatter": "vscode.markdown-language-features",
    "editor.formatOnSave": false
  }
}
```

```json
/* .prettierrc */

{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "bracketSpacing": true,
  "trailingComma": "all"
}
```

</details>
