import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="text-4xl font-bold">
      Hello World

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}
