# CLAUDE.md

### 언어

모든 설명 및 답변은 **한국어**로 작성합니다.

---

### 패키지 매니저

**yarn**을 사용합니다. (yarn.lock 존재 / package-lock.json 없음)

---

### 폴더 구조

```
src/
├── app/              # App Router 라우트 (Next.js 예약 파일: page.tsx, layout.tsx 등)
├── components/
│   ├── common/       # 범용 재사용 컴포넌트 (Button, Input 등)
│   └── layout/       # 레이아웃 컴포넌트 (Header, Footer 등)
├── constants/        # 상수 값 (layoutData, roleData 등)
├── hooks/
│   ├── custom/       # 범용 커스텀 훅 (useClickOutside, useDebounce 등)
│   ├── feature/      # 특정 기능/도메인에 종속된 훅
│   └── query/        # TanStack Query 기반 훅 (useUserQuery, useUserMutation 등)
├── lib/
│   ├── api.ts        # fetch 인스턴스 및 공통 요청 함수
│   └── dto/          # API 요청/응답 DTO 타입
├── providers/        # Context Provider (인증, 쿼리 클라이언트 등)
├── stores/           # 전역 상태 스토어 (Zustand)
├── styles/           # 전역 CSS
├── types/            # 범용 타입
├── utils/            # 순수 유틸 함수
├── middleware.ts     # 인증 여부에 따른 라우트 가드 (Next.js Middleware)
└── provider.tsx      # 전역 Provider 조합
```

`components/`의 `common/`, `layout/` 폴더는 필수이며, 도메인/기능별 컴포넌트가 늘어나면 그 외 하위 폴더를 추가로 생성할 수 있습니다.

라우팅은 `app/` 디렉터리의 파일 기반 라우팅을 따르고, 인증 가드는 루트의 `middleware.ts`에서 처리합니다.

---

### 네이밍 컨벤션

#### 1. 폴더명 : kebab-case

#### 2. 파일명

- `app/` : Next.js 예약 파일(`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts` 등)은 프레임워크 규칙에 따라 소문자 그대로 사용합니다 (PascalCase 예외). 라우트 세그먼트 폴더명은 kebab-case를 따르되, `[id]`, `(group)`, `@slot` 같은 Next.js 문법은 예외로 허용합니다.
    
- `components/` : PascalCase

- `constants/` : camelCase + `Data` 접미사
    
- `hooks/custom` : `use` 접두사 + PascalCase

- `hooks/feature` : `use` 접두사 + PascalCase

- `hooks/query` : `use` 접두사 + PascalCase + `Query`/`Mutation` 접미사

- `lib/` : PascalCase (fetch 설정 파일인 `api.ts`는 예외)

- `lib/dto/` : camelCase + `Dto` 접미사
    
- `providers/` : camelCase + `Provider` 접미사

- `stores/` : camelCase + `Store` 접미사

- `styles/` : camelCase

- `types/` : camelCase + `Type` 접미사
    
- `utils/` : camelCase
    
#### 코드 내부 식별자

- 타입 : PascalCase

- 변수 / 함수 : camelCase (API 함수는 camelCase + `API` 접미사)
    
- 상수 : SCREAMING_SNAKE_CASE
    
- Zustand 훅 : `use` 접두사 + PascalCase + `Store` 접미사
    
---

### 아키텍처

#### Provider

테마, i18n 등 새로운 전역 Provider를 추가할 때는 `app/layout.tsx`가 아닌 `provider.tsx`에 추가해야 합니다. 

#### Server / Client 컴포넌트

기본은 Server Component입니다. `useState`, `useEffect`, 이벤트 핸들러 등 클라이언트 전용 기능이 필요한 파일에만 최상단에 `'use client'`를 명시합니다.

`providers/` 하위 Provider들은 대부분 `'use client'`가 필요합니다.

---

### TypeScript 제약

`tsconfig.json`에 설정된 컴파일러 옵션 때문에 지켜야 하는 제약입니다.

- **`isolatedModules`** : 각 파일이 독립적으로 트랜스파일되므로, 타입만 재-export할 때는 `export type { Foo }`처럼 명시해야 합니다.

- 가독성을 위해 타입만 가져올 때는 `import type { Foo } from '...'` 형태를 권장합니다.

- `enum` 대신 문자열 유니온 타입이나 `as const` 객체를 권장합니다.

---

### 코드 스타일

- 하나의 파일에는 하나의 컴포넌트만 작성합니다.

- 함수는 화살표 함수로 선언합니다.

- `interface` 대신 `type`을 사용합니다.

- 스타일은 기본적으로 `style`이 아닌 `className` 속성에 Tailwind CSS로 작성합니다. 동적으로 계산되는 값처럼 Tailwind CSS만으로는 구현하기 어려운 경우에 한해 `style` 속성을 예외적으로 사용합니다.

- 조건부 스타일 적용이 필요할 때는 `twMerge`를 사용합니다.

- 작업 범위는 코드 수정까지로 한정합니다. 개발 서버 실행, 빌드 실행 후 동작 확인, 백그라운드 프로세스 실행 등 CPU/GPU 자원을 사용하거나 별도 프로세스를 띄워야 하는 작업은 직접 수행하지 말고, 어떤 부분을 확인해야 하는지 안내만 합니다.
