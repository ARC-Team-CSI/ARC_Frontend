import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

function SideBarChecklist() {

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
            <Tab label="2021-2023" {...a11yProps(1)} />
            <Tab label="2018-2021" {...a11yProps(2)} />
            <Tab label="2013-2018" {...a11yProps(3)} />
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
                <Typography variant="h1" component="h2" > Welcome to Pathway Checklist! </Typography>
                <Typography variant="h4" component="h4" > This is just a test welcome page </Typography>
                <Typography variant="h5" component="h5" > Click side bars for info on student tips. </Typography>
                <div>
                  <img src="https://i.ytimg.com/vi/syohkUounhg/maxresdefault.jpg" alt="hi!"/>
                </div>
              </TabPanel>

              <TabPanel value={value} index={1}>

                <object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf" width="100%" height="750px">
                  <p>Alternative text - include a link <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">to the PDF!</a></p>
                </object>

              </TabPanel>

              <TabPanel value={value} index={2}>

                <object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf" width="100%" height="750px">
                  <p>Alternative text - include a link <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">to the PDF!</a></p>
                </object>

              </TabPanel>
              <TabPanel value={value} index={3}>

                <object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf" width="100%" height="750px">
                  <p>Alternative text - include a link <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">to the PDF!</a></p>
                </object>

              </TabPanel>
            </div>
          </Box>
        </Box>
      </div>
  );
}

export default SideBarChecklist;

