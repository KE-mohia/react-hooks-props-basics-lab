function Links(props){
    return(
        <div>
            <h3>links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>

        </div>
    )
}
export default Links;