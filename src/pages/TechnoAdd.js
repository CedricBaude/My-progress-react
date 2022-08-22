export default function TechnoAdd() {
    return(
       <div className="techno-add">
        <h1>Add a Techno</h1>
        <div>
            <form>
                <label htmlFor="techno-name">Name</label>
                <br/>
                <input type="text" name="techno-name" id="techno-name" />
                <br />
                <input type="submit" value="Add_Techno" />
            </form>
        </div>
       </div> 
    )
}