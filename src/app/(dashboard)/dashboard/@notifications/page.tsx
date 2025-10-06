import { Card } from '@/Components/card'
import React from 'react'

export default function Notifications() {
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          <Card>Notifications</Card>
        )
      }, 1000)
    })
  )
}
