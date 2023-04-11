# React 디자인 시스템

사이드 프로젝트에서 요긴하게 쓸만한 React 기반 디자인 시스템입니다

# How?

- props로 전달 받는 union타입의 경우 머터리얼 ui 레퍼런스를 참고한다
- emotion에서 제공하는 ThemeProvider의 theme Props 재정의하여 스타일 통일화한다
- 모든 ui 컴포넌트는 유지보수에 따라 변경이 자주 일어날 것으로 간주하고 만든다

# 커밋 컨벤션

- feat : 새로운 기능 추가
- fix : 기능 수정
- bug : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리펙토링
- test : 테스트 코드, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
