const Tweet = (props) => {
    return (
        <div>
            <p>Username: {props.username}</p>
            <p>Name: {props.name}</p>
            <p>Date: {props.date}</p>
            <p>Message: {props.tweet}</p>
        </div>
    )
}