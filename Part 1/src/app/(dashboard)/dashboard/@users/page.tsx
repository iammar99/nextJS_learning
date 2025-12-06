import { Card } from "@/Components/card";

export default function Users() {
    return (
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    <Card>Users</Card>
                )
            }, 2000)
        })
    )
}
