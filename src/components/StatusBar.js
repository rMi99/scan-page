
import { CardMedia } from "@mui/material";
import React from "react";
import './statusbar.css';
const StatusBar = ({statusBarImg}) => {
    return(
        <div className="statusBar">
        <CardMedia
          component="img"
          image={statusBarImg}
          style={{
            maxWidth: '100%',
            // height: {'lg':'28px', 'xs':'20px',},
            // width: '320px',
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
          }}
        />
        </div>
    )

};

export default StatusBar;