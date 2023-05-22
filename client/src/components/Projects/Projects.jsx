export const Projects = ({projects})=>{
    return (
        <>
        <div>
            {
                projects.map((project,index)=>(
                    <div key={index}>

                    </div>
                ))
            }
        </div>
        </>
    )
}