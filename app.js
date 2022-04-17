var keyword = '';
function searchfunc(){
    keyword = document.getElementById('search-box').value;
    connectCovid(keyword);

}
function connectCovid(keyword) {
    fetch(`https://api.covid19api.com/dayone/country/${keyword}`)
    .then(res=> res.json() )
    .then(data=> loadCovid(data) );
}
connectCovid();

function loadCovid(data){
    console.table(data[0]);
    var container = document.getElementById("covid-country");

    container.innerHTML = `<p><b>Country : <b> ${data[0].Country}</b> </b></p> 
                           <p>Total Confirmed : <b>${data[0].Confirmed}</b></p>
                           <p>Active Cases: <b>${data[0].Active}</b></p>
                           <p>Deaths:<b> ${data[0].Deaths}</b></p>
                          
                           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="connectCountry()">
                             More Details
                           </button>
                           
                           
                          
                           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div class="modal-dialog">
                               <div class="modal-content">
                                 <div class="modal-header">
                                   <h5 class="modal-title text-dark" id="exampleModalLabel">Country Details</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div class="modal-body">
                                   <div id="rest-country" class="container text-center rest-country text-dark">
                                 </div>
                                 <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   
                                 </div>
                               </div>
                             </div>
                           </div>
                           
                           
                                   </div>
                         `;
                          
}

function connectCountry() {
    fetch(`https://restcountries.com/v3.1/name/${keyword}`)
    .then(res=>res.json() )
    .then(data=>loadCountry(data) );
}



function loadCountry(data){
    var newContainer = document.getElementById("rest-country");
    console.table(data[0]);
    newContainer.innerHTML = `<br><br><img src=${data[0].flags.png}>
                                 <p>Capital : <b> ${data[0].capital[0]}</b> </p>
                              <p>Population : <b>${data[0].population}</b></p>
                              
                              <p>Region : <b> ${data[0].region}</b> </p>`;
                
}