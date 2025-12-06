
export default function layout({
    users,
    revenue,
    notifications,
    login,
    children
}: {
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode,
    children: React.ReactNode
}) {
    const isAuth = true
    return isAuth ? (
        <div>
            {children}
            <div style={{"display":"flex"}}>
                <div style={{"display":"flex","flexDirection":"column"}}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{"display":"flex","flex":"1"}}>
                    <div>{notifications}</div>
                </div>
            </div>
        </div>
    ) : (
        <div>
            {login}
        </div>
    )
}
