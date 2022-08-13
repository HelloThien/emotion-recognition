import * as React from 'react'
import { styled } from '@mui/material/styles'
import Rating, { IconContainerProps } from '@mui/material/Rating'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import { Box, Button, TextareaAutosize } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import AlertDialog from '../../components/AlertDialog'

import { saveFeedback } from '../action'

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}))

const customIcons: {
  [index: string]: {
    icon: React.ReactElement
    label: string
  }
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: '3rem' }} />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" sx={{ fontSize: '3rem' }} />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedAltIcon color="error" sx={{ fontSize: '3rem' }} />,
    label: 'Satisfied',
  },

}

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props
  return <span {...other}>{customIcons[value].icon}</span>
}

export default function RateEmotion(props: RateEmotionProps) {

  const [rate, setRate] = React.useState<number>(2)
  const [feedback, setFeedback] = React.useState<string>()
  const [openDialog, setOpenDialog] = React.useState(false)

  const { resetTab, resetEmotion } = props
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    saveFeedback({ rate, text: feedback })
    setFeedback('')

    setOpenDialog(true)
    setTimeout(() => {
      setOpenDialog(false)
      resetTab(event, 0)
      resetEmotion()
    }, 10000)
  }
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledRating
          name="highlight-selected-only"
          defaultValue={2}
          onChange={(event, value) => { setRate(value || 2) }}
          IconContainerComponent={IconContainer}
          max={3}
          getLabelText={(value: number) => customIcons[value].label}
          highlightSelectedOnly
        />
        <Box>
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
            Send
          </Button>
        </Box>
      </Box>
      <Box sx={{ marginTop: '40px' }}>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Enter your feedback"
          style={{ width: 900, height: 120 }}
          value={feedback}
          onChange={(event => { setFeedback(event.target.value) })}
        />
      </Box>
      <AlertDialog open={openDialog} />
    </>
  )
}

interface RateEmotionProps {
  resetTab: any,
  resetEmotion: any
}