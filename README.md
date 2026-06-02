# 황예정 포트폴리오

Tim Ingold 학술 포트폴리오 사이트를 참고한 미니멀 학술 포트폴리오 웹사이트입니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Vercel 배포

## 로컬 실행

```powershell
cd portfolio
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## Vercel 배포

1. GitHub 저장소에 `portfolio` 폴더를 푸시합니다.
2. [Vercel](https://vercel.com)에서 새 프로젝트를 생성합니다.
3. Root Directory를 `ANT_Research/60_PhD_Apply/portfolio` 로 지정합니다.
4. Framework Preset은 **Next.js** 를 선택하고 Deploy합니다.

또는 Vercel CLI 사용:

```powershell
cd portfolio
npx vercel
```

## 콘텐츠 수정

- **원본 Markdown**: `docs/snu-hyj-portfolio.md`
- **사이트 데이터**: `src/data/portfolio.ts` (md 내용을 반영한 구조화 데이터)
- **프로필 사진**: `public/profile.jpg` 로 교체 (현재는 `profile.svg` placeholder)

## 프로젝트 구조

```
portfolio/
├── docs/                  # 원본 Markdown 문서
├── public/                # 정적 파일
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # UI 컴포넌트
│   └── data/              # 포트폴리오 콘텐츠
└── README.md
```
