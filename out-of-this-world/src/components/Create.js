const Create = () => {

    return (
        <div className="hero create">

            <video autoPlay={true} loop>
               <source src="/images/video2.mp4" type="video/mp4" /> 
            </video>


            <div className="form-box">
                <h2>ADD A FILM</h2>

                <form action="">
                    <div className="left">
                        <div className="field">
                            <i className="uil uil-circle"></i>
                            <input type="text" placeholder="Title" required />
                        </div>

                        <div className="field">
                            <i className="uil uil-rocket"></i>
                            <input type="number" placeholder="Year" required />
                        </div>
                        <div className="field radio">
                            <i className="uil uil-star"></i>
                            <p>Public: </p>
                            <input type="radio" id="yes" name="radio"  />
                            <label htmlFor="yes">Yes</label><br />
                            <input type="radio" id="no" name="radio" />
                            <label htmlFor="no">No</label><br />
                        </div>

                    </div>
                    <div className="right">
                        <div className="field ">
                            <i className="uil uil-align-justify"></i>
                            <textarea type="text" placeholder="Description"></textarea>
                        </div>

                        <input type="submit" className="submit-btn" value="Create" />
                    </div>


                </form>
            </div>

        </div>
    );
}

export default Create;