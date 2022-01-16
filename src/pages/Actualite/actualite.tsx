import React from 'react';
import './actualite.css';


filterSelection("all")
function filterSelection(filter:string) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (filter == "all") filter = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(filter) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element:any, name:string) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element:any, name:string) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
// var btnContainer:any = document.getElementById("BtnContainer");
// var btns = btnContainer.getElementsByClassName("button");
// for (var i = 0; i < btnContainer.getElementsByClassName("button").length; i++) {
//   btnContainer.getElementsByClassName("button")[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     current[0].className += " active";
//   });
// }

const actualite = () => {

    return (
        
        <div className='Page_Actialite'>
            {/* //PreLoader */}
            {/* <div id="preloader">
                <div className="pre-container">
                    <div className="spinner">
                        <div className="circle-loader">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* // top bar  */}
            <div className="top-bar">
                <h1>Actualités</h1>
            </div>

            <section className="actuality section" id="actualites">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="actuality-filter" id="BtnContainer">
                      <button className="btn btn-info" onClick={() => filterSelection("all")}> Afficher Tous</button>
                      <button className="btn btn-info" onClick={() => filterSelection('Ad')}> Annonce  </button>
                      <button className="btn btn-info" onClick={() => filterSelection('Event')}> Evenement</button>
                   <hr />
                    </div>
                  </div>
                 <div className="container">
                    <div className="row container-show">
                      <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                          <div className="web-actuality-block filterDiv Ad">
                              <h3>Affichage 1</h3>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-md-6 mb-30 filterDiv Event">
                          <div className="web-actuality-block">
                              <h3>Evenement 1</h3>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-md-6 mb-30 filterDiv Ad">
                          <div className="web-actuality-block">
                              <h3>Affichage 2</h3>
                          </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 col-md-6 filterDiv Event">
                          <div className="web-actuality-block">
                              <h3>Evenement 2</h3>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-md-6 filterDiv Ad">
                          <div className="web-actuality-block">
                              <h3>Affichage 3</h3>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-md-6 filterDiv Event">
                          <div className="web-actuality-block">
                              <h3>Evenement 3</h3>
                          </div>
                      </div>
                  </div>
                </div>
                </div>
              </div>
            </section>
        </div>
    );
};

export default actualite;