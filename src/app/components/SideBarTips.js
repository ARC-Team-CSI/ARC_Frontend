import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SimpleAccordion from "./Accordion";

const drawerWidth = 240;


function TabPanel(props) {
    const { children, value, index} = props;

    return (
        <div>
            {value === index && (
                <Box p={3} color="primary">
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
            <Toolbar sx={{
                pt: 10,
            }}>
            <Divider />
                <Tabs  orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="simple tabs">
                    <Tab label="Welcome!" {...a11yProps(0)} />
                    <Tab label="Freshman" {...a11yProps(1)} />
                    <Tab label="Sophomore" {...a11yProps(2)} />
                    <Tab label="Junior" {...a11yProps(3)} />
                    <Tab label="Senior" {...a11yProps(4)} />
                </Tabs>
            </Toolbar>
        </div>
    );

    return (
        <div>

        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    pt: 10,
                }}
                variant="permanent"
                anchor="left"
            >
                <Divider />
                {drawer}
            </Drawer>
            <Box
                sx={{ flexGrow: 1 }}
            >
                <Toolbar />

                <div>
                    <TabPanel value={value} index={0}>
                    <Typography variant="h1" component="h2" > Welcome to our student tips page! </Typography>
                        <Typography variant="h4" component="h4" > This is just a test welcome page </Typography>
                        <Typography variant="h5" component="h5" > Click side bars for info on student tips. </Typography>
                        <div>
                            <img src="https://i.ytimg.com/vi/syohkUounhg/maxresdefault.jpg" alt="hi!"/>
                        </div>
                    </TabPanel>
                <TabPanel value={value} index={1}>
                    <SimpleAccordion schoolYear = "freshman"/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <SimpleAccordion schoolYear = "sophomore"/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <SimpleAccordion schoolYear = "junior"/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <SimpleAccordion schoolYear = "senior"/>
                </TabPanel>
                </div>
            </Box>
        </Box>
</div>
    );
}

export default PermanentDrawerLeft;