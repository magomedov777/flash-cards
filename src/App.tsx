import { Typography } from './components/ui/typography'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography as={'h1'} variant={'h1'}>
        H1
      </Typography>
      <Typography as={'h2'} variant={'h2'}>
        H2
      </Typography>
      <Typography as={'h3'} variant={'h3'}>
        H3
      </Typography>
      <Typography as={'h4'} variant={'h4'}>
        H4
      </Typography>
      <Typography as={'body'} variant={'body1'}>
        body1
      </Typography>
      <Typography as={'body'} variant={'body2'}>
        body2
      </Typography>
      <Typography as={'a'} variant={'link1'}>
        link1
      </Typography>
      <Typography as={'a'} variant={'link2'}>
        link2
      </Typography>
      <Typography as={'p'} variant={'caption'}>
        Caption
      </Typography>
      {/*<Button onClick={() => (window.location.href = 'https://google.com')}>hello</Button>*/}
      {/*<Button as={'a'} href={'https://google.com'}>*/}
      {/*  Hi From Andrei*/}
      {/*</Button>*/}
    </div>
  )
}
