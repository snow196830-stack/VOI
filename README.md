# VOI Creative Studio · 영업용 레퍼런스 페이지

> **라이브 주소**: https://snow196830-stack.github.io/VOI/
> 저장소: https://github.com/snow196830-stack/VOI (public, `main` 브랜치 루트 → GitHub Pages 배포)

경락·에스테틱·웨딩관리샵 원장님께 보내는 영업용 정적 페이지입니다.
빌드 도구 없이 `index.html` + `styles.css` + `app.js` + `videos/` 만으로 동작하고, GitHub Pages에 그대로 올릴 수 있습니다.

```
sales-web/
├── index.html      페이지 본문 (모든 카피·섹션)
├── styles.css      디자인 (아이보리/차콜/로즈골드·세이지)
├── app.js          필터 탭 · 동시 재생 방지 · 스크롤 등장
├── og-image.jpg    카톡·DM 미리보기 썸네일 (1200×630)
├── robots.txt      검색엔진 수집 차단 (`Disallow: /`)
├── .nojekyll       GitHub Pages에서 Jekyll 처리 생략 (videos 폴더 그대로 서빙)
└── videos/         영상 20편 (영문 소문자 파일명, 약 186MB)
```

## 영상 파일명 대응표

원본 파일명은 한글·해시가 섞여 있어 모바일 사파리·카카오톡 인앱 브라우저에서 URL 인코딩 문제가 생길 수 있습니다.
그래서 배포용으로 아래처럼 영문 소문자 파일명으로 복사했습니다. (원본 `attachments/`는 그대로 보존)

| 파일 | 원본 | 구성 |
| --- | --- | --- |
| `all-01.mp4` | 전지점 배포용 1 | 전지점 대표 |
| `all-02.mp4` | 전지점 배포용2 | 전지점 대표 |
| `ilsan-1.mp4` / `ilsan-10.mp4` | 일산 이OO (전후 비교) 1회차 / 10회차 | 전후 비교 |
| `yongin-1.mp4` / `yongin-10.mp4` | 용인 김OO 1회차 / 10회차 | 전후 비교 |
| `kondae-1.mp4` / `kondae-10.mp4` | 건대 김OO 1회차 / 10회차 | 전후 비교 |
| `busan-1.mp4` / `busan-10.mp4` | 부산 구OO 1회차 / 10회차 | 전후 비교 |
| `jamsil-10.mp4` | 잠실 강OO 10회차 | 10회차 결과 |
| `busan-kim-10.mp4` | 부산 김OO 10회차 | 10회차 결과 |
| `cheongdam-yu-10.mp4` | 청담 유OO 10회차 | 10회차 결과 |
| `apgujeong-10.mp4` | 압구정 안OO 10회차 | 10회차 결과 |
| `magok-10.mp4` | 마곡 서OO 10회차 | 10회차 결과 |
| `cheongdam-gwak-10.mp4` | 청담 곽OO 10회차 | 10회차 결과 |
| `dogok-1.mp4` | 도곡 1회차 | 1회차 도입 |
| `gwangju-yang-1.mp4` | 광주 양OO 1회차 | 1회차 도입 |
| `ilsan-lee-1.mp4` | 일산 이OO (1회차 도입) | 1회차 도입 |
| `gwangju-lee-1.mp4` | 광주 이OO 1회차 | 1회차 도입 |

영상은 전부 720×1280(9:16 세로), 15~31초입니다.

## 검색 노출 · 공유 미리보기

- **검색엔진 수집 차단**: `index.html`의 `<meta name="robots" content="noindex, nofollow">` 와 `robots.txt`(`Disallow: /`) 로 막아 둡니다. 링크를 직접 받은 사람에게만 열리는 페이지로 유지합니다.
- **카톡·DM 미리보기**: `<head>`의 `og:`·`twitter:` 메타태그와 `og-image.jpg`(1200×630 JPEG)를 사용합니다. 썸네일을 바꿀 때는 1200×630 비율과 파일명을 그대로 두세요(메타태그 URL 고정).
- **모델 이름 표기**: 실명 대신 `지점 + 성OO` (예: `일산 이OO`, `청담 곽OO`)만 씁니다. 같은 지점·같은 성이 겹치면 뒤에 `(전후 비교)` / `(1회차 도입)`을 붙여 구분합니다. 새 사례를 추가할 때도 실명은 넣지 않습니다.

## GitHub Pages 배포

1. 이 폴더의 내용을 저장소 루트에 그대로 올립니다.
2. Settings → Pages → Source: **Deploy from a branch**, Branch: `main` / `/ (root)`.
3. `https://<계정>.github.io/<저장소>/` 로 접속합니다.

`.nojekyll`이 있으므로 `videos/` 폴더가 그대로 서빙됩니다.
모든 경로가 상대경로라 하위 경로 배포에서도 그대로 동작합니다.

## 수정할 때

- **문의처**: `index.html`의 `#contact` 섹션 — 이메일 버튼(`mailto:`), 전화 버튼(`tel:`), 그리고 아래 `cta-fallback`의 이메일·번호 텍스트를 함께 바꿔 주세요.
- **영상 추가**: `videos/`에 파일을 넣고 `index.html`의 갤러리 카드(`<article class="card" data-tags="...">`)를 하나 복사해 `src`·라벨을 고칩니다. 필터 태그는 `allref`(전지점 대표) / `compare`(전후 비교) / `after`(10회차) / `before`(1회차) 입니다.
- **캐시 갱신**: `index.html`의 `styles.css?v=2` / `app.js?v=2` 처럼 버전 숫자를 올려 주세요. GitHub Pages가 CSS·JS를 10분간 캐시하기 때문에, 숫자를 올리지 않으면 수정이 바로 반영되지 않습니다.
- **미리보기 썸네일 재생성**: `python3 voi-creative-studio/tools/make-og-image.py` (Pillow 필요, 첫 실행 때 Pretendard 폰트를 내려받아 캐시) → `og-image.jpg`를 덮어씁니다.
- **검증**: `python3 voi-creative-studio/tools/validate-sales-web.py` — 20개 파일 존재, `src` 경로 일치, 원본과 바이트 동일, 경로 상대경로 여부를 한 번에 확인합니다.
