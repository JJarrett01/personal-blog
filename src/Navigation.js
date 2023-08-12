function Navigation()
{
let navlist = [
    {
        title:"Home",
        link:"/."
},
{
    title:"Blog",
    link:"/."
},
{
    title:"About Me",
    link:"/."
}
];
    return(
    <nav>
        <span> Hello </span>
        <ul>
            {
                navlist.map( target => 
                        <li>
                            <a href={target.link}> {target.title}</a>
                        </li>
                )
            }
        </ul>
    </nav>
    );
}
export default Navigation;