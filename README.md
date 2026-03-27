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

<br />

<!-- 전역 Font 및 CSS 설정 -->
<details>

<summary><strong>전역 Font 및 CSS 설정</strong></summary>
<br />

```css
/* src/styles/globals.css */

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/PretendardVariable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: Pretendard;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

</details>

<br />

<!-- Provider 설정 -->
<details>

<summary><strong>Provider 설정</strong></summary>
<br />

```tsx
/* src/provider.tsx */

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
}

export default Provider;
```

```tsx
/* src/app/layout.tsx */

import Provider from '@/provider';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
```

</details>

<br />

<!-- import 순서 자동 정렬되도록 설정 (Prettier 설정 필요) -->
<details>

<summary><strong>import 순서 자동 정렬되도록 설정 (Prettier 설정 필요)</strong></summary>
<br />

```bash
yarn add -D @trivago/prettier-plugin-sort-imports
```

```json
/* .prettierrc */

{	
  "plugins": ["@trivago/prettier-plugin-sort-imports"],

  "importOrder": ["^react$", "^react", "<THIRD_PARTY_MODULES>", "^@/", "^[./]"],
  "importOrderSeparation": false,
  "importOrderSortSpecifiers": true
}
```

```json
/* .vscode/settings.json */

{
  "editor.codeActionsOnSave": {
    "source.organizeImports": "never"
  }
}
```

</details>

<br />

<!-- Tailwind CSS 순서 자동 정렬되도록 설정 (Prettier 설정 필요) -->
<details>

<summary><strong>Tailwind CSS 순서 자동 정렬되도록 설정 (Prettier 설정 필요)</strong></summary>
<br />

```bash
yarn add -D prettier-plugin-tailwindcss
```

```json
/* .prettierrc */

{	
	"plugins": ["prettier-plugin-tailwindcss"],
}
```

</details>
