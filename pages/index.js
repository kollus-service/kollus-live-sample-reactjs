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
  const { src, multiViewKey, setLmckey, generateLiveSrc } =
    useInfoStore();

  useEffect(() => {
    generateLiveSrc();

    setInterval(() => {
      setDatetime(Date.now());
    }, 5000);
  }, [src]);

  const changeView = (lmckey) => {
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
            Multi Cam Sample
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
                lmckey={multiViewKey[cam]}
                datetime={datetime}
                changeView={() => changeView(multiViewKey[cam])}
              />;
            })}
          </Stack>
        </Stack>
        <Copyright />
      </Stack>
    </Container>
  );
}
