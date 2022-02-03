import { ComponentProps } from 'react'
import { Button as MuiButton } from '@mui/material'

export default function Button(props: ComponentProps<typeof MuiButton>) {
  return <MuiButton {...props} />
}
