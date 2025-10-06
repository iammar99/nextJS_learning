import { Card } from '@/Components/card'
import Link from 'next/link'

export default function Notifications() {
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          <Card>
            <span>
                Archieved Notifications
            </span><br />&nbsp;&nbsp;
            <Link href="/dashboard">Back</Link>
          </Card>
        )
      }, 1000)
    })
  )
}
