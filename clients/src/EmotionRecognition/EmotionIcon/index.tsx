import React from 'react'

import styled from '@emotion/styled'
import { EmojiAngryFill } from '@emotion-icons/bootstrap/EmojiAngryFill'
import { SadCry } from '@emotion-icons/fa-solid/SadCry'
import { Happy } from '@emotion-icons/boxicons-regular/Happy'
import { Surprise } from '@emotion-icons/fa-solid/Surprise'
import { EmojiNeutralFill } from '@emotion-icons/bootstrap/EmojiNeutralFill'
import { MoodSadSolid } from '@emotion-icons/zondicons/MoodSadSolid'
import { EmojiSad } from '@emotion-icons/fluentui-system-filled/EmojiSad'

interface EmojiIcon { [key: string]: any }

const EMOTION_TYPE: EmojiIcon = {
  joy: Happy,
  happy: Happy,
  sad: SadCry,
  angry: EmojiAngryFill,
  ps: Surprise,
  surprise: Surprise,
  neutral: EmojiNeutralFill,
  sadness: SadCry,
  anger: EmojiAngryFill,
  disgust: MoodSadSolid,
  fear: EmojiSad
}



function EmotionIcon(props: EmotionIconProps) {
  const { label } = props
  const RedLock = styled(EMOTION_TYPE[`${label}`])`
  color: yellow; 
  with: 200px !important;
`
  return (
    <RedLock />
  )
}

interface EmotionIconProps {
  label: string
}

export default EmotionIcon
