import React from "react";
import SensorDoorIcon from "@mui/icons-material/SensorDoor";
import HomeIcon from "@mui/icons-material/Home";
import BiotechIcon from "@mui/icons-material/Biotech";
import { Typography, IconButton, Link } from "@mui/material";

function IconListItems() {
  return (
    <div>
      <div>
        <Link href="/dashboard">
          <IconButton
            sx={{
              color: "#1b97b6",
            }}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            paddingLeft={10}
            display="-webkit-inline-flex"
            nowrap
          >
            Home
          </Typography>
        </Link>
      </div>

      <div>
        <IconButton
          sx={{
            marginRight: "36px",
            color: "#1b97b6",
          }}
        >
          <SensorDoorIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          nowrap
          paddingLeft={5}
          display="-webkit-inline-flex"
          sx={{
            displayPrint: "inline",
            // ...(open && { display: "display-outside", displayPrint: "inline" }),
          }}
        >
          Rooms
        </Typography>
      </div>
      <div>
        <IconButton
          sx={{
            marginRight: "36px",
            color: "#1b97b6",
          }}
        >
          <BiotechIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          nowrap
          paddingLeft={5}
          display="-webkit-inline-flex"
          sx={{}}
        >
          Experiments
        </Typography>
      </div>
    </div>
  );
}

export default IconListItems;
