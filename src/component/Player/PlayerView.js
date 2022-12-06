import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";

const PlayerView = (props) => {
  return (
    <Stack spacing={2}>
      <iframe
        id="kollus-player"
        className="kollus-player"
        width="768"
        height="576"
        src={props.src}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Stack>
  );
};

export default PlayerView;
