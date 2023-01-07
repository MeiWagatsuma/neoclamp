import { styled } from '@stitches/react'
interface Props {
  code: string
}
export default function CodeBlock({ code }: Props): JSX.Element {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button className="active">pixel</Button>
        <Button>rem</Button>
      </ButtonWrapper>
      <Code>{code}</Code>
    </Wrapper>
  )
}
const Wrapper = styled('div', {})

const ButtonWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  borderBottom: '4px solid gray'
})

const Button = styled('button', {
  background: 'none',
  border: 'none',
  fontWeight: 'bolder',
  cursor: 'pointer',
  padding: '8px 16px',
  color: '#727272',
  '&.active': {
    color: '#000000',
    position: 'relative',
    '&:after': {
      content: '',
      backgroundColor: 'red',
      height: '4px',
      position: 'absolute',
      right: '0',
      left: '0',
      bottom: '-4px'
    }
  }
})

const Code = styled('code', {
  background: '#1c232b',
  width: '100%',
  padding: '16px',
  display: 'block',
  color: 'white'
})
