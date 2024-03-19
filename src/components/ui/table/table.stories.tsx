import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from './table'

const meta = {
  component: Table,
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Название</TableHeadCell>
            <TableHeadCell align={'center'}>Описание</TableHeadCell>
            <TableHeadCell>Ссылка</TableHeadCell>
            <TableHeadCell>Тип</TableHeadCell>
            <TableHeadCell>Вид</TableHeadCell>
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Web Basic</TableCell>
            <TableCell>Something wrote here...</TableCell>
            <TableCell>
              <Typography
                as={'a'}
                href={'https://it-incubator.io/'}
                target={'_blank'}
                variant={'link1'}
              >
                Какая-то ссылка
              </Typography>
            </TableCell>
            <TableCell>Основной</TableCell>
            <TableCell>Читать</TableCell>
            <TableCell>🦎</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Web Basic</TableCell>
            <TableCell>Somathing wrote here</TableCell>
            <TableCell>
              <Typography as={'a'} href={'https://google.com/'} target={'_blank'} variant={'link1'}>
                Link to Google.com
              </Typography>
            </TableCell>
            <TableCell>Основной</TableCell>
            <TableCell>Читать</TableCell>
            <TableCell>✨</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

// const data = [
//   {
//     category: 'Основной',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
//     id: '01',
//     link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то',
//     title: 'Web Basic',
//     type: 'Читать',
//   },
//   {
//     category: 'Основной',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
//     id: '02',
//     link: 'Какая-то ссылка куда-то',
//     title: 'Web Basic',
//     type: 'Читать',
//   },
//   {
//     category: 'Основной',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
//     id: '03',
//     link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то. Какая-то ссылка кудато на какой-то источник с информациейо ссылка куда-то на какой-то',
//     title: 'Web Basic',
//     type: 'Читать',
//   },
// ]
