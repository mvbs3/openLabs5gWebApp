import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxUe(props) {
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div>
          <h1 style={{ textAlign: "center" }}>UE's </h1>
        </div>
      </div>
    </Box>
  );
}