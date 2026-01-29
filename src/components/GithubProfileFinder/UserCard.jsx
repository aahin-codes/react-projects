
export default function UserCard({ user }) {

    const { avatar_url, bio, created_at, followers, following, login, name, public_repos, repos_url } = user;
    const created_date = new Date(created_at);

    return (
        <div className="profile-wrapper">
            <img src={avatar_url} alt='Profile' className="avatar" />
{/* <a href={`https://www.github.com/${login}`}>{name === null ? login : name}</a> */}
            <h2>{name === null ? login : name}</h2>
            <p>User joined on {`${created_date.getDate()} ${created_date.toLocaleDateString("en-us", { month: 'long' })} ${created_date.getFullYear()}`}</p>
            <div className="profile-stats">
                <div className="stat-box">
                    <span className="stat-label">Repos</span>
                    <span className="stat-value">{public_repos}</span>
                </div>
                <div className="stat-box">
                    <span className="stat-label">Followers</span>
                    <span className="stat-value">{followers}</span>
                </div>
                <div className="stat-box">
                    <span className="stat-label">Following</span>
                    <span className="stat-value">{following}</span>
                </div>
            </div>

            {/* <div className="card">
                <p>Public Repos</p>
                <p><a href={`https://www.github.com/${login}?tab=repositories`}>{public_repos}</a></p>
            </div>
            <div className="card">
                <p>Followers</p>
                <p>{followers}</p>
            </div>
            <div className="card">
                <p>Following</p>
                <p>{following}</p>
            </div> */}
        </div>
    )
}
