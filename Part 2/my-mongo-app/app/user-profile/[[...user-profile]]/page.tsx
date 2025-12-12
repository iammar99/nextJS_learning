import { UserProfile } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex justify-center my-5">
    <UserProfile path="/user-profile"/>
    </div>
  )
}
