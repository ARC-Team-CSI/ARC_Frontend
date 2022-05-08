import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SimpleAccordion from "./Accordion";

const drawerWidth = 240;


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function PermanentDrawerLeft() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const drawer = (
        <div>
            <Toolbar>
            <Divider />
                <Tabs  orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Freshman" {...a11yProps(0)} />
                    <Tab label="Sophomore" {...a11yProps(1)} />
                    <Tab label="Junior" {...a11yProps(2)} />
                    <Tab label="Senior" {...a11yProps(3)} />
                </Tabs>
            </Toolbar>
        </div>
    );


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Test Page Accordion
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                {drawer}
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />

                <TabPanel value={value} index={0}>
                <SimpleAccordion schoolYear = "freshman"/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SimpleAccordion schoolYear = "sophomore"/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <SimpleAccordion schoolYear = "junior"/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <SimpleAccordion schoolYear = "senior"/>
                </TabPanel>

                { /* Working on Clicking Functionality. */
                    /* <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => <div>Home Page</div>} />
                        <Route path="/Inbox" render={() => <div> Page inbox</div>} />
                        <Route path="/Starred" render={() => <div>Page starred</div>} />
                    </Switch>
                </BrowserRouter>*/}


            </Box>
        </Box>
    );
}

export default PermanentDrawerLeft;