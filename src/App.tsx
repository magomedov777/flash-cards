import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography.H1 ml={10} mt={20}>
        Heading 1
      </Typography.H1>
      <Typography.H2 ml={10} mt={20}>
        Heading 2
      </Typography.H2>
      <Typography.H3 ml={10} mt={20}>
        Heading 3
      </Typography.H3>
    </div>
  )
}
