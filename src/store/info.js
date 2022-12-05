import create from "zustand";
import { generateLiveJwt } from "../util/jwt";

const useInfoStore = create((set) => ({
  // iframe 링크를 저장하는 곳
  src: "",
  // lmckey : 채널 키, live_media_channel_key 축약 형태
  lmckey: "", // ch01 채널 키
  multiViewKey : {
    cam1 : "", // ch01 채널 키
    cam2 : "", // ch02 채널 키
    cam3 : "", // ch03 채널 키
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

export default useInfoStore;
