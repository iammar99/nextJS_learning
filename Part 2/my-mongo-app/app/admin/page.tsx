import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./action";

export default async function Admin() {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          User Management
        </h1>
        <p className="text-slate-400">Manage user roles and permissions</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
          <p className="text-slate-400 text-sm mb-1">Total Users</p>
          <p className="text-2xl font-bold text-slate-100">{users.length}</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
          <p className="text-slate-400 text-sm mb-1">Admins</p>
          <p className="text-2xl font-bold text-blue-400">
            {users.filter(u => u.publicMetadata.role === 'admin').length}
          </p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
          <p className="text-slate-400 text-sm mb-1">Regular Users</p>
          <p className="text-2xl font-bold text-purple-400">
            {users.filter(u => !u.publicMetadata.role).length}
          </p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-4 bg-slate-700/30 border-b border-slate-700/50">
          <div className="col-span-3 text-slate-300 font-semibold text-sm">Name</div>
          <div className="col-span-4 text-slate-300 font-semibold text-sm">Email</div>
          <div className="col-span-2 text-slate-300 font-semibold text-sm">Role</div>
          <div className="col-span-3 text-slate-300 font-semibold text-sm text-right">Actions</div>
        </div>

        {/* Table Body */}
        <div>
          {users.map((user, index) => (
            <div
              key={user.id}
              className={`grid grid-cols-12 gap-4 p-4 items-center transition-colors ${
                index % 2 === 0 
                  ? "bg-slate-800/20 hover:bg-slate-800/40" 
                  : "bg-slate-800/10 hover:bg-slate-800/30"
              }`}
            >
              {/* Name */}
              <div className="col-span-3 text-slate-200 font-medium">
                {user.firstName} {user.lastName}
              </div>

              {/* Email */}
              <div className="col-span-4 text-slate-400 text-sm">
                {user.emailAddresses.find(
                  (email) => email.id === user.primaryEmailAddressId
                )?.emailAddress}
              </div>

              {/* Role Badge */}
              <div className="col-span-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    user.publicMetadata.role === 'admin'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : user.publicMetadata.role === 'moderator'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'bg-slate-600/20 text-slate-400 border border-slate-600/30'
                  }`}
                >
                  {(user.publicMetadata.role as string) || 'User'}
                </span>
              </div>

              {/* Actions */}
              <div className="col-span-3 flex gap-2 justify-end">
                <form action={setRole}>
                  <input type="hidden" value={user.id} name="id" />
                  <input type="hidden" value="admin" name="role" />
                  <button
                    type="submit"
                    disabled={user.publicMetadata.role === 'admin'}
                    className="px-3 hover:cursor-pointer py-1.5 text-xs font-medium rounded-lg bg-blue-600/20 text-blue-400 border border-blue-600/30 hover:bg-blue-600/30 hover:border-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Make Admin
                  </button>
                </form>

                <form action={setRole}>
                  <input type="hidden" value={user.id} name="id" />
                  <input type="hidden" value="moderator" name="role" />
                  <button
                    type="submit"
                    className="px-3 hover:cursor-pointer py-1.5 text-xs font-medium rounded-lg bg-purple-600/20 text-purple-400 border border-purple-600/30 hover:bg-purple-600/30 hover:border-purple-500 transition-all"
                  >
                    Make Moderator
                  </button>
                </form>

                <form action={removeRole}>
                  <input type="hidden" value={user.id} name="id" />
                  <button
                    type="submit"
                    className="px-3 hover:cursor-pointer py-1.5 text-xs font-medium rounded-lg bg-red-600/20 text-red-400 border border-red-600/30 hover:bg-red-600/30 hover:border-red-500 transition-all"
                  >
                    Remove
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}