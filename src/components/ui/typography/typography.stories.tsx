import { Meta } from '@storybook/react'

import { Typography } from './typography'

export default {
  component: Typography,
  title: 'Components/Typography',
} as Meta<typeof Typography>

export const AllTypography = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography>Heading 1</Typography>
      <Typography>Heading 2</Typography>
      <Typography>Heading 3</Typography>
      <Typography>Subtitle 1</Typography>
      <Typography>Subtitle 2</Typography>
      <Typography>Body 1</Typography>
      <Typography>Body 2</Typography>
      <Typography>Overline</Typography>
      <Typography>Caption</Typography>
      <Typography>Caption Link</Typography>
      <Typography>Subtitle Link</Typography>
      <Typography>Link</Typography>
      <Typography>Error</Typography>
    </div>
  )
}
