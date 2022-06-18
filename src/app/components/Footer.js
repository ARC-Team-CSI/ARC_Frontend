import React, {} from "react";

import {Box, Typography} from "@mui/material";

function Footer() {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                borderRadius: 1,
                p: 2,
                textAlign: "center",
                minWidth: 300,
                marginTop: "calc(5% + 60px)",
                bottom: 0
            }}
        >
            <Typography variant="title">Project Arc 2022</Typography>
        </Box>
    );
}

export default Footer;

