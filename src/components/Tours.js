import Card from "./Card";
function Tours({tours,removeTour} ){

    return (
        <div className="container">
            <div >
              <h2 className="title">Plan with Love </h2>
            </div>
            
            <div className="cards">
                {
                    tours.map((tour) => {
                        //this is object cloning {...tour}
    //when we will make use of the map with the cpmponents then we should make use of the key and always send the unique attribute but if there is not unique attribute then we should send the index with as parameter
                        return < Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    
    );
    
    
    }
    
    export default Tours;