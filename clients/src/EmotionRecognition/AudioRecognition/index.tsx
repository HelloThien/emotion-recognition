import React, { useState } from 'react'

import { Box, IconButton, Stack } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { fetchRecognitionAudio } from '../action'
function AudioRecognition(props: AudioRecognitionProps) {

  const [file, setFile] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const { changeEmotion } = props


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFile: any = e.target?.files
    setFile(uploadFile[0])
    console.log(uploadFile)
  }
  const handleSumitAudio = async () => {
    setLoading(true)
    const formData = new FormData()
    formData.append("audio", file)
    const result = await fetchRecognitionAudio(formData)
    console.log(result)
    changeEmotion(result.emotion)
    setLoading(false)
  }

  return (
    <Stack direction="column" spacing={2}>
      <Box>
        Choose file
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="audio/*" type="file" onChange={handleChange} multiple={false} />
          <AttachFileIcon />
        </IconButton>
      </Box>
      {
        file && file.name
      }

      <Box sx={{ marginTop: '50px' }}>
        <LoadingButton
          onClick={handleSumitAudio}
          loading={loading}
          loadingIndicator="Loading…"
          variant="contained" color="secondary"
        >
          Compute
        </LoadingButton>
      </Box>
    </Stack>
  )
}
interface AudioRecognitionProps {
  changeEmotion: any
}
export default AudioRecognition
