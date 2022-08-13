import React, { useState } from 'react'

import { Box, FormControl, OutlinedInput } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

import { fetchRecognitionText } from '../action'

function TextRecognition(props: TextRecognitionProps) {

  const [text, setText] = useState<string>('')
  const [ loading, setLoading] = useState<boolean>(false)
  const { changeEmotion } = props

  const handleChangetext = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSumitText = async () => {
    setLoading(true)
    const result = await fetchRecognitionText(text)
    setLoading(false)
    changeEmotion(result[0].label)
  }

  return (
    <div >
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: '45ch' }}>
          <OutlinedInput placeholder="Please enter text" value={text} onChange={handleChangetext} />
        </FormControl>
        <Box sx={{ marginTop: '50px' }}>
          <LoadingButton
            onClick={handleSumitText}
            loading={loading}
            loadingIndicator="Loading…"
            variant="contained" color="secondary"
          >
            Compute
          </LoadingButton>
        </Box>
      </Box>
    </div>
  )
}
interface TextRecognitionProps {
  changeEmotion: any
}

export default TextRecognition
