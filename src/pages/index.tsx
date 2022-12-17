import { styled } from "../styles"

const Button = styled("button", {
  backgroundColor: "$green300",
  borderRadius: 4,
  border: 0,
  padding: "8px 16px",

  span: {
    fontWeight: "bold",
    marginLeft: 8,
  },

  '&:hover': {
    filter: 'brightness(0.9)'
  },
})


export default function Home() {
  return (
    <>
      <Button>
        Hello World
        <span>Test</span>
      </Button>
    </>
  )
}
