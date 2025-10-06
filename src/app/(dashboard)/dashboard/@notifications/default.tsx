import { Card } from '@/Components/card'
import Link from 'next/link'

export default function Notifications() {
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          <Card>
            <div>
                Notifications
            </div><br />&nbsp;&nbsp;&nbsp;
            <Link href="/dashboard/archieved">Default Archieved</Link>
          </Card>
        )
      }, 1000)
    })
  )
}
