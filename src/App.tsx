import { Button } from '@/components/ui/button'

import { Typography } from './components/ui/typography'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant={'h1'}>H1</Typography>
      <Typography variant={'body1'}>body1</Typography>
      <Button onClick={() => (window.location.href = 'https://google.com')}>hello</Button>
      <Button as={'a'} href={'https://google.com'}>
        Hi From Andrei
      </Button>
    </div>
  )
}
