# Kollus Live Sample ReactJS

ReactJS 기반 Kollus Live 예제 프로젝트

# 예시 화면
![preview](/screenshot/preview.png)

# 사용법
- src/store/info.js 에서 설정 값을 지정합니다.

```javascript
...
const useInfoStore = create((set) => ({
  src: "", // iframe 링크를 저장하는 곳 (수정 X)
  // lmckey : 채널 키, live_media_channel_key 축약 형태
  lmckey: "", // ch01 채널 키
  selectedCam: "cam1", // 선택된 채널
  multiViewKey : {
    cam1 : "", // ch01 채널 키
    cam2 : "", // ch02 채널 키
    cam3 : "", // ch03 채널 키
    cam4 : "", // ch04 채널 키
  },
  cuid: "", // 채팅에서 사용할 사용자 아이디
  liveSecurity: "", // 기본 정보 > 서비스 계정 > 서비스 계정 키
  liveCustomer: "",  // 기본 정보 > 서비스 계정 > 사용자 키
  path: "s", // s : 플레이어 재생, sr : 원본 재생, si : SDK를 사용한 재생
  setLmckey: (lmckey) =>
    set((prevState) => {
      return {
        lmckey: lmckey,
      };
    }),
  generateLiveSrc: () =>
    set((prevState) => {
      let info = {
        cuid: prevState.cuid,
        lmckey: prevState.lmckey,
        liveSecurity: prevState.liveSecurity,
        liveCustomer: prevState.liveCustomer,
        path: prevState.path,
      }

      return {
        // 토큰 만료 시간(expt)을 5~10초 로 설정
        src: generateLiveJwt(info, 10),
      };
    }),
}));
...
```
- 이후 <code>npm i</code> 으로 패키지 설치 후 <code>npm run start</code> 윈도우는 <code>npm run start-win</code> 으로 실행합니다.

# Feature
- Multi View

# Tech Stack
- mui
- react.js
- next.js
- zustand
