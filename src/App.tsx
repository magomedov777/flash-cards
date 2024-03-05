import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

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
      <Button onClick={() => (window.location.href = 'https://google.com')}>hello</Button>
      <Button as={'a'} href={'https://google.com'}>
        Hi From Andrei
      </Button>
    </div>
  );
}
