import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      width={"100%"}
      maxWidth={props.maxWidth}
      sx={{ my: 10 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.catenoid.net" target="_blank">
        Catenoid
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
