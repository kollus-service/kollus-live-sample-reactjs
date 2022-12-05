import jwt from "jsonwebtoken";

const generateLiveJwt = (info, time, limit) => {
  if(!info.lmckey || !info.cuid || !info.liveSecurity || !info.liveCustomer) return;

  // ??= : 값이 비어있는 경우 할당
  time ??= 1 * 60;
  limit ??= 1 * 60 * 60;
  
  const expt = Math.round(new Date().getTime() / 1000) + time;
  const play_expt = Math.round(new Date().getTime() / 1000) + limit;

  let payload = {
    client_user_id: info.cuid,
    client_user_name: info.cuid,
    // expt : 토큰 만료 시간 (만료 시 링크 접근 안됨, 접근 후 만료 시 계속 재생 가능)
    expt: expt,
    // play_expt : 스트리밍 만료 시간 (만료 시 재생 안됨, default +2일)
    play_expt: play_expt,
    lmckey: info.lmckey,
  };

  const token = jwt.sign(payload, info.liveSecurity, {
    algorithm: "HS256",
    expiresIn: expt,
  });

  const customer = info.liveCustomer;

  return `https://v-live-kr.kollus.com/s?jwt=${token}&custom_key=${customer}`;
};

module.exports = {
  generateLiveJwt,
};