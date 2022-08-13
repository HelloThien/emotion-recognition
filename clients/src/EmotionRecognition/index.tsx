import React, { useState } from 'react'
import { Paper, Box, Tabs, Tab, Typography, Button } from '@mui/material'

import TabPanel from '../components/TabPanel'
import EmotionIcon from './EmotionIcon'
import TextRecognition from './TextRecognition'
import AudioRecognition from './AudioRecognition'
import RateEmotion from './RateEmotion'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function EmotionRecognition() {
  const [tab, setTab] = useState(0)
  const [emotion, setEmotion] = useState<string>()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }

  const handleChangeEmoition = (value: string) => {
    setEmotion(value)
  }

  const handleResetEmotion = () =>{
    setEmotion(undefined)
  }

  const handleClickRate = () => {
    setTab(2)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '100px 350px',
        '& > :not(style)': {
          m: 1,
          width: 1000,
          height: 900,
        },
      }}>
      <Paper elevation={3} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={handleChange} aria-label="tabs options">
            <Tab label="Text" {...a11yProps(0)} />
            <Tab label="Audio" {...a11yProps(1)} />

          </Tabs>
        </Box>

        <Box sx={{ height: '300px' }}>
          <TabPanel value={tab} index={0}>
            <TextRecognition changeEmotion={handleChangeEmoition} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <AudioRecognition changeEmotion={handleChangeEmoition} />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <RateEmotion resetTab = {handleChange} resetEmotion={handleResetEmotion}/>
          </TabPanel>
        </Box>
        <Box sx={{ borderTop: 1, borderColor: 'divider', padding: '50px 300px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {emotion && <Button variant="contained" color="info" onClick={handleClickRate}>
              Rating
            </Button>}
          </Box>
          {emotion && <div>

            <EmotionIcon label={emotion} />
            <Box>
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>
                {emotion}
              </Typography>

            </Box>
          </div>}
        </Box>

      </Paper>

    </Box>
  )
}

export default EmotionRecognition
