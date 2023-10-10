const App = () => {
    return (
    <div>
        <Tweet name="joe" username="joeshmoe" tweet="So sick of everything all the time. never knew people were wrong all the time" date="Today" />
        <Tweet name="jane" username="doe" tweet="check out this video of me harassing somebody:" date="daily" />
        <Tweet name="louis" username="louisianaPurchase" tweet="napoleon had some good ideas and nobody is talking about them" date="october 1st" />  
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))