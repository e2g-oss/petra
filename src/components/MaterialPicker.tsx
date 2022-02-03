import { Stack, Typography } from '@mui/material'

export enum Material {
  steel = 'STEEL',
  beaver = 'BEAVER_PELT',
}

export type TProps = {
  material: Material
}
export default function MaterialPicker(props: TProps) {
  const { material } = props
  return (
    <Stack spacing={4}>
      <Typography>{material}</Typography>
    </Stack>
  )
}
