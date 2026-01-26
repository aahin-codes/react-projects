
export default function UserCard({ user }) {

    const {avatar_url, bio, created_at, followers, following, login, name, public_repos, repos_url } = user;
    const created_date = new Date(created_at);
    
    return (
        <div className="profile-wrapper">
            <img src={avatar_url} alt='Profile' className="avatar" />

            <h2><a href={`https://www.github.com/${login}`}>{name === null ? login : name}</a></h2>
            <p>User joined on {`${created_date.getDate()} ${created_date.toLocaleDateString("en-us", {month:'long'})} ${created_date.getFullYear()}`}</p>
            <div className="card">
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
            </div>
        </div>
    )
}
