const App = () => {
    return (
    <div>
        <Person name="joe" age={18} hobbies={['hiking','walking','movies']} />
        <Person name="taylor" age={30} hobbies={['singing','acting','movies']} />
        <Person name="smith" age={14} hobbies={['singing','acting','movies']} />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))