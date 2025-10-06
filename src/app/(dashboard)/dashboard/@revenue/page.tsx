import { Card } from "@/Components/card";

export default function Revenue() {
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          <Card>Revenue</Card>
        )
      }, 1500)
    })
  )
}
