import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Copyright from "../src/component/Copyright";
import PlayerView from "../src/component/Player/PlayerView";
import SnapShot from "../src/component/Player/SnapShot";
import useInfoStore from "../src/store/info";

export default function Index() {
  const [datetime, setDatetime] = useState();
  const { src, multiViewKey, setLmckey, setSelectedCam, generateLiveSrc } =
    useInfoStore();

  useEffect(() => {
    generateLiveSrc();

    const identifier = setInterval(() => {
      setDatetime(Date.now());
    }, 10 * 1000); // 10초에 한번씩 Poster 요청
  }, [src]);

  const changeView = (cam, lmckey) => {
    setSelectedCam(cam);
    setLmckey(lmckey);
    generateLiveSrc();
  };

  return (
    <Container>
      <Stack spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center">
        <Stack spacing={2} sx={{ mt: 6 }}>
          <Typography variant="h3" component="h3">
            Kollus LIVE Sample
          </Typography>
          <PlayerView src={src} />
          <Stack
            direction="row"
            width="720px"
            spacing={2}
            justifyContent="space-between"
          >
            {/* use unix timestamp 로 링크를 업데이트해서 컴포넌트를 리-렌더링 을 한다. */}
            {Object.keys(multiViewKey).map((cam) => {
              return <SnapShot
                key={cam}
                cam={cam}
                lmckey={multiViewKey[cam]}
                datetime={datetime}
                changeView={() => changeView(cam, multiViewKey[cam])}
              />;
            })}
          </Stack>
        </Stack>
        <Copyright />
      </Stack>
    </Container>
  );
}
