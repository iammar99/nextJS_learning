import { Card } from "@/Components/card";

export default function Revenue() {
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          <Card>Default Revenue</Card>
        )
      }, 1500)
    })
  )
}
