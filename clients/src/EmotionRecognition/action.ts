import axios from "axios";

export const fetchRecognitionText = async (text: string) => {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base',
    {
      headers: {Authorization: `Bearer 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`},
      method: 'POST',
      body: JSON.stringify({inputs: text}),
    },
  )
  const result = await response.json()
  return result[0]
}

export const fetchRecognitionAudio = async (formData: FormData) => {
  const response =  await axios.post('http://127.0.0.1:8000/recognition-audio', formData)
  const result = await response.data
  return result
}



export const saveFeedback = async (param: { rate: number; text?: string }) => {
  const response =  await axios.post('http://127.0.0.1:8000/feedback', param)
  const result = await response.data
  return result
}
