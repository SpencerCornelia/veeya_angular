webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-property/add-property.component.css":
/***/ (function(module, exports) {

module.exports = "#content-wrapper {\n  width: 80%;\n  margin-left: 5%;\n}\n\n#title-row {\n  width: 100%;\n}\n\n.wizard-steps {\n  width: 100%;\n  float: left;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.tab {\n  width: 15%;\n  height: 70px;\n  border-radius: 5px;\n  background: #f7f7f9;\n  color: #6c757d;\n}\n\n.tab.active {\n  width: 17%;\n  height: 70px;\n  border-radius: 5px;\n  background-color: #1991EA;\n  color: white;\n}\n\n.tab-text {\n  margin-top: 23px;\n}\n\n.submit-add-property-btn {\n  margin-left: 40%;\n}\n\n.buttons {\n  width: 100%;\n}\n\n.buttons button {\n  width: 140px;\n  height: 40px;\n}\n\n.add-property-btn {\n  display: table;\n  margin: 0 auto;\n}\n\n.form-control.ng-invalid.ng-touched {\n  border: 2px solid red;\n}\n\n.form-control.ng-valid.ng-touched {\n  border: 2px solid #2E8B57;\n}\n\n#submitBtn:disabled {\n  cursor: not-allowed;\n}\n\n#updateBtn:disabled {\n  cursor: not-allowed;\n}\n\n.required-field:after {\n  content: \" *\";\n  color: red;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/add-property/add-property.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n\n\n          <div class=\"row\" id=\"title-row\">\n            <div class=\"col-12 grid-margin\">\n              <div class=\"card\">\n                <h4 class=\"card-title\">Add New Property</h4>\n\n                <div class=\"wizard-steps\">\n                  <div role=\"tab\" class=\"tab active\" id=\"location-tab\">\n                    <div class=\"tab-text\">1. Location</div>\n                  </div>\n                  <div role=\"tab\" class=\"tab\" id=\"property-tab\">\n                    <div class=\"tab-text\">2. Property</div>\n                  </div>\n                  <div role=\"tab\" class=\"tab\" id=\"comps-tab\">\n                    <div class=\"tab-text\">3. Comps</div>\n                  </div>\n                  <div role=\"tab\" class=\"tab\" id=\"photos-tab\">\n                    <div class=\"tab-text\">4. Photos</div>\n                  </div>\n                  <div role=\"tab\" class=\"tab\" id=\"confirm-tab\">\n                    <div class=\"tab-text\">5. Confirm</div>\n                  </div>\n                </div>\n\n\n                <div class=\"card-body\" id=\"content-wrapper\">\n\n                  <!-- Location tab -->\n                  <div class=\"location-content\" id=\"location-content\">\n\n                    <div class=\"form-group row\">\n                      <label class=\"required-field col-sm-3 col-form-label\">Street Address</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.address\"\n                          name=\"address\"\n                          minlength=\"5\"\n                          maxlength=\"50\"\n                          pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                          required\n                          (keyup)=\"validateAddress($event.target)\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"required-field col-sm-3 col-form-label\">City</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.city\"\n                          name=\"city\"\n                          pattern=\"^[a-zA-Z ]*$\"\n                          minlength=\"3\"\n                          maxlength=\"30\"\n                          required\n                          (keyup)=\"validateCity($event.target)\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"required-field col-sm-3 col-form-label\">State</label>\n                      <div class=\"col-sm-6\">\n                        <select [(ngModel)]=\"newProperty.state\" name=\"state\" class=\"form-control\">\n                          <option value=\"AL\">Alabama</option>\n                          <option value=\"AK\">Alaska</option>\n                          <option value=\"AZ\">Arizona</option>\n                          <option value=\"AR\">Arkansas</option>\n                          <option value=\"CA\">California</option>\n                          <option value=\"CO\">Colorado</option>\n                          <option value=\"CT\">Connecticut</option>\n                          <option value=\"DE\">Delaware</option>\n                          <option value=\"DC\">District Of Columbia</option>\n                          <option value=\"FL\">Florida</option>\n                          <option value=\"GA\">Georgia</option>\n                          <option value=\"HI\">Hawaii</option>\n                          <option value=\"ID\">Idaho</option>\n                          <option value=\"IL\">Illinois</option>\n                          <option value=\"IN\">Indiana</option>\n                          <option value=\"IA\">Iowa</option>\n                          <option value=\"KS\">Kansas</option>\n                          <option value=\"KY\">Kentucky</option>\n                          <option value=\"LA\">Louisiana</option>\n                          <option value=\"ME\">Maine</option>\n                          <option value=\"MD\">Maryland</option>\n                          <option value=\"MA\">Massachusetts</option>\n                          <option value=\"MI\">Michigan</option>\n                          <option value=\"MN\">Minnesota</option>\n                          <option value=\"MS\">Mississippi</option>\n                          <option value=\"MO\">Missouri</option>\n                          <option value=\"MT\">Montana</option>\n                          <option value=\"NE\">Nebraska</option>\n                          <option value=\"NV\">Nevada</option>\n                          <option value=\"NH\">New Hampshire</option>\n                          <option value=\"NJ\">New Jersey</option>\n                          <option value=\"NM\">New Mexico</option>\n                          <option value=\"NY\">New York</option>\n                          <option value=\"NC\">North Carolina</option>\n                          <option value=\"ND\">North Dakota</option>\n                          <option value=\"OH\">Ohio</option>\n                          <option value=\"OK\">Oklahoma</option>\n                          <option value=\"OR\">Oregon</option>\n                          <option value=\"PA\">Pennsylvania</option>\n                          <option value=\"RI\">Rhode Island</option>\n                          <option value=\"SC\">South Carolina</option>\n                          <option value=\"SD\">South Dakota</option>\n                          <option value=\"TN\">Tennessee</option>\n                          <option value=\"TX\">Texas</option>\n                          <option value=\"UT\">Utah</option>\n                          <option value=\"VT\">Vermont</option>\n                          <option value=\"VA\">Virginia</option>\n                          <option value=\"WA\">Washington</option>\n                          <option value=\"WV\">West Virginia</option>\n                          <option value=\"WI\">Wisconsin</option>\n                          <option value=\"WY\">Wyoming</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"required-field col-sm-3 col-form-label\">Zip</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.zipCode\"\n                          name=\"zipCode\"\n                          pattern=\"^[0-9]*$\"\n                          minlength=\"5\"\n                          maxlength=\"10\"\n                          required\n                          (keyup)=\"validateZipCode($event.target)\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 add-property-btn\" id=\"location-button\" (click)=\"changeTab('location','property')\">Next</button>\n                    </div>\n\n                  </div> <!-- Location tab end -->\n\n\n                  <!-- Property tab -->\n                  <div class=\"property-content\" id=\"property-content\">\n\n                    <div class=\"form-group row\">\n                      <label class=\"required-field col-sm-4 col-form-label\">Property Type</label>\n                      <div class=\"col-sm-6\">\n                        <select [(ngModel)]=\"newProperty.propertyType\" name=\"propertyType\" class=\"form-control\">\n                          <option value=\"Single Family\">Single Family Home</option>\n                          <option value=\"Condo\">Condo</option>\n                          <option value=\"Duplex\">Multifamily: Duplex</option>\n                          <option value=\"Triplex\">Multifamily: Triplex</option>\n                          <option value=\"Quadplex\">Multifamily: 4plex</option>\n                          <option value=\"Five-plus\">Commercial: 5+</option>\n                          <option value=\"Apartments\">Commercial: Apartments</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"required-field col-sm-4 col-form-label\">Purchase Price</label>\n                       <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.purchasePrice\"\n                            name=\"purchasePrice\"\n                            minlength=\"5\"\n                            maxlength=\"10\"\n                            pattern=\"^[0-9 ,]*$\"\n                            required\n                            (keyup)=\"validatePurchasePrice($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"required-field col-sm-4 col-form-label\">Beds</label>\n                      <div class=\"col-sm-6\">\n                        <select [(ngModel)]=\"newProperty.bedrooms\" name=\"bedrooms\" class=\"form-control\">\n                          <option value=\"0\">0</option>\n                          <option value=\"1\">1</option>\n                          <option value=\"2\">2</option>\n                          <option value=\"3\">3</option>\n                          <option value=\"4\">4</option>\n                          <option value=\"5+\">5+</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"required-field col-sm-4 col-form-label\">Baths</label>\n                      <div class=\"col-sm-6\">\n                        <select [(ngModel)]=\"newProperty.bathrooms\" name=\"bathrooms\" class=\"form-control\">\n                          <option value=\"0\">0</option>\n                          <option value=\"1\">1</option>\n                          <option value=\"2\">2</option>\n                          <option value=\"3\">3</option>\n                          <option value=\"4\">4</option>\n                          <option value=\"5+\">5+</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Expected Rehab Cost</label>\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.expectedRehab\"\n                            name=\"expectedRehab\"\n                            maxlength=\"10\"\n                            pattern=\"^[0-9 ,]*$\"\n                            (keyup)=\"validateInput($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">After Repair Value (ARV)</label>\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.afterRepairValue\"\n                            name=\"afterRepairValue\"\n                            minlength=\"5\"\n                            maxlength=\"10\"\n                            pattern=\"^[0-9 ,]*$\"\n                            (keyup)=\"validateInput($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Gross Monthly Rent</label>\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.averageRent\"\n                            name=\"averageRent\"\n                            minlength=\"3\"\n                            maxlength=\"6\"\n                            pattern=\"^[0-9 ,]*$\"\n                            (keyup)=\"validateInput($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Square Footage</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.squareFootage\"\n                          name=\"squareFootage\"\n                          minlength=\"3\"\n                          maxlength=\"6\"\n                          pattern=\"^[0-9 ,]*$\"\n                          (keyup)=\"validateInput($event.target)\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Year Built</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.yearBuilt\"\n                          name=\"yearBuilt\"\n                          pattern=\"^[0-9]*$\"\n                          minlength=\"4\"\n                          maxlength=\"4\"\n                          (keyup)=\"validateInput($event.target)\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Cap Rate</label>\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.capRate\"\n                            name=\"capRate\"\n                            pattern=\"^(0|[1-9]\\d*)(\\.\\d+)?$\"\n                            placeholder=\"%\"\n                            maxlength=\"4\"\n                            (keyup)=\"validateInput($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">HOA</label>\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.HOA\"\n                            name=\"HOA\"\n                            pattern=\"^[0-9 ,]*$\"\n                            placeholder=\"monthly\"\n                            maxlength=\"6\"\n                            (keyup)=\"validateInput($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Property Taxes</label>\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.propertyTaxes\"\n                            name=\"propertyTaxes\"\n                            pattern=\"^[0-9 ,]*$\"\n                            placeholder=\"monthly\"\n                            maxlength=\"6\"\n                            (keyup)=\"validateInput($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Utilities</label>\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.utilities\"\n                            name=\"utilities\"\n                            pattern=\"^[0-9 ,]*$\"\n                            placeholder=\"monthly\"\n                            maxlength=\"6\"\n                            (keyup)=\"validateInput($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Insurance</label>\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.insurance\"\n                            name=\"insurance\"\n                            pattern=\"^[0-9 ,]*$\"\n                            placeholder=\"monthly\"\n                            maxlength=\"6\"\n                            (keyup)=\"validateInput($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Seller Financing Available?</label>\n                      <div class=\"col-sm-6\">\n                        <select class=\"form-control\" [(ngModel)]=\"newProperty.sellerFinancing\" name=\"sellerFinancing\">\n                          <option value=\"no\">No</option>\n                          <option value=\"yes\">Yes</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Under Contract?</label>\n                      <div class=\"col-sm-6\">\n                        <select class=\"form-control\" [(ngModel)]=\"newProperty.status\" name=\"status\">\n                          <option value=\"Listed\">Yes</option>\n                          <option value=\"NoContract\">No</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 add-property-btn\"\n                        (click)=\"changeTab('property','location')\">Previous</button>\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                        id=\"property-button\"\n                        (click)=\"changeTab('property','comps')\">Next</button>\n                    </div>\n\n                  </div> <!-- Property tab end -->\n\n\n                  <!-- Comps tab -->\n                  <div class=\"comps-content\" id=\"comps-content\">\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">First Comp Address</label>\n                      <div class=\"col-sm-9\">\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.comps[0].firstCompAddress\"\n                          name=\"firstCompAddress\"\n                          minlength=\"5\"\n                          maxlength=\"50\"\n                          pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                          (keyup)=\"validateFirstAddress($event.target)\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">First Comp Price</label>\n                      <div class=\"col-sm-9\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.comps[0].firstCompPrice\"\n                            name=\"firstCompPrice\"\n                            pattern=\"^[0-9]*$\"\n                            maxlength=\"10\"\n                            (keyup)=\"validateFirstPrice($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Second Comp Address</label>\n                      <div class=\"col-sm-9\">\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.comps[1].secondCompAddress\"\n                          name=\"secondCompAddress\"\n                          minlength=\"5\"\n                          maxlength=\"50\"\n                          pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                          (keyup)=\"validateSecondAddress($event.target)\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Second Comp Price</label>\n                      <div class=\"col-sm-9\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.comps[1].secondCompPrice\"\n                            name=\"secondCompPrice\"\n                            pattern=\"^[0-9]*$\"\n                            maxlength=\"10\"\n                            (keyup)=\"validateSecondPrice($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Third Comp Address</label>\n                      <div class=\"col-sm-9\">\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.comps[2].thirdCompAddress\"\n                          name=\"thirdCompAddress\"\n                          minlength=\"5\"\n                          maxlength=\"50\"\n                          pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                          (keyup)=\"validateThirdAddress($event.target)\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Third Comp Price</label>\n                      <div class=\"col-sm-9\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"newProperty.comps[2].thirdCompPrice\"\n                            name=\"thirdCompPrice\"\n                            pattern=\"^[0-9]*$\"\n                            maxlength=\"10\"\n                            (keyup)=\"validateThirdPrice($event.target)\"\n                          />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 add-property-btn\"\n                        (click)=\"changeTab('comps','property')\">Previous</button>\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                        id=\"comp-button\"\n                        (click)=\"changeTab('comps','photos')\">Next</button>\n                    </div>\n\n                  </div> <!-- Comps tab end -->\n\n\n\n                  <!-- Photos tab -->\n                  <div class=\"photos-content\" id=\"photos-content\">\n                    <p>\n                      <em class=\"required-field\">Please Upload Photos (up to 3 allowed)</em>\n                    </p>\n\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"input-group mb-3\">\n                            <div class=\"custom-file\">\n                              <input type=\"file\" class=\"custom-file-input\" id=\"imageInput\" (change)=\"addPhoto($event)\">\n                              <label class=\"custom-file-label\" for=\"imageInput\">Choose file</label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <div id=\"selectedFiles\"></div>\n                      <button class=\"btn btn-inverse-primary btn-rounded btn-fw\" type=\"button\" (click)=\"uploadPhotos()\" id=\"uploadPhotos\">Upload Photos</button>\n                      <button class=\"btn btn-inverse-danger btn-rounded btn-fw\" type=\"button\" (click)=\"removePhotos()\" id=\"removePhotos\">Remove Photos</button>\n                    </div>\n                    <br />\n\n                    <div class=\"form-group row buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 add-property-btn\"\n                        (click)=\"changeTab('photos','comps')\">Previous</button>\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                        id=\"photos-button\"\n                        (click)=\"changeTab('photos','confirm')\">Next</button>\n                    </div>\n\n                  </div> <!-- Photos tab end -->\n\n                  <!-- Confirm tab -->\n                  <div class=\"confirm-content\" id=\"confirm-content\">\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Street Address</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.address\" name=\"address\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">City</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.city\" name=\"city\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">State</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.state\" name=\"state\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Zip Code</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.zipCode\" name=\"zipCode\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Property Type</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.propertyType\" name=\"propertyType\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Purchase Price</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.purchasePrice\" name=\"purchasePrice\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Beds</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.bedrooms\" name=\"bedrooms\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Bathrooms</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.bathrooms\" name=\"bathrooms\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Expected Rehab Cost</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.expectedRehab\" name=\"expectedRehab\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">After Repair Value (ARV)</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.afterRepairValue\" name=\"afterRepairValue\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Gross Monthly Rent</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.averageRent\" name=\"averageRent\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Square Footage</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.squareFootage\" name=\"squareFootage\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Year Built</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.yearBuilt\" name=\"yearBuilt\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Cap Rate</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.capRate\" name=\"capRate\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">HOA</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.HOA\" name=\"HOA\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Property Taxes</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.propertyTaxes\" name=\"propertyTaxes\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Utilities</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.utilities\" name=\"utilities\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Insurance</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.insurance\" name=\"insurance\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Seller Financing Available?</label>\n                      <div class=\"col-sm-6\">\n                        <input id=\"addressInput\" type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"newProperty.sellerFinancing\" name=\"sellerFinancing\" disabled\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"row submit-add-property-btn\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 add-property-btn\"\n                        (click)=\"changeTab('confirm','photos')\">Previous</button>\n                      <button id=\"submitBtn\" type=\"button\" class=\"btn btn-inverse-success btn-rounded btn-sm mt-3 mb-4 btn-fw\" (click)=\"onSubmit()\">Submit\n                      </button>\n                    </div>\n                  </div> <!-- Confirm tab end -->\n\n\n                </div> <!-- Content wrapper end -->\n              </div> <!-- Card end -->\n            </div> <!-- Cold-12 Grid-Margin end -->\n          </div> <!-- title-row end -->\n        </div> <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/add-property/add-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_addProperty_service__ = __webpack_require__("./src/app/services/addProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_photos_service__ = __webpack_require__("./src/app/services/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPropertyComponent = /** @class */ (function () {
    function AddPropertyComponent(alertService, authService, addPropertyService, photosService, router, validateService) {
        this.alertService = alertService;
        this.authService = authService;
        this.addPropertyService = addPropertyService;
        this.photosService = photosService;
        this.router = router;
        this.validateService = validateService;
        this.subscriptions = [];
        this.photos = [];
        this.uploadedPhotos = [];
        this.validForm = false;
        this.validPhotos = false;
        this.addressValid = false;
        this.cityValid = false;
        this.zipCodeValid = false;
        this.purchasePriceValid = false;
        this.inputValid = true;
        this.compAddressOneValid = true;
        this.compPriceOneValid = true;
        this.compAddressTwoValid = true;
        this.compPriceTwoValid = true;
        this.compAddressThreeValid = true;
        this.compPriceThreeValid = true;
    }
    AddPropertyComponent.prototype.ngOnInit = function () {
        document.getElementById('removePhotos').hidden = true;
        document.getElementById('uploadPhotos').hidden = true;
        document.getElementById("property-content").hidden = true;
        document.getElementById("comps-content").hidden = true;
        document.getElementById("photos-content").hidden = true;
        document.getElementById("confirm-content").hidden = true;
        var wholesalerID = this.authService.loggedInUser();
        var propertyComps = [];
        this.newProperty = {
            _id: 0,
            wholesaler_id: wholesalerID,
            address: '',
            city: '',
            state: 'AL',
            zipCode: '',
            purchasePrice: '',
            bedrooms: 0,
            bathrooms: 0,
            expectedRehab: '',
            HOA: '',
            propertyTaxes: '',
            utilities: '',
            afterRepairValue: '',
            capRate: '',
            averageRent: '',
            squareFootage: '',
            insurance: '',
            propertyType: 'Single Family',
            yearBuilt: '',
            status: 'Listed',
            sellerFinancing: 'no',
            comps: [
                {
                    firstCompAddress: '',
                    firstCompPrice: ''
                },
                {
                    secondCompAddress: '',
                    secondCompPrice: ''
                },
                {
                    thirdCompAddress: '',
                    thirdCompPrice: ''
                }
            ],
            photos: []
        };
        $("#location-button").prop('disabled', true);
        $("#property-button").prop('disabled', true);
        $("#photos-button").prop('disabled', true);
    };
    AddPropertyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newProperty.purchasePrice = this.formatInput(this.newProperty.purchasePrice);
        this.newProperty.expectedRehab = this.formatInput(this.newProperty.expectedRehab);
        this.newProperty.afterRepairValue = this.formatInput(this.newProperty.afterRepairValue);
        this.newProperty.averageRent = this.formatInput(this.newProperty.averageRent);
        this.newProperty.squareFootage = this.formatInput(this.newProperty.squareFootage);
        this.newProperty.capRate = this.formatInput(this.newProperty.capRate);
        this.newProperty.HOA = this.formatInput(this.newProperty.HOA);
        this.newProperty.propertyTaxes = this.formatInput(this.newProperty.propertyTaxes);
        this.newProperty.utilities = this.formatInput(this.newProperty.utilities);
        this.newProperty.insurance = this.formatInput(this.newProperty.insurance);
        console.log("this.newProperty:", this.newProperty);
        this.photosService.getPropertyPhotoUrls(this.uploadedPhotos, function (error, photos) {
            if (error) {
                _this.alertService.error('Error uploading photo.');
                return;
            }
            else {
                _this.newProperty.photos = photos;
                _this.propertySubscription = _this.addPropertyService.addProperty(_this.newProperty)
                    .subscribe(function (response) {
                    if (response.success === true) {
                        _this.alertService.success(response.message);
                        _this.router.navigate(['/dashboard']);
                    }
                }, function (error) {
                    _this.alertService.error(error.message);
                });
                _this.subscriptions.push(_this.propertySubscription);
            }
        });
    };
    AddPropertyComponent.prototype.addPhoto = function (event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        if (this.validateService.validatePhotoInput(fileType)) {
            this.photo = event.target.files[0];
            this.photos.push(this.photo);
            document.getElementById('selectedFiles').innerHTML += file.name + "</br>";
            document.getElementById('removePhotos').hidden = false;
            document.getElementById('uploadPhotos').hidden = false;
        }
        else {
            this.alertService.error('Please upload an image file.');
        }
        if (this.photos.length === 3) {
            var inputButton = document.getElementById('imageInput');
            inputButton.disabled = true;
        }
    };
    AddPropertyComponent.prototype.uploadPhotos = function (event) {
        var _this = this;
        document.getElementById('uploadPhotos').setAttribute('disabled', 'disabled');
        this.photosService.uploadPropertyPhotos(this.photos, function (error, photos) {
            if (error) {
                _this.alertService.error('Error uploading photos. Please try again later.');
            }
            else {
                var inputValue = document.getElementById('imageInput');
                inputValue.value = "";
                document.getElementById('removePhotos').hidden = true;
                document.getElementById('uploadPhotos').hidden = true;
                $("#photos-button").prop('disabled', false);
                _this.uploadedPhotos = photos;
                _this.photos = [];
                _this.validPhotos = true;
                _this.alertService.success('Successfully uploaded photo(s).');
            }
        });
    };
    AddPropertyComponent.prototype.removePhotos = function () {
        this.photos = [];
        document.getElementById('selectedFiles').innerHTML = "";
        var inputValue = document.getElementById('imageInput');
        inputValue.value = "";
        inputValue.disabled = false;
        document.getElementById('removePhotos').hidden = true;
        document.getElementById('uploadPhotos').hidden = true;
        this.alertService.success('Photo removed.');
    };
    AddPropertyComponent.prototype.changeTab = function (current, newTab) {
        document.getElementById(current + '-content').hidden = true;
        document.getElementById(current + '-tab').classList.remove('active');
        document.getElementById(newTab + '-content').hidden = false;
        document.getElementById(newTab + '-tab').classList.add('active');
    };
    AddPropertyComponent.prototype.cancel = function () {
        var _this = this;
        this.uploadedPhotos.forEach(function (photo) {
            _this.photosService.removePropertyPhotos(photo, function (error) {
                if (error) {
                    _this.alertService.error('Error removing property photos.', false);
                    return;
                }
            });
        });
        this.router.navigate(['/dashboard']);
    };
    // VALIDATE LOCATION TAB CONTENT //
    AddPropertyComponent.prototype.validateAddress = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.addressValid = false;
        }
        else if (input.classList.contains('ng-valid')) {
            this.addressValid = true;
        }
        this.locationTabValid();
    };
    AddPropertyComponent.prototype.validateCity = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.cityValid = false;
        }
        else if (input.classList.contains('ng-valid')) {
            this.cityValid = true;
        }
        this.locationTabValid();
    };
    AddPropertyComponent.prototype.validateZipCode = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.zipCodeValid = false;
        }
        else if (input.classList.contains('ng-valid')) {
            this.zipCodeValid = true;
        }
        this.locationTabValid();
    };
    AddPropertyComponent.prototype.locationTabValid = function () {
        if (this.addressValid && this.cityValid && this.zipCodeValid) {
            $("#location-button").prop('disabled', false);
            return true;
        }
        else {
            $("#location-button").prop('disabled', true);
            return false;
        }
    };
    // VALIDATE PROPERTY TAB CONTENT //
    AddPropertyComponent.prototype.validatePurchasePrice = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.purchasePriceValid = false;
        }
        else {
            this.purchasePriceValid = true;
        }
        this.propertyTabValid();
    };
    AddPropertyComponent.prototype.validateInput = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.inputValid = false;
        }
        else {
            this.inputValid = true;
        }
        this.propertyTabValid();
    };
    AddPropertyComponent.prototype.propertyTabValid = function () {
        if (this.purchasePriceValid && this.inputValid) {
            $("#property-button").prop('disabled', false);
            return true;
        }
        else {
            $("#property-button").prop('disabled', true);
            return false;
        }
    };
    // VALIDATE COMP TAB CONTENT //
    AddPropertyComponent.prototype.validateFirstAddress = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.compAddressOneValid = false;
        }
        else {
            this.compAddressOneValid = true;
        }
        this.compTabValid();
    };
    AddPropertyComponent.prototype.validateFirstPrice = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.compPriceOneValid = false;
        }
        else {
            this.compPriceOneValid = true;
        }
        this.compTabValid();
    };
    AddPropertyComponent.prototype.validateSecondAddress = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.compAddressTwoValid = false;
        }
        else {
            this.compAddressTwoValid = true;
        }
        this.compTabValid();
    };
    AddPropertyComponent.prototype.validateSecondPrice = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.compPriceTwoValid = false;
        }
        else {
            this.compPriceTwoValid = true;
        }
        this.compTabValid();
    };
    AddPropertyComponent.prototype.validateThirdAddress = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.compAddressThreeValid = false;
        }
        else {
            this.compAddressThreeValid = true;
        }
        this.compTabValid();
    };
    AddPropertyComponent.prototype.validateThirdPrice = function (input) {
        if (input.classList.contains('ng-invalid')) {
            this.compPriceThreeValid = false;
        }
        else {
            this.compPriceThreeValid = true;
        }
        this.compTabValid();
    };
    AddPropertyComponent.prototype.compTabValid = function () {
        if (this.compAddressOneValid && this.compPriceOneValid &&
            this.compAddressTwoValid && this.compPriceTwoValid &&
            this.compAddressThreeValid && this.compPriceThreeValid) {
            $("#comp-button").prop('disabled', false);
            return true;
        }
        else {
            $("#comp-button").prop('disabled', true);
            return false;
        }
    };
    AddPropertyComponent.prototype.formatInput = function (input) {
        input = input.replace(/$/g, '');
        input = input.replace(/%/g, '');
        input = input.replace(/,/g, '');
        input = input.replace(/ /g, '');
        return input;
    };
    AddPropertyComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    AddPropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-property',
            template: __webpack_require__("./src/app/add-property/add-property.component.html"),
            styles: [__webpack_require__("./src/app/add-property/add-property.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_addProperty_service__["a" /* AddPropertyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_photos_service__["a" /* PhotosService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */]])
    ], AddPropertyComponent);
    return AddPropertyComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_profile_guard__ = __webpack_require__("./src/app/guards/profile.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_register_guard__ = __webpack_require__("./src/app/guards/register.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_role_guard__ = __webpack_require__("./src/app/guards/role.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_property_add_property_component__ = __webpack_require__("./src/app/add-property/add-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auction_auction_component__ = __webpack_require__("./src/app/auction/auction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customize_property_customize_property_component__ = __webpack_require__("./src/app/customize-property/customize-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__connections_connections_component__ = __webpack_require__("./src/app/connections/connections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__generate_report_generate_report_component__ = __webpack_require__("./src/app/generate-report/generate-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__invite_user_invite_user_component__ = __webpack_require__("./src/app/invite-user/invite-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__place_deal_ad_place_deal_ad_component__ = __webpack_require__("./src/app/place-deal-ad/place-deal-ad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_profile_my_profile_component__ = __webpack_require__("./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sold_property_sold_property_component__ = __webpack_require__("./src/app/sold-property/sold-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__upload_list_upload_list_component__ = __webpack_require__("./src/app/upload-list/upload-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__view_deal_ads_view_deal_ads_component__ = __webpack_require__("./src/app/view-deal-ads/view-deal-ads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__view_property_view_property_component__ = __webpack_require__("./src/app/view-property/view-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__view_properties_view_properties_component__ = __webpack_require__("./src/app/view-properties/view-properties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__resolvers_my_profile_resolve_service__ = __webpack_require__("./src/app/resolvers/my-profile-resolve.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var APP_ROUTES = [
    // edit this to go to root page which will be home page of Veeya
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // edit next few after adding components to match
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__add_property_add_property_component__["a" /* AddPropertyComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_6__add_property_add_property_component__["a" /* AddPropertyComponent */] },
    { path: 'support', component: __WEBPACK_IMPORTED_MODULE_6__add_property_add_property_component__["a" /* AddPropertyComponent */] },
    { path: 'addproperty', component: __WEBPACK_IMPORTED_MODULE_6__add_property_add_property_component__["a" /* AddPropertyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_role_guard__["a" /* RoleGuard */]], data: { userType: 'Wholesaler' } },
    { path: 'auction/:id', component: __WEBPACK_IMPORTED_MODULE_7__auction_auction_component__["a" /* AuctionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'connections', component: __WEBPACK_IMPORTED_MODULE_9__connections_connections_component__["a" /* ConnectionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customizeproperty/:id', component: __WEBPACK_IMPORTED_MODULE_8__customize_property_customize_property_component__["a" /* CustomizePropertyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_role_guard__["a" /* RoleGuard */]], data: { userType: 'Investor' } },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'generateReport/:id', component: __WEBPACK_IMPORTED_MODULE_11__generate_report_generate_report_component__["a" /* GenerateReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_role_guard__["a" /* RoleGuard */]], data: { userType: 'Investor' } },
    { path: 'inviteuser', component: __WEBPACK_IMPORTED_MODULE_12__invite_user_invite_user_component__["a" /* InviteUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
    { path: 'placeDealAd', component: __WEBPACK_IMPORTED_MODULE_15__place_deal_ad_place_deal_ad_component__["a" /* PlaceDealAdComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_role_guard__["a" /* RoleGuard */]], data: { userType: 'Investor' } },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_16__my_profile_my_profile_component__["a" /* MyProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_profile_guard__["a" /* ProfileGuard */]], resolve: { user: __WEBPACK_IMPORTED_MODULE_25__resolvers_my_profile_resolve_service__["a" /* MyProfileResolve */] } },
    { path: 'properties', component: __WEBPACK_IMPORTED_MODULE_24__view_properties_view_properties_component__["a" /* ViewPropertiesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_17__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_register_guard__["a" /* RegisterGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_18__search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'soldproperty/:id', component: __WEBPACK_IMPORTED_MODULE_19__sold_property_sold_property_component__["a" /* SoldPropertyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'uploadlist', component: __WEBPACK_IMPORTED_MODULE_20__upload_list_upload_list_component__["a" /* UploadListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_21__user_profile_user_profile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'view/:id', component: __WEBPACK_IMPORTED_MODULE_23__view_property_view_property_component__["a" /* ViewPropertyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'viewDealAds', component: __WEBPACK_IMPORTED_MODULE_22__view_deal_ads_view_deal_ads_component__["a" /* ViewDealAdsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(APP_ROUTES
                /*{ enableTracing: true } for debugging only */
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"alert-message-container\">\n  <alert></alert>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_brands__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-brands/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_regular__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-regular/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/* ADD libraries from fontawesome */
__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_brands__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_regular__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid__["a" /* default */]);
var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, router) {
        var _this = this;
        this.titleService = titleService;
        this.router = router;
        // set the initial value to true to show loading spinner on first load
        this.loading = true;
        this.titleService.setTitle('Veeya');
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
            this.loading = true;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]) {
            window.scrollTo(0, 0);
            this.loading = false;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationCancel */]) {
            this.loading = false;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationError */]) {
            this.loading = false;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_edit_property_guard__ = __webpack_require__("./src/app/guards/edit-property.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_profile_guard__ = __webpack_require__("./src/app/guards/profile.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_register_guard__ = __webpack_require__("./src/app/guards/register.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_role_guard__ = __webpack_require__("./src/app/guards/role.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_filterAddress_pipe__ = __webpack_require__("./src/app/pipes/filterAddress.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_filterAfterRepairValue_pipe__ = __webpack_require__("./src/app/pipes/filterAfterRepairValue.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_filterCity_pipe__ = __webpack_require__("./src/app/pipes/filterCity.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_filterEmail_pipe__ = __webpack_require__("./src/app/pipes/filterEmail.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_filterFirstName_pipe__ = __webpack_require__("./src/app/pipes/filterFirstName.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_filterLastName_pipe__ = __webpack_require__("./src/app/pipes/filterLastName.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_filterMaxBathrooms_pipe__ = __webpack_require__("./src/app/pipes/filterMaxBathrooms.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_filterMaxBedrooms_pipe__ = __webpack_require__("./src/app/pipes/filterMaxBedrooms.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_filterMaxRehabCost_pipe__ = __webpack_require__("./src/app/pipes/filterMaxRehabCost.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_filterMinBathrooms_pipe__ = __webpack_require__("./src/app/pipes/filterMinBathrooms.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_filterMinBedrooms_pipe__ = __webpack_require__("./src/app/pipes/filterMinBedrooms.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_filterMinCapRate_pipe__ = __webpack_require__("./src/app/pipes/filterMinCapRate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_filterMinGrossIncome_pipe__ = __webpack_require__("./src/app/pipes/filterMinGrossIncome.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_filterPhoneNumber_pipe__ = __webpack_require__("./src/app/pipes/filterPhoneNumber.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_filterPropertyType_pipe__ = __webpack_require__("./src/app/pipes/filterPropertyType.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_filterPurchasePrice_pipe__ = __webpack_require__("./src/app/pipes/filterPurchasePrice.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_filterState_pipe__ = __webpack_require__("./src/app/pipes/filterState.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_filterStatus_pipe__ = __webpack_require__("./src/app/pipes/filterStatus.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_filterSellerFinancing_pipe__ = __webpack_require__("./src/app/pipes/filterSellerFinancing.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_filterSquareFootage_pipe__ = __webpack_require__("./src/app/pipes/filterSquareFootage.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipes_filterYearBuilt_pipe__ = __webpack_require__("./src/app/pipes/filterYearBuilt.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pipes_filterZipCode_pipe__ = __webpack_require__("./src/app/pipes/filterZipCode.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__add_property_add_property_component__ = __webpack_require__("./src/app/add-property/add-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__directives_alert_index__ = __webpack_require__("./src/app/directives/alert/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__auction_auction_component__ = __webpack_require__("./src/app/auction/auction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__connections_connections_component__ = __webpack_require__("./src/app/connections/connections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__customize_property_customize_property_component__ = __webpack_require__("./src/app/customize-property/customize-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__generate_report_generate_report_component__ = __webpack_require__("./src/app/generate-report/generate-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__invite_user_invite_user_component__ = __webpack_require__("./src/app/invite-user/invite-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__my_profile_my_profile_component__ = __webpack_require__("./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__place_deal_ad_place_deal_ad_component__ = __webpack_require__("./src/app/place-deal-ad/place-deal-ad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__sold_property_sold_property_component__ = __webpack_require__("./src/app/sold-property/sold-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__top_navbar_top_navbar_component__ = __webpack_require__("./src/app/top-navbar/top-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__upload_list_upload_list_component__ = __webpack_require__("./src/app/upload-list/upload-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__view_deal_ads_view_deal_ads_component__ = __webpack_require__("./src/app/view-deal-ads/view-deal-ads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__view_property_view_property_component__ = __webpack_require__("./src/app/view-property/view-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__view_properties_view_properties_component__ = __webpack_require__("./src/app/view-properties/view-properties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__services_addConnection_service__ = __webpack_require__("./src/app/services/addConnection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__services_addProperty_service__ = __webpack_require__("./src/app/services/addProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__services_auction_service__ = __webpack_require__("./src/app/services/auction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__services_customizeProperty_service__ = __webpack_require__("./src/app/services/customizeProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__services_dashboard_service__ = __webpack_require__("./src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__services_dealAd_service__ = __webpack_require__("./src/app/services/dealAd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__services_deleteProperty_service__ = __webpack_require__("./src/app/services/deleteProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__services_editProperty_service__ = __webpack_require__("./src/app/services/editProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__services_getAllProperties_service__ = __webpack_require__("./src/app/services/getAllProperties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__services_getConnections_service__ = __webpack_require__("./src/app/services/getConnections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__services_getUserProperties_service__ = __webpack_require__("./src/app/services/getUserProperties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__services_invite_service__ = __webpack_require__("./src/app/services/invite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__services_photos_service__ = __webpack_require__("./src/app/services/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__services_profile_service__ = __webpack_require__("./src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__services_soldProperty_service__ = __webpack_require__("./src/app/services/soldProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__services_uploadListService__ = __webpack_require__("./src/app/services/uploadListService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__services_viewProperty_service__ = __webpack_require__("./src/app/services/viewProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__resolvers_my_profile_resolve_service__ = __webpack_require__("./src/app/resolvers/my-profile-resolve.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_39__add_property_add_property_component__["a" /* AddPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_40__directives_alert_index__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_41__auction_auction_component__["a" /* AuctionComponent */],
                __WEBPACK_IMPORTED_MODULE_42__connections_connections_component__["a" /* ConnectionsComponent */],
                __WEBPACK_IMPORTED_MODULE_43__customize_property_customize_property_component__["a" /* CustomizePropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_44__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filterAddress_pipe__["a" /* FilterAddressPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_filterAfterRepairValue_pipe__["a" /* FilterAfterRepairValuePipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_filterCity_pipe__["a" /* FilterCityPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_filterEmail_pipe__["a" /* FilterEmailPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_filterFirstName_pipe__["a" /* FilterFirstNamePipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_filterLastName_pipe__["a" /* FilterLastNamePipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_filterMaxBathrooms_pipe__["a" /* FilterMaxBathroomsPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_filterMaxBedrooms_pipe__["a" /* FilterMaxBedroomsPipe */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_filterMaxRehabCost_pipe__["a" /* FilterMaxRehabCostPipe */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_filterMinBathrooms_pipe__["a" /* FilterMinBathroomsPipe */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_filterMinBedrooms_pipe__["a" /* FilterMinBedroomsPipe */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_filterMinCapRate_pipe__["a" /* FilterMinCapRatePipe */],
                __WEBPACK_IMPORTED_MODULE_28__pipes_filterMinGrossIncome_pipe__["a" /* FilterMinGrossIncomePipe */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_filterPhoneNumber_pipe__["a" /* FilterPhoneNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_30__pipes_filterPropertyType_pipe__["a" /* FilterPropertyTypePipe */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_filterPurchasePrice_pipe__["a" /* FilterPurchasePricePipe */],
                __WEBPACK_IMPORTED_MODULE_34__pipes_filterSellerFinancing_pipe__["a" /* FilterSellerFinancingPipe */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_filterState_pipe__["a" /* FilterStatePipe */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_filterStatus_pipe__["a" /* FilterStatusPipe */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_filterSquareFootage_pipe__["a" /* FilterSquareFootagePipe */],
                __WEBPACK_IMPORTED_MODULE_36__pipes_filterYearBuilt_pipe__["a" /* FilterYearBuiltPipe */],
                __WEBPACK_IMPORTED_MODULE_37__pipes_filterZipCode_pipe__["a" /* FilterZipCodePipe */],
                __WEBPACK_IMPORTED_MODULE_45__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_46__generate_report_generate_report_component__["a" /* GenerateReportComponent */],
                __WEBPACK_IMPORTED_MODULE_48__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_49__my_profile_my_profile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_47__invite_user_invite_user_component__["a" /* InviteUserComponent */],
                __WEBPACK_IMPORTED_MODULE_51__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_52__place_deal_ad_place_deal_ad_component__["a" /* PlaceDealAdComponent */],
                __WEBPACK_IMPORTED_MODULE_50__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_53__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_55__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_54__sold_property_sold_property_component__["a" /* SoldPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_56__top_navbar_top_navbar_component__["a" /* TopNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_57__upload_list_upload_list_component__["a" /* UploadListComponent */],
                __WEBPACK_IMPORTED_MODULE_58__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_59__view_deal_ads_view_deal_ads_component__["a" /* ViewDealAdsComponent */],
                __WEBPACK_IMPORTED_MODULE_60__view_property_view_property_component__["a" /* ViewPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_61__view_properties_view_properties_component__["a" /* ViewPropertiesComponent */],
                __WEBPACK_IMPORTED_MODULE_47__invite_user_invite_user_component__["a" /* InviteUserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_62__services_addConnection_service__["a" /* AddConnectionService */],
                __WEBPACK_IMPORTED_MODULE_66__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_63__services_addProperty_service__["a" /* AddPropertyService */],
                __WEBPACK_IMPORTED_MODULE_64__services_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_65__services_auction_service__["a" /* AuctionService */],
                __WEBPACK_IMPORTED_MODULE_67__services_customizeProperty_service__["a" /* CustomizePropertyService */],
                __WEBPACK_IMPORTED_MODULE_68__services_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_69__services_dealAd_service__["a" /* DealAdService */],
                __WEBPACK_IMPORTED_MODULE_70__services_deleteProperty_service__["a" /* DeletePropertyService */],
                __WEBPACK_IMPORTED_MODULE_71__services_editProperty_service__["a" /* EditPropertyService */],
                __WEBPACK_IMPORTED_MODULE_72__services_getAllProperties_service__["a" /* GetAllPropertiesService */],
                __WEBPACK_IMPORTED_MODULE_73__services_getConnections_service__["a" /* GetConnectionsService */],
                __WEBPACK_IMPORTED_MODULE_74__services_getUserProperties_service__["a" /* GetUserPropertiesService */],
                __WEBPACK_IMPORTED_MODULE_75__services_invite_service__["a" /* InviteService */],
                __WEBPACK_IMPORTED_MODULE_76__services_photos_service__["a" /* PhotosService */],
                __WEBPACK_IMPORTED_MODULE_77__services_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_78__services_soldProperty_service__["a" /* SoldPropertyService */],
                __WEBPACK_IMPORTED_MODULE_79__services_uploadListService__["a" /* UploadListService */],
                __WEBPACK_IMPORTED_MODULE_80__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_81__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_82__services_viewProperty_service__["a" /* ViewPropertyService */],
                __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__guards_edit_property_guard__["a" /* EditPropertyGuard */],
                __WEBPACK_IMPORTED_MODULE_13__guards_profile_guard__["a" /* ProfileGuard */],
                __WEBPACK_IMPORTED_MODULE_14__guards_register_guard__["a" /* RegisterGuard */],
                __WEBPACK_IMPORTED_MODULE_15__guards_role_guard__["a" /* RoleGuard */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["Title"],
                __WEBPACK_IMPORTED_MODULE_83__resolvers_my_profile_resolve_service__["a" /* MyProfileResolve */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auction/auction.component.css":
/***/ (function(module, exports) {

module.exports = ".timer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.timer-item {\n  color: white;\n}\n\n.timer-countdown {\n  font-size: 30px;\n  text-align: center;\n}\n\n.auction-button {\n  background-color: inherit;\n  border: 1px solid white;\n  border-radius: 25px;\n  text-decoration: none;\n  padding: 10px;\n  color: #FFFFFF;\n  display: block;\n  margin: 0 auto;\n  margin-top: 25px;\n  width: 25%;\n}\n\n.auction-button:hover {\n  border: 2px solid white;\n  cursor: pointer;\n}\n\n.auction-header {\n  background-color: #489ad8;\n}\n\n.table-row {\n  width: 100%;\n  max-width: 100%;\n}\n\n#bid-user-photo-wrapper {\n  width: 20%;\n}\n\n#bid-user-photo {\n  width: 120px;\n  height: 110px;\n  border-radius: 4px;\n}\n\n#bid-photo:hover {\n  cursor: pointer;\n}\n\n#bid-name-wrapper {\n  width: 55%;\n}\n\n#bid-name-wrapper > a:hover {\n  text-decoration: none;\n}\n\n#city-state {\n  cursor: default;\n}\n\n.bid-row-right {\n  margin-top: 10px;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/auction/auction.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body auction-header\">\n                  <div class=\"timer\" *ngIf=\"auctionOpen\">\n                    <div class=\"timer-item\">\n                      <div class=\"timer-countdown\">{{ days }}</div>\n                      <div class=\"timer-text\">Days</div>\n                    </div>\n                    <div class=\"timer-item\">\n                      <div class=\"timer-countdown\">{{ hours }}</div>\n                      <div class=\"timer-text\">Hours</div>\n                    </div>\n                    <div class=\"timer-item\">\n                      <div class=\"timer-countdown\">{{ minutes }}</div>\n                      <div class=\"timer-text\">Minutes</div>\n                    </div>\n                    <div class=\"timer-item\">\n                      <div class=\"timer-countdown\">{{ seconds }}</div>\n                      <div class=\"timer-text\">Seconds</div>\n                    </div>\n                  </div>\n\n\n                  <div *ngIf=\"auctionOpen && userType=='Wholesaler'\" class=\"auction-button-container\">\n                    <button type=\"button\" class=\"auction-button\" (click)=\"endAuction()\">End Auction</button>\n                  </div>\n                  <div *ngIf=\"userType=='Investor'\" class=\"auction-button-container\">\n                    <button class=\"auction-button\" (click)=\"addBidModal()\"\n                      *ngIf=\"auctionOpen\">Add bid\n                    </button>\n                    <button class=\"auction-button\"\n                      *ngIf=\"!auctionOpen\">Auction Closed\n                    </button>\n                  </div>\n\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n          <div class=\"row\" *ngFor=\"let bid of bids\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover\">\n                      <tbody>\n                        <tr class=\"table-row\">\n                          <td id=\"bid-user-photo-wrapper\">\n                            <div class=\"d-flex justify-content-center\">\n                              <img src=\"{{ bid.profilePhoto }}\" alt=\"\" id=\"bid-user-photo\">\n                            </div>\n                          </td>\n                          <td id=\"bid-name-wrapper\">\n                            <a [routerLink]=\"['/user/', bid.userId]\">\n                              <h3>{{ bid.firstName }} {{ bid.lastName }}</h3>\n                            </a>\n                            <div>\n                              {{ bid.bidPlacedTime }}\n                            </div>\n                            <div>\n                              {{ bid.bidPlacedDate }}\n                            </div>\n                            <div>\n                              <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                                [routerLink]=\"['/user/', bid.userId]\">View User\n                              </button>\n                            </div>\n                          </td>\n                          <td>\n                            <h3 class=\"bid-row-right\">\n                              $ {{ bid.amount }}\n                            </h3>\n                            <div class=\"bid-row-right\">\n                              <div class=\"btn btn-primary btn-rounded btn-fw\" id=\"city-state\">\n                                {{ bid.city }}, {{ bid.state }}\n                              </div>\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n          <!-- Add Bid MODAL -->\n          <div class=\"modal fade\" id=\"addBidModal\" tabindex=\"-1\" role=\"dialog\"\n                    aria-labelledby=\"addBidModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"addBidModal\">Add Bid</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <form class=\"forms-sample\" #addBidForm=\"ngForm\">\n                    <div class=\"form-group\">\n                      <label for=\"bidAmount\">Bid Amount</label>\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">$</span>\n                        <input type=\"text\" class=\"form-control\" id=\"bidAmount\"\n                          #bidAmount=\"ngModel\"\n                          name=\"bidAmount\"\n                          [(ngModel)]=\"newBid.amount\"\n                          maxlength=\"12\"\n                          pattern=\"^[a-zA-Z0-9,.$ ]*$\"\n                          required\n                        >\n                      </div>\n                    </div>\n                  </form>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                  <button id=\"addBidConfirm\" type=\"button\"\n                    class=\"btn btn-primary\"\n                    [disabled]=\"addBidForm.invalid\"\n                    (click)=\"addBid()\"\n                  >Confirm\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div> <!-- END MODAL -->\n\n\n        </div> <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n      </div> <!-- main-panel ends -->\n\n\n    </div> <!-- page-body-wrapper ends -->\n\n\n\n  </div> <!-- container-scroller -->\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/auction/auction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auction_service__ = __webpack_require__("./src/app/services/auction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_viewProperty_service__ = __webpack_require__("./src/app/services/viewProperty.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuctionComponent = /** @class */ (function () {
    function AuctionComponent(activatedRoute, auctionService, authService, router, viewPropertyService) {
        this.activatedRoute = activatedRoute;
        this.auctionService = auctionService;
        this.authService = authService;
        this.router = router;
        this.viewPropertyService = viewPropertyService;
        this.subscriptions = [];
        this.auctionOpen = true;
    }
    AuctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // GET CURRENT USER INFO
        this.userType = this.authService.loggedInUserType();
        this.currentUserSubscription = this.authService.getCurrentUser()
            .subscribe(function (response) {
            _this.currentUser = response;
        });
        this.subscriptions.push(this.currentUserSubscription);
        // GET PROPERTY
        if (!this.auctionService.propertyExists) {
            this.activatedRoute.params.subscribe(function (params) {
                _this.propertyId = params['id'];
                _this.viewPropertySubscription = _this.viewPropertyService.getPropertyById(_this.propertyId)
                    .subscribe(function (response) {
                    _this.property = response;
                    _this.propertyId = _this.property._id;
                }, function (error) {
                    _this.router.navigate(['/dashboard']);
                });
            });
            this.subscriptions.push(this.viewPropertySubscription);
        }
        else {
            this.getPropertySubscription = this.auctionService.getProperty()
                .subscribe(function (response) {
                _this.property = response;
                _this.propertyId = _this.property._id;
            }, function (error) {
            });
            this.subscriptions.push(this.getPropertySubscription);
        }
        this.getInitialBidsSubscription = this.auctionService.getInitialBids(this.propertyId)
            .subscribe(function (response) {
            _this.bids = response.data.bids;
            _this.deadline = response.data.deadline;
            _this.auctionOpen = response.data.auctionOpen == 'true' ? true : false;
            _this.establishCountdownTimer();
        }, function (error) {
            _this.router.navigate(['/dashboard']);
        });
        this.subscriptions.push(this.getInitialBidsSubscription);
        // GET BIDS
        // listens for new-bid in auctionService and pushes to this.bids
        this.connectionSubscription = this.auctionService.getBids()
            .subscribe(function (bid) {
            _this.bids.push(bid.data);
        }, function (error) {
        });
        this.subscriptions.push(this.connectionSubscription);
        this.newBid = {
            amount: ''
        };
    };
    AuctionComponent.prototype.addBidModal = function () {
        $("#addBidModal").modal('show');
    };
    AuctionComponent.prototype.addBid = function () {
        this.newBid.amount = this.newBid.amount.replace(',', '');
        this.newBid.amount = this.newBid.amount.replace('$', '');
        this.auctionService.sendBid(this.property._id, this.currentUser, this.newBid.amount);
        $("#addBidModal").modal('hide');
    };
    AuctionComponent.prototype.establishCountdownTimer = function () {
        this.interval = setInterval(this.setTimer.bind(this), 1000);
    };
    AuctionComponent.prototype.setTimer = function () {
        var now = new Date().getTime();
        var t = new Date(this.deadline).getTime() - now;
        if (t > 0) {
            this.auctionOpen = true;
        }
        else {
            this.auctionOpen = false;
            this.endAuction();
        }
        this.days = Math.floor(t / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60 * 60));
        this.minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((t % (1000 * 60)) / 1000);
    };
    AuctionComponent.prototype.endAuction = function () {
        var _this = this;
        this.endAuctionSubscription = this.auctionService.endAuction(this.propertyId)
            .subscribe(function (response) {
            _this.auctionOpen = false;
            _this.days = 0;
            _this.hours = 0;
            _this.minutes = 0;
            _this.seconds = 0;
            clearInterval(_this.interval);
        }, function (error) {
        });
        this.subscriptions.push(this.endAuctionSubscription);
    };
    AuctionComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    AuctionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auction',
            template: __webpack_require__("./src/app/auction/auction.component.html"),
            styles: [__webpack_require__("./src/app/auction/auction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_auction_service__["a" /* AuctionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_viewProperty_service__["a" /* ViewPropertyService */]])
    ], AuctionComponent);
    return AuctionComponent;
}());



/***/ }),

/***/ "./src/app/connections/connections.component.css":
/***/ (function(module, exports) {

module.exports = ".user-card {\n  cursor: pointer;\n}\n\n#connection-photo-wrapper {\n  width: 20%;\n}\n\n#connection-photo {\n  width: 120px;\n  height: 110px;\n  border-radius: 10%;\n}\n\n#connection-photo:hover {\n  cursor: pointer;\n}\n\n#connection-name-wrapper {\n  width: 55%;\n}\n\n#connection-name-wrapper > a:hover {\n  text-decoration: none;\n  cursor: pointer;\n  color: blue;\n}\n\n#connection-stats-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.connection-stats-number {\n  text-align: center;\n}\n\n.connections-search-input {\n  width: 40%;\n}\n\n.connections-search-input input {\n  width: 100%;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/connections/connections.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4>Connection Requests</h4>\n                  <h6 *ngIf=\"!pendingConnections\">No connection requests at this time. Time to network!</h6>\n\n\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover\">\n                      <tbody>\n                        <tr *ngFor=\"let connection of pendingConnectionsArray\">\n                          <td id=\"connection-photo-wrapper\">\n                            <div class=\"d-flex justify-content-center\">\n                              <a (click)='visitProfile(connection)'>\n                                <img src=\"{{ connection.profilePhoto }}\" alt=\"\" id=\"connection-photo\">\n                              </a>\n                            </div>\n                          </td>\n\n                          <td id=\"connection-name-wrapper\">\n                            <a (click)=\"visitProfile(connection)\">\n                              <h3>{{ connection?.firstName }} {{ connection?.lastName }}</h3>\n                            </a>\n                            <p>\n                              {{ connection.userType }}\n                            </p>\n                            <div id=\"connection-stats-wrapper\">\n                              <div>\n                                <div class=\"connection-stats-number\">{{ connection.profileViews }}</div>\n                                <div>Profile Views</div>\n                              </div>\n                              <div>\n                                <div class=\"connection-stats-number\">{{ connection.connections.length }}</div>\n                                <div>Connections</div>\n                              </div>\n                              <div>\n                                <div class=\"connection-stats-number\"\n                                  *ngIf=\"connection.userType=='Wholesaler'\">{{ connection.wholesalerSoldProperties.length }}</div>\n                                <div class=\"connection-stats-number\"\n                                  *ngIf=\"connection.userType=='Investor'\">{{ connection.investorBoughtProperties.length }}</div>\n                                <div class=\"connection-stats-number\"\n                                  *ngIf=\"connection.userType=='Lender'\">{{ connection.lenderLoanedProperties.length }}</div>\n                                <div>Deals</div>\n                              </div>\n                            </div>\n                          </td>\n\n                          <td>\n                            <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                              (click)=\"acceptRequest(connection)\">Accept\n                            </button>\n                            <button class=\"btn btn-inverse-danger btn-rounded btn-sm mt-3 mb-4\"\n                              (click)=\"denyRequest(connection)\">Deny\n                            </button>\n                          </td>\n\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Current Connections</h4>\n                  <h6 *ngIf=\"connections.length==0\">Click <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                      [routerLink]=\"['/search']\">here</button> to use the Search functionality to find users to connect with.\n                    </h6>\n                  <table class=\"table\" *ngIf=\"connections.length > 0\">\n                    <thead>\n                      <tr>\n                        <th>#</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Phone Number</th>\n                        <th>City</th>\n                        <th>State</th>\n                        <th>Profile</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchFirstName\" name=\"filterFirstName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchLastName\" name=\"filterLastName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchEmail\" name=\"filterEmail\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchPhoneNumber\" name=\"filterPhoneNumber\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchCity\" name=\"filterCity\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchState\" name=\"filterState\" value=\"Search\" />\n                        </td>\n                        <td></td>\n                      </tr>\n                      <tr *ngFor=\"let connection of connections\n                        | filterFirstName: searchFirstName\n                        | filterLastName: searchLastName\n                        | filterEmail: searchEmail\n                        | filterPhoneNumber: searchPhoneNumber\n                        | filterCity: searchCity\n                        | filterState: searchState;\n                        let i=index\">\n                        <td>{{ i + 1 }}</td>\n                        <td>{{ connection.firstName }}</td>\n                        <td>{{ connection.lastName }}</td>\n                        <td>{{ connection.email }}</td>\n                        <td>{{ connection.phoneNumber }}</td>\n                        <td>{{ connection.city }}</td>\n                        <td>{{ connection.state }}</td>\n                        <td><a [routerLink]=\"['/user/' + connection._id]\">View</a></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/connections/connections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_addConnection_service__ = __webpack_require__("./src/app/services/addConnection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_getConnections_service__ = __webpack_require__("./src/app/services/getConnections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConnectionsComponent = /** @class */ (function () {
    function ConnectionsComponent(addConnectionService, alertService, authService, getConnectionsService, router, userService) {
        this.addConnectionService = addConnectionService;
        this.alertService = alertService;
        this.authService = authService;
        this.getConnectionsService = getConnectionsService;
        this.router = router;
        this.userService = userService;
        this.subscriptions = [];
        this.connections = [];
        this.pendingConnections = false;
        this.pendingConnectionsArray = [];
    }
    ConnectionsComponent.prototype.ngOnInit = function () {
        this.user_id = this.authService.loggedInUser();
        this.getConnectionsForUser();
        this.getPendingConnections();
    };
    ConnectionsComponent.prototype.getConnectionsForUser = function () {
        var _this = this;
        this.getConnectionsSubscription = this.getConnectionsService.getConnectionsForUser(this.user_id)
            .subscribe(function (response) {
            _this.connections = response;
        }, function (error) {
        });
        this.subscriptions.push(this.getConnectionsSubscription);
    };
    ConnectionsComponent.prototype.getPendingConnections = function () {
        var _this = this;
        this.getPendingConnectionsSubscription = this.getConnectionsService.getAllPendingConnections()
            .subscribe(function (response) {
            _this.pendingConnectionsArray = response;
            if (_this.pendingConnectionsArray.length > 0) {
                _this.pendingConnections = true;
            }
        }, function (error) {
            _this.alertService.error('Error with retrieving pending connections.');
        });
        this.subscriptions.push(this.getPendingConnectionsSubscription);
    };
    ConnectionsComponent.prototype.acceptRequest = function (connection) {
        var _this = this;
        var connectionId = connection._id;
        this.acceptConnectionSubscription = this.addConnectionService.acceptConnection(this.user_id, connectionId)
            .subscribe(function (response) {
            var currentNumberOfPendingConnections = _this.pendingConnectionsArray.length;
            _this.connections.push(response.connectionUser);
            if (_this.pendingConnectionsArray.length == 1) {
                _this.pendingConnections = false;
                _this.pendingConnectionsArray = [];
            }
            else {
                _this.pendingConnectionsArray = _this.pendingConnectionsArray.filter(function (connection) {
                    return connection._id != response.connectionUser._id;
                });
            }
            _this.getConnectionsService.reducePendingConnections(currentNumberOfPendingConnections - 1);
        }, function (error) {
            _this.alertService.error('Error accepting connection request.');
        });
        this.subscriptions.push(this.acceptConnectionSubscription);
    };
    ConnectionsComponent.prototype.denyRequest = function (connection) {
        var _this = this;
        var connectionId = connection._id;
        this.denyConnectionSubscription = this.addConnectionService.denyConnection(this.user_id, connectionId)
            .subscribe(function (response) {
            var currentNumberOfPendingConnections = _this.pendingConnectionsArray.length;
            if (_this.pendingConnectionsArray.length == 1) {
                _this.pendingConnections = false;
                _this.pendingConnectionsArray = [];
            }
            else {
                _this.pendingConnectionsArray = _this.pendingConnectionsArray.filter(function (connection) {
                    return connection._id != response.connectionUser._id;
                });
            }
            _this.getConnectionsService.reducePendingConnections(currentNumberOfPendingConnections - 1);
        }, function (error) {
            _this.alertService.error('Error denying connection request.');
        });
        this.subscriptions.push(this.denyConnectionSubscription);
    };
    ConnectionsComponent.prototype.visitProfile = function (connection) {
        this.router.navigate(['/user/', connection._id]);
    };
    ConnectionsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ConnectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connections',
            template: __webpack_require__("./src/app/connections/connections.component.html"),
            styles: [__webpack_require__("./src/app/connections/connections.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_addConnection_service__["a" /* AddConnectionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_getConnections_service__["a" /* GetConnectionsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]])
    ], ConnectionsComponent);
    return ConnectionsComponent;
}());



/***/ }),

/***/ "./src/app/customize-property/customize-property.component.css":
/***/ (function(module, exports) {

module.exports = ".required-field {\n  font-size: 12px;\n}\n\n.required-field:after {\n  content: \" *\";\n  color: red;\n}\n\n#propertyImage {\n  height: 140px;\n  max-width: 100%;\n}\n\n#photoCard {\n  margin-left: 10px;\n}\n\n#generateReportTitle {\n  display: table;\n  margin: 0 auto;\n}\n\n.buttons {\n  display: table;\n  margin: 0 auto;\n  padding-top: 40px;\n}\n\n.buttons button {\n  margin-right: 10px;\n}\n\n#property-image-enlarged {\n  max-width: 100%;\n}\n\n#propertyImage:hover {\n  cursor: pointer;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/customize-property/customize-property.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n\n      <div class=\"main-panel\" *ngIf=\"property\">\n        <div class=\"content-wrapper\">\n\n        <div class=\"row\" *ngIf=\"property.photos !== undefined\">\n          <div class=\"col-lg-12 grid-margin\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Property Photos</h4>\n                <div class=\"row\">\n                  <div *ngFor=\"let photo of property.photos\">\n                    <div class=\"col-xs-4\">\n                      <div class=\"card h-100\" id=\"photoCard\">\n                        <img id=\"propertyImage\" src=\"{{ photo }}\" (click)=\"imageModal(photo)\" />\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n          <!-- IMAGE MODAL -->\n          <div class=\"modal fade bd-example-modal-lg\" id=\"photoModal\" tabindex=\"-1\" role=\"dialog\"\n              aria-labelledby=\"photoLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"photoLabel\">View Property Photo</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div id=\"property-image-wrapper\">\n                  <img src=\"{{ enlargedPhoto }}\" id=\"property-image-enlarged\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- END IMAGE MODAL -->\n\n\n\n\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 grid-margin\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\"><em>Please Note</em></h4>\n                <div class=\"row\">\n                  <p>All fields on this form are required.  In order to present the data accurately, all metrics will need to be valid.  Please enter only numbers and decimals where appropriate.  If you believe the field should be empty, please enter 0.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n          <div class=\"col-md-6 d-flex align-items-stretch grid-margin\">\n            <div class=\"row flex-grow\">\n              <div class=\"col-12 grid-margin\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Income</h4>\n                    <h6 class=\"required-field card-description\"><em>Monthly</em></h6>\n                    <form class=\"forms-sample\" #incomeForm=\"ngForm\">\n                      <div class=\"form-group\">\n                        <label for=\"averageRent\">Gross Rent</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"property.averageRent\"\n                            name=\"averageRent\"\n                            #purchasePrice=\"ngModel\"\n                            minlength=\"3\"\n                            maxlength=\"10\"\n                            pattern=\"^[0-9]*$\"\n                            required\n                          >\n                        </div>\n                      </div>\n                      <div class=\"form-group\" id=\"extraIncome\" >\n                        <div class=\"form-group\" *ngFor=\"let income of extraIncomes\">\n                          <label for=\"{{ income.incomeName }}\">{{ income.incomeName }}</label>\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">$</span>\n                            </div>\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"income.incomeAmount\"\n                              name=\"{{ income.incomeName }}\"\n                              #extraIncome=\"ngModel\"\n                              maxlength=\"10\"\n                              pattern=\"^[0-9]*$\"\n                              required\n                            >\n                          </div>\n                        </div>\n                      </div>\n                    </form>\n                      <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\" (click)=\"extraIncomeModal()\">Add Extra Income</button>\n                      </div>\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"col-12 grid-margin stretch-card\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <form class=\"forms-sample\" #fixedExpensesForm=\"ngForm\">\n                      <h4 class=\"card-title\">Fixed Expenses</h4>\n                      <div class=\"form-group\">\n                        <label for=\"expectedRehab\">Total Expected Rehab Costs</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.expectedRehab\"\n                          name=\"expectedRehab\"\n                          #expectedRehab=\"ngModel\"\n                          minlength=\"2\"\n                          maxlength=\"10\"\n                          pattern=\"^[0-9]*$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                      <br />\n                      <h6 class=\"required-field card-description\"><em>Monthly</em></h6>\n                      <div class=\"form-group\">\n                        <label for=\"propertyTaxes\">Property Taxes</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"property.propertyTaxes\"\n                            name=\"propertyTaxes\"\n                            #propertyTaxes=\"ngModel\"\n                            minlength=\"2\"\n                            maxlength=\"10\"\n                            pattern=\"^[0-9]*$\"\n                            required\n                          >\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"insurance\">Insurance</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"property.insurance\"\n                            name=\"insurance\"\n                            #insurance=\"ngModel\"\n                            minlength=\"2\"\n                            maxlength=\"10\"\n                            pattern=\"^[0-9]*$\"\n                            required\n                          >\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"hoa\">HOA</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.HOA\"\n                          name=\"HOA\"\n                          #HOA=\"ngModel\"\n                          minlength=\"2\"\n                          maxlength=\"10\"\n                          pattern=\"^[0-9]*$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"utilities\">Utilities</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.utilities\"\n                          name=\"utilities\"\n                          #utilities=\"ngModel\"\n                          minlength=\"2\"\n                          maxlength=\"10\"\n                          pattern=\"^[0-9]*$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                      <div class=\"form-group\" id=\"extraIncome\" >\n                        <div class=\"form-group\" *ngFor=\"let expense of extraFixedExpenses\">\n                          <label for=\"{{ expense.expenseName }}\">{{ expense.expenseName }}</label>\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">$</span>\n                            </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"expense.expenseAmount\"\n                            name=\"{{ expense.expenseName }}\"\n                            #extraFixedExpense=\"ngModel\"\n                            minlength=\"2\"\n                            maxlength=\"10\"\n                            pattern=\"^[0-9]*$\"\n                            required\n                          >\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\" (click)=\"extraFixedExpenseModal()\">\n                          Add Extra Fixed Expense</button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-12 grid-margin stretch-card\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <form class=\"forms-sample\" #variableExpensesForm=\"ngForm\">\n                      <h4 class=\"card-title\">Variable Expenses</h4>\n\n                      <div class=\"form-group\">\n                        <label for=\"vacancy\">Vacancy</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.vacancy\"\n                          name=\"vacancy\"\n                          #vacancy=\"ngModel\"\n                          maxlength=\"10\"\n                          pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"propertyManagement\">Property Management</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.propertyManagement\"\n                          name=\"propertyManagement\"\n                          #propertyManagement=\"ngModel\"\n                          maxlength=\"10\"\n                          pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"capEx\">Capital Expenditures</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.capEx\"\n                          name=\"capEx\"\n                          #capEx=\"ngModel\"\n                          maxlength=\"10\"\n                          pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"smallRepairs\">Small Repairs</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.smallRepairs\"\n                          name=\"smallRepairs\"\n                          #smallRepairs=\"ngModel\"\n                          maxlength=\"10\"\n                          pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                      <div class=\"form-group\" id=\"extraIncome\" >\n                        <div class=\"form-group\" *ngFor=\"let expense of extraVariableExpenses\">\n                          <label for=\"{{ expense.expenseName }}\">{{ expense.expenseName }}</label>\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">%</span>\n                            </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"expense.percent\"\n                            name=\"{{ expense.expenseName }}\"\n                            #extraVariableExpense=\"ngModel\"\n                            maxlength=\"10\"\n                            pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                            required\n                          >\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\" (click)=\"extraVariableExpenseModal()\">\n                          Add Extra Variable Expense</button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"col-md-6 d-flex align-items-stretch grid-margin\">\n            <div class=\"row flex-grow\">\n              <div class=\"col-12 grid-margin\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Loan Terms</h4>\n                    <form class=\"forms-sample\" #termsForm=\"ngForm\">\n                    <div class=\"form-group\">\n                      <label for=\"purchasePrice\">Purchase Price</label>\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">$</span>\n                        </div>\n                      <input type=\"text\" class=\"form-control\"\n                        [(ngModel)]=\"property.purchasePrice\"\n                        name=\"purchasePrice\"\n                        maxlength=\"10\"\n                        pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                        required\n                      >\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"downPayment\">Down Payment</label>\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">$</span>\n                        </div>\n                      <input type=\"text\" class=\"form-control\"\n                        [(ngModel)]=\"property.downPayment\"\n                        name=\"downPayment\"\n                        maxlength=\"10\"\n                        pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                        required\n                      >\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"amortizationSchedule\">Amortization Schedule</label>\n                      <div class=\"col-sm-6\">\n                        <select class=\"form-control\" [(ngModel)]=\"property.amortizationSchedule\" name=\"amortizationSchedule\">\n                          <option value=\"1\">1</option>\n                          <option value=\"2\">2</option>\n                          <option value=\"3\">3</option>\n                          <option value=\"4\">4</option>\n                          <option value=\"5\">5</option>\n                          <option value=\"6\">6</option>\n                          <option value=\"7\">7</option>\n                          <option value=\"8\">8</option>\n                          <option value=\"9\">9</option>\n                          <option value=\"10\">10</option>\n                          <option value=\"15\">15</option>\n                          <option value=\"20\">20</option>\n                          <option value=\"25\">25</option>\n                          <option value=\"30\">30</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"balloonPayment\">Balloon Payment</label>\n                      <div class=\"col-sm-6\">\n                        <select class=\"form-control\" (change)=\"changeBalloonPayment($event.target.value)\"\n                              [(ngModel)]=\"property.balloonPayment\" name=\"balloonPayment\">\n                          <option value=\"No\">No</option>\n                          <option value=\"Yes\">Yes</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"property.balloonPayment=='Yes'\">\n                      <label for=\"balloonPaymentYear\">Balloon Payment After Year</label>\n                      <div class=\"col-sm-6\">\n                        <select class=\"form-control\" [(ngModel)]=\"property.balloonPaymentYear\" name=\"balloonPaymentYear\">\n                          <option value=\"1\">1</option>\n                          <option value=\"2\">2</option>\n                          <option value=\"3\">3</option>\n                          <option value=\"4\">4</option>\n                          <option value=\"5\">5</option>\n                          <option value=\"6\">6</option>\n                          <option value=\"6\">7</option>\n                          <option value=\"6\">8</option>\n                          <option value=\"6\">9</option>\n                          <option value=\"6\">10</option>\n                          <option value=\"6\">15</option>\n                          <option value=\"6\">20</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"interestRate\">Interest Rate</label>\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">%</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.interestRate\"\n                          name=\"interestRate\"\n                          maxlength=\"5\"\n                          pattern=\"^[0-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"closingCosts\">Closing Costs</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.closingCosts\"\n                          name=\"closingCosts\"\n                          maxlength=\"10\"\n                          pattern=\"^[0-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                    <div class=\"form-group\">\n                      <label for=\"pmi\">PMI</label>\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">%</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.PMI\"\n                          name=\"PMI\"\n                          pattern=\"^\\.?[0-9]\\d*(\\.\\d+)?$\"\n                          maxlength=\"5\"\n                          required\n                        >\n                      </div>\n                    </div>\n                  </form>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-12 grid-margin\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <form class=\"forms-sample\" #otherForm=\"ngForm\">\n                      <h4 class=\"card-title\">Other</h4>\n                      <div class=\"form-group\">\n                        <label for=\"afterRepairValue\">Market Value After Repairs & Discount Applied</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"property.afterRepairValue\"\n                            name=\"afterRepairValue\"\n                            #afterRepairValue=\"ngModel\"\n                            maxlength=\"10\"\n                            pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                            required\n                          >\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"inflation\">Inflation</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"property.inflation\"\n                            name=\"inflation\"\n                            #inflation=\"ngModel\"\n                            maxlength=\"10\"\n                            pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                            required\n                          >\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"rentAppreciation\">Rent Appreciation Per Year</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.rentAppreciation\"\n                          #rentAppreciation=\"ngModel\"\n                          name=\"rentAppreciation\"\n                          maxlength=\"10\"\n                          pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                      </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"propertyAppreciation\">Property Appreciation</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.propertyAppreciation\"\n                          #propertyAppreciation=\"ngModel\"\n                          name=\"propertyAppreciation\"\n                          maxlength=\"3\"\n                          pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                      </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"buildingValue\">Building Value</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.buildingValue\"\n                          name=\"buildingValue\"\n                          #buildingValue=\"ngModel\"\n                          minlength=\"2\"\n                          maxlength=\"10\"\n                          pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                      </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"marginalTaxRate\">Marginal Tax Rate</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\"\n                          [(ngModel)]=\"property.marginalTaxRate\"\n                          name=\"marginalTaxRate\"\n                          #marginalTaxRate=\"ngModel\"\n                          maxlength=\"10\"\n                          pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                      </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n\n            </div> <!-- closes row flex-grow -->\n          </div> <!-- closes right side col-md-6 d-flex align-items-stretch grid-margin -->\n\n\n\n        <!-- MODALS -->\n\n          <div class=\"modal fade\" id=\"extraIncomeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"extraIncomeLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <form class=\"forms-sample\" #extraIncomeForm=\"ngForm\" id=\"extraIncomeForm\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"extraIncomeLabel\">Add Income</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                      <div class=\"form-group\">\n                        <label for=\"extraIncomeName\">Income Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"incomeName\"\n                          #incomeName=\"ngModel\"\n                          name=\"incomeName\"\n                          [(ngModel)]=\"newIncome.incomeName\"\n                          maxlength=\"50\"\n                          pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                          required\n                        >\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"extraIncomeAmount\">Income Amount Per Month</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\" id=\"incomeAmount\"\n                          #incomeAmount=\"ngModel\"\n                          name=\"incomeAmount\"\n                          [(ngModel)]=\"newIncome.incomeAmount\"\n                          maxlength=\"10\"\n                          pattern=\"^[0-9]*$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                    <button id=\"extraIncomeConfirm\" type=\"button\" class=\"btn btn-primary\" [disabled]=\"extraIncomeForm.invalid\"\n                      (click)=\"addExtraIncome()\">Confirm</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n\n\n          <div class=\"modal fade\" id=\"fixedExpenseModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fixedExpenseLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"fixedExpenseLabel\">Add Expense</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <form class=\"forms-sample\" #fixedExpenseForm=\"ngForm\">\n                    <div class=\"form-group\">\n                      <label for=\"expenseName\">Expense Name</label>\n                      <input type=\"text\" class=\"form-control\" id=\"fixedExpenseName\"\n                        #fixedExpenseName=\"ngModel\"\n                        name=\"fixedExpenseName\"\n                        [(ngModel)]=\"newFixedExpense.expenseName\"\n                        maxlength=\"50\"\n                        pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                        required\n                      >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"extraIncomeAmount\">Expense Amount Per Month</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">$</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\" id=\"fixedExpenseAmount\"\n                          #fixedExpenseAmount=\"ngModel\"\n                          name=\"fixedExpenseAmount\"\n                          [(ngModel)]=\"newFixedExpense.expenseAmount\"\n                          maxlength=\"10\"\n                          pattern=\"^[0-9]*$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                  </form>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                  <button id=\"fixedExpenseConfirm\" type=\"button\"\n                    class=\"btn btn-primary\"\n                    [disabled]=\"fixedExpenseForm.invalid\"\n                    (click)=\"addExtraFixedExpense()\"\n                  >Confirm\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"modal fade\" id=\"variableExpenseModal\" tabindex=\"-1\" role=\"dialog\"\n              aria-labelledby=\"variableExpenseLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"variableExpenseLabel\">Add Expense</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <form class=\"forms-sample\" #variableExpenseForm=\"ngForm\">\n                    <div class=\"form-group\">\n                      <label for=\"expenseName\">Expense Name</label>\n                      <input type=\"text\" class=\"form-control\" id=\"variableExpenseName\"\n                        #variableExpenseName=\"ngModel\"\n                        name=\"variableExpenseName\"\n                        [(ngModel)]=\"newVariableExpense.expenseName\"\n                        maxlength=\"50\"\n                        pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                        required\n                      >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"extraIncomeAmount\">Expense Amount Per Month</label>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">%</span>\n                          </div>\n                        <input type=\"text\" class=\"form-control\" id=\"variableExpensePercent\"\n                          #variableExpensePercent=\"ngModel\"\n                          name=\"variableExpensePercent\"\n                          [(ngModel)]=\"newVariableExpense.percent\"\n                          maxlength=\"10\"\n                          pattern=\"^[1-9]\\d*(\\.\\d+)?$\"\n                          required\n                        >\n                        </div>\n                      </div>\n                  </form>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                  <button id=\"variableExpenseConfirm\" type=\"button\"\n                    class=\"btn btn-primary\"\n                    [disabled]=\"variableExpenseForm.invalid\"\n                    (click)=\"addExtraVariableExpense()\"\n                  >Confirm\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n      </div> <!-- closes row -->\n\n\n\n        <!-- buttons -->\n        <div class=\"row\">\n          <div class=\"col-md-12 d-flex align-items-stretch grid-margin\">\n            <div class=\"row flex-grow\">\n              <div class=\"col-12 grid-margin\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\" id=\"generateReportTitle\">Generate Report</h4>\n                    <div class=\"buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\" (click)=\"generateReport()\"\n                        [disabled]=\"incomeForm.invalid || fixedExpensesForm.invalid || variableExpensesForm.invalid || otherForm.invalid || termsForm.invalid\">Generate</button>\n                      <button type=\"button\" class=\"btn btn-inverse-danger btn-rounded btn-fw\">Cancel</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> <!-- closes button row -->\n\n\n\n\n        </div> <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n  <!-- container-scroller -->\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/customize-property/customize-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizePropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customizeProperty_service__ = __webpack_require__("./src/app/services/customizeProperty.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CustomizePropertyComponent = /** @class */ (function () {
    function CustomizePropertyComponent(customizePropertyService, router) {
        this.customizePropertyService = customizePropertyService;
        this.router = router;
        this.totalVariableExpense = 0;
        this.totalFixedExpense = 0;
        this.incomeAdded = false;
        this.fixedExpenseAdded = false;
        this.variableExpenseAdded = false;
        this.extraIncomes = [];
        this.extraFixedExpenses = [];
        this.extraVariableExpenses = [];
    }
    CustomizePropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.customizePropertyService.customizedPropertyExists) {
            this.property = this.customizePropertyService.getCustomizedProperty();
        }
        else {
            this.customizePropertyService.getProperty()
                .subscribe(function (response) {
                _this.property = response;
            });
        }
        // this.property = {
        //     "_id": "5aaead5fefef19eb2662b924",
        //     "updated_at": "2018-03-18T18:18:08.000Z",
        //     "created_at": "2018-03-18T18:18:08.000Z",
        //     "wholesaler_id": "5aaea4a1ce0c02e9a020ac08",
        //     "address": "Second Property to Test",
        //     "city": "Las Vegas",
        //     "state": "NV",
        //     "zipCode": "89109",
        //     "purchasePrice": "240000",
        //     "bedrooms": 3,
        //     "bathrooms": 3,
        //     "expectedRehab": "25000",
        //     "afterRepairValue": "260000",
        //     "HOA": "125",
        //     "propertyTaxes": "100",
        //     "averageRent": "1900",
        //     "squareFootage": "1000",
        //     "propertyType": "Single Family",
        //     "yearBuilt": "1980",
        //     "status": "Listed",
        //     "utilities": "100",
        //     "insurance": "85",
        //     "sellerFinancing": "no",
        //     "amortizationSchedule": "30",
        //     "balloonPayment": "No",
        //     "balloonPaymentYear": "5",
        //     "downPayment": "20000",
        //     "interestRate": "5",
        //     "closingCosts": "5000",
        //     "PMI": "0",
        //     "inflation": "1",
        //     "rentAppreciation": "1",
        //     "propertyAppreciation": "1",
        //     "buildingValue": "175000",
        //     "marginalTaxRate": "20",
        //     "vacancy": "5",
        //     "propertyManagement": "10",
        //     "capEx": "10",
        //     "smallRepairs": "5",
        //     "__v": 0,
        //     "photos": [
        //         "https://firebasestorage.googleapis.com/v0/b/veeya-c0185.appspot.com/o/property-photos%2F5aaea4a1ce0c02e9a020ac08%2Froom.jpg?alt=media&token=d3b6dea5-6b5d-414f-8e56-6d1c61bd5166"
        //     ],
        //     "comps": [
        //         {
        //             "firstCompAddress": "",
        //             "firstCompPrice": ""
        //         },
        //         {
        //             "secondCompAddress": "",
        //             "secondCompPrice": ""
        //         },
        //         {
        //             "thirdCompAddress": "",
        //             "thirdCompPrice": ""
        //         }
        //     ]
        // };
        this.newIncome = {
            incomeName: '',
            incomeAmount: ''
        };
        this.newFixedExpense = {
            expenseName: '',
            expenseAmount: ''
        };
        this.newVariableExpense = {
            expenseName: '',
            expenseAmount: ''
        };
        this.property.extraIncomesNumbers = {};
        this.property.extraFixedExpensesNumbers = {};
        this.property.extraVariableExpensesNumbers = {};
        this.property.amortizationPayments = {};
        this.property.appreciationNumbers = {};
        this.property.equityBuiltNumbers = {};
        this.property.monthlyNumbers = {};
        this.property.insuranceNumbers = {};
        this.property.propertyTaxesNumbers = {};
        this.property.averageRentNumbers = {};
        this.property.HOANumbers = {};
        this.property.PITINumbers = {};
        this.property.totalIncomeNumbers = {};
        this.property.totalFixedExpensesNumbers = {};
        this.property.totalVariableExpensesNumbers = {};
        this.property.capExNumbers = {};
        this.property.smallRepairsNumbers = {};
        this.property.vacancyNumbers = {};
        this.property.totalVariableExpenseNumbers = {};
        this.property.totalFixedExpenseNumbers = {};
        this.property.totalExpensesNumbers = {};
        this.property.cashOnCashReturnNumbers = {};
        this.property.incomeSavedTaxesNumbers = {};
        this.property.totalReturnPercentNumbers = {};
        this.property.cashFlowNumbers = {};
        this.property.depreciationNumbers = {};
        this.property.totalEquityBuiltNumbers = {};
        this.property.totalReturnDollarsNumbers = {};
        this.property.utilitiesNumbers = {};
        this.property.propertyManagementNumbers = {};
        this.property.netOperatingIncomeNumbers = {};
        this.property.PMIAmountNumbers = {};
        this.property.balloonPaymentBalance = 0;
        this.property.capRate = {};
    };
    CustomizePropertyComponent.prototype.changeBalloonPayment = function (value) {
        this.property.balloonPayment = value;
    };
    CustomizePropertyComponent.prototype.extraIncomeModal = function () {
        $("#extraIncomeModal").modal('show');
    };
    CustomizePropertyComponent.prototype.extraFixedExpenseModal = function () {
        $("#fixedExpenseModal").modal('show');
    };
    CustomizePropertyComponent.prototype.extraVariableExpenseModal = function () {
        $("#variableExpenseModal").modal('show');
    };
    CustomizePropertyComponent.prototype.addExtraIncome = function () {
        var newIncome = {
            incomeName: "",
            incomeAmount: ""
        };
        newIncome.incomeName = $("#incomeName").val();
        newIncome.incomeAmount = $("#incomeAmount").val();
        this.extraIncomes.push(newIncome);
        this.incomeAdded = true;
        $("#incomeName").val("");
        $("#incomeAmount").val("");
        $("#extraIncomeModal").modal('hide');
    };
    CustomizePropertyComponent.prototype.addExtraFixedExpense = function () {
        var newFixedExpense = {
            expenseName: "",
            expenseAmount: ""
        };
        newFixedExpense.expenseName = $("#fixedExpenseName").val();
        newFixedExpense.expenseAmount = $("#fixedExpenseAmount").val();
        this.extraFixedExpenses.push(newFixedExpense);
        this.fixedExpenseAdded = true;
        $("#fixedExpenseName").val("");
        $("#fixedExpenseAmount").val("");
        $("#fixedExpenseModal").modal('hide');
    };
    CustomizePropertyComponent.prototype.addExtraVariableExpense = function () {
        var newVariableExpense = {
            expenseName: "",
            percent: "",
            expenseAmount: ""
        };
        newVariableExpense.expenseName = $("#variableExpenseName").val();
        newVariableExpense.percent = $("#variableExpensePercent").val();
        this.extraVariableExpenses.push(newVariableExpense);
        this.variableExpenseAdded = true;
        $("#variableExpenseName").val("");
        $("#variableExpensePercent").val("");
        $("#variableExpenseModal").modal('hide');
    };
    CustomizePropertyComponent.prototype.imageModal = function (photo) {
        this.enlargedPhoto = photo;
        $("#photoModal").modal('show');
    };
    CustomizePropertyComponent.prototype.cleanseString = function (string) {
        if (typeof string != 'string') {
            return string;
        }
        string = string.replace("$", "");
        string = string.replace(",", "");
        string = string.replace(" ", "");
        string = string.replace("%", "");
        return string;
    };
    CustomizePropertyComponent.prototype.cleanseData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.property.averageRent = _this.cleanseString(_this.property.averageRent);
            _this.property.averageRent = parseInt(_this.property.averageRent);
            if (_this.extraIncomes.length > 0) {
                _this.extraIncomes.forEach(function (income, index) {
                    income["incomeAmount"] = _this.cleanseString(income["incomeAmount"]);
                    _this.extraIncomes[index] = {
                        incomeName: income["incomeName"],
                        incomeAmount: parseInt(income["incomeAmount"])
                    };
                });
            }
            _this.property.expectedRehab = _this.cleanseString(_this.property.expectedRehab);
            _this.property.expectedRehab = parseInt(_this.property.expectedRehab);
            _this.property.propertyTaxes = _this.cleanseString(_this.property.propertyTaxes);
            _this.property.propertyTaxes = parseInt(_this.property.propertyTaxes);
            _this.property.insurance = _this.cleanseString(_this.property.insurance);
            _this.property.insurance = parseInt(_this.property.insurance);
            _this.property.HOA = _this.cleanseString(_this.property.HOA);
            _this.property.HOA = parseInt(_this.property.HOA);
            _this.property.utilities = _this.cleanseString(_this.property.utilities);
            _this.property.utilities = parseInt(_this.property.utilities);
            if (_this.extraFixedExpenses) {
                _this.extraFixedExpenses.forEach(function (expense, index) {
                    expense["expenseAmount"] = _this.cleanseString(expense["expenseAmount"]);
                    _this.extraFixedExpenses[index] = {
                        expenseName: expense["expenseName"],
                        expenseAmount: parseInt(expense["expenseAmount"])
                    };
                });
            }
            _this.property.vacancy = _this.cleanseString(_this.property.vacancy);
            _this.property.vacancy = parseFloat(_this.property.vacancy);
            _this.property.vacancy = _this.property.vacancy / 100;
            _this.property.propertyManagement = _this.cleanseString(_this.property.propertyManagement);
            _this.property.propertyManagement = parseFloat(_this.property.propertyManagement);
            _this.property.propertyManagement = _this.property.propertyManagement / 100;
            _this.property.capEx = _this.cleanseString(_this.property.capEx);
            _this.property.capEx = parseFloat(_this.property.capEx);
            _this.property.capEx = _this.property.capEx / 100;
            _this.property.smallRepairs = _this.cleanseString(_this.property.smallRepairs);
            _this.property.smallRepairs = parseFloat(_this.property.smallRepairs);
            _this.property.smallRepairs = _this.property.smallRepairs / 100;
            if (_this.extraVariableExpenses) {
                _this.extraVariableExpenses.forEach(function (expense, index) {
                    expense["percent"] = _this.cleanseString(expense["percent"]);
                    var percent = expense["percent"] / 100;
                    _this.extraVariableExpenses[index] = {
                        expenseName: expense["expenseName"],
                        percent: percent,
                        expenseAmount: ""
                    };
                });
            }
            _this.property.purchasePrice = _this.cleanseString(_this.property.purchasePrice);
            _this.property.purchasePrice = parseInt(_this.property.purchasePrice);
            _this.property.downPayment = _this.cleanseString(_this.property.downPayment);
            _this.property.downPayment = parseInt(_this.property.downPayment);
            _this.property.amortizationSchedule = parseInt(_this.property.amortizationSchedule);
            if (_this.property.balloonPayment == "Yes") {
                _this.property.balloonPaymentYear = parseInt(_this.property.balloonPaymentYear);
            }
            else {
                _this.property.balloonPaymentYear = false;
            }
            _this.property.interestRate = _this.cleanseString(_this.property.interestRate);
            _this.property.interestRate = parseFloat(_this.property.interestRate);
            _this.property.interestRate = _this.property.interestRate / 100;
            _this.property.closingCosts = _this.cleanseString(_this.property.closingCosts);
            _this.property.closingCosts = parseInt(_this.property.closingCosts);
            _this.property.PMI = _this.cleanseString(_this.property.PMI);
            _this.property.PMI = parseFloat(_this.property.PMI);
            _this.property.PMI = _this.property.PMI / 100;
            _this.property.afterRepairValue = _this.cleanseString(_this.property.afterRepairValue);
            _this.property.afterRepairValue = parseInt(_this.property.afterRepairValue);
            _this.property.inflation = _this.cleanseString(_this.property.inflation);
            _this.property.inflation = parseFloat(_this.property.inflation);
            _this.property.inflation = _this.property.inflation / 100;
            _this.property.rentAppreciation = _this.cleanseString(_this.property.rentAppreciation);
            _this.property.rentAppreciation = parseFloat(_this.property.rentAppreciation);
            _this.property.rentAppreciation = _this.property.rentAppreciation / 100;
            _this.property.propertyAppreciation = _this.cleanseString(_this.property.propertyAppreciation);
            _this.property.propertyAppreciation = parseFloat(_this.property.propertyAppreciation);
            _this.property.propertyAppreciation = _this.property.propertyAppreciation / 100;
            _this.property.buildingValue = _this.cleanseString(_this.property.buildingValue);
            _this.property.buildingValue = parseInt(_this.property.buildingValue);
            _this.property.marginalTaxRate = _this.cleanseString(_this.property.marginalTaxRate);
            _this.property.marginalTaxRate = parseFloat(_this.property.marginalTaxRate);
            _this.property.marginalTaxRate = _this.property.marginalTaxRate / 100;
            resolve();
        });
    };
    CustomizePropertyComponent.prototype.amortization = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.property.principalLoanAmount = _this.property.purchasePrice - _this.property.downPayment;
            _this.property.loanLength = _this.property.amortizationSchedule;
            _this.property.numberOfPayments = _this.property.loanLength * 12;
            var paymentsRemaining = _this.property.numberOfPayments;
            var rate = _this.property.interestRate / 12;
            if (_this.property.balloonPayment == 'Yes') {
                _this.balloonFinalPayment = _this.property.balloonPaymentYear * 12;
            }
            _this.property.propertyValue = _this.property.afterRepairValue;
            _this.property.propertyValue = parseFloat(_this.property.propertyValue).toFixed(2);
            _this.property.propertyValue = parseFloat(_this.property.propertyValue);
            _this.equityForYear = 0;
            _this.property.totalEquityBuilt = _this.property.propertyValue - _this.property.purchasePrice + _this.property.downPayment;
            var principalRemaining = _this.property.principalLoanAmount;
            var payments = [];
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var newDate = new Date();
            var month = newDate.getMonth();
            var currentMonth = months[month];
            var currentYear = newDate.getFullYear();
            _this.totalInterestPaid = 0;
            _this.totalPrincipalPaid = _this.property.downPayment;
            var numerator = rate * _this.property.principalLoanAmount * (Math.pow(1 + rate, _this.property.numberOfPayments));
            var denominator = (Math.pow(1 + rate, _this.property.numberOfPayments) - 1);
            _this.property.monthlyPayment = numerator / denominator;
            _this.property.PMIAmount = 0;
            for (var i = 1; i <= _this.property.numberOfPayments; i++) {
                if (i == 1) {
                    _this.property.previousYearValue = _this.property.afterRepairValue;
                }
                if (_this.property.PMI > 0) {
                    _this.property.PMIAmount = (_this.property.principalLoanAmount * _this.property.PMI) / 12;
                    _this.property.monthlyPayment = _this.property.monthlyPayment + (_this.property.PMIAmount);
                    _this.property.monthlyPayment = Number.parseFloat(_this.property.monthlyPayment).toFixed(2);
                    _this.property.monthlyPayment = parseFloat(_this.property.monthlyPayment);
                    var plusAppreciation = _this.property.totalEquityBuilt + (_this.property.propertyValue * (_this.property.propertyAppreciation / 12));
                    plusAppreciation = Math.round(plusAppreciation);
                    if ((plusAppreciation / _this.property.propertyValue) > 0.22) {
                        _this.property.PMI = 0;
                    }
                }
                else {
                    _this.property.monthlyPayment = numerator / denominator;
                    _this.property.monthlyPayment = Number.parseFloat(_this.property.monthlyPayment).toFixed(2);
                    _this.property.monthlyPayment = parseFloat(_this.property.monthlyPayment);
                }
                _this.interestPaid = principalRemaining * rate;
                _this.interestPaid = Number.parseFloat(_this.interestPaid).toFixed(2);
                _this.interestPaid = parseFloat(_this.interestPaid);
                _this.totalInterestPaid = _this.totalInterestPaid + _this.interestPaid;
                _this.totalInterestPaid = Number.parseFloat(_this.totalInterestPaid).toFixed(2);
                _this.totalInterestPaid = parseFloat(_this.totalInterestPaid);
                _this.principalPaid = _this.property.monthlyPayment - _this.interestPaid - _this.property.PMIAmount;
                _this.principalPaid = Number.parseFloat(_this.principalPaid).toFixed(2);
                _this.principalPaid = parseFloat(_this.principalPaid);
                _this.totalPrincipalPaid = _this.totalPrincipalPaid + _this.principalPaid;
                _this.totalPrincipalPaid = Number.parseFloat(_this.totalPrincipalPaid).toFixed(2);
                _this.totalPrincipalPaid = parseFloat(_this.totalPrincipalPaid);
                _this.equityForYear = _this.equityForYear + _this.principalPaid;
                var pmiPay = ((_this.property.PMI * _this.property.principalLoanAmount) / 12).toFixed(2);
                var pmiPaid = parseFloat(pmiPay);
                var payPeriod = {
                    month: currentMonth,
                    year: currentYear,
                    payment: _this.property.monthlyPayment,
                    interestPaid: _this.interestPaid,
                    principalPaid: _this.principalPaid,
                    pmiPaid: pmiPaid,
                    totalInterestPaid: _this.totalInterestPaid,
                    totalPrincipalPaid: _this.totalPrincipalPaid,
                    balance: principalRemaining
                };
                principalRemaining = principalRemaining - _this.principalPaid;
                principalRemaining = parseFloat(parseFloat(principalRemaining).toFixed(2));
                paymentsRemaining = paymentsRemaining - 1;
                payments.push(payPeriod);
                if (currentMonth == 'December' || i == _this.property.numberOfPayments || i == _this.balloonFinalPayment) {
                    _this.property.PMIAmount = parseFloat(_this.property.PMIAmount).toFixed(2);
                    _this.property.PMIAmount = parseFloat(_this.property.PMIAmount);
                    _this.property.PMIAmountNumbers[currentYear] = _this.property.PMIAmount;
                    _this.equityBuilt = _this.equityForYear;
                    _this.equityBuilt = parseFloat(_this.equityBuilt).toFixed(2);
                    _this.equityBuilt = parseFloat(_this.equityBuilt);
                    _this.property.equityBuiltNumbers[currentYear] = _this.equityBuilt;
                    _this.equityForYear = 0;
                    _this.property.propertyValue = _this.property.propertyValue + (_this.property.propertyValue * _this.property.propertyAppreciation);
                    _this.property.propertyValue = parseFloat(_this.property.propertyValue).toFixed(2);
                    _this.property.propertyValue = parseFloat(_this.property.propertyValue);
                    _this.property.totalEquityBuilt += _this.principalPaid + (_this.property.propertyValue - _this.property.purchasePrice);
                    _this.property.totalEquityBuilt = parseFloat(_this.property.totalEquityBuilt).toFixed(2);
                    _this.property.totalEquityBuilt = parseFloat(_this.property.totalEquityBuilt);
                    _this.property.totalEquityBuiltNumbers[currentYear] = _this.property.totalEquityBuilt;
                    _this.property.appreciation = _this.property.propertyValue - _this.property.previousYearValue;
                    _this.property.appreciation = parseFloat(_this.property.appreciation).toFixed(2);
                    _this.property.appreciation = parseFloat(_this.property.appreciation);
                    _this.property.appreciationNumbers[currentYear] = _this.property.appreciation;
                    _this.property.previousYearValue = _this.property.propertyValue;
                    _this.property.previousYearValue = parseFloat(parseFloat(_this.property.propertyValue).toFixed(2));
                    _this.property.amortizationPayments[currentYear] = payments;
                    payments = [];
                    if (i == _this.balloonFinalPayment) {
                        i = _this.property.numberOfPayments + 1;
                        _this.property.balloonPaymentBalance = principalRemaining;
                    }
                }
                if (month == 11) {
                    month = 0;
                    currentMonth = months[month];
                }
                else {
                    month++;
                    currentMonth = months[month];
                }
                if (currentMonth == "January") {
                    currentYear++;
                }
            }
            resolve();
        });
    };
    CustomizePropertyComponent.prototype.calculations = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var numbers = [];
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var newDate = new Date();
            var month = newDate.getMonth();
            var currentMonth = months[month];
            var currentYear = newDate.getFullYear();
            for (var i = 1; i <= _this.property.numberOfPayments; i++) {
                // CALCULATE INFLATION FOR EXPENSES
                // AND RENT APPRECIATION
                if (i != 1 && _this.property.inflation != 0) {
                    _this.insurance = _this.insurance + (_this.insurance * (_this.property.inflation / 12));
                    _this.insurance = parseFloat(_this.insurance).toFixed(2);
                    _this.insurance = parseFloat(_this.insurance);
                    _this.propertyTaxes = _this.propertyTaxes + (_this.propertyTaxes * (_this.property.inflation / 12));
                    _this.propertyTaxes = parseFloat(_this.propertyTaxes).toFixed(2);
                    _this.propertyTaxes = parseFloat(_this.propertyTaxes);
                    _this.utilities = _this.utilities + (_this.utilities * (_this.property.inflation / 12));
                    _this.utilities = parseFloat(_this.utilities).toFixed(2);
                    _this.utilities = parseFloat(_this.utilities);
                    _this.averageRent = _this.averageRent + (_this.averageRent * (_this.property.rentAppreciation / 12));
                    _this.averageRent = parseFloat(_this.averageRent).toFixed(2);
                    _this.averageRent = parseFloat(_this.averageRent);
                    _this.HOA = _this.HOA + (_this.HOA * (_this.property.inflation / 12));
                    _this.HOA = parseFloat(_this.HOA).toFixed(2);
                    _this.HOA = parseFloat(_this.HOA);
                    _this.totalExtraIncome = 0;
                    if (_this.incomeAdded) {
                        _this.extraIncomes.forEach(function (income, index) {
                            if (index == 0) {
                                _this.property.extraIncomesNumbers[currentYear] = {};
                            }
                            var inflatedIncome = income.incomeAmount + (income.incomeAmount * (_this.property.inflation / 12));
                            inflatedIncome = parseFloat(inflatedIncome).toFixed(2);
                            inflatedIncome = parseFloat(inflatedIncome);
                            _this.totalExtraIncome += inflatedIncome;
                            income.incomeAmount = inflatedIncome;
                            _this.property.extraIncomesNumbers[currentYear][index] = {
                                incomeName: income.incomeName,
                                incomeAmount: income.incomeAmount
                            };
                        });
                    }
                    _this.totalExtraFixedExpenses = 0;
                    if (_this.fixedExpenseAdded) {
                        _this.extraFixedExpenses.forEach(function (expense, index) {
                            if (index == 0) {
                                _this.property.extraFixedExpensesNumbers[currentYear] = {};
                            }
                            var inflatedExpense = expense.expenseAmount + (expense.expenseAmount * (_this.property.inflation / 12));
                            inflatedExpense = parseFloat(inflatedExpense).toFixed(2);
                            inflatedExpense = parseFloat(inflatedExpense);
                            _this.totalExtraFixedExpenses += inflatedExpense;
                            expense.expenseAmount = inflatedExpense;
                            _this.property.extraFixedExpensesNumbers[currentYear][index] = {
                                expenseName: expense.expenseName,
                                expenseAmount: expense.expenseAmount
                            };
                        });
                    }
                    _this.totalExtraVariableExpenses = 0;
                    if (_this.variableExpenseAdded) {
                        _this.extraVariableExpenses.forEach(function (expense, index) {
                            if (index == 0) {
                                _this.property.extraVariableExpensesNumbers[currentYear] = {};
                            }
                            var dollarAmount = expense.percent * _this.averageRent;
                            _this.inflatedVariableExpense = dollarAmount + (dollarAmount * (_this.property.inflation / 12));
                            _this.inflatedVariableExpense = Number.parseFloat(_this.inflatedVariableExpense).toFixed(2);
                            _this.inflatedVariableExpense = parseFloat(_this.inflatedVariableExpense);
                            _this.totalExtraVariableExpenses += _this.inflatedVariableExpense;
                            expense.expenseAmount = _this.inflatedVariableExpense;
                            _this.property.extraVariableExpensesNumbers[currentYear][index] = {
                                expenseName: expense.expenseName,
                                percent: expense.percent,
                                expenseAmount: expense.expenseAmount
                            };
                        });
                    }
                }
                else {
                    _this.insurance = _this.property.insurance;
                    _this.insurance = parseFloat(_this.insurance).toFixed(2);
                    _this.insurance = parseFloat(_this.insurance);
                    _this.propertyTaxes = _this.property.propertyTaxes;
                    _this.propertyTaxes = parseFloat(_this.propertyTaxes).toFixed(2);
                    _this.propertyTaxes = parseFloat(_this.propertyTaxes);
                    _this.utilities = _this.property.utilities;
                    _this.utilities = parseFloat(_this.utilities).toFixed(2);
                    _this.utilities = parseFloat(_this.utilities);
                    _this.averageRent = _this.property.averageRent;
                    _this.averageRent = parseFloat(_this.averageRent).toFixed(2);
                    _this.averageRent = parseFloat(_this.averageRent);
                    _this.HOA = _this.property.HOA;
                    _this.HOA = parseFloat(_this.HOA).toFixed(2);
                    _this.HOA = parseFloat(_this.HOA);
                    _this.totalExtraIncome = 0;
                    if (_this.incomeAdded) {
                        _this.property.extraIncomesNumbers[currentYear] = {};
                        _this.extraIncomes.forEach(function (income, index) {
                            _this.totalExtraIncome += income.incomeAmount;
                            _this.property.extraIncomesNumbers[currentYear][index] = {
                                incomeName: income.incomeName,
                                incomeAmount: income.incomeAmount
                            };
                        });
                    }
                    _this.totalExtraFixedExpenses = 0;
                    if (_this.fixedExpenseAdded) {
                        _this.property.extraFixedExpensesNumbers[currentYear] = {};
                        _this.extraFixedExpenses.forEach(function (expense, index) {
                            _this.totalExtraFixedExpenses += expense.expenseAmount;
                            _this.property.extraFixedExpensesNumbers[currentYear][index] = {
                                expenseName: expense.expenseName,
                                expenseAmount: expense.expenseAmount
                            };
                        });
                    }
                    _this.totalExtraVariableExpenses = 0;
                    if (_this.variableExpenseAdded) {
                        _this.property.extraVariableExpensesNumbers[currentYear] = {};
                        _this.extraVariableExpenses.forEach(function (expense, index) {
                            var percent = expense.percent / 100;
                            _this.dollarAmount = percent * _this.averageRent;
                            _this.dollarAmount = parseFloat(_this.dollarAmount).toFixed(2);
                            _this.dollarAmount = parseFloat(_this.dollarAmount);
                            _this.totalExtraVariableExpenses += _this.dollarAmount;
                            expense.expenseAmount = _this.dollarAmount;
                            _this.property.extraVariableExpensesNumbers[currentYear][index] = {
                                expenseName: expense.expenseName,
                                percent: expense.percent,
                                expenseAmount: expense.expenseAmount
                            };
                        });
                    }
                }
                _this.totalIncome = _this.averageRent + _this.totalExtraIncome;
                _this.totalIncome = parseFloat(_this.totalIncome).toFixed(2);
                _this.totalIncome = parseFloat(_this.totalIncome);
                _this.PITI = _this.property.monthlyPayment + _this.insurance + _this.propertyTaxes;
                _this.PITI = parseFloat(_this.PITI).toFixed(2);
                _this.PITI = parseFloat(_this.PITI);
                _this.totalFixedExpense = _this.propertyTaxes + _this.insurance + _this.HOA + _this.utilities +
                    _this.property.monthlyPayment + _this.totalExtraFixedExpenses + _this.property.PMIAmountNumbers[currentYear];
                _this.totalFixedExpense = parseFloat(parseFloat(_this.totalFixedExpense).toFixed(2));
                _this.capEx = _this.property.capEx * _this.averageRent;
                _this.capEx = Number.parseFloat(_this.capEx).toFixed(2);
                _this.capEx = parseFloat(_this.capEx);
                _this.smallRepairs = _this.property.smallRepairs * _this.averageRent;
                _this.smallRepairs = Number.parseFloat(_this.smallRepairs).toFixed(2);
                _this.smallRepairs = parseFloat(_this.smallRepairs);
                _this.vacancy = _this.property.vacancy * _this.averageRent;
                _this.vacancy = Number.parseFloat(_this.vacancy).toFixed(2);
                _this.vacancy = parseFloat(_this.vacancy);
                _this.propertyManagement = _this.property.propertyManagement * _this.averageRent;
                _this.propertyManagement = Number.parseFloat(_this.propertyManagement).toFixed(2);
                _this.propertyManagement = parseFloat(_this.propertyManagement);
                _this.totalVariableExpense = _this.vacancy +
                    _this.propertyManagement +
                    _this.capEx +
                    _this.smallRepairs +
                    _this.totalExtraVariableExpenses;
                _this.totalExpenses = _this.totalFixedExpense + _this.totalExtraFixedExpenses +
                    _this.totalVariableExpense + _this.totalExtraVariableExpenses;
                _this.totalExpenses = parseFloat(parseFloat(_this.totalExpenses).toFixed(2));
                _this.netOperatingIncome = (_this.totalIncome - _this.totalExpenses) * 12;
                _this.netOperatingIncome = parseFloat(_this.netOperatingIncome).toFixed(2);
                _this.netOperatingIncome = parseFloat(_this.netOperatingIncome);
                _this.capRate = (_this.netOperatingIncome / _this.property.propertyValue) * 100;
                _this.capRate = parseFloat(_this.capRate).toFixed(2);
                _this.capRate = parseFloat(_this.capRate);
                _this.cashOnCashReturn = (_this.netOperatingIncome / _this.property.afterRepairValue) * 100;
                _this.cashOnCashReturn = Number.parseFloat(_this.cashOnCashReturn).toFixed(2);
                _this.cashOnCashReturn = parseFloat(_this.cashOnCashReturn);
                if (i < 330) {
                    _this.property.depreciation = _this.property.buildingValue / 27.5;
                    _this.property.depreciation = parseFloat(_this.property.depreciation).toFixed(2);
                    _this.property.depreciation = parseFloat(_this.property.depreciation);
                }
                else {
                    _this.property.depreciation = 0;
                }
                _this.incomeSavedTaxes = _this.property.depreciation * _this.property.marginalTaxRate;
                _this.incomeSavedTaxes = parseFloat(_this.incomeSavedTaxes).toFixed(2);
                _this.incomeSavedTaxes = parseFloat(_this.incomeSavedTaxes);
                _this.cashFlow = _this.totalIncome - _this.totalExpenses;
                _this.cashFlow = parseFloat(_this.cashFlow).toFixed(2);
                _this.cashFlow = parseFloat(_this.cashFlow);
                _this.totalReturnDollars = _this.netOperatingIncome + _this.property.equityBuiltNumbers[currentYear] +
                    _this.incomeSavedTaxes + _this.property.appreciationNumbers[currentYear];
                _this.totalReturnDollars = parseFloat(parseFloat(_this.totalReturnDollars).toFixed(2));
                _this.totalReturnPercent = (_this.totalReturnDollars / (_this.property.downPayment + _this.property.closingCosts)) * 100;
                _this.totalReturnPercent = Number.parseFloat(_this.totalReturnPercent).toFixed(2);
                _this.totalReturnPercent = parseFloat(_this.totalReturnPercent);
                if (currentMonth == 'December' || i == _this.property.numberOfPayments) {
                    _this.property.insuranceNumbers[currentYear] = _this.insurance;
                    _this.property.propertyTaxesNumbers[currentYear] = _this.propertyTaxes;
                    _this.property.averageRentNumbers[currentYear] = _this.averageRent;
                    _this.property.HOANumbers[currentYear] = _this.HOA;
                    _this.property.PITINumbers[currentYear] = _this.PITI;
                    _this.property.totalIncomeNumbers[currentYear] = _this.totalIncome;
                    _this.property.totalFixedExpensesNumbers[currentYear] = _this.totalExtraFixedExpenses;
                    _this.property.totalVariableExpensesNumbers[currentYear] = _this.totalExtraVariableExpenses;
                    _this.property.capExNumbers[currentYear] = _this.capEx;
                    _this.property.smallRepairsNumbers[currentYear] = _this.smallRepairs;
                    _this.property.vacancyNumbers[currentYear] = _this.vacancy;
                    _this.property.totalVariableExpenseNumbers[currentYear] = _this.totalVariableExpense;
                    _this.property.totalFixedExpenseNumbers[currentYear] = _this.totalFixedExpense;
                    _this.property.totalExpensesNumbers[currentYear] = _this.totalExpenses;
                    _this.property.cashOnCashReturnNumbers[currentYear] = _this.cashOnCashReturn;
                    _this.property.incomeSavedTaxesNumbers[currentYear] = _this.incomeSavedTaxes;
                    _this.property.depreciationNumbers[currentYear] = _this.property.depreciation;
                    _this.property.cashFlowNumbers[currentYear] = _this.cashFlow;
                    _this.property.totalReturnPercentNumbers[currentYear] = _this.totalReturnPercent;
                    _this.property.totalReturnDollarsNumbers[currentYear] = _this.totalReturnDollars;
                    _this.property.utilitiesNumbers[currentYear] = _this.utilities;
                    _this.property.propertyManagementNumbers[currentYear] = _this.propertyManagement;
                    _this.property.netOperatingIncomeNumbers[currentYear] = _this.netOperatingIncome;
                    _this.property.capRate[currentYear] = _this.capRate;
                }
                if (month == 11) {
                    month = 0;
                    currentMonth = months[month];
                }
                else {
                    month++;
                    currentMonth = months[month];
                }
                if (currentMonth == "January") {
                    currentYear++;
                }
            }
            resolve();
        });
    };
    CustomizePropertyComponent.prototype.generateReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.customizePropertyService.setCustomizedProperty(this.property);
                        return [4 /*yield*/, this.cleanseData()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.amortization()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.calculations()];
                    case 3:
                        _a.sent();
                        this.customizePropertyService.setProperty(this.property);
                        this.router.navigate(['/generateReport/', this.property._id]);
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomizePropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customize-property',
            template: __webpack_require__("./src/app/customize-property/customize-property.component.html"),
            styles: [__webpack_require__("./src/app/customize-property/customize-property.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_customizeProperty_service__["a" /* CustomizePropertyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], CustomizePropertyComponent);
    return CustomizePropertyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".form-row {\n  max-width: 100%\n}\n\np.text-muted {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n    <app-sidebar></app-sidebar>\n\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <div class=\"main-panel\" *ngIf=\"currentUser\">\n        <div class=\"content-wrapper\">\n\n          <div class=\"row\">\n            <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card\">\n              <div class=\"card card-statistics\">\n                <div class=\"card-body\">\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <i class=\"fas fa-users fa-2x text-success\"></i>\n                    </div>\n                    <div class=\"float-right\">\n                      <p class=\"card-text text-right\">Connections Made</p>\n                      <div class=\"fluid-container\">\n                        <h3 class=\"card-title font-weight-bold text-right mb-0\">\n                          {{ connectionsMade }}\n                        </h3>\n                      </div>\n                    </div>\n                  </div>\n                  <p class=\"text-muted mt-3\">\n                    <i class=\"fas fa-star fa-xs\"></i>\n                    Total Connections\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card\">\n              <div class=\"card card-statistics\">\n                <div class=\"card-body\">\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <i class=\"fas fa-user-plus fa-2x text-primary\"></i>\n                    </div>\n                    <div class=\"float-right\">\n                      <p class=\"card-text text-right\">Invites Sent</p>\n                      <div class=\"fluid-container\">\n                        <h3 class=\"card-title font-weight-bold text-right mb-0\">\n                          {{ invitesSent }}\n                        </h3>\n                      </div>\n                    </div>\n                  </div>\n                  <p class=\"text-muted mt-3\">\n                    <i class=\"fas fa-plus fa-xs\"></i>\n                    Total Invites\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card\">\n              <div class=\"card card-statistics\">\n                <div class=\"card-body\">\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <i class=\"fas fa-home fa-2x text-info\"></i>\n                    </div>\n                    <div class=\"float-right\">\n                      <p class=\"card-text text-right\">Properties Bought</p>\n                      <div class=\"fluid-container\">\n                        <h3 class=\"card-title font-weight-bold text-right mb-0\">\n                          {{ propertiesBought }}\n                        </h3>\n                      </div>\n                    </div>\n                  </div>\n                  <p class=\"text-muted mt-3\">\n                    <i class=\"far fa-money-bill-alt fa-xs\"></i>\n                    Total Bought\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card\">\n              <div class=\"card card-statistics\">\n                <div class=\"card-body\">\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <i class=\"fas fa-home fa-2x text-info\"></i>\n                    </div>\n                    <div class=\"float-right\">\n                      <p class=\"card-text text-right\">Properties Sold</p>\n                      <div class=\"fluid-container\">\n                        <h3 class=\"card-title font-weight-bold text-right mb-0\">\n                          {{ propertiesSold }}\n                        </h3>\n                      </div>\n                    </div>\n                  </div>\n                  <p class=\"text-muted mt-3\">\n                    <i class=\"far fa-money-bill-alt fa-xs\"></i>\n                    Total Sold\n                  </p>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"form-row row\">\n            <div class=\"col-md-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <ngx-charts-advanced-pie-chart\n                  [view]=\"view\"\n                  class=\"chart-container\"\n                  [scheme]=\"colorScheme\"\n                  schemeType=\"ordinal\"\n                  [results]=\"profileViews\"\n                  legend=\"true\"\n                  gradient=\"false\"\n                  xAxis=\"true\"\n                  yAxis=\"true\"\n                  showXAxisLabel=\"true\"\n                  showYAxisLabel=\"true\"\n                  xAxisLabel=\"x-axis-test\"\n                  yAxisLabel=\"y-axis-test\"\n                  autoScale=\"true\"\n                  timeline=\"false\"\n                  showGridLines=\"true\">\n                </ngx-charts-advanced-pie-chart>\n              </div> <!-- card end -->\n            </div> <!-- col-md-12 end -->\n          </div> <!-- form-row row end -->\n\n          <div class=\"form-row row\">\n            <div class=\"col-md-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <ngx-charts-bar-horizontal-2d\n                  [view]=\"view\"\n                  class=\"chart-container\"\n                  [scheme]=\"colorScheme\"\n                  schemeType=\"ordinal\"\n                  [results]=\"propertiesAddedPendingSold\"\n                  legend=\"true\"\n                  gradient=\"false\"\n                  xAxis=\"true\"\n                  yAxis=\"true\"\n                  showXAxisLabel=\"true\"\n                  showYAxisLabel=\"true\"\n                  xAxisLabel=\"x-axis-test\"\n                  yAxisLabel=\"y-axis-test\"\n                  autoScale=\"true\"\n                  timeline=\"false\"\n                  showGridLines=\"true\">\n                </ngx-charts-bar-horizontal-2d>\n\n              </div> <!-- card end -->\n            </div> <!-- col-md-12 end -->\n          </div> <!-- form-row row end -->\n\n\n\n\n        </div> <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dashboard_service__ = __webpack_require__("./src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_editProperty_service__ = __webpack_require__("./src/app/services/editProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_getConnections_service__ = __webpack_require__("./src/app/services/getConnections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_profile_service__ = __webpack_require__("./src/app/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(alertService, authService, dashboardService, editPropertyService, getConnectionsService, profileService, router) {
        this.alertService = alertService;
        this.authService = authService;
        this.dashboardService = dashboardService;
        this.editPropertyService = editPropertyService;
        this.getConnectionsService = getConnectionsService;
        this.profileService = profileService;
        this.router = router;
        this.subscriptions = [];
        this.properties = [];
        this.view = [1000, 500];
        this.colorScheme = 'cool';
        this.schemeType = 'ordinal';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
        this.getDashboardData();
    };
    DashboardComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.getCurrentUserSubscription = this.authService.getLoggedInUser()
            .subscribe(function (response) {
            _this.currentUser = response.data;
        }, function (error) {
            _this.alertService.error('Error retrieving logged in user.');
        });
        this.subscriptions.push(this.getCurrentUserSubscription);
    };
    DashboardComponent.prototype.getDashboardData = function () {
        var _this = this;
        this.dashboardServiceSubscription = this.dashboardService.getData()
            .subscribe(function (response) {
            _this.profileViews = response.profileViews;
            _this.propertiesAddedPendingSold = response.propertiesAddedPendingSold;
            _this.connectionsMade = response.connectionsMade;
            _this.invitesSent = response.invitesSent;
            _this.propertiesBought = response.propertiesBought;
            _this.propertiesSold = response.propertiesSold;
        }, function (error) {
        });
        this.subscriptions.push(this.dashboardServiceSubscription);
    };
    DashboardComponent.prototype.logout = function () {
        this.authService.logout();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_5__services_editProperty_service__["a" /* EditPropertyService */],
            __WEBPACK_IMPORTED_MODULE_6__services_getConnections_service__["a" /* GetConnectionsService */],
            __WEBPACK_IMPORTED_MODULE_7__services_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/directives/alert/alert.component.css":
/***/ (function(module, exports) {

module.exports = ".alert {\n  margin: 0 auto;\n  width: 50%;\n  z-index: 10000;\n  position: fixed;\n  width: 30%;\n  top: 100px;\n  right: 0%;\n}"

/***/ }),

/***/ "./src/app/directives/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n  {{ alert.message }}\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>"

/***/ }),

/***/ "./src/app/directives/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_alert__ = __webpack_require__("./src/app/models/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert()
            .subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty array is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(function () {
                _this.removeAlert(alert);
            }, 3000);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alert',
            template: __webpack_require__("./src/app/directives/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/directives/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/directives/alert/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("./src/app/directives/alert/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid clearfix\">\n    <span class=\"text-muted d-block text-center text-sm-left d-sm-inline-block\">Copyright © 2018 <a href=\"http://www.veeya.com/\" target=\"_blank\">Veeya</a>. All rights reserved.</span>\n    <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\">Made by: Spencer Cornelia</span>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/generate-report/generate-report.component.css":
/***/ (function(module, exports) {

module.exports = "#main-panel-generate-report {\n  width: 100%;\n}\n\n.current-year-title {\n  padding: 10px;\n}\n\n.column-head {\n  border-bottom-color: black\n}\n\n.column-totals {\n  border-top: 1px solid black;\n}"

/***/ }),

/***/ "./src/app/generate-report/generate-report.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n\n  <link rel=\"shortcut icon\" href=\"images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n    <div class=\"container-fluid page-body-wrapper\">\n      <div class=\"main-panel\" id=\"main-panel-generate-report\">\n        <div class=\"content-wrapper\">\n\n          <div class=\"row\">\n            <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card\">\n              <div><button class=\"btn btn-inverse-primary btn-rounded btn-fw\" [disabled]=\"this.firstYear\" (click)=\"previousYear()\">\n                Previous Year</button>\n              </div>\n              <p class=\"current-year-title\">{{ currentYear }}</p>\n              <div><button class=\"btn btn-inverse-primary btn-rounded btn-fw\" [disabled]=\"this.lastYear\" (click)=\"nextYear()\">\n                Next Year</button>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card\">\n              <div class=\"card card-statistics\">\n                <div class=\"card-body\">\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <i class=\"mdi mdi-cube text-danger icon-lg\"></i>\n                    </div>\n                    <div class=\"float-right\">\n                      <p class=\"card-text text-right\">Cash on Cash Return</p>\n                      <div class=\"fluid-container\">\n                        <h3 class=\"card-title font-weight-bold text-right mb-0\">{{ cashOnCashReturn }}%</h3>\n                      </div>\n                    </div>\n                  </div>\n                  <p class=\"text-muted mt-3\">\n                    <i class=\"mdi mdi-alert-octagon mr-1\" aria-hidden=\"true\"></i>Cash return in {{ currentYear }}\n                  </p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card\">\n              <div class=\"card card-statistics\">\n                <div class=\"card-body\">\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <i class=\"mdi mdi-receipt text-warning icon-lg\"></i>\n                    </div>\n                    <div class=\"float-right\">\n                      <p class=\"card-text text-right\">Equity Built</p>\n                      <div class=\"fluid-container\">\n                        <h3 class=\"card-title font-weight-bold text-right mb-0\">${{ equityBuilt }}</h3>\n                      </div>\n                    </div>\n                  </div>\n                  <p class=\"text-muted mt-3\">\n                    <i class=\"mdi mdi-bookmark-outline mr-1\" aria-hidden=\"true\"></i>Equity built in {{ currentYear }}\n                  </p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card\">\n              <div class=\"card card-statistics\">\n                <div class=\"card-body\">\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <i class=\"mdi mdi-poll-box text-teal icon-lg\"></i>\n                    </div>\n                    <div class=\"float-right\">\n                      <p class=\"card-text text-right\">Net Worth Growth</p>\n                      <div class=\"fluid-container\">\n                        <h3 class=\"card-title font-weight-bold text-right mb-0\">${{ totalReturnDollars }}</h3>\n                      </div>\n                    </div>\n                  </div>\n                  <p class=\"text-muted mt-3\">\n                    <i class=\"mdi mdi-calendar mr-1\" aria-hidden=\"true\"></i>Growth in net worth in {{ currentYear }}\n                  </p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card\">\n              <div class=\"card card-statistics\">\n                <div class=\"card-body\">\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <i class=\"mdi mdi-account-location text-info icon-lg\"></i>\n                    </div>\n                    <div class=\"float-right\">\n                      <p class=\"card-text text-right\">Real Return</p>\n                      <div class=\"fluid-container\">\n                        <h3 class=\"card-title font-weight-bold text-right mb-0\">{{ totalReturnPercent }}%</h3>\n                      </div>\n                    </div>\n                  </div>\n                  <p class=\"text-muted mt-3\">\n                    <i class=\"mdi mdi-reload mr-1\" aria-hidden=\"true\"></i>Internal Rate of Return in {{ currentYear }}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 grid-margin\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title mb-4\">Monthly Numbers</h5>\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\" class=\"column-head\">Category</th>\n                          <th scope=\"col\" class=\"column-head\">Name</th>\n                          <th scope=\"col\" class=\"column-head\">Income</th>\n                          <th scope=\"col\" class=\"column-head\">Expense</th>\n                          <th scope=\"col\" class=\"column-head\">Total</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <th scope=\"row\">Income</th>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Gross Rent</td>\n                          <td class=\"text-success\">$ {{ averageRent }}</td>\n                          <td></td>\n                          <td></td>\n                        </tr>\n                        <tr *ngFor=\"let income of extraIncomes\">\n                          <th></th>\n                          <td>{{ income.incomeName }}</td>\n                          <td class=\"text-success\">$ {{ income.incomeAmount }}</td>\n                          <td></td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Total Income</td>\n                          <td></td>\n                          <td></td>\n                          <td class=\"text-success\">$ {{ totalIncome }}</td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Fixed Expenses</th>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Mortgage</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ monthlyPayment }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>PMI</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ pmiAmount }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Property Taxes</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ propertyTax }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Insurance</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ insurance }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>HOA</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ HOA }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Utilities</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ utilities }}</td>\n                          <td></td>\n                        </tr>\n                        <tr *ngFor=\"let expense of extraFixedExpenses\">\n                          <th></th>\n                          <td>{{ expense.expenseName }}</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ expense.expenseAmount  }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Total Fixed Expense</td>\n                          <td></td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ totalFixedExpense }}</td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Variable Expenses</th>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Vacancy</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ vacancy }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Property Management</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ propertyManagement }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Capital Expenditures</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ capEx }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Small Repairs</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ smallRepairs }}</td>\n                          <td></td>\n                        </tr>\n                        <tr *ngFor=\"let expense of extraVariableExpenses\">\n                          <th></th>\n                          <td>{{ expense.expenseName }}</td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ expense.expenseAmount }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <th></th>\n                          <td>Total Variable Expense</td>\n                          <td></td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ totalVariableExpense }}</td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Total Expenses</th>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td class=\"text-danger\">$ {{ totalExpenses }}</td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Net Monthly Cashflow</th>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td [ngClass]=\"{'text-success': cashFlow>0, 'text-danger': cashFlow<0}\">\n                            <em><strong>$ {{ cashFlow }}</strong></em>\n                          </td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Cap Rate</th>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td [ngClass]=\"{'text-success': cashFlow>0, 'text-danger': cashFlow<0}\">\n                            {{ capRate }} %\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n          <div class=\"row\">\n            <div class=\"col-12 grid-margin\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title mb-4\">Yearly Numbers</h5>\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\" class=\"column-head\">Category</th>\n                          <th scope=\"col\" class=\"column-head\">Total</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <th scope=\"row\">Net Operating Income</th>\n                          <td [ngClass]=\"{'text-success': netOperatingIncome>0, 'text-danger': netOperatingIncome<0}\">\n                            $ {{ netOperatingIncome }}\n                          </td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Equity Built</th>\n                          <td [ngClass]=\"{'text-success': equityBuilt>0, 'text-danger': equityBuilt<0}\">$ {{ equityBuilt }}</td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Depreciation</th>\n                          <td [ngClass]=\"{'text-success': depreciation>0, 'text-danger': depreciation<0}\">\n                            $ {{ depreciation }}\n                          </td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Income Saved from Taxes</th>\n                          <td [ngClass]=\"{'text-success': incomeSavedTaxes>0, 'text-danger': incomeSavedTaxes<0}\">\n                            $ {{ incomeSavedTaxes }}\n                          </td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Appreciation</th>\n                          <td [ngClass]=\"{'text-success': appreciation>0, 'text-danger': appreciation<0}\">\n                            $ {{ appreciation }}\n                          </td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\">Total Return in Dollars</th>\n                          <td [ngClass]=\"{'text-success': totalReturnDollars>0, 'text-danger': totalReturnDollars<0}\">\n                            $ {{ totalReturnDollars }}\n                          </td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\" class=\"column-totals\">Real Return</th>\n                          <td scope=\"row\" class=\"column-totals\"\n                            [ngClass]=\"{'text-success': totalReturnPercent>0, 'text-danger': totalReturnPercent<0}\">\n                            <em><strong>{{ totalReturnPercent }} %</strong></em>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 grid-margin\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title mb-4\">Amortization Schedule</h5>\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\" class=\"column-head\">Month</th>\n                          <th scope=\"col\" class=\"column-head\">Payment</th>\n                          <th scope=\"col\" class=\"column-head\">Principal Paid</th>\n                          <th scope=\"col\" class=\"column-head\">Interest Paid</th>\n                          <th scope=\"col\" class=\"column-head\">Balance Remaining</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let payment of amortizationPayments\">\n                          <th scope=\"row\">{{ payment.month}} {{ payment.year }}</th>\n                          <td>$ {{ payment.payment }}</td>\n                          <td>$ {{ payment.principalPaid }}</td>\n                          <td>$ {{ payment.interestPaid }}</td>\n                          <td>$ {{ payment.balance }}</td>\n                        </tr>\n                        <tr>\n                          <th scope=\"row\" class=\"column-totals\">Yearly Totals</th>\n                          <td class=\"column-totals\"><strong>$ {{ yearlyTotals[\"totalPayments\"] }}</strong></td>\n                          <td class=\"column-totals\"><strong>$ {{ yearlyTotals[\"totalPrincipal\"] }}</strong></td>\n                          <td class=\"column-totals\"><strong>$ {{ yearlyTotals[\"totalInterest\"] }}</strong></td>\n                          <td class=\"column-totals\"></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"balloonPayment&&currentYear==finalPaymentYear\">\n            <div class=\"col-12 grid-margin\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title mb-4\">Balloon Payment</h5>\n                  <div class=\"table-responsive\">\n                    $ {{ balloonPaymentBalance }}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n        <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/generate-report/generate-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customizeProperty_service__ = __webpack_require__("./src/app/services/customizeProperty.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenerateReportComponent = /** @class */ (function () {
    function GenerateReportComponent(customizePropertyService, route, router) {
        this.customizePropertyService = customizePropertyService;
        this.route = route;
        this.router = router;
        this.firstYear = true;
        this.lastYear = false;
        this.extraIncomes = [];
        this.extraFixedExpenses = [];
        this.extraVariableExpenses = [];
        this.yearlyTotals = {};
    }
    GenerateReportComponent.prototype.ngOnInit = function () {
        this.date = new Date();
        this.currentMonth = this.date.getMonth();
        this.currentYear = this.date.getFullYear();
        this.checkYear();
        if (this.customizePropertyService.customizedPropertyExists) {
            this.property = this.customizePropertyService.getCustomizedProperty();
            this.setNumbers(this.currentYear);
            this.setLastYear();
        }
        else {
            this.propertyId = this.route.snapshot.params['id'];
            this.router.navigate(['/customizeproperty/', this.propertyId]);
        }
    };
    GenerateReportComponent.prototype.checkYear = function () {
        this.firstYear = this.date.getFullYear() == this.currentYear ? true : false;
        this.lastYear = this.finalPaymentYear == this.currentYear;
    };
    GenerateReportComponent.prototype.setLastYear = function () {
        if (this.balloonPayment) {
            this.finalPaymentYear = this.currentYear + this.balloonPaymentYear;
            return;
        }
        this.finalPaymentYear = (this.property.numberOfPayments / 12) + this.currentYear;
        if (this.currentMonth == 'January') {
            this.finalPaymentYear = this.finalPaymentYear - 1;
        }
    };
    GenerateReportComponent.prototype.setNumbers = function (year) {
        var _this = this;
        this.HOA = this.property.HOANumbers[year];
        this.currentPITI = this.property.PITINumbers[year];
        this.amortizationPayments = this.property.amortizationPayments[year];
        this.appreciation = this.property.appreciationNumbers[year];
        this.averageRent = this.property.averageRentNumbers[year];
        this.balloonPayment = this.property.balloonPayment == 'Yes' ? true : false;
        this.balloonPaymentYear = this.property.balloonPaymentYear;
        this.balloonPaymentBalance = this.property.balloonPaymentBalance;
        this.capEx = this.property.capExNumbers[year];
        this.capRate = this.property.capRate[year];
        this.cashFlow = this.property.cashFlowNumbers[year];
        this.cashOnCashReturn = this.property.cashOnCashReturnNumbers[year];
        this.depreciation = this.property.depreciationNumbers[year];
        this.equityBuilt = this.property.equityBuiltNumbers[year];
        this.getExtraIncomes(this.property.extraIncomesNumbers[year]);
        this.getExtraFixedExpenses(this.property.extraFixedExpensesNumbers[year]);
        this.getExtraVariableExpenses(this.property.extraVariableExpensesNumbers[year]);
        this.incomeSavedTaxes = this.property.incomeSavedTaxesNumbers[year];
        this.insurance = this.property.insuranceNumbers[year];
        this.monthlyPayment = this.property.monthlyPayment;
        this.netOperatingIncome = this.property.netOperatingIncomeNumbers[year];
        this.pmiAmount = this.property.PMIAmountNumbers[year];
        this.propertyManagement = this.property.propertyManagementNumbers[year];
        this.propertyTax = this.property.propertyTaxesNumbers[year];
        this.smallRepairs = this.property.smallRepairsNumbers[year];
        this.totalEquityBuilt = this.property.totalEquityBuiltNumbers[year];
        this.totalExpenses = this.property.totalExpensesNumbers[year];
        this.totalFixedExpense = this.property.totalFixedExpenseNumbers[year];
        this.totalFixedExpenses = this.property.totalFixedExpensesNumbers[year];
        this.totalIncome = this.property.totalIncomeNumbers[year];
        this.totalReturnDollars = this.property.totalReturnDollarsNumbers[year];
        this.totalReturnPercent = this.property.totalReturnPercentNumbers[year];
        this.totalVariableExpense = this.property.totalVariableExpenseNumbers[year];
        this.totalVariableExpenses = this.property.totalVariableExpensesNumbers[year];
        this.utilities = this.property.utilitiesNumbers[year];
        this.vacancy = this.property.vacancyNumbers[year];
        this.yearlyTotals["totalPayments"] = 0;
        this.yearlyTotals["totalPrincipal"] = 0;
        this.yearlyTotals["totalInterest"] = 0;
        this.yearlyTotals["balance"] = 0;
        this.amortizationPayments.forEach(function (payment) {
            _this.yearlyTotals["totalPayments"] += payment.payment;
            _this.yearlyTotals["totalPrincipal"] += payment.principalPaid;
            _this.yearlyTotals["totalInterest"] += payment.interestPaid;
            _this.yearlyTotals["balance"] = payment.balance;
        });
        this.yearlyTotals["totalPrincipal"] = Number.parseFloat(this.yearlyTotals["totalPrincipal"]).toFixed(2);
        this.yearlyTotals["totalPrincipal"] = parseFloat(this.yearlyTotals["totalPrincipal"]);
        this.yearlyTotals["totalInterest"] = Number.parseFloat(this.yearlyTotals["totalInterest"]).toFixed(2);
        this.yearlyTotals["totalInterest"] = parseFloat(this.yearlyTotals["totalInterest"]);
        this.yearlyTotals["totalPayments"] = Number.parseFloat(this.yearlyTotals["totalPayments"]).toFixed(2);
        this.yearlyTotals["totalPayments"] = parseFloat(this.yearlyTotals["totalPayments"]);
    };
    GenerateReportComponent.prototype.previousYear = function () {
        this.currentYear = this.currentYear - 1;
        this.checkYear();
        this.setNumbers(this.currentYear);
    };
    GenerateReportComponent.prototype.nextYear = function () {
        this.currentYear = this.currentYear + 1;
        this.checkYear();
        this.setNumbers(this.currentYear);
    };
    GenerateReportComponent.prototype.getExtraIncomes = function (incomes) {
        for (var key in incomes) {
            this.extraIncomes.push({
                incomeName: incomes[key]["incomeName"],
                incomeAmount: incomes[key]["incomeAmount"]
            });
        }
    };
    GenerateReportComponent.prototype.getExtraFixedExpenses = function (expenses) {
        for (var key in expenses) {
            this.extraFixedExpenses.push({
                expenseName: expenses[key]["expenseName"],
                expenseAmount: expenses[key]["expenseAmount"]
            });
        }
    };
    GenerateReportComponent.prototype.getExtraVariableExpenses = function (expenses) {
        for (var key in expenses) {
            this.extraVariableExpenses.push({
                expenseName: expenses[key]["expenseName"],
                percent: expenses[key]["percent"],
                expenseAmount: expenses[key]["expenseAmount"]
            });
        }
    };
    GenerateReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-generate-report',
            template: __webpack_require__("./src/app/generate-report/generate-report.component.html"),
            styles: [__webpack_require__("./src/app/generate-report/generate-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_customizeProperty_service__["a" /* CustomizePropertyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], GenerateReportComponent);
    return GenerateReportComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.authService.redirecturl = url;
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/edit-property.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPropertyGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_viewProperty_service__ = __webpack_require__("./src/app/services/viewProperty.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPropertyGuard = /** @class */ (function () {
    function EditPropertyGuard(authService, viewPropertyService, router) {
        this.authService = authService;
        this.viewPropertyService = viewPropertyService;
        this.router = router;
    }
    EditPropertyGuard.prototype.canActivate = function (route, state) {
        var canAccess = false;
        var propertyId = route.params.id;
        var loggedIn = this.authService.loggedIn();
        var userId = this.authService.loggedInUser();
        var currentUserType = this.authService.loggedInUserType();
        var userType = route.data.userType;
        if (currentUserType != userType || !loggedIn) {
            return false;
        }
        else if (loggedIn) {
            /*
      
              this page needs work. I may not need to use this guard
              if I use /editproperty as a child component of /view-properties
      
            */
            this.isWholesaler(userId, propertyId, function (error, success) {
                if (success) {
                    canAccess = true;
                }
            });
        }
        return false;
    };
    EditPropertyGuard.prototype.isWholesaler = function (userId, propertyId, callback) {
        this.viewPropertyService.getPropertyById(propertyId)
            .subscribe(function (property) {
            if (property.wholesaler_id === userId) {
                callback(false, true);
            }
            else {
                callback(true);
            }
        }, function (error) {
            callback(true);
        });
    };
    EditPropertyGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_viewProperty_service__["a" /* ViewPropertyService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], EditPropertyGuard);
    return EditPropertyGuard;
}());



/***/ }),

/***/ "./src/app/guards/profile.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileGuard = /** @class */ (function () {
    function ProfileGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileGuard.prototype.canActivate = function (route) {
        var user_id = this.authService.loggedInUser();
        var user = route.params.id;
        if (this.authService.loggedIn()) {
            if (user_id === user) {
                return true;
            }
            else {
                this.router.navigate['/dashboard'];
                return false;
            }
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    ProfileGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], ProfileGuard);
    return ProfileGuard;
}());



/***/ }),

/***/ "./src/app/guards/register.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterGuard = /** @class */ (function () {
    function RegisterGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterGuard.prototype.canActivate = function (route) {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    RegisterGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], RegisterGuard);
    return RegisterGuard;
}());



/***/ }),

/***/ "./src/app/guards/role.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuard = /** @class */ (function () {
    function RoleGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RoleGuard.prototype.canActivate = function (route) {
        var expectedRole = route.data.userType;
        var role = this.authService.loggedInUserType();
        if (expectedRole === role && this.authService.loggedIn()) {
            return true;
        }
        else {
            return false;
        }
    };
    RoleGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/invite-user/invite-user.component.css":
/***/ (function(module, exports) {

module.exports = ".required-field:after {\n  content: \" *\";\n  color: red;\n}\n\n#submitBtn:disabled {\n  cursor: not-allowed;\n}\n\n.form-control.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n.form-control.ng-valid.ng-touched {\n  border: 1px solid green;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/invite-user/invite-user.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n          <div class=\"form-row row\">\n\n            <!-- Left Column -->\n            <div class=\"col-md-6 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Invite User to Join</h4>\n                  <form class=\"forms-sample\" #form=\"ngForm\" (submit)=\"onSubmit()\">\n\n                    <div class=\"form-group\">\n                      <label for=\"email\">Email address</label>\n                      <input type=\"email\" class=\"form-control\"\n                        id=\"email\"\n                        placeholder=\"Enter valid email\"\n                        [(ngModel)]=\"user.email\"\n                        name=\"email\"\n                        #email=\"ngModel\"\n                        pattern=\"^(([^<>()\\[\\]\\\\.,;:\\s@']+(\\.[^<>()\\[\\]\\\\.,;:\\s@']+)*)|('.+'))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\"\n                        required\n                      />\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label for=\"userType\">User Type:</label>\n                      <select [(ngModel)]=\"user.userType\" #userType=\"ngModel\" name=\"userType\" class=\"form-control\">\n                        <option value=\"Wholesaler\">Wholesaler</option>\n                        <option value=\"Investor\">Investor</option>\n                        <option value=\"Lender\">Lender</option>\n                      </select>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-success mr-2\" [disabled]=\"form.invalid\">Submit</button>\n                    <button class=\"btn btn-light\">Cancel</button>\n                  </form>\n                </div>\n              </div>\n            </div>\n            <!-- End Left Column -->\n\n\n            <!-- Right Column -->\n            <div class=\"col-md-6 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Text to help user</h4>\n\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- End Right Column -->\n\n\n        </div><!-- content-wrapper ends -->\n\n        <app-footer></app-footer>\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/invite-user/invite-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_invite_service__ = __webpack_require__("./src/app/services/invite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InviteUserComponent = /** @class */ (function () {
    function InviteUserComponent(alertService, authService, inviteService, router) {
        this.alertService = alertService;
        this.authService = authService;
        this.inviteService = inviteService;
        this.router = router;
        this.subscriptions = [];
    }
    InviteUserComponent.prototype.ngOnInit = function () {
        this.currentUserId = this.authService.loggedInUser();
        this.user = {
            email: '',
            userType: 'Wholesaler'
        };
    };
    InviteUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.inviteUserSubscription = this.inviteService.inviteUser(this.user.email, this.user.userType, this.currentUserId)
            .subscribe(function (response) {
            _this.alertService.success(response.message, true);
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            _this.alertService.error('Error inviting investor.', true);
        });
        this.subscriptions.push(this.inviteUserSubscription);
    };
    InviteUserComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    InviteUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invite-user',
            template: __webpack_require__("./src/app/invite-user/invite-user.component.html"),
            styles: [__webpack_require__("./src/app/invite-user/invite-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_invite_service__["a" /* InviteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], InviteUserComponent);
    return InviteUserComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"../assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"../assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <div class=\"container-fluid page-body-wrapper full-page-wrapper\">\n\n      <div class=\"content-wrapper d-flex align-items-center auth login-full-bg\">\n        <div class=\"row w-100\">\n          <div class=\"col-lg-4 mx-auto\">\n            <div class=\"auth-form-dark text-left p-5\">\n              <h2>Login</h2>\n              <h4 class=\"font-weight-light\">Hello! Welcome back to Veeya</h4>\n              <form class=\"pt-5\">\n                <form (submit)=\"onLoginSubmit()\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Email</label>\n                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"\"\n                          [(ngModel)]=\"loginUser.email\" name=\"email\">\n                    <i class=\"mdi mdi-account\"></i>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\"\n                          [(ngModel)]=\"loginUser.password\" name=\"password\">\n                    <i class=\"mdi mdi-eye\"></i>\n                  </div>\n                  <div class=\"mt-5\">\n                    <button type=\"submit\" class=\"btn btn-block btn-warning btn-lg font-weight-medium\">Login</button>\n                  </div>\n                  <div class=\"mt-3 text-center\">\n                    <a href=\"#\" class=\"auth-link text-white\">Forgot password?</a>\n                  </div>\n                </form>\n              </form>\n            </div>\n          </div>\n        </div>\n\n      </div> <!-- content-wrapper ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, validateService) {
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginUser = {
            email: '',
            password: ''
        };
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        if (!this.validateService.validateLogin(this.loginUser)) {
            // error message = 'Please enter valid info for all fields.'
            return false;
        }
        if (!this.validateService.validateEmail(this.loginUser.email)) {
            // error message = 'Please enter a valid login.'
            return false;
        }
        this.authService.authenticateUser(this.loginUser);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/my-profile/my-profile.component.css":
/***/ (function(module, exports) {

module.exports = ".required-field:after {\n  content: \" *\";\n  color: red;\n}\n\n#submitBtn:disabled {\n  cursor: not-allowed;\n}\n\n#updateBtn:disabled {\n  cursor: not-allowed;\n}\n\n#updatePhotoButton:disabled {\n  cursor: not-allowed;\n}\n\n.form-control.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n.form-control.ng-valid.ng-touched {\n  border: 1px solid green;\n}\n\n.button-wrapper {\n  text-align: center;\n}\n\n.button-wrapper button {\n  margin: 0 auto;\n  margin-bottom: 30px;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n\n      <div class=\"main-panel\" *ngIf=\"currentUser\">\n        <div class=\"content-wrapper\">\n          <div class=\"row user-profile\">\n            <div class=\"col-lg-4 side-left d-flex align-items-stretch\">\n              <div class=\"row\">\n                <div class=\"col-12 grid-margin\">\n                  <div class=\"card\">\n                    <div class=\"card-body avatar\">\n                      <h4 class=\"card-title\">Info</h4>\n                      <img src=\"{{ currentUser.profilePhoto }}\" alt=\"\">\n                      <p class=\"name\">{{ currentUser.firstName }} {{ currentUser.lastName }}</p>\n                      <p class=\"designation\">-  {{ currentUser.userType }}  -</p>\n                      <a class=\"d-block text-center text-dark\">{{ currentUser.email }}</a>\n                      <a class=\"d-block text-center text-dark\">{{ currentUser.phoneNumber }}</a>\n                      <a class=\"d-block text-center text-dark\">{{ currentUser.city }}, {{ currentUser.state }}</a>\n                    </div>\n                    <div class=\"card-body overview\">\n                      <ul class=\"achievements\">\n                        <li><p>{{ currentUser?.profileViews }}</p><p>Profile Views</p></li>\n                        <li><p>{{ currentUser.connections.length }}</p><p>Connections</p></li>\n                        <li><p>0</p><p>Deals</p></li>\n                      </ul>\n                      <div class=\"info-links\">\n                        <label>Personal Website</label>\n                        <a class=\"website\" target=\"_blank\" href=\"{{ currentUser.URLs.personal }}\"\n                          *ngIf=\"currentUser.URLs.personal.length>0\">\n                          <span>{{ currentUser.URLs.personal }}</span>\n                        </a>\n                        <p *ngIf=\"currentUser.URLs.personal.length==0\"><em><small>Not entered yet</small></em></p>\n                        <label>Facebook</label>\n                        <a class=\"social-link\" target=\"_blank\" href=\"{{ currentUser.URLs.facebook }}\"\n                          *ngIf=\"currentUser.URLs.facebook.length>0\">\n                          <span>{{ currentUser.URLs.facebook }}</span>\n                        </a>\n                        <p *ngIf=\"currentUser.URLs.facebook.length==0\"><em><small>Not entered yet</small></em></p>\n                        <label>LinkedIn</label>\n                        <a class=\"social-link\" target=\"_blank\" href=\"{{ currentUser.URLs.linkedIn }}\"\n                          *ngIf=\"currentUser.URLs.facebook.length>0\">\n                          <span>{{ currentUser.URLs.linkedIn }}</span>\n                        </a>\n                        <p *ngIf=\"currentUser.URLs.linkedIn.length==0\"><em><small>Not entered yet</small></em></p>\n                        <label>Bigger Pockets</label>\n                        <a class=\"social-link\" target=\"_blank\" href=\"{{ currentUser.URLs.biggerPockets }}\"\n                          *ngIf=\"currentUser.URLs.biggerPockets.length>0\">\n                          <span>{{ currentUser.URLs.biggerPockets }}</span>\n                        </a>\n                        <p *ngIf=\"currentUser.URLs.biggerPockets.length==0\"><em><small>Not entered yet</small></em></p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-8 side-right stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"wrapper d-block d-sm-flex align-items-center justify-content-between\">\n                    <h4 class=\"card-title mb-0\">Details</h4>\n                    <ul class=\"nav nav-tabs tab-solid tab-solid-primary mb-0\" id=\"myTab\" role=\"tablist\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link active\" id=\"info-tab\" data-toggle=\"tab\" href=\"#info\" role=\"tab\" aria-controls=\"info\" aria-expanded=\"true\">Info</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" id=\"avatar-tab\" data-toggle=\"tab\" href=\"#avatar\" role=\"tab\"\n                        aria-controls=\"avatar\" (click)=\"clickProfileImageTab()\">Profile Image\n                      </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" id=\"security-tab\" data-toggle=\"tab\" href=\"#security\" role=\"tab\" aria-controls=\"security\">Change Password</a>\n                      </li>\n                    </ul>\n                  </div>\n\n\n\n                  <div class=\"wrapper\">\n                    <hr>\n                    <div class=\"tab-content\" id=\"myTabContent\">\n                      <div class=\"tab-pane fade show active\" id=\"info\" role=\"tabpanel\" aria-labelledby=\"info\">\n                        <form (submit)=\"onSubmit()\" #form=\"ngForm\">\n                          <div class=\"form-group\">\n                            <button type=\"button\" class=\"btn btn-info mr-2\" (click)=\"editProfile()\">Edit</button>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"userName\">Username</label>\n                            <input type=\"text\" class=\"form-control\" id=\"userName\"\n                              [(ngModel)]=\"currentUser.userName\"\n                              name=\"userName\"\n                              [disabled]=\"isDisabled()\"\n                              #userName=\"ngModel\"\n                              minlength=\"2\"\n                              maxlength=\"30\"\n                              pattern=\"^[a-zA-Z0-9-]+\"\n                              required\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"firstName\">First Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\"\n                              [(ngModel)]=\"currentUser.firstName\"\n                              name=\"firstName\"\n                              [disabled]=\"isDisabled()\"\n                              #firstName=\"ngModel\"\n                              minlength=\"2\"\n                              maxlength=\"30\"\n                              pattern=\"^[a-zA-Z ]+$\"\n                              required\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"lastName\">Last Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"lastName\"\n                              [(ngModel)]=\"currentUser.lastName\"\n                              name=\"lastName\"\n                              [disabled]=\"isDisabled()\"\n                              #lastName=\"ngModel\"\n                              minlength=\"2\"\n                              maxlength=\"30\"\n                              pattern=\"^[a-zA-Z ]+$\"\n                              required\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"text\" class=\"form-control\" id=\"email\"\n                              [(ngModel)]=\"currentUser.email\"\n                              name=\"email\"\n                              [disabled]=\"isDisabled()\"\n                              pattern=\"^(([^<>()\\[\\]\\\\.,;:\\s@']+(\\.[^<>()\\[\\]\\\\.,;:\\s@']+)*)|('.+'))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\"\n                              required\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"phoneNumber\">Phone Number</label>\n                            <input type=\"text\" class=\"form-control\" id=\"phoneNumber\"\n                              [(ngModel)]=\"currentUser.phoneNumber\"\n                              name=\"phoneNumber\"\n                              [disabled]=\"isDisabled()\"\n                              #phoneNumber=\"ngModel\"\n                              pattern=\"^(\\+0?1\\s)?\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\"\n                              required\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"city\">City</label>\n                            <input type=\"text\" class=\"form-control\" id=\"city\"\n                              [(ngModel)]=\"currentUser.city\"\n                              name=\"city\"\n                              [disabled]=\"isDisabled()\"\n                              minlength=\"3\"\n                              maxlength=\"30\"\n                              pattern=\"^[a-zA-Z ]*$\"\n                              required\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"state\">State</label>\n                            <input type=\"text\" class=\"form-control\" id=\"state\"\n                              *ngIf=\"isDisabled()\"\n                              [(ngModel)]=\"currentUser.state\"\n                              name=\"state\"\n                              [disabled]=\"isDisabled()\"\n                            />\n                            <select *ngIf=\"!isDisabled()\" [(ngModel)]=\"currentUser.state\" #state=\"ngModel\" name=\"state\" class=\"form-control\" required>\n                              <option value=\"AL\">Alabama</option>\n                              <option value=\"AK\">Alaska</option>\n                              <option value=\"AZ\">Arizona</option>\n                              <option value=\"AR\">Arkansas</option>\n                              <option value=\"CA\">California</option>\n                              <option value=\"CO\">Colorado</option>\n                              <option value=\"CT\">Connecticut</option>\n                              <option value=\"DE\">Delaware</option>\n                              <option value=\"DC\">District Of Columbia</option>\n                              <option value=\"FL\">Florida</option>\n                              <option value=\"GA\">Georgia</option>\n                              <option value=\"HI\">Hawaii</option>\n                              <option value=\"ID\">Idaho</option>\n                              <option value=\"IL\">Illinois</option>\n                              <option value=\"IN\">Indiana</option>\n                              <option value=\"IA\">Iowa</option>\n                              <option value=\"KS\">Kansas</option>\n                              <option value=\"KY\">Kentucky</option>\n                              <option value=\"LA\">Louisiana</option>\n                              <option value=\"ME\">Maine</option>\n                              <option value=\"MD\">Maryland</option>\n                              <option value=\"MA\">Massachusetts</option>\n                              <option value=\"MI\">Michigan</option>\n                              <option value=\"MN\">Minnesota</option>\n                              <option value=\"MS\">Mississippi</option>\n                              <option value=\"MO\">Missouri</option>\n                              <option value=\"MT\">Montana</option>\n                              <option value=\"NE\">Nebraska</option>\n                              <option value=\"NV\">Nevada</option>\n                              <option value=\"NH\">New Hampshire</option>\n                              <option value=\"NJ\">New Jersey</option>\n                              <option value=\"NM\">New Mexico</option>\n                              <option value=\"NY\">New York</option>\n                              <option value=\"NC\">North Carolina</option>\n                              <option value=\"ND\">North Dakota</option>\n                              <option value=\"OH\">Ohio</option>\n                              <option value=\"OK\">Oklahoma</option>\n                              <option value=\"OR\">Oregon</option>\n                              <option value=\"PA\">Pennsylvania</option>\n                              <option value=\"RI\">Rhode Island</option>\n                              <option value=\"SC\">South Carolina</option>\n                              <option value=\"SD\">South Dakota</option>\n                              <option value=\"TN\">Tennessee</option>\n                              <option value=\"TX\">Texas</option>\n                              <option value=\"UT\">Utah</option>\n                              <option value=\"VT\">Vermont</option>\n                              <option value=\"VA\">Virginia</option>\n                              <option value=\"WA\">Washington</option>\n                              <option value=\"WV\">West Virginia</option>\n                              <option value=\"WI\">Wisconsin</option>\n                              <option value=\"WY\">Wyoming</option>\n                            </select>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"website\">Personal Website URL</label>\n                            <input type=\"text\" class=\"form-control\" id=\"personalWebsiteURL\"\n                              [(ngModel)]=\"currentUser.URLs.personal\"\n                              name=\"personal\"\n                              [disabled]=\"isDisabled()\"\n                              #personalWebsiteURL=\"ngModel\"\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"website\">Facebook URL</label>\n                            <input type=\"text\" class=\"form-control\" id=\"facebookURL\"\n                              [(ngModel)]=\"currentUser.URLs.facebook\"\n                              name=\"facebook\"\n                              [disabled]=\"isDisabled()\"\n                              #facebook=\"ngModel\"\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"website\">LinkedIn URL</label>\n                            <input type=\"text\" class=\"form-control\" id=\"linkedInURL\"\n                              [(ngModel)]=\"currentUser.URLs.linkedIn\"\n                              name=\"linkedIn\"\n                              [disabled]=\"isDisabled()\"\n                              #linkedIn=\"ngModel\"\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"website\">Bigger Pockets URL</label>\n                            <input type=\"text\" class=\"form-control\" id=\"biggerpocketsURL\"\n                              [(ngModel)]=\"currentUser.URLs.biggerPockets\"\n                              name=\"biggerPockets\"\n                              [disabled]=\"isDisabled()\"\n                              #biggerPockets=\"ngModel\"\n                            />\n                          </div>\n                          <div class=\"form-group mt-5\">\n                            <button id=\"updateBtn\" type=\"submit\" class=\"btn btn-success mr-2\" [disabled]=\"form.invalid || isDisabled()\">Update</button>\n                            <button type=\"button\" class=\"btn btn-outline-danger\" [disabled]=\"isDisabled()\"\n                              (click)=\"cancelEditInfo($event)\">Cancel\n                            </button>\n                          </div>\n                        </form>\n                      </div><!-- tab content ends -->\n\n\n                      <div class=\"tab-pane fade\" id=\"avatar\" role=\"tabpanel\" aria-labelledby=\"avatar-tab\">\n                        <div class=\"wrapper mb-5 mt-4\">\n                          <span class=\"badge badge-warning text-white\">Note : </span>\n                          <p class=\"d-inline ml-3 text-muted\">Image size is limited to not greater than 1MB .</p>\n                        </div>\n                        <form (submit)=\"uploadProfilePhoto()\">\n                          <input type=\"file\" id=\"imageInput\" class=\"dropify\" data-max-file-size=\"1mb\" data-default-file=\"/assets/images/faces/face6.jpg\" (change)=\"addProfileImage($event)\" />\n                          <div class=\"form-group mt-5\">\n                            <button id=\"updatePhotoButton\" type=\"submit\" class=\"btn btn-success mr-2\">Update</button>\n                            <button class=\"btn btn-outline-danger\" type=\"button\">Cancel</button>\n                          </div>\n                        </form>\n                      </div>\n\n                      <div class=\"tab-pane fade\" id=\"security\" role=\"tabpanel\" aria-labelledby=\"security-tab\">\n                        <form (submit)=\"updatePassword()\" #passwordForm=\"ngForm\">\n                          <div class=\"form-group\">\n                            <label for=\"change-password\">Change password</label>\n                            <input type=\"password\" class=\"form-control\" id=\"change-password\"\n                              placeholder=\"Enter you current password\"\n                              [(ngModel)]=\"password.current\"\n                              name=\"current\"\n                              #current=\"ngModel\"\n                              required\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" id=\"new-password\"\n                              placeholder=\"Enter you new password\"\n                              [(ngModel)]=\"password.new\"\n                              #new=\"ngModel\"\n                              name=\"new\"\n                              required\n                            />\n                          </div>\n                          <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" id=\"new-password-confirm\"\n                              placeholder=\"Confirm your new password\"\n                              [(ngModel)]=\"password.newConfirm\"\n                              name=\"newConfirm\"\n                              #newConfirm=\"ngModel\"\n                              required\n                            />\n                          </div>\n                          <div class=\"form-group mt-5\">\n                            <button id=\"submitBtn\" type=\"submit\" class=\"btn btn-success mr-2\"\n                              [disabled]=\"passwordForm.invalid\">Update\n                            </button>\n                            <button type=\"reset\" class=\"btn btn-outline-danger\">Cancel</button>\n                          </div>\n                        </form>\n                      </div> <!-- End of security tab -->\n\n\n                    </div> <!-- End of #myTabContent-->\n\n\n                  </div> <!-- End of #wrapper -->\n\n                </div> <!-- End of card-body -->\n\n                <div class=\"button-wrapper\">\n                  <button class=\"btn btn-inverse-danger btn-rounded btn-fw\" (click)=\"onDelete()\">Delete My Account</button>\n                </div>\n\n              </div> <!-- End of card -->\n\n            </div> <!-- End of col-lg-8 side-right stretch-card-->\n\n\n          </div> <!-- End of row user-profile -->\n\n        </div> <!-- content-wrapper ends -->\n\n\n\n        <app-footer></app-footer>\n\n\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_photos_service__ = __webpack_require__("./src/app/services/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(alertService, authService, photosService, route, userService, validateService) {
        this.alertService = alertService;
        this.authService = authService;
        this.photosService = photosService;
        this.route = route;
        this.userService = userService;
        this.validateService = validateService;
        this.subscriptions = [];
        this.defaultProfilePhoto = 'https://firebasestorage.googleapis.com/v0/b/veeya-c0185.appspot.com/o/default-profile-image%2Fdefault-profile-image.jpg?alt=media&token=cb5fd586-a920-42eb-9a82-59cc9020aaed';
        this.edit = false;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.password = {
            current: '',
            new: '',
            newConfirm: ''
        };
        this.route.data.forEach(function (resolveData) {
            _this.currentUser = resolveData.user.data;
            _this.saveCurrentUser = JSON.parse(JSON.stringify(_this.currentUser));
            _this.currentUserId = _this.authService.loggedInUser();
        });
    };
    MyProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.updateUserProfileSubscription = this.userService.updateUserProfile(this.currentUser)
            .subscribe(function (response) {
            _this.currentUser = response;
        }, function (error) {
            _this.alertService.error('Unable to update user profile.');
        });
        this.subscriptions.push(this.updateUserProfileSubscription);
    };
    MyProfileComponent.prototype.cancelEditInfo = function (event) {
        event.preventDefault();
        this.currentUser = this.saveCurrentUser;
        this.edit = !this.edit;
    };
    MyProfileComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.getCurrentUserSubscription = this.authService.getLoggedInUser()
            .subscribe(function (response) {
            _this.currentUser = response.data;
        }, function (error) {
            _this.alertService.error('Error loading user profile.');
        });
        this.subscriptions.push(this.getCurrentUserSubscription);
    };
    MyProfileComponent.prototype.isDisabled = function () {
        return !this.edit;
    };
    MyProfileComponent.prototype.editProfile = function () {
        this.edit = !this.edit;
    };
    MyProfileComponent.prototype.addProfileImage = function (event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        if (this.validateService.validatePhotoInput(fileType)) {
            this.photo = file;
            document.getElementById("updatePhotoButton").removeAttribute('disabled');
        }
        else {
            this.alertService.error('Please upload an image file.');
        }
    };
    MyProfileComponent.prototype.uploadProfilePhoto = function () {
        var _this = this;
        this.photosService.uploadProfileImagePhoto(this.photo, function (error, photo) {
            if (error) {
                _this.alertService.error('Error uploading photo. Please try again.');
            }
            else {
                var inputValue = document.getElementById('imageInput');
                inputValue.value = "";
                _this.photosService.getProfileImageUrl(photo, function (error, firebasePhoto) {
                    if (error) {
                        _this.alertService.error('Error uploading photo. Please try again.');
                        return;
                    }
                    else {
                        if (_this.currentUser.profilePhoto != _this.defaultProfilePhoto) {
                            _this.photosService.removePropertyPhoto(_this.currentUser.profilePhoto, function (error, success) {
                                if (error) {
                                    _this.alertService.error('Error uploading photo. Please try again.');
                                }
                                else {
                                    _this.updateProfilePhotoSubscription = _this.userService.updateUserProfilePhoto(firebasePhoto)
                                        .subscribe(function (response) {
                                        _this.currentUser.profilePhoto = firebasePhoto;
                                    }, function (error) {
                                        _this.alertService.error('Error uploading photo. Please try again.');
                                    });
                                }
                            });
                        }
                    }
                });
            }
        });
    };
    MyProfileComponent.prototype.updatePassword = function () {
        var _this = this;
        this.updatePasswordSubscription = this.userService.updatePassword(this.password.current, this.password.new)
            .subscribe(function (response) {
            _this.clearPasswordForm();
            _this.alertService.success('Password updated.');
        }, function (error) {
            _this.clearPasswordForm();
            _this.alertService.error('Error updating password.');
        });
        this.subscriptions.push(this.updatePasswordSubscription);
    };
    MyProfileComponent.prototype.clearPasswordForm = function () {
        this.password.current = '';
        this.password.new = '';
        this.password.newConfirm = '';
    };
    MyProfileComponent.prototype.onDelete = function () {
        var _this = this;
        var confirm = window.confirm("Are you sure you would like to delete your user? We are sad to see you go.");
        if (confirm) {
            this.deleteUserSubscription = this.userService.deleteUser(this.currentUserId)
                .subscribe(function (response) {
                _this.authService.logout();
            }, function (error) {
                _this.alertService.error('Error deleting user.', true);
            });
            this.subscriptions.push(this.deleteUserSubscription);
        }
        else {
            this.alertService.success('We are glad to see you have changed your mind and are staying with us. Time to make some money!');
        }
    };
    MyProfileComponent.prototype.clickProfileImageTab = function () {
        document.getElementById("updatePhotoButton").setAttribute('disabled', 'disabled');
    };
    MyProfileComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__("./src/app/my-profile/my-profile.component.html"),
            styles: [__webpack_require__("./src/app/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_photos_service__["a" /* PhotosService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Design for this page should be completely different\n     Blank background and modal appears in center of page\n     has links for login, signup, and home\n -->"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filterAddress.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterAddressPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterAddressPipe = /** @class */ (function () {
    function FilterAddressPipe() {
    }
    FilterAddressPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.address) {
                return item.address.toLowerCase().includes(searchText);
            }
        });
    };
    FilterAddressPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterAddress'
        })
    ], FilterAddressPipe);
    return FilterAddressPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterAfterRepairValue.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterAfterRepairValuePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterAfterRepairValuePipe = /** @class */ (function () {
    function FilterAfterRepairValuePipe() {
    }
    FilterAfterRepairValuePipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        this.searchTextNumber = parseInt(searchText);
        return items.filter(function (item) {
            if (item.afterRepairValue) {
                return parseInt(item.afterRepairValue) <= _this.searchTextNumber;
            }
        });
    };
    FilterAfterRepairValuePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterAfterRepairValue'
        })
    ], FilterAfterRepairValuePipe);
    return FilterAfterRepairValuePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterCity.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterCityPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterCityPipe = /** @class */ (function () {
    function FilterCityPipe() {
    }
    FilterCityPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.city) {
                return item.city.toLowerCase().includes(searchText);
            }
        });
    };
    FilterCityPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterCity'
        })
    ], FilterCityPipe);
    return FilterCityPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterEmail.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterEmailPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterEmailPipe = /** @class */ (function () {
    function FilterEmailPipe() {
    }
    FilterEmailPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.email) {
                return item.email.toLowerCase().includes(searchText);
            }
        });
    };
    FilterEmailPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterEmail'
        })
    ], FilterEmailPipe);
    return FilterEmailPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterFirstName.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterFirstNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterFirstNamePipe = /** @class */ (function () {
    function FilterFirstNamePipe() {
    }
    FilterFirstNamePipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.firstName) {
                return item.firstName.toLowerCase().includes(searchText);
            }
        });
    };
    FilterFirstNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterFirstName'
        })
    ], FilterFirstNamePipe);
    return FilterFirstNamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterLastName.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterLastNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterLastNamePipe = /** @class */ (function () {
    function FilterLastNamePipe() {
    }
    FilterLastNamePipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.lastName) {
                return item.lastName.toLowerCase().includes(searchText);
            }
        });
    };
    FilterLastNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterLastName'
        })
    ], FilterLastNamePipe);
    return FilterLastNamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterMaxBathrooms.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMaxBathroomsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterMaxBathroomsPipe = /** @class */ (function () {
    function FilterMaxBathroomsPipe() {
    }
    FilterMaxBathroomsPipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        if (searchText == '5+') {
            searchText = '5';
        }
        this.searchTextNumber = parseInt(searchText);
        return items.filter(function (item) {
            if (item.bathrooms) {
                if (item.bathrooms == '5+') {
                    item.bathrooms == '5';
                }
                return parseInt(item.bathrooms) <= _this.searchTextNumber;
            }
        });
    };
    FilterMaxBathroomsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterMaxBathrooms'
        })
    ], FilterMaxBathroomsPipe);
    return FilterMaxBathroomsPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterMaxBedrooms.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMaxBedroomsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterMaxBedroomsPipe = /** @class */ (function () {
    function FilterMaxBedroomsPipe() {
    }
    FilterMaxBedroomsPipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        if (searchText == '5+') {
            searchText = '5';
        }
        this.searchTextNumber = parseInt(searchText);
        return items.filter(function (item) {
            if (item.bedrooms) {
                if (item.bedrooms == '5+') {
                    item.bedrooms = '5';
                }
                return parseInt(item.bedrooms) <= _this.searchTextNumber;
            }
        });
    };
    FilterMaxBedroomsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterMaxBedrooms'
        })
    ], FilterMaxBedroomsPipe);
    return FilterMaxBedroomsPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterMaxRehabCost.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMaxRehabCostPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterMaxRehabCostPipe = /** @class */ (function () {
    function FilterMaxRehabCostPipe() {
    }
    FilterMaxRehabCostPipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        this.searchTextNumber = parseInt(searchText);
        return items.filter(function (item) {
            if (item.expectedRehab) {
                return parseInt(item.expectedRehab) <= _this.searchTextNumber;
            }
        });
    };
    FilterMaxRehabCostPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterMaxRehabCost'
        })
    ], FilterMaxRehabCostPipe);
    return FilterMaxRehabCostPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterMinBathrooms.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMinBathroomsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterMinBathroomsPipe = /** @class */ (function () {
    function FilterMinBathroomsPipe() {
    }
    FilterMinBathroomsPipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        if (searchText == '5+') {
            searchText = '5';
        }
        this.searchTextNumber = parseInt(searchText);
        return items.filter(function (item) {
            if (item.bathrooms) {
                if (item.bathrooms == '5+') {
                    item.bathrooms = '5';
                }
                return parseInt(item.bathrooms) >= _this.searchTextNumber;
            }
        });
    };
    FilterMinBathroomsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterMinBathrooms'
        })
    ], FilterMinBathroomsPipe);
    return FilterMinBathroomsPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterMinBedrooms.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMinBedroomsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterMinBedroomsPipe = /** @class */ (function () {
    function FilterMinBedroomsPipe() {
    }
    FilterMinBedroomsPipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        if (searchText == '5+') {
            searchText = '5';
        }
        this.searchTextNumber = parseInt(searchText);
        return items.filter(function (item) {
            if (item.bedrooms) {
                if (item.bedrooms == '5+') {
                    item.bedrooms = '5';
                }
                return parseInt(item.bedrooms) >= _this.searchTextNumber;
            }
        });
    };
    FilterMinBedroomsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterMinBedrooms'
        })
    ], FilterMinBedroomsPipe);
    return FilterMinBedroomsPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterMinCapRate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMinCapRatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterMinCapRatePipe = /** @class */ (function () {
    function FilterMinCapRatePipe() {
    }
    FilterMinCapRatePipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        this.searchTextNumber = parseFloat(searchText);
        return items.filter(function (item) {
            if (item.capRate) {
                return parseFloat(item.capRate) >= _this.searchTextNumber;
            }
        });
    };
    FilterMinCapRatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterMinCapRate'
        })
    ], FilterMinCapRatePipe);
    return FilterMinCapRatePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterMinGrossIncome.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMinGrossIncomePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterMinGrossIncomePipe = /** @class */ (function () {
    function FilterMinGrossIncomePipe() {
    }
    FilterMinGrossIncomePipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        this.searchTextNumber = parseInt(searchText);
        return items.filter(function (item) {
            if (item.averageRent) {
                return parseInt(item.averageRent) >= _this.searchTextNumber;
            }
        });
    };
    FilterMinGrossIncomePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterMinGrossIncome'
        })
    ], FilterMinGrossIncomePipe);
    return FilterMinGrossIncomePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterPhoneNumber.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPhoneNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPhoneNumberPipe = /** @class */ (function () {
    function FilterPhoneNumberPipe() {
    }
    FilterPhoneNumberPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.phoneNumber) {
                return item.phoneNumber.toLowerCase().includes(searchText);
            }
        });
    };
    FilterPhoneNumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterPhoneNumber'
        })
    ], FilterPhoneNumberPipe);
    return FilterPhoneNumberPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterPropertyType.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPropertyTypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPropertyTypePipe = /** @class */ (function () {
    function FilterPropertyTypePipe() {
    }
    FilterPropertyTypePipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.propertyType) {
                return item.propertyType.toLowerCase().includes(searchText);
            }
        });
    };
    FilterPropertyTypePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterPropertyType'
        })
    ], FilterPropertyTypePipe);
    return FilterPropertyTypePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterPurchasePrice.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPurchasePricePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPurchasePricePipe = /** @class */ (function () {
    function FilterPurchasePricePipe() {
    }
    FilterPurchasePricePipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.purchasePrice) {
                return item.purchasePrice.toLowerCase().includes(searchText);
            }
        });
    };
    FilterPurchasePricePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterPurchasePrice'
        })
    ], FilterPurchasePricePipe);
    return FilterPurchasePricePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterSellerFinancing.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterSellerFinancingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterSellerFinancingPipe = /** @class */ (function () {
    function FilterSellerFinancingPipe() {
    }
    FilterSellerFinancingPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.sellerFinancing) {
                return item.sellerFinancing.toLowerCase().includes(searchText);
            }
        });
    };
    FilterSellerFinancingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterSellerFinancing'
        })
    ], FilterSellerFinancingPipe);
    return FilterSellerFinancingPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterSquareFootage.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterSquareFootagePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterSquareFootagePipe = /** @class */ (function () {
    function FilterSquareFootagePipe() {
    }
    FilterSquareFootagePipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        this.searchTextNumber = parseInt(searchText);
        return items.filter(function (item) {
            if (item.squareFootage) {
                return parseInt(item.squareFootage) >= _this.searchTextNumber;
            }
        });
    };
    FilterSquareFootagePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterSquareFootage'
        })
    ], FilterSquareFootagePipe);
    return FilterSquareFootagePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterState.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterStatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterStatePipe = /** @class */ (function () {
    function FilterStatePipe() {
    }
    FilterStatePipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.state) {
                return item.state.toLowerCase().includes(searchText);
            }
        });
    };
    FilterStatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterState'
        })
    ], FilterStatePipe);
    return FilterStatePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterStatus.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterStatusPipe = /** @class */ (function () {
    function FilterStatusPipe() {
    }
    FilterStatusPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.status) {
                return item.status.toLowerCase().includes(searchText);
            }
        });
    };
    FilterStatusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterStatus'
        })
    ], FilterStatusPipe);
    return FilterStatusPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterYearBuilt.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterYearBuiltPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterYearBuiltPipe = /** @class */ (function () {
    function FilterYearBuiltPipe() {
    }
    FilterYearBuiltPipe.prototype.transform = function (items, searchText) {
        var _this = this;
        if (!items)
            return [];
        if (!searchText)
            return items;
        this.searchTextNumber = parseInt(searchText);
        return items.filter(function (item) {
            if (item.yearBuilt) {
                return parseInt(item.yearBuilt) >= _this.searchTextNumber;
            }
        });
    };
    FilterYearBuiltPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterYearBuilt'
        })
    ], FilterYearBuiltPipe);
    return FilterYearBuiltPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filterZipCode.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterZipCodePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterZipCodePipe = /** @class */ (function () {
    function FilterZipCodePipe() {
    }
    FilterZipCodePipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        return items.filter(function (item) {
            if (item.zipCode) {
                return item.zipCode.includes(searchText);
            }
        });
    };
    FilterZipCodePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterZipCode'
        })
    ], FilterZipCodePipe);
    return FilterZipCodePipe;
}());



/***/ }),

/***/ "./src/app/place-deal-ad/place-deal-ad.component.css":
/***/ (function(module, exports) {

module.exports = "#submit-button-row {\n  padding-top: 25px;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/place-deal-ad/place-deal-ad.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n      <!-- partial -->\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-md-6 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">What Deal Are You Looking For?</h4>\n                  <ul class=\"nav nav-tabs tab-solid tab-solid-primary\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link active\" id=\"tab-5-1\" data-toggle=\"tab\" href=\"#locationTab\" role=\"tab\"\n                        aria-controls=\"location-5-1\" aria-selected=\"true\">Location\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" id=\"tab-5-2\" data-toggle=\"tab\" href=\"#propertyTab\" role=\"tab\"\n                        aria-controls=\"property-5-2\" aria-selected=\"false\">Property\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" id=\"tab-5-3\" data-toggle=\"tab\" href=\"#numbersTab\" role=\"tab\" aria-controls=\"numbers-5-3\"\n                        aria-selected=\"false\">Numbers\n                      </a>\n                    </li>\n                  </ul>\n\n\n                  <div class=\"tab-content tab-content-solid\">\n\n                    <div class=\"tab-pane fade show active\" id=\"locationTab\" role=\"tabpanel\" aria-labelledby=\"location-5-1\">\n                      <div class=\"row\">\n                        <div class=\"col-md-8\">\n                          <form class=\"forms-sample\" #locationForm=\"ngForm\">\n                            <div class=\"form-group\">\n                              <label for=\"city\" class=\"required-field\">City</label>\n                              <input type=\"text\" class=\"form-control\" id=\"city\"\n                                placeholder=\"Enter City\"\n                                [(ngModel)]=\"newAd.city\"\n                                name=\"city\"\n                                #city=\"ngModel\"\n                                minlength=\"2\"\n                                maxlength=\"30\"\n                                pattern=\"^[a-zA-Z ]+$\"\n                              />\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"state\" class=\"required-field\">State</label>\n                              <select [(ngModel)]=\"newAd.state\" #state=\"ngModel\" name=\"state\" class=\"form-control\" required>\n                                <option value=\"AL\">Alabama</option>\n                                <option value=\"AK\">Alaska</option>\n                                <option value=\"AZ\">Arizona</option>\n                                <option value=\"AR\">Arkansas</option>\n                                <option value=\"CA\">California</option>\n                                <option value=\"CO\">Colorado</option>\n                                <option value=\"CT\">Connecticut</option>\n                                <option value=\"DE\">Delaware</option>\n                                <option value=\"DC\">District Of Columbia</option>\n                                <option value=\"FL\">Florida</option>\n                                <option value=\"GA\">Georgia</option>\n                                <option value=\"HI\">Hawaii</option>\n                                <option value=\"ID\">Idaho</option>\n                                <option value=\"IL\">Illinois</option>\n                                <option value=\"IN\">Indiana</option>\n                                <option value=\"IA\">Iowa</option>\n                                <option value=\"KS\">Kansas</option>\n                                <option value=\"KY\">Kentucky</option>\n                                <option value=\"LA\">Louisiana</option>\n                                <option value=\"ME\">Maine</option>\n                                <option value=\"MD\">Maryland</option>\n                                <option value=\"MA\">Massachusetts</option>\n                                <option value=\"MI\">Michigan</option>\n                                <option value=\"MN\">Minnesota</option>\n                                <option value=\"MS\">Mississippi</option>\n                                <option value=\"MO\">Missouri</option>\n                                <option value=\"MT\">Montana</option>\n                                <option value=\"NE\">Nebraska</option>\n                                <option value=\"NV\">Nevada</option>\n                                <option value=\"NH\">New Hampshire</option>\n                                <option value=\"NJ\">New Jersey</option>\n                                <option value=\"NM\">New Mexico</option>\n                                <option value=\"NY\">New York</option>\n                                <option value=\"NC\">North Carolina</option>\n                                <option value=\"ND\">North Dakota</option>\n                                <option value=\"OH\">Ohio</option>\n                                <option value=\"OK\">Oklahoma</option>\n                                <option value=\"OR\">Oregon</option>\n                                <option value=\"PA\">Pennsylvania</option>\n                                <option value=\"RI\">Rhode Island</option>\n                                <option value=\"SC\">South Carolina</option>\n                                <option value=\"SD\">South Dakota</option>\n                                <option value=\"TN\">Tennessee</option>\n                                <option value=\"TX\">Texas</option>\n                                <option value=\"UT\">Utah</option>\n                                <option value=\"VT\">Vermont</option>\n                                <option value=\"VA\">Virginia</option>\n                                <option value=\"WA\">Washington</option>\n                                <option value=\"WV\">West Virginia</option>\n                                <option value=\"WI\">Wisconsin</option>\n                                <option value=\"WY\">Wyoming</option>\n                              </select>\n                            </div>\n                            <div class=\"form-group\">\n                              <label class=\"required-field col-sm-5 col-form-label\">Zip Code</label>\n                              <input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter Zip\"\n                                [(ngModel)]=\"newAd.zipCode\"\n                                #zipCode=\"ngModel\"\n                                name=\"zipCode\"\n                                pattern=\"^[0-9]*$\"\n                                minlength=\"5\"\n                                maxlength=\"10\"\n                              />\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                    </div> <!-- End of location tab body -->\n\n\n\n                    <div class=\"tab-pane fade\" id=\"propertyTab\" role=\"tabpanel\" aria-labelledby=\"property-5-2\">\n                      <div class=\"row\">\n                        <div class=\"col-md-8\">\n                          <form class=\"forms-sample\" #propertyForm=\"ngForm\">\n                            <div class=\"form-group\">\n                              <label for=\"Purchase Price\" class=\"required-field\">Max Purchase Price</label>\n                              <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">$</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"purchasePrice\"\n                                  placeholder=\"Enter Purchase Price\"\n                                  [(ngModel)]=\"newAd.purchasePrice\"\n                                  name=\"purchasePrice\"\n                                  #purchasePrice=\"ngModel\"\n                                  minlength=\"5\"\n                                  maxlength=\"10\"\n                                  pattern=\"^[0-9]*$\"\n                                />\n                              </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"Property Type\" class=\"required-field\">Property Type</label>\n                              <select [(ngModel)]=\"newAd.propertyType\" #propertyType=\"ngModel\"\n                                name=\"propertyType\"\n                                class=\"form-control\"\n                                (change)=\"perUnitCheck()\"\n                              >\n                                <option value=\"Single Family\">Single Family Home</option>\n                                <option value=\"Condo\">Condo</option>\n                                <option value=\"Duplex\">Multifamily: Duplex</option>\n                                <option value=\"Triplex\">Multifamily: Triplex</option>\n                                <option value=\"Quadplex\">Multifamily: 4plex</option>\n                                <option value=\"Five-plus\">Commercial: 5+</option>\n                                <option value=\"Apartments\">Commercial: Apartments</option>\n                              </select>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"Bedrooms\" class=\"required-field\" *ngIf=\"!perUnit\">\n                                Bedrooms\n                              </label>\n                              <label for=\"Bedrooms\" class=\"required-field\" *ngIf=\"perUnit\">\n                                Bedrooms Per Unit\n                              </label>\n                              <select [(ngModel)]=\"newAd.bedrooms\" #bedrooms=\"ngModel\" name=\"bedrooms\" class=\"form-control\">\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5+\">5+</option>\n                              </select>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"Bathrooms\" class=\"required-field\" *ngIf=\"!perUnit\">\n                                Bathrooms\n                              </label>\n                              <label for=\"Bathrooms\" class=\"required-field\" *ngIf=\"perUnit\">\n                                Bathrooms Per Unit\n                              </label>\n                              <select [(ngModel)]=\"newAd.bathrooms\" #bathrooms=\"ngModel\" name=\"bathrooms\" class=\"form-control\">\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5+\">5+</option>\n                              </select>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"squareFootage\" class=\"required-field\">Square Footage</label>\n                              <input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter Square Footage\"\n                                [(ngModel)]=\"newAd.squareFootage\"\n                                #squareFootage=\"ngModel\"\n                                name=\"squareFootage\"\n                                minlength=\"3\"\n                                maxlength=\"6\"\n                                pattern=\"^[0-9]*$\"\n                              />\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"yearBuilt\" class=\"required-field\">Year Built</label>\n                              <input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter Year Built\"\n                                [(ngModel)]=\"newAd.yearBuilt\"\n                                #yearBuilt=\"ngModel\"\n                                name=\"yearBuilt\"\n                                minlength=\"4\"\n                                maxlength=\"4\"\n                                pattern=\"^[0-9]*$\"\n                              />\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"Seller Financing\" class=\"required-field\">Seller Financing Available?</label>\n                              <select [(ngModel)]=\"newAd.sellerFinancing\" #sellerFinancing=\"ngModel\" name=\"sellerFinancing\" class=\"form-control\">\n                                <option value=\"No\">No</option>\n                                <option value=\"Yes\">Yes</option>\n                              </select>\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                    </div> <!-- End of property tab body -->\n\n\n                    <div class=\"tab-pane fade\" id=\"numbersTab\" role=\"tabpanel\" aria-labelledby=\"numbers-5-3\">\n                      <div class=\"row\">\n                        <div class=\"col-md-8\">\n                          <form class=\"forms-sample\" #numbersForm=\"ngForm\">\n                            <div class=\"form-group\">\n                              <label for=\"Purchase Price\" class=\"required-field\">Net Operating Income</label>\n                              <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">$</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"netOperatingIncome\"\n                                  placeholder=\"Enter Net Operating Income\"\n                                  [(ngModel)]=\"newAd.netOperatingIncome\"\n                                  name=\"netOperatingIncome\"\n                                  #netOperatingIncome=\"ngModel\"\n                                  minlength=\"5\"\n                                  maxlength=\"10\"\n                                  pattern=\"^[0-9]*$\"\n                                />\n                              </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"Cap Rate\" class=\"required-field\">Cap Rate</label>\n                              <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">%</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"capRate\"\n                                  placeholder=\"Enter Cap Rate\"\n                                  [(ngModel)]=\"newAd.capRate\"\n                                  name=\"capRate\"\n                                  #capRate=\"ngModel\"\n                                  maxlength=\"3\"\n                                  pattern=\"^[0-9]\\d*(\\.\\d+)?$\"\n                                />\n                              </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"Cap Rate\" class=\"required-field\">Cash on Cash Return</label>\n                              <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">%</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"cashOnCashReturn\"\n                                  placeholder=\"Enter Cash Return %\"\n                                  [(ngModel)]=\"newAd.cashOnCashReturn\"\n                                  name=\"cashOnCashReturn\"\n                                  #cashOnCashReturn=\"ngModel\"\n                                  maxlength=\"3\"\n                                  pattern=\"^[0-9]\\d*(\\.\\d+)?$\"\n                                />\n                              </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"Cap Rate\" class=\"required-field\">Internal Rate of Return</label>\n                              <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">%</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"internalRateOfReturn\"\n                                  placeholder=\"Enter Internal Rate of Return %\"\n                                  [(ngModel)]=\"newAd.internalRateOfReturn\"\n                                  name=\"internalRateOfReturn\"\n                                  #internalRateOfReturn=\"ngModel\"\n                                  maxlength=\"3\"\n                                  pattern=\"^[0-9]\\d*(\\.\\d+)?$\"\n                                />\n                              </div>\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                    </div> <!-- End of Numbers tab body -->\n\n\n\n                  </div> <!-- End of tab content -->\n\n\n                </div> <!-- End of card body -->\n\n              </div> <!-- End of card -->\n\n            </div> <!-- End of col-md-6 grid-margin stretch-card -->\n\n\n\n            <div class=\"col-md-6 grid-margin\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Send to Wholesalers</h4>\n                  <small><em>When you submit the ad, your wholesaler connections will receive a notification and have the ability to\n                    view the deals you are looking for.  The more specific your numbers, the better your results.\n                  </em></small>\n                  <div class=\"row\" id=\"submit-button-row\">\n                    <button class=\"btn btn-inverse-primary btn-rounded btn-fw\" (click)=\"placeAd()\">Submit Ad</button>\n                  </div>\n\n                </div> <!-- End of card body -->\n\n              </div> <!-- End of card -->\n\n            </div> <!-- End of col-md-6 grid-margin -->\n\n\n\n\n          </div> <!-- End of row -->\n\n        </div>\n        <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/place-deal-ad/place-deal-ad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDealAdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dealAd_service__ = __webpack_require__("./src/app/services/dealAd.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaceDealAdComponent = /** @class */ (function () {
    function PlaceDealAdComponent(alertService, dealAdService, router, authService) {
        this.alertService = alertService;
        this.dealAdService = dealAdService;
        this.router = router;
        this.authService = authService;
        this.subscriptions = [];
        this.perUnit = false;
    }
    PlaceDealAdComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.loggedInUser();
        this.newAd = {
            investorId: this.currentUser,
            city: '',
            state: 'AL',
            zipCode: '',
            purchasePrice: '',
            bedrooms: '0',
            bathrooms: '0',
            squareFootage: '',
            yearBuilt: '',
            sellerFinancing: 'No',
            propertyType: 'Single Family',
            netOperatingIncome: '',
            capRate: '',
            cashOnCashReturn: '',
            internalRateOfReturn: ''
        };
    };
    PlaceDealAdComponent.prototype.placeAd = function () {
        var _this = this;
        var confirmed = window.confirm("Are you satisfied with your ad?");
        if (confirmed) {
            this.newAdSubscription = this.dealAdService.placeNewAd(this.newAd)
                .subscribe(function (response) {
                if (response.success) {
                    _this.alertService.success('Successfully placed ad.', true);
                    _this.router.navigate(['/dashboard']);
                }
            }, function (error) {
                _this.alertService.error('Error placing ad. Please try again.');
            });
            this.subscriptions.push(this.newAdSubscription);
        }
    };
    PlaceDealAdComponent.prototype.perUnitCheck = function () {
        if (this.newAd.propertyType == 'Single Family' || this.newAd.propertyType == 'Condo') {
            this.perUnit = false;
        }
        else {
            this.perUnit = true;
        }
    };
    PlaceDealAdComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    PlaceDealAdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-place-deal-ad',
            template: __webpack_require__("./src/app/place-deal-ad/place-deal-ad.component.html"),
            styles: [__webpack_require__("./src/app/place-deal-ad/place-deal-ad.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__services_dealAd_service__["a" /* DealAdService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], PlaceDealAdComponent);
    return PlaceDealAdComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"../../assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"../../images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n\n    <div class=\"container-fluid page-body-wrapper full-page-wrapper\">\n\n\n      <div class=\"content-wrapper d-flex align-items-center auth register-full-bg\">\n        <div class=\"row w-100\">\n          <div class=\"col-lg-4 mx-auto\">\n            <div class=\"auth-form-light text-left p-5\">\n              <h2>Register</h2>\n              <h4 class=\"font-weight-light\">Hello! let's get started</h4>\n              <form class=\"pt-4\" #form=\"ngForm\">\n                <form (ngSubmit)=\"onRegisterSubmit()\" #form=\"ngForm\">\n                  <div class=\"form-group\">\n                    <label for=\"First Name\">First Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"firstName\"\n                      [(ngModel)]=\"newUser.firstName\"\n                      name=\"firstName\"\n                      #firstName=\"ngModel\"\n                      pattern=\"^[a-zA-Z ]+$\"\n                      required\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"Last Name\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"lastName\"\n                      [(ngModel)]=\"newUser.lastName\"\n                      name=\"lastName\"\n                      #lastName=\"ngModel\"\n                      pattern=\"^[a-zA-Z ]+$\"\n                      required\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"Password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\"\n                      [(ngModel)]=\"newUser.password\"\n                      name=\"password\"\n                      #password=\"ngModel\"\n                      minlength=\"5\"\n                      maxlength=\"30\"\n                      required\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"Email\">Email</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\"\n                      [(ngModel)]=\"newUser.email\"\n                      name=\"email\"\n                      #email=\"ngModel\"\n                      pattern=\"^(([^<>()\\[\\]\\\\.,;:\\s@']+(\\.[^<>()\\[\\]\\\\.,;:\\s@']+)*)|('.+'))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\"\n                      required\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"Phone Number\">Phone Number</label>\n                    <input type=\"text\" class=\"form-control\" id=\"phoneNumber\"\n                      [(ngModel)]=\"newUser.phoneNumber\"\n                      name=\"phoneNumber\"\n                      #phoneNumber=\"ngModel\"\n                      pattern=\"^(\\+0?1\\s)?\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\"\n                      required\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"city\">City</label>\n                    <input type=\"text\" class=\"form-control\" id=\"city\"\n                      [(ngModel)]=\"newUser.city\"\n                      name=\"city\"\n                      #city=\"ngModel\"\n                      minlength=\"3\"\n                      maxlength=\"30\"\n                      pattern=\"^[a-zA-Z ]*$\"\n                      required\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"state\">State</label>\n                    <select [(ngModel)]=\"newUser.state\" #state=\"ngModel\" name=\"state\" class=\"form-control\" required>\n                        <option value=\"AL\">Alabama</option>\n                        <option value=\"AK\">Alaska</option>\n                        <option value=\"AZ\">Arizona</option>\n                        <option value=\"AR\">Arkansas</option>\n                        <option value=\"CA\">California</option>\n                        <option value=\"CO\">Colorado</option>\n                        <option value=\"CT\">Connecticut</option>\n                        <option value=\"DE\">Delaware</option>\n                        <option value=\"DC\">District Of Columbia</option>\n                        <option value=\"FL\">Florida</option>\n                        <option value=\"GA\">Georgia</option>\n                        <option value=\"HI\">Hawaii</option>\n                        <option value=\"ID\">Idaho</option>\n                        <option value=\"IL\">Illinois</option>\n                        <option value=\"IN\">Indiana</option>\n                        <option value=\"IA\">Iowa</option>\n                        <option value=\"KS\">Kansas</option>\n                        <option value=\"KY\">Kentucky</option>\n                        <option value=\"LA\">Louisiana</option>\n                        <option value=\"ME\">Maine</option>\n                        <option value=\"MD\">Maryland</option>\n                        <option value=\"MA\">Massachusetts</option>\n                        <option value=\"MI\">Michigan</option>\n                        <option value=\"MN\">Minnesota</option>\n                        <option value=\"MS\">Mississippi</option>\n                        <option value=\"MO\">Missouri</option>\n                        <option value=\"MT\">Montana</option>\n                        <option value=\"NE\">Nebraska</option>\n                        <option value=\"NV\">Nevada</option>\n                        <option value=\"NH\">New Hampshire</option>\n                        <option value=\"NJ\">New Jersey</option>\n                        <option value=\"NM\">New Mexico</option>\n                        <option value=\"NY\">New York</option>\n                        <option value=\"NC\">North Carolina</option>\n                        <option value=\"ND\">North Dakota</option>\n                        <option value=\"OH\">Ohio</option>\n                        <option value=\"OK\">Oklahoma</option>\n                        <option value=\"OR\">Oregon</option>\n                        <option value=\"PA\">Pennsylvania</option>\n                        <option value=\"RI\">Rhode Island</option>\n                        <option value=\"SC\">South Carolina</option>\n                        <option value=\"SD\">South Dakota</option>\n                        <option value=\"TN\">Tennessee</option>\n                        <option value=\"TX\">Texas</option>\n                        <option value=\"UT\">Utah</option>\n                        <option value=\"VT\">Vermont</option>\n                        <option value=\"VA\">Virginia</option>\n                        <option value=\"WA\">Washington</option>\n                        <option value=\"WV\">West Virginia</option>\n                        <option value=\"WI\">Wisconsin</option>\n                        <option value=\"WY\">Wyoming</option>\n                      </select>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"userType\">I am a...</label>\n                    <select class=\"form-control\" id=\"userType\" [(ngModel)]=\"newUser.userType\" name=\"userType\" #userType=\"ngModel\">\n                      <option value=\"Wholesaler\">Wholesaler</option>\n                      <option value=\"Investor\">Investor</option>\n                      <option value=\"Lender\">Lender</option>\n                    </select>\n                  </div>\n                  <div class=\"mt-5\">\n                    <button type=\"submit\" class=\"btn btn-block btn-primary btn-lg font-weight-medium\" [disabled]=\"form.invalid\">Register</button>\n                  </div>\n                  <div class=\"mt-2 text-center\">\n                    <a [routerLink]=\"['/login']\" class=\"auth-link text-black\">Already have an account? <span class=\"font-weight-medium\">Sign in</span></a>\n                  </div>\n                </form>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div> <!-- content-wrapper ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.newUser = {
            userType: 'Wholesaler',
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            phoneNumber: '',
            city: '',
            state: 'AL'
        };
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        // required fields
        if (!this.validateService.validateRegister(this.newUser)) {
            // need error message
            return false;
        }
        // validate email
        if (!this.validateService.validateEmail(this.newUser.email)) {
            // error message = 'Please enter a valid email.'
            return false;
        }
        /*  STILL NEED TO IMPLEMENT VALIDATING PHONE NUMBER
            if (!this.validateService.validatePhoneNumber(this.newUser.phoneNumber)) {
              // error message = 'Please enter a valid phone number.'
              return false;
            }
        */
        // register user
        this.authService.registerUser(this.newUser);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/resolvers/my-profile-resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyProfileResolve = /** @class */ (function () {
    function MyProfileResolve(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    MyProfileResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.authService.getLoggedInUser()
            .mergeMap(function (data) {
            return _this.authService.getLoggedInUser();
        });
    };
    MyProfileResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], MyProfileResolve);
    return MyProfileResolve;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".table-row {\n  width: 100%;\n  max-width: 100%;\n}\n\n.connections-search-input {\n  width: 40%;\n}\n\n.connections-search-input input {\n  width: 100%;\n}\n\n.connections-search-input input:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Search</h4>\n                  <ul class=\"nav nav-pills nav-fill\">\n                    <li class=\"nav-item\">\n                      <a [ngClass]=\"{ 'nav-link active': currentTab==='Wholesalers', 'nav-link': '!wholesalersTab' }\" (click)=\"changeTab('Wholesalers')\">Wholesalers</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a [ngClass]=\"{ 'nav-link active': currentTab==='Investors', 'nav-link': '!investorsTab' }\" (click)=\"changeTab('Investors')\">Investors</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a [ngClass]=\"{ 'nav-link active': currentTab==='Lenders', 'nav-link': '!lendersTab' }\" (click)=\"changeTab('Lenders')\">Lenders</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a [ngClass]=\"{ 'nav-link active': currentTab==='Properties', 'nav-link': '!propertiesTab' }\" (click)=\"changeTab('Properties')\">Properties</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row\" *ngIf=\"currentTab=='Wholesalers'\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr class=\"table-row\">\n                        <th>#</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Phone Number</th>\n                        <th>City</th>\n                        <th>State</th>\n                        <th>Profile</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchFirstName\" name=\"filterFirstName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchLastName\" name=\"filterLastName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchEmail\" name=\"filterEmail\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchPhoneNumber\" name=\"filterPhoneNumber\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchCity\" name=\"filterCity\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchState\" name=\"filterState\" value=\"Search\" />\n                        </td>\n                        <td></td>\n                      </tr>\n                      <tr *ngFor=\"let wholesaler of wholesalers |\n                                  filterFirstName: searchFirstName |\n                                  filterLastName: searchLastName |\n                                  filterEmail: searchEmail |\n                                  filterPhoneNumber: searchPhoneNumber |\n                                  filterCity: searchCity |\n                                  filterState: searchState;\n                                  let i=index;\">\n                        <td>{{ i + 1 }}</td>\n                        <td>{{ wholesaler.firstName }}</td>\n                        <td>{{ wholesaler.lastName }}</td>\n                        <td>{{ wholesaler.email }}</td>\n                        <td>{{ wholesaler.phoneNumber }}</td>\n                        <td>{{ wholesaler.city }}</td>\n                        <td>{{ wholesaler.state }}</td>\n                        <td><a [routerLink]=\"['/user/' + wholesaler._id]\">View</a></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"currentTab=='Investors'\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr class=\"table-row\">\n                        <th>#</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Phone Number</th>\n                        <th>City</th>\n                        <th>State</th>\n                        <th>Profile</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr class=\"table-row\">\n                        <td>\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchFirstName\" name=\"filterFirstName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchLastName\" name=\"filterLastName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchEmail\" name=\"filterEmail\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchPhoneNumber\" name=\"filterPhoneNumber\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchCity\" name=\"filterCity\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchState\" name=\"filterState\" value=\"Search\" />\n                        </td>\n                        <td></td>\n                      </tr>\n                      <tr *ngFor=\"let investor of investors |\n                                  filterFirstName: searchFirstName |\n                                  filterLastName: searchLastName |\n                                  filterEmail: searchEmail |\n                                  filterPhoneNumber: searchPhoneNumber |\n                                  filterCity: searchCity |\n                                  filterState: searchState;\n                                  let i=index;\">\n                        <td>{{ i + 1 }}</td>\n                        <td>{{ investor.firstName }}</td>\n                        <td>{{ investor.lastName }}</td>\n                        <td>{{ investor.email }}</td>\n                        <td>{{ investor.phoneNumber }}</td>\n                        <td>{{ investor.city }}</td>\n                        <td>{{ investor.state }}</td>\n                        <td><a [routerLink]=\"['/user/' + investor._id]\">View</a></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"currentTab=='Lenders'\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr class=\"table-row\">\n                        <th>#</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Phone Number</th>\n                        <th>City</th>\n                        <th>State</th>\n                        <th>Profile</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr class=\"table-row\">\n                        <td>\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchFirstName\" name=\"filterFirstName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchLastName\" name=\"filterLastName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchEmail\" name=\"filterEmail\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchPhoneNumber\" name=\"filterPhoneNumber\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchCity\" name=\"filterCity\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchState\" name=\"filterState\" value=\"Search\" />\n                        </td>\n                        <td></td>\n                      </tr>\n                      <tr *ngFor=\"let lender of lenders |\n                                  filterFirstName: searchFirstName |\n                                  filterLastName: searchLastName |\n                                  filterEmail: searchEmail |\n                                  filterPhoneNumber: searchPhoneNumber |\n                                  filterCity: searchCity |\n                                  filterState: searchState;\n                                  let i=index;\">\n                        <td>{{ i + 1 }}</td>\n                        <td>{{ lender.firstName }}</td>\n                        <td>{{ lender.lastName }}</td>\n                        <td>{{ lender.email }}</td>\n                        <td>{{ lender.phoneNumber }}</td>\n                        <td>{{ lender.city }}</td>\n                        <td>{{ lender.state }}</td>\n                        <td><a [routerLink]=\"['/user/' + lender._id]\">View</a></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"currentTab=='Properties'\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr class=\"table-row\">\n                        <th>#</th>\n                        <th>Address</th>\n                        <th>City</th>\n                        <th>State</th>\n                        <th>Zip Code</th>\n                        <th>Purchase Price</th>\n                        <th>Property Type</th>\n                        <th>Gross Rent</th>\n                        <th>Status</th>\n                        <th>View</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr class=\"table-row\">\n                        <td>\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchFirstName\" name=\"filterFirstName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchLastName\" name=\"filterLastName\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchEmail\" name=\"filterEmail\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchPhoneNumber\" name=\"filterPhoneNumber\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchCity\" name=\"filterCity\" value=\"Search\" />\n                        </td>\n                        <td class=\"connections-search-input\">\n                          <input [(ngModel)]=\"searchState\" name=\"filterState\" value=\"Search\" />\n                        </td>\n                        <td></td>\n                      </tr>\n                      <tr *ngFor=\"let property of properties |\n                                  filterFirstName: searchFirstName |\n                                  filterLastName: searchLastName |\n                                  filterEmail: searchEmail |\n                                  filterPhoneNumber: searchPhoneNumber |\n                                  filterCity: searchCity |\n                                  filterState: searchState;\n                                  let i=index;\">\n                        <td>{{ i + 1 }}</td>\n                        <td>{{ property.address }}</td>\n                        <td>{{ property.city }}</td>\n                        <td>{{ property.state }}</td>\n                        <td>{{ property.zipCode }}</td>\n                        <td>{{ property.purchasePrice }}</td>\n                        <td>{{ property.propertyType }}</td>\n                        <td>{{ property.averageRent }}</td>\n                        <td>{{ property.status }}</td>\n                        <td><a [routerLink]=\"['/view/' + property._id]\">View</a></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_getAllProperties_service__ = __webpack_require__("./src/app/services/getAllProperties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(alertService, authService, getAllPropertiesService, userService) {
        this.alertService = alertService;
        this.authService = authService;
        this.getAllPropertiesService = getAllPropertiesService;
        this.userService = userService;
        this.subscriptions = [];
        this.currentTab = "Wholesalers";
        this.lenders = [];
        this.investors = [];
        this.properties = [];
        this.users = [];
        this.wholesalers = [];
        this.investorsTab = 'false';
        this.lendersTab = 'false';
        this.propertiesTab = 'false';
        this.wholesalersTab = 'true';
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.user_id = this.authService.loggedInUser();
        this.user_type = this.authService.loggedInUserType();
        if (this.user_type === 'Investor') {
            this.getAllWholesalers();
            this.getAllLenders();
            this.getAllProperties();
        }
        else if (this.user_type === 'Wholesaler') {
            this.getAllInvestors();
            this.getAllLenders();
            this.getAllProperties();
        }
        else if (this.user_type === 'Lender') {
            this.getAllWholesalers();
            this.getAllInvestors();
            this.getAllProperties();
        }
    };
    SearchComponent.prototype.getAllWholesalers = function () {
        var _this = this;
        this.getAllWholesalersSubscription = this.userService.getAllWholesalers()
            .subscribe(function (response) {
            _this.wholesalers = response;
        }, function (error) {
            _this.alertService.error('Error retrieving wholesaler users.');
        });
        this.subscriptions.push(this.getAllWholesalersSubscription);
    };
    SearchComponent.prototype.getAllProperties = function () {
        var _this = this;
        this.getAllPropertiesSubscription = this.getAllPropertiesService.getAllProperties()
            .subscribe(function (response) {
            _this.properties = response;
        }, function (error) {
            _this.alertService.error('Error retrieving properties.');
        });
        this.subscriptions.push(this.getAllPropertiesSubscription);
    };
    SearchComponent.prototype.getAllInvestors = function () {
        var _this = this;
        this.getAllInvestorsSubscription = this.userService.getAllInvestors()
            .subscribe(function (response) {
            _this.investors = response;
        }, function (error) {
            _this.alertService.error('Error retrieving investor users.');
        });
        this.subscriptions.push(this.getAllInvestorsSubscription);
    };
    SearchComponent.prototype.getAllLenders = function () {
        var _this = this;
        this.getAllLendersSubscription = this.userService.getAllLenders()
            .subscribe(function (response) {
            _this.lenders = response;
        }, function (error) {
            _this.alertService.error('Error retrieving lender users.');
        });
        this.subscriptions.push(this.getAllLendersSubscription);
    };
    SearchComponent.prototype.changeTab = function (tab) {
        if (this.currentTab === "Wholesalers") {
            this.wholesalersTab = 'false';
            this.currentTab = tab;
        }
        else if (this.currentTab === "Investors") {
            this.investorsTab = 'false';
            this.currentTab = tab;
        }
        else if (this.currentTab === "Lenders") {
            this.lendersTab = 'false';
            this.currentTab = tab;
        }
        else {
            this.propertiesTab = 'false';
            this.currentTab = tab;
        }
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_getAllProperties_service__["a" /* GetAllPropertiesService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/addConnection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddConnectionService = /** @class */ (function () {
    function AddConnectionService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000';
    }
    AddConnectionService.prototype.addConnection = function (userId, connectionUserId) {
        var URI = this.serverApi + "/user/addconnection";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({
            currentUserId: userId,
            connectionUserId: connectionUserId
        });
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    AddConnectionService.prototype.acceptConnection = function (userId, connectionUserId) {
        var URI = this.serverApi + "/user/acceptconnection";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({
            userId: userId,
            connectionUserId: connectionUserId
        });
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    AddConnectionService.prototype.denyConnection = function (userId, connectionUserId) {
        var URI = this.serverApi + "/user/denyconnection";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({
            userId: userId,
            connectionUserId: connectionUserId
        });
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    AddConnectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AddConnectionService);
    return AddConnectionService;
}());



/***/ }),

/***/ "./src/app/services/addProperty.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPropertyService = /** @class */ (function () {
    function AddPropertyService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000/properties';
    }
    AddPropertyService.prototype.addProperty = function (property) {
        var URI = this.serverApi + "/addproperty";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            _id: property._id,
            wholesaler_id: property.wholesaler_id,
            address: property.address,
            city: property.city,
            state: property.state,
            zipCode: property.zipCode,
            purchasePrice: property.purchasePrice,
            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,
            expectedRehab: property.expectedRehab,
            afterRepairValue: property.afterRepairValue,
            HOA: property.HOA,
            capRate: property.capRate,
            propertyTaxes: property.propertyTaxes,
            utilities: property.utilities,
            averageRent: property.averageRent,
            squareFootage: property.squareFootage,
            propertyType: property.propertyType,
            yearBuilt: property.yearBuilt,
            sellerFinancing: property.sellerFinancing,
            status: property.status,
            insurance: property.insurance,
            comps: property.comps,
            photos: property.photos
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    AddPropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AddPropertyService);
    return AddPropertyService;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alert__ = __webpack_require__("./src/app/models/alert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuctionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuctionService = /** @class */ (function () {
    function AuctionService(http) {
        this.http = http;
        this.bids = [];
        this.property = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* ReplaySubject */](1);
        this.propertyExists = false;
        this.api = 'https://api.getveeya.com:3000';
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__["connect"](this.api);
    }
    AuctionService.prototype.ngOnInit = function () {
    };
    AuctionService.prototype.setProperty = function (property) {
        this.property.next(property);
        this.propertyExists = true;
    };
    AuctionService.prototype.getProperty = function () {
        return this.property.asObservable();
    };
    AuctionService.prototype.getInitialBids = function (propertyId) {
        var _this = this;
        var URI = "https://api.getveeya.com:3000/bids/" + propertyId;
        return this.http.get(URI)
            .map(function (res) {
            return res.json();
        })
            .map(function (res) {
            _this.bids = res.data.bids;
            _this.deadline = res.data.deadline;
            return res;
        });
    };
    AuctionService.prototype.getBidData = function () {
        return this.bids;
    };
    AuctionService.prototype.getDeadline = function () {
        return this.deadline;
    };
    AuctionService.prototype.getBids = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('new-bid', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    AuctionService.prototype.sendBid = function (propertyId, user, amount) {
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var newMinutes;
        if (minutes < 10) {
            newMinutes = minutes.toString();
            newMinutes = '0' + minutes;
        }
        else {
            newMinutes = minutes;
        }
        var time;
        if (hours > 12) {
            time = (hours - 12) + ':' + newMinutes + 'pm';
        }
        else if (hours == 12) {
            time = hours + ':' + newMinutes + 'pm';
        }
        else {
            time = hours + ':' + newMinutes + 'am';
        }
        var month = new Date().getMonth() + 1;
        var day = new Date().getDate();
        var year = new Date().getFullYear();
        var date = month + '-' + day + '-' + year;
        var bid = {
            propertyId: propertyId,
            amount: amount,
            bidPlacedTime: time,
            bidPlacedDate: date,
            profilePhoto: user.profilePhoto,
            firstName: user.firstName,
            lastName: user.lastName,
            city: user.city,
            state: user.state,
            userId: user._id
        };
        this.socket.emit('add-bid', bid);
    };
    AuctionService.prototype.openAuction = function (propertyId, deadline) {
        this.bids = [];
        var URI = "https://api.getveeya.com:3000/bids/openauction";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            propertyId: propertyId,
            deadline: deadline
        });
        headers.append('Content-Type', 'application/json');
        return this.http.put(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    AuctionService.prototype.endAuction = function (propertyId) {
        var today = new Date();
        var currentMonth = today.getMonth();
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var month = months[currentMonth];
        var day = today.getDate();
        var currentYear = today.getFullYear();
        var hour = today.getHours();
        var minutes = today.getMinutes();
        var newDeadline = month + ' ' + day + ', ' + currentYear + ' ' +
            hour + ':' + minutes + ':00';
        var URI = "https://api.getveeya.com:3000/bids/endauction";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            propertyId: propertyId,
            deadline: newDeadline
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    AuctionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuctionService);
    return AuctionService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.redirecturl = '';
    }
    AuthService.prototype.registerUser = function (user) {
        var _this = this;
        var route = "https://api.getveeya.com:3000/register";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(route, user, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        })
            .subscribe(function (response) {
            _this.currentUser = response.data;
            _this.storeUserData(response.token, response.data._id, response.data.userType);
            _this.router.navigate(['/dashboard']);
        });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var _this = this;
        var route = "https://api.getveeya.com:3000/login";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(route, user, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        })
            .subscribe(function (response) {
            _this.currentUser = response.data;
            _this.storeUserData(response.token, response.user._id, response.user.userType);
            _this.router.navigate(['/dashboard']);
        });
    };
    AuthService.prototype.getCurrentUser = function () {
        var _this = this;
        if (this.currentUser) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.currentUser);
        }
        else if (this.observable) {
            return this.observable;
        }
        else {
            var userId = this.loggedInUser();
            var route = "https://api.getveeya.com:3000/user/" + userId;
            this.observable = this.http.get(route)
                .map(function (response) {
                _this.observable = null;
                _this.currentUser = response.json();
                _this.currentUser = _this.currentUser.data;
                return _this.currentUser;
            })
                .catch(function (error) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
            })
                .share();
            return this.observable;
        }
    };
    AuthService.prototype.getLoggedInUser = function () {
        var userId = this.loggedInUser();
        var route = "https://api.getveeya.com:3000/user/" + userId;
        return this.http.get(route)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    /* GETTERS */
    AuthService.prototype.investorUser = function () {
        var userType = this.loggedInUserType();
        return userType === 'Investor' ? true : false;
    };
    AuthService.prototype.wholesalerUser = function () {
        var userType = this.loggedInUserType();
        return userType === 'Wholesaler' ? true : false;
    };
    AuthService.prototype.loadToken = function () {
        var token = this.loggedInUserToken();
        this.authToken = token;
    };
    AuthService.prototype.loggedInUser = function () {
        return localStorage.getItem('user_id');
    };
    AuthService.prototype.loggedInUserType = function () {
        return localStorage.getItem('user_type');
    };
    AuthService.prototype.loggedInUserToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.getRedirectUrl = function () {
        return this.redirecturl;
    };
    /* SETTERS */
    AuthService.prototype.setRedirectUrl = function (url) {
        this.redirecturl = url;
    };
    AuthService.prototype.storeUserData = function (token, user_id, user_type) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user_id', user_id);
        localStorage.setItem('user_type', user_type);
        this.authToken = token;
        this.user_id = user_id;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user_id = null;
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/customizeProperty.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizePropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomizePropertyService = /** @class */ (function () {
    function CustomizePropertyService() {
        this.property = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* ReplaySubject */](1);
        this.customizedPropertyExists = false;
    }
    CustomizePropertyService.prototype.setProperty = function (property) {
        this.property.next(property);
    };
    CustomizePropertyService.prototype.getProperty = function () {
        return this.property.asObservable();
    };
    CustomizePropertyService.prototype.setCustomizedProperty = function (property) {
        this.customizedProperty = property;
        this.customizedPropertyExists = true;
    };
    CustomizePropertyService.prototype.getCustomizedProperty = function () {
        return this.customizedProperty;
    };
    CustomizePropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CustomizePropertyService);
    return CustomizePropertyService;
}());



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000';
    }
    DashboardService.prototype.getData = function () {
        var userId = this.authService.loggedInUser();
        var route = this.serverApi + ("/dashboard/" + userId);
        return this.http.get(route)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/dealAd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealAdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DealAdService = /** @class */ (function () {
    function DealAdService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000';
    }
    DealAdService.prototype.placeNewAd = function (newAd) {
        var URI = this.serverApi + "/ads/placeNewAd";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({
            newAd: newAd
        });
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res; });
    };
    DealAdService.prototype.getDealAdsForInvestor = function (userId) {
        var URI = this.serverApi + '/ads/getDealAdsForInvestor';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({
            userId: userId
        });
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    DealAdService.prototype.getAllAds = function () {
        var URI = this.serverApi + '/ads/getAllAds';
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    DealAdService.prototype.deleteAd = function (id) {
        var URI = this.serverApi + ("/ads/deleteAd/" + id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res; });
    };
    DealAdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], DealAdService);
    return DealAdService;
}());



/***/ }),

/***/ "./src/app/services/deleteProperty.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletePropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeletePropertyService = /** @class */ (function () {
    function DeletePropertyService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000';
    }
    DeletePropertyService.prototype.deleteProperty = function (propertyId, userId) {
        var URI = this.serverApi + "/properties/" + propertyId + "/" + userId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DeletePropertyService.prototype.removePhotos = function (photos) {
        photos.forEach(function (photo) {
            var deleteReference = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().refFromURL(photo);
            deleteReference.delete()
                .then(function () {
                // File deleted successfully
            })
                .catch(function (error) {
                console.error(error);
            });
        });
    };
    DeletePropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], DeletePropertyService);
    return DeletePropertyService;
}());



/***/ }),

/***/ "./src/app/services/editProperty.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPropertyService = /** @class */ (function () {
    function EditPropertyService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000/properties';
    }
    EditPropertyService.prototype.getPropertyByID = function (id) {
        var URI = this.serverApi + '/editproperty/' + id;
        return this.http.get(URI)
            .map(function (res) {
            return JSON.parse(res._body);
        });
    };
    EditPropertyService.prototype.editProperty = function (property) {
        var URI = this.serverApi + "/editproperty/" + property._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            _id: property._id,
            wholesaler_id: property.wholesaler_id,
            address: property.address,
            city: property.city,
            state: property.state,
            zipCode: property.zipCode,
            purchasePrice: property.purchasePrice,
            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,
            expectedRehab: property.expectedRehab,
            HOA: property.HOA,
            propertyTaxes: property.propertyTaxes,
            utilities: property.utilities,
            afterRepairValue: property.afterRepairValue,
            averageRent: property.averageRent,
            squareFootage: property.squareFootage,
            propertyType: property.propertyType,
            yearBuilt: property.yearBuilt,
            status: property.status,
            sellerFinancing: property.sellerFinancing,
            insurance: property.insurance,
            comps: property.comps,
            photos: property.photos
        });
        headers.append('Content-Type', 'application/json');
        return this.http.put(URI, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    EditPropertyService.prototype.starProperty = function (investorId, property) {
        var URI = this.serverApi + '/starproperty';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            investorId: investorId,
            property: property
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    EditPropertyService.prototype.unStarProperty = function (investorId, propertyId) {
        var URI = this.serverApi + '/unstarproperty';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            investorId: investorId,
            propertyId: propertyId
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    EditPropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], EditPropertyService);
    return EditPropertyService;
}());



/***/ }),

/***/ "./src/app/services/getAllProperties.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllPropertiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllPropertiesService = /** @class */ (function () {
    function GetAllPropertiesService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000';
    }
    GetAllPropertiesService.prototype.getAllProperties = function () {
        var URI = this.serverApi + "/properties";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    GetAllPropertiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GetAllPropertiesService);
    return GetAllPropertiesService;
}());



/***/ }),

/***/ "./src/app/services/getConnections.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetConnectionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetConnectionsService = /** @class */ (function () {
    function GetConnectionsService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.pendingConnections = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* ReplaySubject */](1);
        this.numberOfPendingConnections = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* ReplaySubject */](1);
        this.serverApi = 'https://api.getveeya.com:3000';
    }
    GetConnectionsService.prototype.getConnectionsForUser = function (userId) {
        var URI = this.serverApi + ("/user/connections/" + userId);
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    GetConnectionsService.prototype.getPendingConnections = function () {
        var _this = this;
        var userId = this.authService.loggedInUser();
        var URI = this.serverApi + ("/user/pendingconnections/" + userId);
        return this.http.get(URI)
            .map(function (response) {
            var responseJSON = response.json();
            _this.setAllPendingConnections(responseJSON.data);
            _this.increasePendingConnections(responseJSON.data.length);
            return;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    GetConnectionsService.prototype.getAllPendingConnections = function () {
        return this.pendingConnections.asObservable();
    };
    GetConnectionsService.prototype.setAllPendingConnections = function (connections) {
        this.pendingConnections.next(connections);
    };
    GetConnectionsService.prototype.getNumberOfPendingConnections = function () {
        return this.numberOfPendingConnections.asObservable();
    };
    GetConnectionsService.prototype.increasePendingConnections = function (newNumber) {
        this.numberOfPendingConnections.next(newNumber);
    };
    GetConnectionsService.prototype.reducePendingConnections = function (newNumber) {
        this.numberOfPendingConnections.next(newNumber);
    };
    GetConnectionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], GetConnectionsService);
    return GetConnectionsService;
}());



/***/ }),

/***/ "./src/app/services/getUserProperties.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUserPropertiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetUserPropertiesService = /** @class */ (function () {
    function GetUserPropertiesService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000/properties';
    }
    GetUserPropertiesService.prototype.getWholesalerUserProperties = function (wholesalerID) {
        var URI = this.serverApi + "/wholesaler/" + wholesalerID;
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    GetUserPropertiesService.prototype.getInvestorUserProperties = function (investorID) {
        var URI = this.serverApi + "/investor/" + investorID;
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    GetUserPropertiesService.prototype.getLenderUserProperties = function (lenderID) {
        var URI = this.serverApi + "/lender" + lenderID;
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    GetUserPropertiesService.prototype.getStarredProperties = function (investorId) {
        var URI = this.serverApi + '/starproperties/' + investorId;
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    GetUserPropertiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GetUserPropertiesService);
    return GetUserPropertiesService;
}());



/***/ }),

/***/ "./src/app/services/invite.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InviteService = /** @class */ (function () {
    function InviteService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000/';
    }
    InviteService.prototype.inviteUser = function (email, userType, currentUserId) {
        var URI = this.serverApi + "user/inviteuser";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            _id: 0,
            email: email,
            userType: userType,
            currentUserId: currentUserId
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    InviteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], InviteService);
    return InviteService;
}());



/***/ }),

/***/ "./src/app/services/photos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhotosService = /** @class */ (function () {
    function PhotosService(authService, storage) {
        this.authService = authService;
        this.storage = storage;
        this.error = false;
        this.formData = new FormData();
        this.photos = [];
        this.photoURLs = [];
        this.propertyPhotosFolder = 'property-photos';
        this.profileImageFolder = 'profile-images';
        this.user_id = this.authService.loggedInUser();
    }
    PhotosService.prototype.uploadPropertyPhotos = function (photos, callback) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var _loop_1 = function (i) {
            var path = this_1.propertyPhotosFolder + "/" + this_1.user_id + "/" + photos[i].name;
            var imageRef = storageRef.child(path);
            imageRef.put(photos[i])
                .then(function (snapshot) {
                if (snapshot.state !== 'success') {
                    _this.error = true;
                }
                else {
                    _this.photoURLs.push(path);
                    if (i == (photos.length - 1)) {
                        if (!_this.error) {
                            callback(false, _this.photoURLs);
                        }
                        else {
                            callback(true);
                        }
                    }
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < photos.length; i++) {
            _loop_1(i);
        }
    };
    PhotosService.prototype.uploadProfileImagePhoto = function (photo, callback) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var path = this.profileImageFolder + "/" + this.user_id + "/" + photo.name;
        var imageRef = storageRef.child(path);
        imageRef.put(photo)
            .then(function (snapshot) {
            if (snapshot.state !== 'success') {
                callback(true);
            }
            else {
                callback(false, path);
            }
        });
    };
    PhotosService.prototype.removePropertyPhoto = function (photoName, callback) {
        var path = this.propertyPhotosFolder + "/" + this.user_id + "/" + photoName;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref(path);
        storageRef.delete()
            .then(function () {
            callback(false);
        })
            .catch(function (error) {
            callback(true);
        });
    };
    PhotosService.prototype.getPropertyPhotoUrls = function (photos, callback) {
        var urls = [];
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]();
        var path = this.propertyPhotosFolder + "/" + this.user_id + "/";
        var _loop_2 = function (i) {
            var pathRef = storageRef.ref(photos[i]);
            pathRef.getDownloadURL()
                .then(function (url) {
                urls.push(url);
            })
                .catch(function (error) {
                callback(true);
                return;
            })
                .then(function () {
                if (i == (photos.length - 1)) {
                    callback(false, urls);
                }
            });
        };
        for (var i = 0; i < photos.length; i++) {
            _loop_2(i);
        }
    };
    PhotosService.prototype.getProfileImageUrl = function (photo, callback) {
        var urls = [];
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]();
        var path = this.profileImageFolder + "/" + this.user_id + "/" + photo;
        var pathRef = storageRef.ref(path);
        pathRef.getDownloadURL()
            .then(function (url) {
            callback(false, url);
        })
            .catch(function (error) {
            callback(true);
            return;
        });
    };
    PhotosService.prototype.removePropertyPhotos = function (photo, callback) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref(photo);
        storageRef.delete()
            .then(function () {
            callback(false);
        })
            .catch(function (error) {
            callback(true);
        });
    };
    PhotosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], PhotosService);
    return PhotosService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getWholesalerProfileInfo = function (wholesalerID) {
        var route = 'https://api.getveeya.com:3000/wholesaler/' + wholesalerID;
        return this.http.get(route)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    ProfileService.prototype.getInvestorProfileInfo = function (investorID) {
        var route = 'https://api.getveeya.com:3000/investor/' + investorID;
        return this.http.get(route)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/soldProperty.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoldPropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SoldPropertyService = /** @class */ (function () {
    function SoldPropertyService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000/properties';
    }
    SoldPropertyService.prototype.soldPropertyPending = function (property, investorId) {
        var URI = this.serverApi + "/soldpropertypending";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            property: property,
            investorId: investorId
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .map(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    SoldPropertyService.prototype.acceptSoldProperty = function (property, investorId) {
        var URI = this.serverApi + "/soldpropertyaccepted";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            property: property,
            investorId: investorId
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .map(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    SoldPropertyService.prototype.denySoldProperty = function (property, investorId) {
        var URI = this.serverApi + "/denysoldproperty";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            property: property,
            investorId: investorId
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .map(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    SoldPropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SoldPropertyService);
    return SoldPropertyService;
}());



/***/ }),

/***/ "./src/app/services/uploadListService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadListService = /** @class */ (function () {
    function UploadListService(http) {
        this.http = http;
        this.serverApi = 'https://api.getveeya.com:3000/';
    }
    UploadListService.prototype.uploadList = function (list, currentUserId) {
        var URI = this.serverApi + "user/uploadList";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            list: list,
            connectionId: currentUserId
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .map(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    UploadListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], UploadListService);
    return UploadListService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.serverApi = 'https://api.getveeya.com:3000';
    }
    UserService.prototype.getAllUsers = function () {
        var URI = this.serverApi + "/user/all";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    UserService.prototype.getAllInvestors = function () {
        var URI = this.serverApi + "/investor/all";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.loggedInUserToken());
        return this.http.get(URI, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    UserService.prototype.getAllWholesalers = function () {
        var URI = this.serverApi + "/wholesaler/all";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    UserService.prototype.getAllLenders = function () {
        var URI = this.serverApi + "/lender/all";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    UserService.prototype.getUserById = function (id) {
        var URI = this.serverApi + "/user/" + id;
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    UserService.prototype.updateUserProfile = function (user) {
        var userId = this.authService.loggedInUser();
        var URI = this.serverApi + ("/user/updateProfileInfo/" + userId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            city: user.city,
            state: user.state,
            URLs: {
                personal: user.URLs.personal,
                facebook: user.URLs.facebook,
                linkedIn: user.URLs.linkedIn,
                biggerPockets: user.URLs.biggerPockets
            }
        });
        return this.http.put(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (response) {
            return response.data;
        });
    };
    UserService.prototype.updateUserProfilePhoto = function (url) {
        var userId = this.authService.loggedInUser();
        var URI = this.serverApi + ("/user/updateProfilePhoto/" + userId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({
            _id: userId,
            photoURL: url
        });
        return this.http.put(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    UserService.prototype.updatePassword = function (currentPassword, newPassword) {
        var userId = this.authService.loggedInUser();
        var URI = this.serverApi + ("/user/updatePassword/" + userId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({
            _id: userId,
            currentPassword: currentPassword,
            newPassword: newPassword
        });
        return this.http.put(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    UserService.prototype.increaseProfileViews = function (userId, currentUser) {
        var URI = this.serverApi + "/user/increaseViews";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        var body = JSON.stringify({
            id: userId,
            viewingUserId: currentUser
        });
        headers.append('Content-Type', 'application/json');
        return this.http.put(URI, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    UserService.prototype.deleteUser = function (userId) {
        var URI = this.serverApi + ("/user/deleteuser/" + userId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res; });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidateService = /** @class */ (function () {
    function ValidateService(http) {
        this.http = http;
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (!user.firstName || !user.lastName || !user.email) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };
    ValidateService.prototype.validatePhoneNumber = function (phoneNumber) {
        // add validation
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (!user.email || !user.password) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePhotoInput = function (fileType) {
        if (fileType == 'image/jpeg' || fileType == 'image/png' || fileType == 'image/jpg') {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateUploadListInput = function (fileType) {
        if (fileType == 'csv' || fileType == 'text/csv') {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/services/viewProperty.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewPropertyService = /** @class */ (function () {
    function ViewPropertyService(http) {
        this.http = http;
        this.soldProperty = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.serverApi = 'https://api.getveeya.com:3000/properties';
    }
    ViewPropertyService.prototype.getPropertyById = function (propertyId) {
        var URI = this.serverApi + "/property/" + propertyId;
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.data; });
    };
    ViewPropertyService.prototype.setSoldProperty = function (property) {
        this.soldProperty.next(property);
    };
    ViewPropertyService.prototype.getSoldProperty = function () {
        return this.soldProperty.asObservable();
    };
    ViewPropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ViewPropertyService);
    return ViewPropertyService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "#new-sidebar {\n  position: fixed;\n  height: 100%;\n  width: 255px;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background: linear-gradient(88deg, #002e63, #005b96);\n  overflow-y: scroll;\n  transition: width 0.25s ease, background 0.25s ease;\n  -webkit-transition: width 0.25s ease, background 0.25s ease;\n  -moz-transition: width 0.25s ease, background 0.25s ease;\n  -ms-transition: width 0.25s ease, background 0.25s ease;\n}\n\n#new-sidebar .new-nav {\n  margin-top: 20px;\n  display: block;\n}\n\n.new-nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.new-nav-item {\n  width: 100%;\n  height: 40px;\n  margin-top: 20px;\n}\n\n#new-sidebar .new-nav li a {\n  margin-left: 10%;\n  border-radius: 30px;\n  color: rgba(255, 255, 255, 0.8);\n  display: block;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  font-size: 0.7142em;\n  height: 100%;\n  -webkit-transition: 0.6s all;\n  transition: 0.6s all;\n}\n\n.new-nav-link:hover svg {\n  color: #FFFFFF;\n}\n\n.new-nav-link:hover span {\n  color: #FFFFFF;\n}\n\n.new-menu-title {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translate3d(0px, 0, 0);\n          transform: translate3d(0px, 0, 0);\n}\n\n.new-nav-link svg {\n  font-size: 30px;\n  float: left;\n  margin-right: 12px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n\n.new-nav-link span {\n  margin-left: 0px;\n  font-size: 15px;\n}\n\n.navbar-menu-item {\n  display: hidden;\n}\n\n.badge-wrapper {\n  position: relative;\n  display: inline;\n}\n\n#badge {\n  color: #FFFFFF;\n  line-height: 30px;\n  background: rgba(0, 200, 0, 0.4);\n  width: 50px;\n  height: 38px;\n  margin: 0;\n  border-radius: 50%;\n  position: absolute;\n  top: -10px;\n  right: -60px;\n  padding: 5px;\n}\n\n#badge-number {\n  color: #FFFFFF;\n  position: absolute;\n  right: -45px;\n  top: -5px;\n}\n\n@media all and (max-width: 991px) {\n  #new-sidebar {\n    display: none;\n    transition: all 0.25s;\n    -webkit-transition: all 0.25s;\n  }\n\n  .navbar-menu-item {\n    display: visible;\n  }\n}\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new-sidebar new-sidebar-offcanvas\" id=\"new-sidebar\">\n  <div class=\"logo\">\n    <a href=\"/dashboard\">\n      <div class=\"container\">\n        <img src=\"\" alt />\n      </div>\n    </a>\n    <a href=\"/dashboard\">\n      Veeya\n    </a>\n  </div>\n\n  <ul class=\"new-nav\">\n    <li class=\"new-nav-item\">\n      <a class=\"new-nav-link\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/dashboard']\">\n        <i class=\"far fa-chart-bar\"></i>\n        <span class=\"new-new-menu-title\">Dashboard</span>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.loggedIn() && authService.wholesalerUser()\">\n      <a class=\"new-nav-link\" [routerLink]=\"['/addproperty']\">\n        <i class=\"fas fa-plus\"></i>\n        <span class=\"new-menu-title\">Add Property</span>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.loggedIn()\">\n      <a class=\"new-nav-link\" [routerLink]=\"['/properties']\">\n        <i class=\"fas fa-home\"></i>\n        <span class=\"new-menu-title\">View Properties</span>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.loggedIn()\">\n      <a class=\"new-nav-link\" [routerLink]=\"['/connections']\">\n        <i class=\"fas fa-users\"></i>\n        <span class=\"new-menu-title\">Connections</span>\n        <div class=\"badge-wrapper\">\n          <span id=\"badge\"></span>\n          <span id=\"badge-number\"></span>\n        </div>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.loggedIn()\">\n      <a class=\"new-nav-link\" [routerLink]=\"['/inviteuser']\">\n        <i class=\"fas fa-user-plus\"></i>\n        <span class=\"new-menu-title\">Invite User</span>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.loggedIn()\">\n      <a class=\"new-nav-link\" [routerLink]=\"['/search']\">\n        <i class=\"fas fa-search\"></i>\n        <span class=\"new-menu-title\">Search</span>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.loggedIn() && authService.investorUser()\">\n      <a class=\"new-nav-link\" [routerLink]=\"['/placeDealAd']\">\n        <i class=\"far fa-newspaper\"></i>\n        <span class=\"new-menu-title\">Place Ad for Deal</span>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.loggedIn()\">\n      <a class=\"new-nav-link\" [routerLink]=\"['/viewDealAds']\">\n        <i class=\"fas fa-arrow-circle-right\"></i>\n        <span class=\"new-menu-title\">View Wanted Deals</span>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.wholesalerUser()\">\n      <a class=\"new-nav-link\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/uploadlist']\">\n        <i class=\"fas fa-list-ul\"></i>\n        <span class=\"new-menu-title\">Upload Buyers List</span>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.investorUser()\">\n      <a class=\"new-nav-link\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/uploadlist']\">\n        <i class=\"fas fa-list-ul\"></i>\n        <span class=\"new-menu-title\">Upload Wholesalers List</span>\n      </a>\n    </li>\n    <li class=\"new-nav-item\" *ngIf=\"authService.loggedIn()\">\n      <a class=\"new-nav-link\" [routerLink]=\"['/profile', authService.loggedInUser()]\">\n        <i class=\"far fa-user-circle\"></i>\n        <span class=\"new-menu-title\">My Profile</span>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_getConnections_service__ = __webpack_require__("./src/app/services/getConnections.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, router, getConnectionsService) {
        this.authService = authService;
        this.router = router;
        this.getConnectionsService = getConnectionsService;
        this.subscriptions = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        this.getPendingConnections();
    };
    SidebarComponent.prototype.getPendingConnections = function () {
        var _this = this;
        this.getPendingConnectionsSubscription = this.getConnectionsService.getPendingConnections()
            .subscribe(function (response) {
            _this.getNumberOfPendingConnections();
        }, function (error) {
        });
        this.subscriptions.push(this.getPendingConnectionsSubscription);
    };
    SidebarComponent.prototype.getNumberOfPendingConnections = function () {
        var _this = this;
        this.getNumberOfPendingConnectionsSubscription = this.getConnectionsService.getNumberOfPendingConnections()
            .subscribe(function (response) {
            _this.numberOfPendingConnections = response;
            // handle the right value of badge
            // in order to center the notification number
            // based on the number of pending connections
            if (_this.numberOfPendingConnections == 0) {
                document.getElementById("badge-number").style.right = '-40px';
            }
            else if (_this.numberOfPendingConnections < 10) {
                document.getElementById("badge-number").style.right = '-37px';
            }
            else if (_this.numberOfPendingConnections >= 10 && _this.numberOfPendingConnections < 100) {
                document.getElementById("badge-number").style.right = '-42px';
            }
            else if (_this.numberOfPendingConnections >= 100 && _this.numberOfPendingConnections < 1000) {
                document.getElementById("badge-number").style.right = '-46px';
            }
            else {
                document.getElementById("badge-number").style.right = '-50px';
            }
            document.getElementById("badge-number").innerHTML = _this.numberOfPendingConnections;
        }, function (error) {
        });
        this.subscriptions.push(this.getNumberOfPendingConnectionsSubscription);
    };
    SidebarComponent.prototype.isInvestor = function () {
        var userType = this.authService.loggedInUserType();
        if (userType === 'Investor') {
            return true;
        }
        else {
            return false;
        }
    };
    SidebarComponent.prototype.isWholesaler = function () {
        var userType = this.authService.loggedInUserType();
        if (userType === 'Wholesaler') {
            return true;
        }
        else {
            return false;
        }
    };
    SidebarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_getConnections_service__["a" /* GetConnectionsService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sold-property/sold-property.component.css":
/***/ (function(module, exports) {

module.exports = "input:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/sold-property/sold-property.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n\n          <div class=\"row\" *ngIf=\"displayMessage\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Please Select a Property from <a [routerLink]=\"['/properties']\">Properties</a>.</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf=\"displayBody\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Select The Investor Who Purchased the Property</h4>\n                  <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search By Email\" value=\"Search\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Investors</h4>\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>#</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Phone Number</th>\n                        <th>City</th>\n                        <th>State</th>\n                        <th>Select</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let investor of investors | filterEmail: searchText; let i=index\">\n                        <td>{{ i + 1 }}</td>\n                        <td>{{ investor.firstName }}</td>\n                        <td>{{ investor.lastName }}</td>\n                        <td>{{ investor.email }}</td>\n                        <td>{{ investor.phoneNumber }}</td>\n                        <td>{{ investor.city }}</td>\n                        <td>{{ investor.state }}</td>\n                        <td><button (click)=\"showModal(investor)\" type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"soldModal\" data-target=\"soldModal\">Select</button></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"modal fade\" id=\"soldModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"soldModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"soldModalLabel\">Confirm Sale</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  Confirm {{ property?.address }} in {{ property?.city }}, {{ property?.state }} was purchased by\n                  {{ selectedInvestor?.firstName }} {{ selectedInvestor?.lastName }}.\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                  <button id=\"soldConfirm\" type=\"button\" class=\"btn btn-primary\">Sold</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div> <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/sold-property/sold-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoldPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_soldProperty_service__ = __webpack_require__("./src/app/services/soldProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_viewProperty_service__ = __webpack_require__("./src/app/services/viewProperty.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SoldPropertyComponent = /** @class */ (function () {
    function SoldPropertyComponent(alertService, authService, soldPropertyService, viewPropertyService, userService, route, router) {
        this.alertService = alertService;
        this.authService = authService;
        this.soldPropertyService = soldPropertyService;
        this.viewPropertyService = viewPropertyService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.subscriptions = [];
        this.investors = [];
        this.displayMessage = true;
        this.displayBody = false;
    }
    SoldPropertyComponent.prototype.ngOnInit = function () {
        this.wholesalerID = this.authService.loggedInUser();
        this.propertyId = this.route.snapshot.params.id;
        this.getProperty();
        this.getInvestors();
    };
    SoldPropertyComponent.prototype.getProperty = function () {
        var _this = this;
        this.getSoldPropertySubscription = this.viewPropertyService.getSoldProperty()
            .subscribe(function (response) {
            _this.displayMessage = false;
            _this.displayBody = true;
            _this.property = response;
        });
        this.subscriptions.push(this.getSoldPropertySubscription);
    };
    SoldPropertyComponent.prototype.getInvestors = function () {
        var _this = this;
        this.getAllInvestorsSubscription = this.userService.getAllInvestors()
            .subscribe(function (response) {
            _this.investors = response;
        }, function (error) {
            _this.alertService.error('Error retrieving investor users.');
        });
        this.subscriptions.push(this.getAllInvestorsSubscription);
    };
    SoldPropertyComponent.prototype.showModal = function (investor) {
        var _this = this;
        var that = this;
        if (!this.property) {
            this.getPropertySubscription = this.viewPropertyService.getPropertyById(this.propertyId)
                .subscribe(function (response) {
                _this.property = response;
                _this.selectedInvestor = investor;
                $("#soldModal").modal('show');
                $("#soldConfirm").on('click', function () {
                    that.soldPropertyPendingSubscription = that.soldPropertyService.soldPropertyPending(that.property, that.selectedInvestor._id)
                        .subscribe(function (response) {
                        $("#soldModal").modal('hide');
                        that.router.navigate(['/dashboard']);
                        that.alertService.success('Success', true);
                    }, function (error) {
                        that.alertService.error('Error marking property as sold.');
                    });
                    that.subscriptions.push(that.soldPropertyPendingSubscription);
                });
            }, function (error) {
                _this.alertService.error('Error retrieving property information.');
            });
            this.subscriptions.push(this.getPropertySubscription);
        }
        else {
            this.selectedInvestor = investor;
            $("#soldModal").modal('show');
            $("#soldConfirm").on('click', function () {
                that.soldPropertyPendingSubscription = that.soldPropertyService.soldPropertyPending(that.property, that.selectedInvestor._id)
                    .subscribe(function (response) {
                    $("#soldModal").modal('hide');
                    that.alertService.success('Success.', true);
                    that.router.navigate(['/dashboard']);
                }, function (error) {
                    that.alertService.error('');
                });
                that.subscriptions.push(that.soldPropertyPendingSubscription);
            });
        }
    };
    SoldPropertyComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    SoldPropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sold-property',
            template: __webpack_require__("./src/app/sold-property/sold-property.component.html"),
            styles: [__webpack_require__("./src/app/sold-property/sold-property.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_soldProperty_service__["a" /* SoldPropertyService */],
            __WEBPACK_IMPORTED_MODULE_6__services_viewProperty_service__["a" /* ViewPropertyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], SoldPropertyComponent);
    return SoldPropertyComponent;
}());



/***/ }),

/***/ "./src/app/top-navbar/top-navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".top-navbar {\n  margin-left: 255px;\n  height: 55px;\n  background: linear-gradient(88deg, #002e63, #005b96);\n}\n\n.navbar-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n\n.navbar-container:first-child {\n  margin-left: 20px;\n}\n\n.username-item {\n  margin-right: 30px;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n.navbar-list-item {\n  color: white;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  text-align: center;\n  display: inherit;\n  margin-left: 12px;\n}\n\n.navbar-list-item svg {\n  margin-top: 10px;\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.navbar-list-item:hover svg {\n  color: #FFFFFF;\n}\n\n.navbar-list-item:hover > a {\n  color: white;\n}\n\n.logout-link {\n  margin-right: auto;\n}\n\n.logout-link a, .username-item a {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.new-nav-link {\n  color: rgba(255, 255, 255, 0.8);\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n.new-nav-link:hover, .new-nav-link:focus {\n  text-decoration: none;\n  cursor: pointer;\n  color: #FFFFFF;\n}\n\n#logout-list-item:hover {\n  cursor: pointer;\n}\n\n@media all and (max-width: 600px) {\n  #username-list-item, #profile-photo-list-item, #logout-list-item, #contact-list-item, #about-list-item, #support-list-item {\n    display: none;\n  }\n}\n\n@media all and (max-width: 835px) {\n  #profile-photo-list-item, #username-list-item {\n    display: none;\n  }\n\n  .navbar-list-item {\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2\n  }\n}\n\n@media all and (min-width: 836px) {\n  #profile-photo-list-item, #username-list-item {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: 991px) {\n  #menu-list-item {\n    display: inherit;\n  }\n}\n\n@media all and (min-width: 992px) {\n  #menu-list-item {\n    display: none;\n  }\n}\n\n@media all and (max-width: 991px) {\n  .top-navbar {\n    margin-left: 0px;\n  }\n}"

/***/ }),

/***/ "./src/app/top-navbar/top-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"top-navbar\">\n  <ul class=\"navbar-container\">\n    <li class=\"navbar-list-item\" id=\"menu-list-item\">\n      <i class=\"fas fa-bars\"></i>\n      <a class=\"new-nav-link\">Menu</a>\n    </li>\n    <li class=\"navbar-list-item\" id=\"about-list-item\">\n      <a [routerLink]=\"['/about']\"><i class=\"fas fa-globe\"></i></a>\n      <a [routerLink]=\"['/about']\" class=\"new-nav-link\">About</a>\n    </li>\n    <li class=\"navbar-list-item\" id=\"support-list-item\">\n      <a [routerLink]=\"['/support']\"><i class=\"fas fa-user-md\"></i></a>\n      <a [routerLink]=\"['/support']\" class=\"new-nav-link\">Support</a>\n    </li>\n    <li class=\"navbar-list-item\" id=\"contact-list-item\">\n      <a [routerLink]=\"['/contact']\"><i class=\"fas fa-phone\"></i></a>\n      <a [routerLink]=\"['/contact']\" class=\"new-nav-link\">Contact</a>\n    </li>\n    <li class=\"navbar-list-item logout-link\" id=\"logout-list-item\">\n      <a (click)=\"logout()\"><i class=\"fas fa-power-off\"></i></a>\n      <a (click)=\"logout()\" class=\"new-nav-link\">Logout</a>\n    </li>\n    <li class=\"navbar-list-item\" id=\"profile-photo-list-item\">\n      <a (click)=\"userProfile()\" class=\"new-nav-link\">\n       <img class=\"img-xs rounded-circle\" src=\"{{ currentUser?.profilePhoto }}\" alt=\"\">\n      </a>\n    </li>\n    <li class=\"navbar-list-item username-item\" id=\"username-list-item\">\n      <a (click)=\"userProfile()\" class=\"new-nav-link\">\n        <div>{{ currentUser?.firstName }} {{ currentUser?.lastName }}</div>\n      </a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/top-navbar/top-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopNavbarComponent = /** @class */ (function () {
    function TopNavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCurrentUserSubscription = this.authService.getCurrentUser()
            .subscribe(function (response) {
            _this.currentUser = response;
        }, function (error) {
        });
    };
    TopNavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    TopNavbarComponent.prototype.userProfile = function () {
        this.router.navigate(['/profile/', this.currentUser._id]);
    };
    TopNavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    TopNavbarComponent.prototype.ngOnDestroy = function () {
        this.getCurrentUserSubscription.unsubscribe();
    };
    TopNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top-navbar',
            template: __webpack_require__("./src/app/top-navbar/top-navbar.component.html"),
            styles: [__webpack_require__("./src/app/top-navbar/top-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], TopNavbarComponent);
    return TopNavbarComponent;
}());



/***/ }),

/***/ "./src/app/upload-list/upload-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upload-list/upload-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-md-6 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\" *ngIf=\"currentUserType=='Investor'\">Upload Wholesalers List</h4>\n                  <h4 class=\"card-title\" *ngIf=\"currentUserType=='Wholesaler'\">Upload Buyers List</h4>\n\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"input-group mb-3\">\n                            <div class=\"custom-file\">\n                              <input type=\"file\" class=\"custom-file-input\" id=\"listInput\"\n                                (change)=\"uploadListInput($event)\"\n                                accept=\".csv\"/>\n                              <label class=\"custom-file-label\" for=\"listInput\">Choose file</label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div id=\"listName\"></div>\n                      <button class=\"btn btn-inverse-primary btn-rounded btn-fw\" type=\"button\"\n                        (click)=\"uploadList()\" id=\"uploadList\">Upload List</button>\n                      <button class=\"btn btn-inverse-danger btn-rounded btn-fw\" type=\"button\"\n                        (click)=\"removeList()\" id=\"removeList\">Remove List</button>\n                    </div>\n\n                </div> <!-- End of card body -->\n\n              </div> <!-- End of card -->\n\n            </div> <!-- End of col-md-6 grid-margin stretch-card -->\n\n\n\n            <div class=\"col-md-6 grid-margin\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Requirements</h4>\n                  <small><em>It is mandatory that:</em></small>\n                  <p></p>\n                  <div>1. Your file is a .csv file.</div>\n                  <div>2. Your file has a max size of 50kb.</div>\n                  <div>3. Your file has one row of emails.</div>\n                  <br />\n                  <div>Please click blue button for help.</div>\n                  <button class=\"btn btn-primary btn-rounded btn-fw\">Click for Help</button>\n\n                </div> <!-- End of card body -->\n\n              </div> <!-- End of card -->\n\n            </div> <!-- End of col-md-6 grid-margin -->\n\n\n\n\n          </div> <!-- End of row -->\n\n        </div> <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/upload-list/upload-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uploadListService__ = __webpack_require__("./src/app/services/uploadListService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadListComponent = /** @class */ (function () {
    function UploadListComponent(alertService, authService, router, validateService, uploadListService) {
        this.alertService = alertService;
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
        this.uploadListService = uploadListService;
        this.subscriptions = [];
    }
    UploadListComponent.prototype.ngOnInit = function () {
        document.getElementById('removeList').hidden = true;
        document.getElementById('uploadList').hidden = true;
        this.currentUser = this.authService.loggedInUser();
        this.currentUserType = this.authService.loggedInUserType();
    };
    UploadListComponent.prototype.uploadListInput = function (event) {
        this.list = event.target.files[0];
        var fileType = this.list["type"];
        if (this.list.size > 50000) {
            this.list = null;
            this.alertService.error('Image size is too large. Please upload image with a size of less than 50kb.');
            return;
        }
        if (this.validateService.validateUploadListInput(fileType)) {
            document.getElementById('listName').innerHTML += this.list.name + "</br>";
            document.getElementById('removeList').hidden = false;
            document.getElementById('uploadList').hidden = false;
            var inputButton = document.getElementById('listInput');
            inputButton.disabled = true;
        }
        else {
            this.alertService.error('File type is not correct. Please upload only .csv files.');
        }
    };
    UploadListComponent.prototype.uploadList = function () {
        var inputButton = document.getElementById('listInput');
        inputButton.disabled = true;
        var reader = new FileReader();
        reader.readAsText(this.list);
        reader.onload = this.loadHandler.bind(this);
        reader.onerror = this.errorHandler.bind(this);
    };
    UploadListComponent.prototype.removeList = function () {
        this.list = null;
        document.getElementById('listName').innerHTML = '';
        document.getElementById('removeList').hidden = true;
        document.getElementById('uploadList').hidden = true;
        var inputButton = document.getElementById('listInput');
        inputButton.disabled = false;
    };
    UploadListComponent.prototype.processData = function (csv) {
        var userType = '';
        if (this.currentUserType == 'Investor') {
            userType = 'Wholesaler';
        }
        else if (this.currentUserType == 'Wholesaler') {
            userType = 'Investor';
        }
        var allRows = csv.split(/\r\n|\n/);
        this.users = [];
        var errorExists = false;
        for (var i = 0; i < allRows.length; i++) {
            var row = allRows[i].split(',');
            var user = {
                email: row[0],
                userType: userType,
                connectionId: this.currentUser
            };
            this.users.push(user);
        }
        if (errorExists) {
            var confirm_1 = window.confirm("Your list had at least one incorrect row. Would you like to continue with uploading your list?");
            if (confirm_1) {
                this.finishUpload();
            }
        }
        else {
            this.finishUpload();
        }
    };
    UploadListComponent.prototype.loadHandler = function (event) {
        var csv = event.target.result;
        this.processData(csv);
    };
    UploadListComponent.prototype.errorHandler = function (event) {
        if (event.target.error.name == 'NotReadableError') {
            this.alertService.error('Unable to read file. Please upload a .csv file.');
        }
    };
    UploadListComponent.prototype.finishUpload = function () {
        var _this = this;
        this.uploadListSubscription = this.uploadListService.uploadList(this.users, this.currentUser)
            .subscribe(function (response) {
            _this.alertService.success('Uploaded list successfully.', true);
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            _this.alertService.error('Error uploading list.', true);
        });
        this.subscriptions.push(this.uploadListSubscription);
    };
    UploadListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    UploadListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-list',
            template: __webpack_require__("./src/app/upload-list/upload-list.component.html"),
            styles: [__webpack_require__("./src/app/upload-list/upload-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_uploadListService__["a" /* UploadListService */]])
    ], UploadListComponent);
    return UploadListComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ".connect-button-row {\n  width: 100%;\n}\n\n.connect-button {\n  margin-left: 30%;\n}\n\n#accept-button {\n  margin-left: 10%\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n\n      <div class=\"main-panel\" *ngIf=\"user\">\n        <div class=\"content-wrapper\">\n          <div class=\"row user-profile\">\n            <div class=\"col-lg-4 side-left d-flex align-items-stretch\">\n              <div class=\"row\">\n                <div class=\"col-12 grid-margin\">\n                  <div class=\"card\">\n                    <div class=\"card-body avatar\">\n                      <h4 class=\"card-title\">Info</h4>\n                      <img src=\"{{ user.profilePhoto }}\" alt=\"\">\n                      <p class=\"name\">{{ user.firstName }} {{ user.lastName }}</p>\n                      <p class=\"designation\">-  {{ user.userType }}  -</p>\n                      <a class=\"d-block text-center text-dark\">{{ user.email }}</a>\n                      <a class=\"d-block text-center text-dark\">{{ user.phoneNumber }}</a>\n                      <a class=\"d-block text-center text-dark\">{{ user.city }} {{ user.state }}</a>\n                    </div>\n                    <div class=\"connect-button-row\">\n                      <button *ngIf=\"connected\" class=\"btn btn-inverse-success btn-rounded btn-fw connect-button\">Connected</button>\n                      <button *ngIf=\"connectionSent\" class=\"btn btn-inverse-success btn-rounded btn-fw connect-button\" [disabled]=\"disableConnectButton\">Sent Request</button>\n                      <button *ngIf=\"notConnected && !connectionReceived\" class=\"btn btn-inverse-primary btn-rounded btn-fw connect-button\" (click)=\"connect()\">Connect</button>\n                      <button *ngIf=\"connectionReceived\" class=\"btn btn-inverse-primary btn-rounded btn-fw\" id=\"accept-button\"\n                        (click)=\"acceptRequest(user)\">Accept\n                      </button>\n                      <button *ngIf=\"connectionReceived\" class=\"btn btn-inverse-danger btn-rounded btn-fw\"\n                        (click)=\"denyRequest(user)\">Deny\n                      </button>\n                    </div>\n                    <div class=\"card-body overview\">\n                      <ul class=\"achievements\">\n                        <li><p>{{ user?.profileViews }}</p><p>Profile Views</p></li>\n                        <li><p>{{ user.connections.length }}</p><p>Connections</p></li>\n                        <li><p>{{ numberOfDeals }}</p><p>Deals</p></li>\n                      </ul>\n                      <br />\n                      <div class=\"info-links\">\n                        <label>Personal Website</label>\n                        <a class=\"website\" target=\"_blank\" href=\"{{ user.URLs.personal }}\"\n                          *ngIf=\"user.URLs.personal.length>0\">\n                          <span>{{ user.URLs.personal }}</span>\n                        </a>\n                        <p *ngIf=\"user.URLs.personal.length==0\"><em><small>Not entered yet</small></em></p>\n\n                        <label>Facebook</label>\n                        <a class=\"social-link\" target=\"_blank\" href=\"{{ user.URLs.facebook }}\"\n                          *ngIf=\"user.URLs.facebook.length>0\">\n                          <span>{{ user.URLs.facebook }}</span>\n                        </a>\n                        <p *ngIf=\"user.URLs.facebook.length==0\"><em><small>Not entered yet</small></em></p>\n\n                        <label>LinkedIn</label>\n                        <a class=\"social-link\" target=\"_blank\" href=\"{{ user.URLs.linkedIn }}\"\n                          *ngIf=\"user.URLs.linkedIn.length>0\">\n                          <span>{{ user.URLs.linkedIn }}</span>\n                        </a>\n                        <p *ngIf=\"user.URLs.linkedIn.length==0\"><em><small>Not entered yet</small></em></p>\n\n                        <label>Bigger Pockets</label>\n                        <a class=\"social-link\" target=\"_blank\" href=\"{{ user.URLs.biggerPockets }}\"\n                          *ngIf=\"user.URLs.biggerPockets.length>0\">\n                          <span>{{ user.URLs.biggerPockets }}</span>\n                        </a>\n                        <p *ngIf=\"user.URLs.biggerPockets.length==0\"><em><small>Not entered yet</small></em></p>\n\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-8 side-right stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"wrapper d-block d-sm-flex align-items-center justify-content-between\">\n                    <h4 class=\"card-title mb-0\">Details</h4>\n                    <ul class=\"nav nav-tabs tab-solid tab-solid-primary mb-0\" id=\"myTab\" role=\"tablist\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link active\" id=\"info-tab\" data-toggle=\"tab\" href=\"#info\" role=\"tab\" aria-controls=\"info\" aria-expanded=\"true\">Info</a>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"wrapper\">\n                    <hr>\n                    <div class=\"tab-content\" id=\"myTabContent\">\n\n\n                      <!-- Info tab -->\n                      <div class=\"tab-pane fade show active\" id=\"info\" role=\"tabpanel\" aria-labelledby=\"info\">\n                        <form>\n                          <div class=\"form-group\">\n                            <label for=\"userName\">Username</label>\n                            <input type=\"text\" class=\"form-control\" id=\"userName\" [(ngModel)]=\"user.userName\" name=\"userName\" disabled>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"firstName\">First Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"user.firstName\" name=\"firstName\" disabled>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"lastName\">Last Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"user.lastName\" name=\"lastName\" disabled>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"text\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\" name=\"email\" disabled>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"phoneNumber\">Phone Number</label>\n                            <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" [(ngModel)]=\"user.phoneNumber\" name=\"phoneNumber\" disabled>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"city\">City</label>\n                            <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"user.city\" name=\"city\" disabled>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"state\">State</label>\n                            <input type=\"text\" class=\"form-control\" id=\"state\" [(ngModel)]=\"user.state\" name=\"state\" disabled>\n                          </div>\n                        </form>\n                      </div><!-- End info tab -->\n\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller ends -->\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_addConnection_service__ = __webpack_require__("./src/app/services/addConnection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_getConnections_service__ = __webpack_require__("./src/app/services/getConnections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router, alertService, activatedRoute, getConnectionsService, userService, authService, addConnectionService) {
        this.router = router;
        this.alertService = alertService;
        this.activatedRoute = activatedRoute;
        this.getConnectionsService = getConnectionsService;
        this.userService = userService;
        this.authService = authService;
        this.addConnectionService = addConnectionService;
        this.subscriptions = [];
        // connected with user
        this.connected = false;
        // user has sent connection request to logged in user
        this.connectionReceived = false;
        // logged in user has sent connection to this user
        this.connectionSent = false;
        // logged in user is not connected with this user
        this.notConnected = true;
        // if logged in user is connected with user disable the connect button, else enable button
        this.disableConnectButton = false;
        this.numberOfDeals = 0;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.loggedInUser();
        this.user_id = this.activatedRoute.snapshot.params['id'];
        this.getUserInfo(this.user_id);
    };
    UserProfileComponent.prototype.getUserInfo = function (userID) {
        var _this = this;
        this.getUserSubscription = this.userService.getUserById(userID)
            .subscribe(function (response) {
            _this.user = response;
            _this.determineNumberOfDeals(_this.user);
            _this.isConnected();
        }, function (error) {
            _this.alertService.error('Error retrieving user info.');
        });
        this.subscriptions.push(this.getUserSubscription);
        this.increaseProfileViewsSubscription = this.userService.increaseProfileViews(userID, this.currentUser)
            .subscribe(function (response) {
            _this.user.profileViews = response.profileViews;
        }, function (error) {
            _this.alertService.error('Error increasing profile views.');
        });
        this.subscriptions.push(this.increaseProfileViewsSubscription);
    };
    UserProfileComponent.prototype.isConnected = function () {
        var _this = this;
        this.user.connections.forEach(function (user) {
            if (user == _this.currentUser) {
                _this.connected = true;
                _this.notConnected = false;
                return;
            }
        });
        this.user.pendingIncomingConnectionRequests.forEach(function (userId) {
            if (userId === _this.currentUser) {
                _this.connectionSent = true;
                _this.disableConnectButton = true;
                _this.notConnected = false;
            }
        });
        this.user.pendingOutgoingConnectionRequests.forEach(function (userId) {
            if (userId === _this.currentUser) {
                _this.connectionReceived = true;
            }
        });
    };
    UserProfileComponent.prototype.connect = function () {
        var _this = this;
        this.addConnectionSubscription = this.addConnectionService.addConnection(this.currentUser, this.user_id)
            .subscribe(function (response) {
            _this.notConnected = false;
            _this.connectionSent = true;
            _this.disableConnectButton = true;
        }, function (error) {
            _this.alertService.error('Error adding connection.', true);
        });
        this.subscriptions.push(this.addConnectionSubscription);
    };
    UserProfileComponent.prototype.determineNumberOfDeals = function (user) {
        if (user.userType == 'Wholesaler') {
            this.numberOfDeals = user.wholesalerSoldProperties.length;
        }
        else if (user.userType == 'Investor') {
            this.numberOfDeals = user.investorBoughtProperties.length;
        }
        else {
            this.numberOfDeals = user.lenderLoanedProperties.length;
        }
    };
    UserProfileComponent.prototype.acceptRequest = function (user) {
        var _this = this;
        var userId = user._id;
        this.acceptConnectionSubscription = this.addConnectionService.acceptConnection(this.currentUser, userId)
            .subscribe(function (response) {
            _this.getConnectionsService.reducePendingConnections(userId);
            _this.notConnected = false;
            _this.connected = true;
            _this.connectionReceived = false;
        }, function (error) {
            _this.alertService.error('Error accepting connection request.');
        });
        this.subscriptions.push(this.acceptConnectionSubscription);
    };
    UserProfileComponent.prototype.denyRequest = function (user) {
        var _this = this;
        var userId = user._id;
        this.denyConnectionSubscription = this.addConnectionService.denyConnection(this.currentUser, userId)
            .subscribe(function (response) {
            _this.connectionReceived = false;
            _this.connected = false;
            _this.getConnectionsService.reducePendingConnections(userId);
        }, function (error) {
            _this.alertService.error('Error denying connection request.');
        });
        this.subscriptions.push(this.denyConnectionSubscription);
    };
    UserProfileComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_getConnections_service__["a" /* GetConnectionsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_addConnection_service__["a" /* AddConnectionService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/view-deal-ads/view-deal-ads.component.css":
/***/ (function(module, exports) {

module.exports = "#responsive-stretch-card {\n  overflow-x: scroll;\n}\n\n#search-row {\n  width: 100%;\n}\n\n#search-row.searched {\n  width: 80%;\n}\n\n#table-row {\n  width: 80%;\n}\n\n#content-wrapper {\n  width: 80%;\n  margin-left: 5%;\n}\n\n.wizard-steps {\n  width: 100%;\n  float: left;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.tab {\n  width: 20%;\n  height: 70px;\n  border-radius: 5px;\n  background: #f7f7f9;\n  color: #6c757d;\n}\n\n.tab.active {\n  width: 22%;\n  height: 70px;\n  border-radius: 5px;\n  background-color: #1991EA;\n  color: white;\n}\n\n.tab-text {\n  margin-top: 23px;\n}\n\n.buttons {\n  width: 100%;\n}\n\n.buttons button {\n  width: 140px;\n  height: 40px;\n}\n\n.search-btn {\n  display: table;\n  margin: 0 auto;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}\n\n@media all and (max-width: 991px) {\n  #table-row, #search-row.searched {\n    width: 100%;\n  }\n}"

/***/ }),

/***/ "./src/app/view-deal-ads/view-deal-ads.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n\n\n          <div class=\"row\" id=\"search-row\">\n            <div class=\"col-12 grid-margin\">\n              <div class=\"card\">\n                <h4 class=\"card-title\">Search Ads Wizard</h4>\n\n                <div class=\"wizard-steps\">\n                  <div role=\"tab\" class=\"tab active\" id=\"location-tab\">\n                    <div class=\"tab-text\">1. Location</div>\n                  </div>\n                  <div role=\"tab\" class=\"tab\" id=\"property-tab\">\n                    <div class=\"tab-text\">2. Property</div>\n                  </div>\n                  <div role=\"tab\" class=\"tab\" id=\"return-tab\">\n                    <div class=\"tab-text\">3. Return</div>\n                  </div>\n                  <div role=\"tab\" class=\"tab\" id=\"confirm-tab\">\n                    <div class=\"tab-text\">4. Confirm</div>\n                  </div>\n                </div>\n\n\n                <div class=\"card-body\" id=\"content-wrapper\">\n\n                  <!-- Location tab -->\n                  <div class=\"location-content\" id=\"location-content\">\n                    <div class=\"form-group row\">\n                      <label for=\"city\" class=\"col-sm-2 col-form-label\">City</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter City\" [(ngModel)]=\"deal.city\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-2 col-form-label\">State</label>\n                      <div class=\"col-sm-4\">\n                        <select [(ngModel)]=\"deal.state\" name=\"state\" class=\"form-control\">\n                          <option value=\"AL\">Alabama</option>\n                          <option value=\"AK\">Alaska</option>\n                          <option value=\"AZ\">Arizona</option>\n                          <option value=\"AR\">Arkansas</option>\n                          <option value=\"CA\">California</option>\n                          <option value=\"CO\">Colorado</option>\n                          <option value=\"CT\">Connecticut</option>\n                          <option value=\"DE\">Delaware</option>\n                          <option value=\"DC\">District Of Columbia</option>\n                          <option value=\"FL\">Florida</option>\n                          <option value=\"GA\">Georgia</option>\n                          <option value=\"HI\">Hawaii</option>\n                          <option value=\"ID\">Idaho</option>\n                          <option value=\"IL\">Illinois</option>\n                          <option value=\"IN\">Indiana</option>\n                          <option value=\"IA\">Iowa</option>\n                          <option value=\"KS\">Kansas</option>\n                          <option value=\"KY\">Kentucky</option>\n                          <option value=\"LA\">Louisiana</option>\n                          <option value=\"ME\">Maine</option>\n                          <option value=\"MD\">Maryland</option>\n                          <option value=\"MA\">Massachusetts</option>\n                          <option value=\"MI\">Michigan</option>\n                          <option value=\"MN\">Minnesota</option>\n                          <option value=\"MS\">Mississippi</option>\n                          <option value=\"MO\">Missouri</option>\n                          <option value=\"MT\">Montana</option>\n                          <option value=\"NE\">Nebraska</option>\n                          <option value=\"NV\">Nevada</option>\n                          <option value=\"NH\">New Hampshire</option>\n                          <option value=\"NJ\">New Jersey</option>\n                          <option value=\"NM\">New Mexico</option>\n                          <option value=\"NY\">New York</option>\n                          <option value=\"NC\">North Carolina</option>\n                          <option value=\"ND\">North Dakota</option>\n                          <option value=\"OH\">Ohio</option>\n                          <option value=\"OK\">Oklahoma</option>\n                          <option value=\"OR\">Oregon</option>\n                          <option value=\"PA\">Pennsylvania</option>\n                          <option value=\"RI\">Rhode Island</option>\n                          <option value=\"SC\">South Carolina</option>\n                          <option value=\"SD\">South Dakota</option>\n                          <option value=\"TN\">Tennessee</option>\n                          <option value=\"TX\">Texas</option>\n                          <option value=\"UT\">Utah</option>\n                          <option value=\"VT\">Vermont</option>\n                          <option value=\"VA\">Virginia</option>\n                          <option value=\"WA\">Washington</option>\n                          <option value=\"WV\">West Virginia</option>\n                          <option value=\"WI\">Wisconsin</option>\n                          <option value=\"WY\">Wyoming</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"zip\" class=\"col-sm-2 col-form-label\">Zip Code</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter Zip Code\" [(ngModel)]=\"deal.zipCode\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 search-btn\">Next</button>\n                    </div>\n                  </div> <!-- location-content end -->\n\n\n                  <!-- Property tab -->\n                  <div class=\"property-content\" id=\"property-content\">\n                    <div class=\"form-group row\">\n                      <label for=\"minPurchasePrice\" class=\"col-sm-2 col-form-label\">Minimum Purchase Price</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter Minimum Purchase Price\" [(ngModel)]=\"deal.minPurchasePrice\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"maxPurchasePrice\" class=\"col-sm-2 col-form-label\">Maximum Purchase Price</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter Maximum Purchase Price\" [(ngModel)]=\"deal.maxPurchasePrice\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Property Type</label>\n                      <div class=\"col-sm-9\">\n                        <select [(ngModel)]=\"deal.propertyType\" name=\"propertyType\" class=\"form-control\">\n                          <option value=\"Single Family\">Single Family Home</option>\n                          <option value=\"Condo\">Condo</option>\n                          <option value=\"Duplex\">Multifamily: Duplex</option>\n                          <option value=\"Triplex\">Multifamily: Triplex</option>\n                          <option value=\"Quadplex\">Multifamily: 4plex</option>\n                          <option value=\"Five-plus\">Commercial: 5+</option>\n                          <option value=\"Apartments\">Commercial: Apartments</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Minimum Bedrooms</label>\n                      <div class=\"col-sm-4\">\n                        <select [(ngModel)]=\"deal.minBedrooms\" name=\"minBedrooms\" class=\"form-control\">\n                          <option value=\"0\">0</option>\n                          <option value=\"1\">1</option>\n                          <option value=\"2\">2</option>\n                          <option value=\"3\">3</option>\n                          <option value=\"4\">4</option>\n                          <option value=\"5+\">5+</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\">Maximum Bedrooms</label>\n                      <div class=\"col-sm-4\">\n                        <select [(ngModel)]=\"deal.maxBedrooms\" name=\"bedrooms\" class=\"form-control\">\n                          <option value=\"0\">0</option>\n                          <option value=\"1\">1</option>\n                          <option value=\"2\">2</option>\n                          <option value=\"3\">3</option>\n                          <option value=\"4\">4</option>\n                          <option value=\"5+\">5+</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Minimum Bathrooms</label>\n                      <div class=\"col-sm-4\">\n                        <select [(ngModel)]=\"deal.minBathrooms\" name=\"bathrooms\" class=\"form-control\">\n                          <option value=\"0\">0</option>\n                          <option value=\"1\">1</option>\n                          <option value=\"2\">2</option>\n                          <option value=\"3\">3</option>\n                          <option value=\"4\">4</option>\n                          <option value=\"5+\">5+</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Maximum Bathrooms</label>\n                      <div class=\"col-sm-4\">\n                        <select [(ngModel)]=\"deal.maxBathrooms\" name=\"bathrooms\" class=\"form-control\">\n                          <option value=\"0\">0</option>\n                          <option value=\"1\">1</option>\n                          <option value=\"2\">2</option>\n                          <option value=\"3\">3</option>\n                          <option value=\"4\">4</option>\n                          <option value=\"5+\">5+</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"maxRehab\" class=\"col-sm-2 col-form-label\">Max Rehab Cost</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter Max Rehab Cost\" [(ngModel)]=\"deal.maxRehabCost\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"arv\" class=\"col-sm-2 col-form-label\">After Repair Value</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter After Repair Value\" [(ngModel)]=\"deal.afterRepairValue\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"yearBuilt\" class=\"col-sm-2 col-form-label\">Year Built</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter Year Built\" [(ngModel)]=\"deal.yearBuilt\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"squareFootage\" class=\"col-sm-2 col-form-label\">Square Footage</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter Square Footage\" [(ngModel)]=\"deal.squareFootage\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-4 col-form-label\">Seller Financing Available?</label>\n                      <div class=\"col-sm-4\">\n                        <select [(ngModel)]=\"deal.sellerFinancing\" name=\"sellerFinancing\" class=\"form-control\">\n                          <option value=\"No\">No</option>\n                          <option value=\"Yes\">Yes</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 search-btn\"\n                        (click)=\"changeTab('property','location')\">Previous</button>\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                        (click)=\"changeTab('property','return')\">Next</button>\n                    </div>\n                  </div> <!-- property-content end -->\n\n\n                  <!-- Return tab -->\n                  <div class=\"return-content\" id=\"return-content\">\n                    <div class=\"form-group row\">\n                      <label for=\"capRate\" class=\"col-sm-2 col-form-label\">Minimum Cap Rate %</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter Cap Rate\" [(ngModel)]=\"deal.capRate\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"cashReturn\" class=\"col-sm-2 col-form-label\">Minimum Gross Income</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter Gross Income\" [(ngModel)]=\"deal.grossIncome\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 search-btn\"\n                        (click)=\"changeTab('return','property')\">Previous</button>\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                        (click)=\"changeTab('return','confirm')\">Next</button>\n                    </div>\n                  </div> <!-- return-content end -->\n\n\n                  <!-- Confirm tab -->\n                  <div class=\"confirm-content\" id=\"confirm-content\">\n                    <div class=\"form-group row\">\n                      <label for=\"city\" class=\"col-sm-2 col-form-label\">City</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.city\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"state\" class=\"col-sm-2 col-form-label\">State</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.state\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"zip\" class=\"col-sm-2 col-form-label\">Zip Code</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.zipCode\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"propertyType\" class=\"col-sm-2 col-form-label\">Property Type</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.propertyType\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"purchasePrice\" class=\"col-sm-2 col-form-label\">Purchase Price</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.purchasePrice\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"bedrooms\" class=\"col-sm-2 col-form-label\">Minimum Bedrooms</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.minBedrooms\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"bedrooms\" class=\"col-sm-2 col-form-label\">Maximum Bedrooms</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.maxBedrooms\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"bathrooms\" class=\"col-sm-2 col-form-label\">Minimum Bathrooms</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.minBathrooms\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"bathrooms\" class=\"col-sm-2 col-form-label\">Maximum Bathrooms</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.maxBathrooms\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"maxRehab\" class=\"col-sm-2 col-form-label\">Max Rehab Cost</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.maxRehabCost\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"arv\" class=\"col-sm-2 col-form-label\">After Repair Value</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.afterRepairValue\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"yearBuilt\" class=\"col-sm-2 col-form-label\">Oldest Year</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.yearBuilt\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"squareFootage\" class=\"col-sm-2 col-form-label\">Minimum Square Footage</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.squareFootage\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"sellerFinancing\" class=\"col-sm-2 col-form-label\">Seller Financing Available</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.sellerFinancing\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"capRate\" class=\"col-sm-2 col-form-label\">Cap Rate</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.capRate\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"minGrossIncome\" class=\"col-sm-2 col-form-label\">Minimum Gross Income</label>\n                      <div class=\"col-sm-10\">\n                        <input class=\"form-control\" [(ngModel)]=\"deal.grossIncome\" disabled>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 search-btn\"\n                        (click)=\"changeTab('confirm','return')\">Previous</button>\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                        (click)=\"search()\">Next</button>\n                    </div>\n                  </div>  <!-- confirm-content end -->\n\n\n                  <div class=\"search-complete-content\" id=\"search-complete-content\">\n                    <div class=\"form-group row buttons\">\n                      <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4 search-btn\"\n                          (click)=\"startOver()\">Start Over</button>\n                    </div>\n                  </div> <!-- search-complete end -->\n\n\n                </div> <!-- card-body ends -->\n              </div> <!-- card ends -->\n            </div> <!-- col-12 grid-margin ends -->\n          </div> <!-- row ends -->\n\n\n          <div class=\"row\" id=\"table-row\">\n            <div class=\"col-xs-12 grid-margin stretch-card\" id=\"responsive-stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Results</h4>\n\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\">#</th>\n                          <th scope=\"col\">City</th>\n                          <th scope=\"col\">State</th>\n                          <th scope=\"col\">Zip Code</th>\n                          <th scope=\"col\">Property Type</th>\n                          <th scope=\"col\">Purchase Price</th>\n                          <th scope=\"col\">Bedrooms</th>\n                          <th scope=\"col\">Bathrooms</th>\n                          <th scope=\"col\">Square Footage</th>\n                          <th scope=\"col\">Year Built</th>\n                          <th scope=\"col\">Seller Financing</th>\n                          <th scope=\"col\">Net Operating Income</th>\n                          <th scope=\"col\">Cap Rate</th>\n                          <th scope=\"col\">CoC Return</th>\n                          <th scope=\"col\">Real Return</th>\n                          <th scope=\"col\">Action</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\" let ad of currentAds\n                          | filterCity: deal.city\n                          | filterState: deal.state\n                          | filterZipCode: deal.zipCode\n                          | filterPropertyType: deal.propertyType\n                          | filterPurchasePrice: deal.purchasePrice\n                          | filterMinBedrooms: deal.minBedrooms\n                          | filterMaxBedrooms: deal.maxBedrooms\n                          | filterMinBathrooms: deal.minBathrooms\n                          | filterMaxBathrooms: deal.maxBathrooms\n                          | filterMaxRehabCost: deal.maxRehabCost\n                          | filterAfterRepairValue: deal.afterRepairValue\n                          | filterYearBuilt: deal.yearBuilt\n                          | filterSquareFootage: deal.squareFootage\n                          | filterSellerFinancing: deal.sellerFinancing\n                          | filterMinCapRate: deal.capRate\n                          | filterMinGrossIncome: deal.grossIncome\n                          ; let i = index \">\n                          <th scope=\"row\">{{ i + 1 }}</th>\n                          <td>{{ ad.city }}</td>\n                          <td>{{ ad.state }}</td>\n                          <td>{{ ad.zipCode }}</td>\n                          <td>{{ ad.propertyType }}</td>\n                          <td>$ {{ ad.purchasePrice }}</td>\n                          <td>{{ ad.bedrooms }}</td>\n                          <td>{{ ad.bathrooms }}</td>\n                          <td>{{ ad.squareFootage }}</td>\n                          <td>{{ ad.yearBuilt }}</td>\n                          <td>{{ ad.sellerFinancing }}</td>\n                          <td>$ {{ ad.netOperatingIncome }}</td>\n                          <td>{{ ad.capRate }}%</td>\n                          <td>{{ ad.cashOnCashReturn }}%</td>\n                          <td>{{ ad.internalRateOfReturn }}%</td>\n                          <td *ngIf=\"investorUserType && ad.investorId=='currentUser'\">\n                            <button class=\"btn btn-inverse-danger btn-rounded btn-fw\" (click)=\"deleteAd(ad._id)\">Delete</button>\n                          </td>\n                          <td *ngIf=\"ad.investorId!='currentUser'\">\n                            <button class=\"btn btn-inverse-primary btn-rounded btn-fw\"\n                              [routerLink]=\"['/user/', ad.investorId]\">Profile\n                            </button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n        </div> <!-- content-wrapper ends -->\n\n\n\n        <app-footer></app-footer>\n\n\n      </div> <!-- main panel ends -->\n\n\n\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller ends -->\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/view-deal-ads/view-deal-ads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDealAdsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dealAd_service__ = __webpack_require__("./src/app/services/dealAd.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewDealAdsComponent = /** @class */ (function () {
    function ViewDealAdsComponent(alertService, authService, dealAdService, router) {
        this.alertService = alertService;
        this.authService = authService;
        this.dealAdService = dealAdService;
        this.router = router;
        this.subscriptions = [];
        this.currentAds = [];
        this.investorUserType = false;
        this.wholesalerUserType = false;
        this.lenderUserType = false;
    }
    ViewDealAdsComponent.prototype.ngOnInit = function () {
        document.getElementById("table-row").hidden = true;
        document.getElementById("property-content").hidden = true;
        document.getElementById("return-content").hidden = true;
        document.getElementById("confirm-content").hidden = true;
        document.getElementById("search-complete-content").hidden = true;
        this.currentUser = this.authService.loggedInUser();
        this.userType = this.authService.loggedInUserType();
        if (this.userType == 'Investor') {
            this.investorUserType = true;
        }
        else if (this.userType == 'Wholesaler') {
            this.wholesalerUserType = true;
        }
        else {
            this.lenderUserType = true;
        }
        this.getAds();
        this.dealModel();
    };
    ViewDealAdsComponent.prototype.dealModel = function () {
        this.deal = {
            city: '',
            state: 'AL',
            zipCode: '',
            minPurchasePrice: '',
            maxPurchasePrice: '',
            propertyType: 'Single Family',
            minBedrooms: '0',
            maxBedrooms: '5+',
            minBathrooms: '0',
            maxBathrooms: '5+',
            maxRehabCost: '',
            afterRepairValue: '',
            yearBuilt: '',
            squareFootage: '',
            sellerFinancing: 'No',
            capRate: '',
            grossIncome: ''
        };
    };
    ViewDealAdsComponent.prototype.getAds = function () {
        var _this = this;
        if (this.investorUserType) {
            this.getDealsSubscription = this.dealAdService.getDealAdsForInvestor(this.currentUser)
                .subscribe(function (response) {
                _this.currentAds = response;
            }, function (error) {
                _this.alertService.error('Error retrieving deal ads for investor.');
            });
            this.subscriptions.push(this.getDealsSubscription);
        }
        else {
            this.getDealsSubscription = this.dealAdService.getAllAds()
                .subscribe(function (response) {
                _this.currentAds = response;
            }, function (error) {
                _this.alertService.error('Error retrieving all ads.');
            });
            this.subscriptions.push(this.getDealsSubscription);
        }
    };
    ViewDealAdsComponent.prototype.deleteAd = function (adId) {
        var _this = this;
        this.deleteAdSubscription = this.dealAdService.deleteAd(adId)
            .subscribe(function (response) {
            _this.alertService.success(response.message, true);
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            _this.alertService.error(error.message, true);
        });
        this.subscriptions.push(this.deleteAdSubscription);
    };
    ViewDealAdsComponent.prototype.changeTab = function (current, newTab) {
        document.getElementById(current + '-content').hidden = true;
        document.getElementById(current + '-tab').classList.remove('active');
        document.getElementById(newTab + '-content').hidden = false;
        document.getElementById(newTab + '-tab').classList.add('active');
    };
    ViewDealAdsComponent.prototype.search = function () {
        document.getElementById('return-content').hidden = true;
        document.getElementById('table-row').hidden = false;
        document.getElementById('confirm-content').hidden = true;
        document.getElementById('search-complete-content').hidden = false;
        document.getElementById('search-row').classList.add('searched');
    };
    ViewDealAdsComponent.prototype.startOver = function () {
        document.getElementById('search-complete-content').hidden = true;
        document.getElementById('location-content').hidden = false;
        this.dealModel();
    };
    ViewDealAdsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ViewDealAdsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-deal-ads',
            template: __webpack_require__("./src/app/view-deal-ads/view-deal-ads.component.html"),
            styles: [__webpack_require__("./src/app/view-deal-ads/view-deal-ads.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_dealAd_service__["a" /* DealAdService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], ViewDealAdsComponent);
    return ViewDealAdsComponent;
}());



/***/ }),

/***/ "./src/app/view-properties/view-properties.component.css":
/***/ (function(module, exports) {

module.exports = ".table-row {\n  width: 100%;\n  max-width: 100%;\n}\n\n#property-photo-wrapper {\n  width: 20%;\n}\n\n#property-photo {\n  width: 120px;\n  height: 110px;\n  border-radius: 10%;\n}\n\n#property-photo:hover {\n  cursor: pointer;\n}\n\n#property-address-wrapper {\n  width: 55%;\n}\n\n#property-address-wrapper > a:hover {\n  text-decoration: none;\n}\n\n.property-status {\n  margin-top: 5px;\n}\n\n.property-row-right {\n  margin-top: 10px;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}\n\n.star {\n  float: right;\n}\n\n.full {\n  color: #F0d64E;\n}\n\n.star:hover {\n  cursor: pointer;\n  color: #F0d64E;\n}"

/***/ }),

/***/ "./src/app/view-properties/view-properties.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n    <app-sidebar></app-sidebar>\n\n\n    <div class=\"container-fluid page-body-wrapper\" *ngIf=\"currentUser\">\n\n\n\n      <div class=\"main-panel\" *ngIf=\"userType=='Wholesaler'\">\n        <div class=\"content-wrapper\">\n          <div class=\"row grid-margin\">\n\n\n            <div class=\"col-lg-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Listed Properties</h4>\n                  <p class=\"card-text\" *ngIf=\"wholesalerPropertiesListed.length==0\">\n                    You currently do not have any properties listed. If you have a property under contract and would like to upload the property for investors to see,\n                    please click <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                      [routerLink]=\"['/addproperty']\">HERE</button>.\n                  </p>\n\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover\">\n                      <tbody>\n                        <tr class=\"table-row\" *ngFor=\"let property of wholesalerPropertiesListed\">\n                          <td id=\"property-photo-wrapper\">\n                            <div class=\"d-flex justify-content-center\">\n                              <img src=\"{{ property.photos[0] }}\" alt=\"\" id=\"property-photo\" [routerLink]=\"['/view/', property._id]\">\n                            </div>\n                          </td>\n                          <td id=\"property-address-wrapper\">\n                            <a [routerLink]=\"['/view/', property._id]\">\n                              <h3>{{ property.address }}</h3>\n                            </a>\n                            <p>\n                              {{ property.propertyType }}\n                            </p>\n                            <div *ngIf=\"property.auctionEstablished=='true'\">\n                              <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                                (click)=\"enterAuction(property)\">View Bids\n                              </button>\n                            </div>\n                            <div *ngIf=\"property.auctionEstablished=='false'\">\n                              <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                                (click)=\"openAuction(property)\">Open Auction\n                              </button>\n                            </div>\n                          </td>\n                          <td>\n                            <h3 class=\"property-row-right\">\n                              $ {{ property.purchasePrice }}\n                            </h3>\n                            <div class=\"property-row-right\">\n                              <div class=\"btn btn-primary btn-rounded btn-fw property-status\">\n                                {{ property.city }}, {{ property.state }} {{ property.zipCode }}\n                              </div>\n                            </div>\n                            <div class=\"property-row-right\">\n                              <div class=\"btn btn-warning btn-rounded btn-fw property-status\">Listed</div>\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n          <div class=\"row grid-margin\">\n            <div class=\"col-lg-12\">\n              <div class=\"card px-3\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Sold Properties</h4>\n                  <p class=\"card-text\" *ngIf=\"wholesalerPropertiesSold.length==0\">\n                    You have not sold any properties. Good luck going out and finding a deal!\n                  </p>\n\n\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover\">\n                      <tbody>\n                        <tr class=\"table-row\" *ngFor=\"let property of wholesalerPropertiesSold\">\n                          <td id=\"property-photo-wrapper\">\n                            <div class=\"d-flex justify-content-center\">\n                              <img src=\"{{ property.photos[0] }}\" alt=\"\" id=\"property-photo\">\n                            </div>\n                          </td>\n                          <td id=\"property-address-wrapper\">\n                            <a [routerLink]=\"['/view/', property._id]\">\n                              <h3>{{ property.address }}</h3>\n                            </a>\n                            <p>\n                              {{ property.propertyType }}\n                            </p>\n                          </td>\n                          <td>\n                            <h3 class=\"property-row-right\">\n                              $ {{ property.purchasePrice }}\n                            </h3>\n                            <div class=\"property-row-right\">\n                              <div class=\"btn btn-primary btn-rounded btn-fw property-status\">\n                                {{ property.city }}, {{ property.state }} {{ property.zipCode }}\n                              </div>\n                            </div>\n                            <div class=\"property-row-right\">\n                              <div class=\"btn btn-inverse-success btn-rounded btn-sm mt-3 mb-4 property-status\">Sold</div>\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n\n\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row grid-margin\">\n            <div class=\"col-lg-12\">\n              <div class=\"card px-3\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Sold Properties Awaiting Confirmation</h4>\n                  <p class=\"card-text\" *ngIf=\"wholesalerPropertiesSoldPending==0\">\n                    You do not have any sold properties awaiting confirmation from an investor.\n                  </p>\n\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover\">\n                      <tbody>\n                        <tr class=\"table-row\" *ngFor=\"let property of wholesalerPropertiesSoldPending\">\n                          <td id=\"property-photo-wrapper\">\n                            <div class=\"d-flex justify-content-center\">\n                              <img src=\"{{ property.photos[0] }}\" alt=\"\" id=\"property-photo\">\n                            </div>\n                          </td>\n                          <td id=\"property-address-wrapper\">\n                            <a [routerLink]=\"['/view/', property._id]\">\n                              <h3>{{ property.address }}</h3>\n                            </a>\n                            <p>\n                              {{ property.propertyType }}\n                            </p>\n                            <div>\n                              <button type=\"button\" class=\"btn btn-inverse-warning btn-rounded btn-sm mt-3 mb-4 property-status\">\n                                Sold Pending\n                              </button>\n                            </div>\n                          </td>\n                          <td>\n                            <h3 class=\"property-row-right\">\n                              $ {{ property.purchasePrice }}\n                            </h3>\n                            <div class=\"property-row-right\">\n                              <div class=\"btn btn-primary btn-rounded btn-fw property-status\">\n                                {{ property.city }}, {{ property.state }} {{ property.zipCode }}\n                              </div>\n                            </div>\n                            <div class=\"property-row-right\">\n                              <div class=\"btn btn-inverse-success btn-rounded btn-sm mt-3 mb-4 property-status\">Sold Pending</div>\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div> <!-- end of table-responsive -->\n\n              </div> <!-- end of card body -->\n            </div> <!-- end of card px-3 -->\n          </div> <!-- end of col-lg-12 -->\n        </div> <!-- end row grid margin -->\n\n        <app-footer></app-footer>\n\n      </div> <!-- content-wrapper ends -->\n    </div> <!-- main-panel ends / End of Wholesaler -->\n\n\n    <div class=\"main-panel\" *ngIf=\"currentUser.userType=='Investor'\">\n      <div class=\"content-wrapper\">\n\n        <div class=\"row\" *ngIf=\"investorPropertiesBoughtPending.length>0\">\n          <div class=\"col-lg-12 grid-margin stretch-card\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h4>Awaiting Your Approval</h4>\n\n\n                <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                    <tbody>\n                      <tr class=\"table-row\" *ngFor=\"let property of investorPropertiesSoldPending\">\n                        <td id=\"property-photo-wrapper\">\n                          <div class=\"d-flex justify-content-center\">\n                            <img src=\"{{ property.photos[0] }}\" alt=\"\" id=\"property-photo\">\n                          </div>\n                        </td>\n                        <td id=\"property-address-wrapper\">\n                          <a [routerLink]=\"['/view/', property._id]\">\n                            <h3>{{ property.address }}</h3>\n                          </a>\n                          <p>\n                            {{ property.propertyType }}\n                          </p>\n                          <div>\n                            <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                              (click)=\"acceptSold(property)\">Accept\n                            </button>\n                            <button class=\"btn btn-inverse-danger btn-rounded btn-sm mt-3 mb-4\"\n                              (click)=\"denySold(property)\">Deny\n                            </button>\n                          </div>\n                        </td>\n                        <td>\n                          <h3 class=\"property-row-right\">\n                            $ {{ property.purchasePrice }}\n                          </h3>\n                          <div class=\"property-row-right\">\n                            <div class=\"btn btn-primary btn-rounded btn-fw property-status\">\n                              {{ property.city }}, {{ property.state }} {{ property.zipCode }}\n                            </div>\n                          </div>\n                          <div class=\"property-row-right\">\n                            <div class=\"btn btn-inverse-success btn-rounded btn-sm mt-3 mb-4 property-status\">Sold Pending</div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div> <!-- end of table-responsive -->\n\n              </div> <!-- end of card-body -->\n            </div> <!-- end of card -->\n          </div> <!-- end of col-lg-12 -->\n        </div> <!-- end of row -->\n\n        <div class=\"row grid-margin\">\n          <div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Properties Listed by Connections</h4>\n                <p class=\"card-text\" *ngIf=\"investorPropertiesConnected.length==0\">\n                  Your wholesaler connections do not have any properties listed. Click <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\" [routerLink]=\"['/search']\">HERE</button> to search for other wholesalers or properties.\n                </p>\n\n                <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                    <tbody>\n                      <tr class=\"table-row\" *ngFor=\"let property of investorPropertiesConnected\">\n                        <td id=\"property-photo-wrapper\">\n                          <div class=\"d-flex justify-content-center\">\n                            <img src=\"{{ property.photos[0] }}\" alt=\"\" id=\"property-photo\">\n                          </div>\n                        </td>\n                        <td id=\"property-address-wrapper\">\n                          <a [routerLink]=\"['/view/', property._id]\">\n                            <h3>{{ property.address }}</h3>\n                          </a>\n                          <p>\n                            {{ property.propertyType }}\n                          </p>\n                          <div>\n                            <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                              (click)=\"enterAuction(property)\">View Wholesaler\n                            </button>\n                            <button *ngIf=\"property.auctionEstablished=='true'\" class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                              (click)=\"enterAuction(property)\">Enter Auction\n                            </button>\n                          </div>\n                        </td>\n                        <td>\n                          <h3 class=\"property-row-right\">\n                            $ {{ property.purchasePrice }} <span class=\"star\" (click)=\"starProperty(property)\">\n                                                             <i class=\"far fa-star fa-lg\"></i>\n                                                           </span>\n                          </h3>\n                          <div class=\"property-row-right\">\n                            <div class=\"btn btn-primary btn-rounded btn-fw property-status\">\n                              {{ property.city }}, {{ property.state }} {{ property.zipCode }}\n                            </div>\n                            <div class=\"btn btn-warning btn-rounded btn-fw property-status\">Listed</div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div> <!-- end of table-responsive -->\n\n              </div> <!-- end of card-body -->\n            </div> <!-- end of card -->\n          </div> <!-- end of col-lg-12 -->\n        </div> <!-- end of row grid margin -->\n\n\n        <div class=\"row grid-margin\">\n          <div class=\"col-lg-12\">\n            <div class=\"card px-3\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Properties Starred</h4>\n\n                <p class=\"card-text\" *ngIf=\"investorPropertiesStarred.length==0\">\n                  You do not have any properties starred. If your wholesaler connections do not have any properties listed that interest you, feel free to Click <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\" [routerLink]=\"['/search']\">HERE</button> to search for properties.\n                </p>\n\n\n                <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                    <tbody>\n                      <tr class=\"table-row\" *ngFor=\"let property of investorPropertiesStarred\">\n                        <td id=\"property-photo-wrapper\">\n                          <div class=\"d-flex justify-content-center\">\n                            <img src=\"{{ property.photos[0] }}\" alt=\"\" id=\"property-photo\">\n                          </div>\n                        </td>\n                        <td id=\"property-address-wrapper\">\n                          <a [routerLink]=\"['/view/', property._id]\">\n                            <h3>{{ property.address }}</h3>\n                          </a>\n                          <p>\n                            {{ property.propertyType }}\n                          </p>\n                          <div>\n                            <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                              [routerLink]=\"['/user/', property.wholesaler_id]\">View Wholesaler\n                            </button>\n                          </div>\n                        </td>\n                        <td>\n                          <h3 class=\"property-row-right\">\n                            $ {{ property.purchasePrice }} <span class=\"star full\" (click)=\"unStarProperty(property)\">\n                                                             <i class=\"fas fa-star fa-lg\"></i>\n                                                           </span>\n                          </h3>\n                          <div class=\"property-row-right\">\n                            <div class=\"btn btn-primary btn-rounded btn-fw property-status\">\n                              {{ property.city }}, {{ property.state }} {{ property.zipCode }}\n                            </div>\n                            <div class=\"btn btn-inverse-success btn-rounded btn-sm mt-3 mb-4\">Starred</div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div> <!-- end of table responsive -->\n\n\n              </div> <!-- end of card-body -->\n            </div> <!-- end of card px-3 -->\n          </div> <!-- end of col-lg-12 -->\n        </div> <!-- end of row grid margin -->\n\n\n        <div class=\"row grid-margin\">\n          <div class=\"col-lg-12\">\n            <div class=\"card px-3\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Properties Bought</h4>\n\n                <p class=\"card-text\" *ngIf=\"investorPropertiesBought.length==0\">\n                  You have not bought any properties yet. Your first purchase is right around the corner!\n                </p>\n\n                <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                    <tbody>\n                      <tr class=\"table-row\" *ngFor=\"let property of investorPropertiesBought\">\n                        <td id=\"property-photo-wrapper\">\n                          <div class=\"d-flex justify-content-center\">\n                            <img src=\"{{ property.photos[0] }}\" alt=\"\" id=\"property-photo\">\n                          </div>\n                        </td>\n                        <td id=\"property-address-wrapper\">\n                          <a [routerLink]=\"['/view/', property._id]\">\n                            <h3>{{ property.address }}</h3>\n                          </a>\n                          <p>\n                            {{ property.propertyType }}\n                          </p>\n                          <div>\n                            <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                              [routerLink]=\"['/user/', property.wholesaler_id]\">View Wholesaler\n                            </button>\n                          </div>\n                        </td>\n                        <td>\n                          <h3 class=\"property-row-right\">\n                            $ {{ property.purchasePrice }}\n                          </h3>\n                          <div class=\"property-row-right\">\n                            <div class=\"btn btn-primary btn-rounded btn-fw property-status\">\n                              {{ property.city }}, {{ property.state }} {{ property.zipCode }}\n                            </div>\n                            <div class=\"btn btn-inverse-success btn-rounded btn-sm mt-3 mb-4 property-success\">Sold</div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table> <!-- end of table -->\n                </div> <!-- end of table-responsive -->\n\n              </div> <!-- end of card-body -->\n            </div> <!-- end of card px-3 -->\n          </div> <!-- end of col-lg-12 -->\n        </div> <!-- end of row grid margin -->\n\n        <app-footer></app-footer>\n\n      </div> <!-- content-wrapper ends -->\n    </div> <!-- main-panel ends / Investor ends -->\n\n\n\n    <div class=\"main-panel\" *ngIf=\"currentUser.userType=='Lender'\">\n      <div class=\"content-wrapper\">\n\n\n        <div class=\"row grid-margin\">\n          <div class=\"col-lg-12\">\n            <div class=\"card px-3\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Properties Carrying the Note</h4>\n\n\n                <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                    <tbody>\n                      <tr class=\"table-row\" *ngFor=\"let property of lenderPropertiesBought\">\n                        <td id=\"property-photo-wrapper\">\n                          <div class=\"d-flex justify-content-center\">\n                            <img src=\"{{ property.photos[0] }}\" alt=\"\" id=\"property-photo\">\n                          </div>\n                        </td>\n                        <td id=\"property-address-wrapper\">\n                          <a [routerLink]=\"['/view/', property._id]\">\n                            <h3>{{ property.address }}</h3>\n                          </a>\n                          <p>\n                            {{ property.propertyType }}\n                          </p>\n                          <div>\n                            <button class=\"btn btn-inverse-primary btn-rounded btn-sm mt-3 mb-4\"\n                              [routerLink]=\"['/user/', property.wholesaler_id]\">View Wholesaler\n                            </button>\n                          </div>\n                        </td>\n                        <td>\n                          <h3 class=\"property-row-right\">\n                            $ {{ property.purchasePrice }}\n                          </h3>\n                          <div class=\"property-row-right\">\n                            <div class=\"btn btn-primary btn-rounded btn-fw property-status\">\n                              {{ property.city }}, {{ property.state }} {{ property.zipCode }}\n                            </div>\n                            <div class=\"btn btn-inverse-success btn-rounded btn-sm mt-3 mb-4\">Sold</div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div> <!-- end of table-responsive -->\n\n\n              </div> <!-- end of card-body -->\n            </div> <!-- end of card px-3 -->\n          </div> <!-- end of col-lg-12 -->\n        </div> <!-- end of row grid margin -->\n      </div> <!-- content-wrapper ends -->\n\n\n      <app-footer></app-footer>\n\n    </div> <!-- main-panel ends / Lender ends -->\n\n\n      <!-- Add Auction Closing Time MODAL -->\n      <div class=\"modal fade\" id=\"deadlineModal\" tabindex=\"-1\" role=\"dialog\"\n                aria-labelledby=\"deadlineModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"closingTimeModal\">Add Deadline for Auction</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form class=\"forms-sample\" #deadlineForm=\"ngForm\">\n                <div class=\"form-group\">\n                  <label for=\"month\">Month:</label>\n                  <select class=\"form-control\" [(ngModel)]=\"dateTime.month\" name=\"month\"\n                    #month=\"ngModel\">\n                    <option value=\"January\">January</option>\n                    <option value=\"February\">February</option>\n                    <option value=\"March\">March</option>\n                    <option value=\"April\">April</option>\n                    <option value=\"May\">May</option>\n                    <option value=\"June\">June</option>\n                    <option value=\"July\">July</option>\n                    <option value=\"August\">August</option>\n                    <option value=\"September\">September</option>\n                    <option value=\"October\">October</option>\n                    <option value=\"November\">November</option>\n                    <option value=\"December\">December</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"closingTime\">Day:</label>\n                  <select class=\"form-control\" [(ngModel)]=\"dateTime.day\" name=\"day\"\n                    #day=\"ngModel\">\n                    <option value=\"1\">1</option>\n                    <option value=\"2\">2</option>\n                    <option value=\"3\">3</option>\n                    <option value=\"4\">4</option>\n                    <option value=\"5\">5</option>\n                    <option value=\"6\">6</option>\n                    <option value=\"7\">7</option>\n                    <option value=\"8\">8</option>\n                    <option value=\"9\">9</option>\n                    <option value=\"10\">10</option>\n                    <option value=\"11\">11</option>\n                    <option value=\"12\">12</option>\n                    <option value=\"13\">13</option>\n                    <option value=\"14\">14</option>\n                    <option value=\"15\">15</option>\n                    <option value=\"16\">16</option>\n                    <option value=\"17\">17</option>\n                    <option value=\"18\">18</option>\n                    <option value=\"19\">19</option>\n                    <option value=\"20\">20</option>\n                    <option value=\"21\">21</option>\n                    <option value=\"22\">22</option>\n                    <option value=\"23\">23</option>\n                    <option value=\"24\">24</option>\n                    <option value=\"25\">25</option>\n                    <option value=\"26\">26</option>\n                    <option value=\"27\">27</option>\n                    <option value=\"28\">28</option>\n                    <option value=\"29\">29</option>\n                    <option value=\"30\">30</option>\n                    <option value=\"31\">31</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"hour\">Hour:</label>\n                  <select class=\"form-control\" [(ngModel)]=\"dateTime.hour\" name=\"hour\"\n                    #hour=\"ngModel\">\n                    <option value=\"1\">1</option>\n                    <option value=\"2\">2</option>\n                    <option value=\"3\">3</option>\n                    <option value=\"4\">4</option>\n                    <option value=\"5\">5</option>\n                    <option value=\"6\">6</option>\n                    <option value=\"7\">7</option>\n                    <option value=\"8\">8</option>\n                    <option value=\"9\">9</option>\n                    <option value=\"10\">10</option>\n                    <option value=\"11\">11</option>\n                    <option value=\"12\">12</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"minutes\">Minutes:</label>\n                  <select class=\"form-control\" [(ngModel)]=\"dateTime.minutes\" name=\"minutes\"\n                    #minutes=\"ngModel\">\n                    <option value=\"00\">00</option>\n                    <option value=\"01\">01</option>\n                    <option value=\"02\">02</option>\n                    <option value=\"03\">03</option>\n                    <option value=\"04\">04</option>\n                    <option value=\"05\">05</option>\n                    <option value=\"06\">06</option>\n                    <option value=\"07\">07</option>\n                    <option value=\"08\">08</option>\n                    <option value=\"09\">09</option>\n                    <option value=\"10\">10</option>\n                    <option value=\"11\">11</option>\n                    <option value=\"12\">12</option>\n                    <option value=\"13\">13</option>\n                    <option value=\"14\">14</option>\n                    <option value=\"15\">15</option>\n                    <option value=\"16\">16</option>\n                    <option value=\"17\">17</option>\n                    <option value=\"18\">18</option>\n                    <option value=\"19\">19</option>\n                    <option value=\"20\">20</option>\n                    <option value=\"21\">21</option>\n                    <option value=\"22\">22</option>\n                    <option value=\"23\">23</option>\n                    <option value=\"24\">24</option>\n                    <option value=\"25\">25</option>\n                    <option value=\"26\">26</option>\n                    <option value=\"27\">27</option>\n                    <option value=\"28\">28</option>\n                    <option value=\"29\">29</option>\n                    <option value=\"30\">30</option>\n                    <option value=\"31\">31</option>\n                    <option value=\"32\">32</option>\n                    <option value=\"33\">33</option>\n                    <option value=\"34\">34</option>\n                    <option value=\"35\">35</option>\n                    <option value=\"36\">36</option>\n                    <option value=\"37\">37</option>\n                    <option value=\"38\">38</option>\n                    <option value=\"39\">39</option>\n                    <option value=\"40\">40</option>\n                    <option value=\"41\">41</option>\n                    <option value=\"42\">42</option>\n                    <option value=\"43\">43</option>\n                    <option value=\"44\">44</option>\n                    <option value=\"45\">45</option>\n                    <option value=\"46\">46</option>\n                    <option value=\"47\">47</option>\n                    <option value=\"48\">48</option>\n                    <option value=\"49\">49</option>\n                    <option value=\"50\">50</option>\n                    <option value=\"51\">51</option>\n                    <option value=\"52\">52</option>\n                    <option value=\"53\">53</option>\n                    <option value=\"54\">54</option>\n                    <option value=\"55\">55</option>\n                    <option value=\"56\">56</option>\n                    <option value=\"57\">57</option>\n                    <option value=\"58\">58</option>\n                    <option value=\"59\">59</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"am\">am</label>\n                  <input name=\"am\" type=\"radio\" value=\"am\" [(ngModel)]=\"dateTime.time\">\n                  <label for=\"pm\">pm</label>\n                  <input name=\"pm\" type=\"radio\" value=\"pm\" [(ngModel)]=\"dateTime.time\">\n                </div>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              <button id=\"deadlineConfirm\" type=\"button\"\n                class=\"btn btn-primary\"\n                [disabled]=\"deadlineForm.invalid\"\n                (click)=\"submitDeadlineModal()\"\n              >Confirm\n              </button>\n            </div>\n          </div>\n        </div>\n      </div> <!-- END MODAL -->\n\n\n\n\n\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller ends -->\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/view-properties/view-properties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPropertiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auction_service__ = __webpack_require__("./src/app/services/auction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_deleteProperty_service__ = __webpack_require__("./src/app/services/deleteProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_editProperty_service__ = __webpack_require__("./src/app/services/editProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_getAllProperties_service__ = __webpack_require__("./src/app/services/getAllProperties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_getUserProperties_service__ = __webpack_require__("./src/app/services/getUserProperties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_soldProperty_service__ = __webpack_require__("./src/app/services/soldProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_viewProperty_service__ = __webpack_require__("./src/app/services/viewProperty.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewPropertiesComponent = /** @class */ (function () {
    function ViewPropertiesComponent(alertService, auctionService, authService, getPropertyService, deletePropertyService, getUserPropertiesService, editPropertyService, soldPropertyService, viewPropertyService, router, activatedRoute) {
        this.alertService = alertService;
        this.auctionService = auctionService;
        this.authService = authService;
        this.getPropertyService = getPropertyService;
        this.deletePropertyService = deletePropertyService;
        this.getUserPropertiesService = getUserPropertiesService;
        this.editPropertyService = editPropertyService;
        this.soldPropertyService = soldPropertyService;
        this.viewPropertyService = viewPropertyService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subscriptions = [];
        this.properties = [];
        this.investorPropertiesBought = [];
        this.investorPropertiesBoughtPending = [];
        this.investorPropertiesConnected = [];
        this.investorPropertiesStarred = [];
        this.lenderPropertiesBought = [];
        this.lenderPropertiesConnected = [];
        this.wholesalerPropertiesListed = [];
        this.wholesalerPropertiesSold = [];
        this.wholesalerPropertiesSoldPending = [];
    }
    ViewPropertiesComponent.prototype.ngOnInit = function () {
        this.userType = this.authService.loggedInUserType();
        this.date = new Date();
        this.currentMonth = this.date.getMonth();
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.currentDay = this.date.getDate();
        this.dateTime = {
            month: this.months[this.currentMonth],
            day: this.currentDay + 1,
            hour: '5',
            minutes: '00',
            time: 'pm'
        };
        if (this.userType == 'Wholesaler') {
            this.getPropertiesForWholesaler();
        }
        else if (this.userType == 'Investor') {
            this.getPropertiesForInvestor();
        }
        else {
            this.getPropertiesForLender();
        }
        this.getCurrentUser();
    };
    ViewPropertiesComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.getCurrentUserSubscription = this.authService.getLoggedInUser()
            .subscribe(function (response) {
            _this.currentUser = response.data;
        }, function (error) {
            _this.alertService.error('Error retrieving user.');
        });
    };
    ViewPropertiesComponent.prototype.getPropertiesForWholesaler = function () {
        var _this = this;
        var wholesalerID = this.authService.loggedInUser();
        this.getWholesalerPropertiesSubscription = this.getUserPropertiesService.getWholesalerUserProperties(wholesalerID)
            .subscribe(function (response) {
            response.forEach(function (property) {
                if (property.status === 'Listed') {
                    _this.wholesalerPropertiesListed.push(property);
                }
                else if (property.status === 'Sold') {
                    _this.wholesalerPropertiesSold.push(property);
                }
                else if (property.status === 'Sold-Pending') {
                    _this.wholesalerPropertiesSoldPending.push(property);
                }
            });
        }, function (error) {
            _this.alertService.error('Error retrieving properties for wholesaler.');
        });
        this.subscriptions.push(this.getWholesalerPropertiesSubscription);
    };
    ViewPropertiesComponent.prototype.viewProperty = function (property) {
        var propertyId = property._id;
        this.router.navigate(['/view/', propertyId]);
    };
    ViewPropertiesComponent.prototype.getPropertiesForInvestor = function () {
        var _this = this;
        var investorID = this.authService.loggedInUser();
        this.getInvestorPropertiesSubscription = this.getUserPropertiesService.getInvestorUserProperties(investorID)
            .subscribe(function (response) {
            response.forEach(function (property) {
                if (property.status === 'Sold') {
                    _this.investorPropertiesBought.push(property);
                }
                else if (property.status === 'Listed') {
                    _this.investorPropertiesConnected.push(property);
                }
                else if (property.status === 'Sold-Pending') {
                    _this.investorPropertiesBoughtPending.push(property);
                }
            });
        }, function (error) {
            _this.alertService.error('Error retrieving properties for investor.');
        });
        this.getStarredPropertiesSubscription = this.getUserPropertiesService.getStarredProperties(investorID)
            .subscribe(function (response) {
            _this.investorPropertiesStarred = response;
        }, function (error) {
            _this.alertService.error('Unable to retrieve starred properties.');
        });
        this.subscriptions.push(this.getInvestorPropertiesSubscription);
        this.subscriptions.push(this.getStarredPropertiesSubscription);
    };
    ViewPropertiesComponent.prototype.getPropertiesForLender = function () {
        var _this = this;
        var lenderID = this.authService.loggedInUser();
        this.getLenderPropertiesSubscription = this.getUserPropertiesService.getLenderUserProperties(lenderID)
            .subscribe(function (response) {
            response.forEach(function (property) {
                if (property.status === 'Connection') {
                    _this.lenderPropertiesConnected.push(property);
                }
                else if (property.status === 'Loaned') {
                    _this.lenderPropertiesBought.push(property);
                }
            });
        }, function (error) {
            _this.alertService.error('Error retrieving properties for lender.');
        });
        this.subscriptions.push(this.getLenderPropertiesSubscription);
    };
    ViewPropertiesComponent.prototype.acceptSold = function (property) {
        var _this = this;
        this.acceptSoldPropertySubscription = this.soldPropertyService.acceptSoldProperty(property, this.currentUser._id)
            .subscribe(function (response) {
            _this.investorPropertiesBoughtPending = _this.investorPropertiesBoughtPending.filter(function (p) {
                return p._id != property._id;
            });
            _this.investorPropertiesBought.push(property);
        }, function (error) {
            _this.alertService.error('Error accepting property as sold.');
        });
        this.subscriptions.push(this.acceptSoldPropertySubscription);
    };
    ViewPropertiesComponent.prototype.denySold = function (property) {
        var _this = this;
        var denyPropertyId = property._id;
        this.denySoldPropertySubscription = this.soldPropertyService.denySoldProperty(property, this.currentUser._id)
            .subscribe(function (response) {
            _this.investorPropertiesBoughtPending = _this.investorPropertiesBoughtPending.filter(function (prop) {
                return prop._id != denyPropertyId;
            });
            _this.investorPropertiesConnected.push(property);
        }, function (error) {
        });
        this.subscriptions.push(this.denySoldPropertySubscription);
    };
    // called when auction has not been established for a property
    // and loggedInUser is wholesaler && owner of property
    ViewPropertiesComponent.prototype.openAuction = function (property) {
        this.openAuctionProperty = property;
        $("#deadlineModal").modal('show');
    };
    // called when auction has been established for a property
    // user can be either investor or wholesaler
    ViewPropertiesComponent.prototype.enterAuction = function (property) {
        var _this = this;
        var that = this;
        var propertyId = property._id.toString();
        this.auctionService.setProperty(property);
        this.getInitialBidsSubscription = this.auctionService.getInitialBids(propertyId)
            .subscribe(function (response) {
            $("#deadlineModal").modal('hide');
            _this.router.navigate(['/auction/', propertyId]);
        }, function (error) {
        });
        this.subscriptions.push(this.getInitialBidsSubscription);
    };
    // called when user has submitted deadline modal
    ViewPropertiesComponent.prototype.submitDeadlineModal = function () {
        var _this = this;
        var currentYear = this.date.getFullYear();
        var month = this.months.indexOf(this.dateTime.month);
        var propertyId = this.openAuctionProperty._id.toString();
        if (month < this.currentMonth) {
            currentYear = currentYear + 1;
        }
        if (this.dateTime.time == 'pm') {
            var hour = parseInt(this.dateTime.hour);
            this.dateTime.hour = hour + 12;
        }
        var deadline = this.dateTime.month + ' ' + this.dateTime.day + ', ' + currentYear + ' ' +
            this.dateTime.hour + ':' + this.dateTime.minutes + ':00';
        this.openAuctionSubscription = this.auctionService.openAuction(propertyId, deadline)
            .subscribe(function (response) {
            _this.auctionService.setProperty(response);
            _this.router.navigate(['/auction/', propertyId]);
        }, function (error) {
        });
        this.subscriptions.push(this.openAuctionSubscription);
    };
    ViewPropertiesComponent.prototype.starProperty = function (property) {
        var _this = this;
        var investorId = this.authService.loggedInUser();
        var propertyId = property._id;
        this.editPropertyService.starProperty(investorId, property)
            .subscribe(function (response) {
            _this.alertService.success('Property starred.', true);
            _this.investorPropertiesStarred.push(property);
            _this.investorPropertiesConnected = _this.investorPropertiesConnected.filter(function (p) {
                return p._id != propertyId;
            });
        }, function (error) {
        });
    };
    ViewPropertiesComponent.prototype.unStarProperty = function (property) {
        var _this = this;
        var investorId = this.authService.loggedInUser();
        var propertyId = property._id;
        this.editPropertyService.unStarProperty(investorId, propertyId)
            .subscribe(function (response) {
            _this.alertService.success('Removed starred property.', true);
            _this.investorPropertiesStarred = _this.investorPropertiesStarred.filter(function (starProperty) {
                return starProperty._id != propertyId;
            });
            _this.investorPropertiesConnected.push(property);
        }, function (error) {
        });
    };
    ViewPropertiesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ViewPropertiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-properties',
            template: __webpack_require__("./src/app/view-properties/view-properties.component.html"),
            styles: [__webpack_require__("./src/app/view-properties/view-properties.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auction_service__["a" /* AuctionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_getAllProperties_service__["a" /* GetAllPropertiesService */],
            __WEBPACK_IMPORTED_MODULE_5__services_deleteProperty_service__["a" /* DeletePropertyService */],
            __WEBPACK_IMPORTED_MODULE_8__services_getUserProperties_service__["a" /* GetUserPropertiesService */],
            __WEBPACK_IMPORTED_MODULE_6__services_editProperty_service__["a" /* EditPropertyService */],
            __WEBPACK_IMPORTED_MODULE_9__services_soldProperty_service__["a" /* SoldPropertyService */],
            __WEBPACK_IMPORTED_MODULE_10__services_viewProperty_service__["a" /* ViewPropertyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ViewPropertiesComponent);
    return ViewPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/view-property/view-property.component.css":
/***/ (function(module, exports) {

module.exports = ".item img {\n  width: 200px;\n  height: 200px;\n}\n\n.buttons {\n  width: 100%;\n}\n\n.edit-property-btn {\n  display: table;\n  margin: 0 auto;\n}\n\n.removePhoto {\n  padding-top: 10px;\n  width: 100%;\n}\n\n.removePhoto button {\n  display: table;\n  margin: 0 auto;\n  width: 50%;\n}\n\n#propertyImage {\n  height: 140px;\n  max-width: 100%;\n}\n\n#propertyImage:hover {\n  cursor: pointer;\n}\n\n#photoCard {\n  margin-left: 10px;\n}\n\n.required-field:after {\n  content: \" *\";\n  color: red;\n}\n\n#submitBtn:disabled {\n  cursor: not-allowed;\n}\n\n#property-image-enlarged {\n  max-width: 100%;\n}\n\n.closingTimeLabel {\n  margin-top: 4px;\n  margin-right: 10px;\n}\n\ninput:focus {\n  -webkit-box-shadow: 0 0 2px 2px #007DFF;\n          box-shadow: 0 0 2px 2px #007DFF;\n}"

/***/ }),

/***/ "./src/app/view-property/view-property.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>Veeya</title>\n  <!-- inject:css -->\n  <link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n  <!-- endinject -->\n  <link rel=\"shortcut icon\" href=\"/assets/images/favicon.png\" />\n</head>\n\n<body>\n  <div class=\"container-scroller\">\n\n    <app-top-navbar></app-top-navbar>\n\n    <div class=\"container-fluid page-body-wrapper\">\n\n      <app-sidebar></app-sidebar>\n\n\n      <div class=\"main-panel\" *ngIf=\"property\">\n        <div class=\"content-wrapper\">\n\n          <div class=\"row\" *ngIf=\"property.photos !== undefined\">\n            <div class=\"col-lg-12 grid-margin\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Property Photos</h4>\n                  <div class=\"row\">\n                    <div *ngFor=\"let photo of property.photos\">\n                      <div class=\"col-xs-4\">\n                        <div class=\"card h-100\" id=\"photoCard\">\n                          <img id=\"propertyImage\" src=\"{{ photo }}\" (click)=\"imageModal(photo)\" />\n                          <div class=\"removePhoto\" *ngIf=\"propertyOwner\">\n                            <button type=\"button\" class=\"btn btn-inverse-danger btn-rounded btn-fw\">Delete</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- IMAGE MODAL -->\n          <div class=\"modal fade bd-example-modal-lg\" id=\"photoModal\" tabindex=\"-1\" role=\"dialog\"\n              aria-labelledby=\"photoLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"photoLabel\">View Property Photo</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div id=\"property-image-wrapper\">\n                  <img src=\"{{ enlargedPhoto }}\" id=\"property-image-enlarged\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- END IMAGE MODAL -->\n\n\n\n          <div class=\"row\">\n            <div class=\"col-12 grid-margin\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">View Property</h4>\n                  <p class=\"card-description\">\n                      <span class=\"required-field\">Required</span>\n                  </p>\n                  <form (ngSubmit)=\"onSubmit()\" class=\"form-sample\" #form=\"ngForm\">\n                    <div class=\"row\">\n                      <div class=\"col-md-8\">\n                        <div class=\"form-group row\">\n                          <label class=\"required-field col-sm-3 col-form-label\">Street Address</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.address\"\n                              name=\"address\"\n                              #address=\"ngModel\"\n                              [disabled]=\"!editMode\"\n                              minlength=\"5\"\n                              maxlength=\"50\"\n                              pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                              required\n                            />\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group row\">\n                          <label class=\"required-field col-sm-3 col-form-label\">City</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.city\"\n                              name=\"city\"\n                              [disabled]=\"!editMode\"\n                              #city=\"ngModel\"\n                              pattern=\"^[a-zA-Z ]*$\"\n                              minlength=\"3\"\n                              maxlength=\"30\"\n                              required\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-5\">\n                        <div class=\"form-group row\">\n                          <label class=\"required-field col-sm-3 col-form-label\">State</label>\n                          <div class=\"col-sm-6\">\n                            <input type=\"text\" class=\"form-control\"\n                              *ngIf=\"!editMode\"\n                              [(ngModel)]=\"property.state\"\n                              name=\"state\"\n                              [disabled]=\"!editMode\"\n                            />\n                            <select *ngIf=\"editMode\" [(ngModel)]=\"property.state\" #state=\"ngModel\" name=\"state\" class=\"form-control\">\n                              <option value=\"AL\">Alabama</option>\n                              <option value=\"AK\">Alaska</option>\n                              <option value=\"AZ\">Arizona</option>\n                              <option value=\"AR\">Arkansas</option>\n                              <option value=\"CA\">California</option>\n                              <option value=\"CO\">Colorado</option>\n                              <option value=\"CT\">Connecticut</option>\n                              <option value=\"DE\">Delaware</option>\n                              <option value=\"DC\">District Of Columbia</option>\n                              <option value=\"FL\">Florida</option>\n                              <option value=\"GA\">Georgia</option>\n                              <option value=\"HI\">Hawaii</option>\n                              <option value=\"ID\">Idaho</option>\n                              <option value=\"IL\">Illinois</option>\n                              <option value=\"IN\">Indiana</option>\n                              <option value=\"IA\">Iowa</option>\n                              <option value=\"KS\">Kansas</option>\n                              <option value=\"KY\">Kentucky</option>\n                              <option value=\"LA\">Louisiana</option>\n                              <option value=\"ME\">Maine</option>\n                              <option value=\"MD\">Maryland</option>\n                              <option value=\"MA\">Massachusetts</option>\n                              <option value=\"MI\">Michigan</option>\n                              <option value=\"MN\">Minnesota</option>\n                              <option value=\"MS\">Mississippi</option>\n                              <option value=\"MO\">Missouri</option>\n                              <option value=\"MT\">Montana</option>\n                              <option value=\"NE\">Nebraska</option>\n                              <option value=\"NV\">Nevada</option>\n                              <option value=\"NH\">New Hampshire</option>\n                              <option value=\"NJ\">New Jersey</option>\n                              <option value=\"NM\">New Mexico</option>\n                              <option value=\"NY\">New York</option>\n                              <option value=\"NC\">North Carolina</option>\n                              <option value=\"ND\">North Dakota</option>\n                              <option value=\"OH\">Ohio</option>\n                              <option value=\"OK\">Oklahoma</option>\n                              <option value=\"OR\">Oregon</option>\n                              <option value=\"PA\">Pennsylvania</option>\n                              <option value=\"RI\">Rhode Island</option>\n                              <option value=\"SC\">South Carolina</option>\n                              <option value=\"SD\">South Dakota</option>\n                              <option value=\"TN\">Tennessee</option>\n                              <option value=\"TX\">Texas</option>\n                              <option value=\"UT\">Utah</option>\n                              <option value=\"VT\">Vermont</option>\n                              <option value=\"VA\">Virginia</option>\n                              <option value=\"WA\">Washington</option>\n                              <option value=\"WV\">West Virginia</option>\n                              <option value=\"WI\">Wisconsin</option>\n                              <option value=\"WY\">Wyoming</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <div class=\"form-group row\">\n                          <label class=\"required-field col-sm-5 col-form-label\">Zip</label>\n                          <div class=\"col-sm-7\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.zipCode\"\n                              name=\"zipCode\"\n                              [disabled]=\"!editMode\"\n                              #zipCode=\"ngModel\"\n                              pattern=\"^[0-9]*$\"\n                              minlength=\"5\"\n                              maxlength=\"10\"\n                              required\n                            />\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"required-field col-sm-4 col-form-label\">Purchase Price</label>\n                           <div class=\"col-sm-6\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.purchasePrice\"\n                              name=\"purchasePrice\"\n                              [disabled]=\"!editMode\"\n                              #purchasePrice=\"ngModel\"\n                              minlength=\"5\"\n                              maxlength=\"10\"\n                              pattern=\"^[0-9]*$\"\n                              required\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Beds</label>\n                          <div class=\"col-sm-4\">\n                            <input type=\"text\" class=\"form-control\"\n                              *ngIf=\"!editMode\"\n                              [(ngModel)]=\"property.bedrooms\"\n                              name=\"bedrooms\"\n                              [disabled]=\"!editMode\"\n                              #bedrooms=\"ngModel\"\n                            />\n                            <select *ngIf=\"editMode\" [(ngModel)]=\"property.bedrooms\" #bedrooms=\"ngModel\" name=\"bedrooms\" class=\"form-control\">\n                              <option value=\"0\">0</option>\n                              <option value=\"1\">1</option>\n                              <option value=\"2\">2</option>\n                              <option value=\"3\">3</option>\n                              <option value=\"4\">4</option>\n                              <option value=\"5+\">5+</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-4 col-form-label\">Baths</label>\n                          <div class=\"col-sm-4\">\n                            <input type=\"text\" class=\"form-control\"\n                              *ngIf=\"!editMode\"\n                              [(ngModel)]=\"property.bathrooms\"\n                              name=\"bathrooms\"\n                              [disabled]=\"!editMode\"\n                              #bathrooms=\"ngModel\"\n                            />\n                            <select *ngIf=\"editMode\" [(ngModel)]=\"property.bathrooms\" #bathrooms=\"ngModel\" name=\"bathrooms\" class=\"form-control\">\n                              <option value=\"0\">0</option>\n                              <option value=\"1\">1</option>\n                              <option value=\"2\">2</option>\n                              <option value=\"3\">3</option>\n                              <option value=\"4\">4</option>\n                              <option value=\"5+\">5+</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Expected Rehab</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.expectedRehab\"\n                              name=\"expectedRehab\"\n                              [disabled]=\"!editMode\"\n                              #expectedRehab=\"ngModel\"\n                              minlength=\"3\"\n                              maxlength=\"10\"\n                              pattern=\"^[0-9]*$\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">After Repair Value (ARV)</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.afterRepairValue\"\n                              name=\"afterRepairValue\"\n                              [disabled]=\"!editMode\"\n                              minlength=\"5\"\n                              maxlength=\"10\"\n                              pattern=\"^[0-9]*$\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Gross Monthly Rent</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.averageRent\"\n                              name=\"averageRent\"\n                              [disabled]=\"!editMode\"\n                              minlength=\"3\"\n                              maxlength=\"6\"\n                              pattern=\"^[0-9]*$\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Square Footage</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.squareFootage\"\n                              name=\"squareFootage\"\n                              [disabled]=\"!editMode\"\n                              minlength=\"3\"\n                              maxlength=\"6\"\n                              pattern=\"^[0-9]*$\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Property Type</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.propertyType\"\n                              name=\"propertyType\"\n                              [disabled]=\"!editMode\"\n                              *ngIf=\"!editMode\"\n                            />\n                            <select *ngIf=\"editMode\" [(ngModel)]=\"property.propertyType\" #propertyType=\"ngModel\" name=\"propertyType\" class=\"form-control\">\n                              <option value=\"Single Family\">Single Family Home</option>\n                              <option value=\"Condo\">Condo</option>\n                              <option value=\"Duplex\">Multifamily: Duplex</option>\n                              <option value=\"Triplex\">Multifamily: Triplex</option>\n                              <option value=\"Quadplex\">Multifamily: 4plex</option>\n                              <option value=\"Five-plus\">Commercial: 5+</option>\n                              <option value=\"Apartments\">Commercial: Apartments</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Year Built</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.yearBuilt\"\n                              name=\"yearBuilt\"\n                              [disabled]=\"!editMode\"\n                              #yearBuilt=\"ngModel\"\n                              pattern=\"^[0-9]*$\"\n                              minlength=\"4\"\n                              maxlength=\"4\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Cap Rate</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.capRate\"\n                              name=\"capRate\"\n                              [disabled]=\"!editMode\"\n                              #capRate=\"ngModel\"\n                              pattern=\"^(0|[1-9]\\d*)(\\.\\d+)?$\"\n                              maxlength=\"4\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">HOA</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.HOA\"\n                              name=\"HOA\"\n                              [disabled]=\"!editMode\"\n                              #HOA=\"ngModel\"\n                              pattern=\"^[0-9]*$\"\n                              maxlength=\"6\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Property Taxes</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.propertyTaxes\"\n                              name=\"propertyTaxes\"\n                              [disabled]=\"!editMode\"\n                              #propertyTaxes=\"ngModel\"\n                              pattern=\"^[0-9]*$\"\n                              maxlength=\"6\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Utilities</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.utilities\"\n                              name=\"utilities\"\n                              [disabled]=\"!editMode\"\n                              #utilities=\"ngModel\"\n                              pattern=\"^[0-9]*$\"\n                              maxlength=\"6\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Insurance</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.insurance\"\n                              name=\"insurance\"\n                              [disabled]=\"!editMode\"\n                              #insurance=\"ngModel\"\n                              pattern=\"^[0-9]*$\"\n                              maxlength=\"6\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Seller Financing Available?</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.sellerFinancing\"\n                              name=\"sellerFinancing\"\n                              [disabled]=\"!editMode\"\n                              #sellerFinancing=\"ngModel\"\n                              *ngIf=\"!editMode\"\n                            />\n                            <select type=\"text\" class=\"form-control\" [(ngModel)]=\"property.sellerFinancing\" name=\"sellerFinancing\" #sellerFinancing=\"ngModel\" *ngIf=\"editMode\">\n                              <option value=\"no\">No</option>\n                              <option value=\"yes\">Yes</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>\n                      Comps\n                    </p>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">First Comp Address</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.comps[0].firstCompAddress\"\n                              name=\"firstCompAddress\"\n                              [disabled]=\"!editMode\"\n                              #firstCompAddress=\"ngModel\"\n                              pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                              maxlength=\"50\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">First Comp Price</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.comps[0].firstCompPrice\"\n                              name=\"firstCompPrice\"\n                              [disabled]=\"!editMode\"\n                              #firstCompPrice=\"ngModel\"\n                              pattern=\"^[0-9]*$\"\n                              maxlength=\"10\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Second Comp Address</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.comps[1].secondCompAddress\"\n                              name=\"secondCompAddress\"\n                              [disabled]=\"!editMode\"\n                              #secondCompAddress=\"ngModel\"\n                              pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                              maxlength=\"50\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Second Comp Price</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.comps[1].secondCompPrice\"\n                              name=\"secondCompPrice\"\n                              [disabled]=\"!editMode\"\n                              #secondCompPrice=\"ngModel\"\n                              pattern=\"^[0-9]*$\"\n                              maxlength=\"10\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Third Comp Address</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.comps[2].thirdCompAddress\"\n                              name=\"thirdCompAddress\"\n                              [disabled]=\"!editMode\"\n                              #thirdCompAddress=\"ngModel\"\n                              pattern=\"^[a-zA-Z0-9,.!? ]*$\"\n                              maxlength=\"50\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-sm-3 col-form-label\">Third Comp Price</label>\n                          <div class=\"col-sm-9\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.comps[2].thirdCompPrice\"\n                              name=\"thirdCompPrice\"\n                              [disabled]=\"!editMode\"\n                              #thirdCompPrice=\"ngModel\"\n                              pattern=\"^[0-9]*$\"\n                              maxlength=\"10\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-4\">\n                          <label>Status of Property</label>\n                          <div class=\"col-xs-3\">\n                            <input type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"property.status\"\n                              name=\"status\"\n                              [disabled]=\"!editMode\"\n                              #status=\"ngModel\"\n                              *ngIf=\"!editMode\"\n                            />\n                            <select *ngIf=\"editMode\" class=\"form-control\" [(ngModel)]=\"property.status\" name=\"status\" #status=\"ngModel\">\n                              <option value=\"Listed\">Yes</option>\n                              <option value=\"NoContract\">No</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p *ngIf=\"propertyOwner\">\n                      <em>Upload Additional Photos (up to 3 per property allowed)</em>\n                    </p>\n                    <div class=\"form-group\" *ngIf=\"propertyOwner\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"input-group mb-3\">\n                            <div class=\"custom-file\">\n                              <input type=\"file\" class=\"custom-file-input\" id=\"imageInput\" (change)=\"addPhoto($event)\">\n                              <label class=\"custom-file-label\" for=\"imageInput\">Choose file</label>\n                            </div>\n                          </div>\n                          <div *ngIf=\"property.photos.length == 3\"><small>*If you wish to add another photo, please remove one first.</small>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"propertyOwner\">\n                      <div id=\"selectedFiles\"></div>\n                      <button *ngIf=\"showUploadPhotosButton\" class=\"btn btn-inverse-primary btn-rounded btn-fw\" type=\"button\" (click)=\"uploadPhotos()\" id=\"uploadPhotos\">\n                        Upload Photos</button>\n                      <button *ngIf=\"showRemovePhotosButton\" class=\"btn btn-inverse-danger btn-rounded btn-fw\" type=\"button\" (click)=\"removePhotos()\" id=\"removePhotos\">Remove Photos</button>\n                    </div>\n\n                    <br />\n\n                    <div class=\"buttons\">\n                      <div class=\"row edit-property-btn\" *ngIf=\"currentUserType=='Investor'\">\n                        <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\" (click)=\"customizeProperty()\">\n                            Customize Property\n                        </button>\n                        <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\"\n                          [disabled]=\"auctionEstablished=='false'\" (click)=\"enterAuction()\">\n                          View Auction\n                        </button>\n                      </div>\n                      <div class=\"row edit-property-btn\" *ngIf=\"propertyOwner\">\n                        <button *ngIf=\"auctionEstablished=='true'\" id=\"view-auction\" type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\" (click)=\"enterAuction()\">\n                          View Bids\n                        </button>\n                        <button *ngIf=\"auctionEstablished=='false'\" id=\"view-auction\" type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\" (click)=\"openAuction()\">\n                          Open to Auction\n                        </button>\n                        <button *ngIf=\"!editMode\" id=\"editButton\" type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\"\n                          (click)=\"edit()\">Edit Property\n                        </button>\n                        <button *ngIf=\"property.status!='Sold'\" id=\"soldButton\" type=\"button\"\n                          class=\"btn btn-inverse-warning btn-rounded btn-fw\"\n                          (click)=\"sold()\">Mark as Sold\n                        </button>\n                        <button *ngIf=\"property.status!='Listed'\" id=\"listedButton\" type=\"button\"\n                          class=\"btn btn-inverse-warning btn-rounded btn-fw\"\n                          (click)=\"listed()\">Mark as Listed\n                        </button>\n                        <button *ngIf=\"editMode\" id=\"submitBtn\" type=\"submit\"\n                          class=\"btn btn-inverse-success btn-rounded btn-fw\" [disabled]=\"form.invalid\">Submit\n                        </button>\n                        <button *ngIf=\"editMode\" type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-fw\"\n                          (click)=\"cancel()\">Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-inverse-danger btn-rounded btn-fw\" (click)=\"deleteProperty()\">Delete</button>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n\n\n              </div> <!-- END card-->\n\n              <!-- Add Auction Closing Time MODAL -->\n              <div class=\"modal fade\" id=\"deadlineModal\" tabindex=\"-1\" role=\"dialog\"\n                        aria-labelledby=\"deadlineModal\" aria-hidden=\"true\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"closingTimeModal\">Add Deadline for Auction</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"forms-sample\" #deadlineForm=\"ngForm\">\n                        <div class=\"form-group\">\n                          <label for=\"month\">Month:</label>\n                          <select class=\"form-control\" [(ngModel)]=\"dateTime.month\" name=\"month\"\n                            #month=\"ngModel\">\n                            <option value=\"January\">January</option>\n                            <option value=\"February\">February</option>\n                            <option value=\"March\">March</option>\n                            <option value=\"April\">April</option>\n                            <option value=\"May\">May</option>\n                            <option value=\"June\">June</option>\n                            <option value=\"July\">July</option>\n                            <option value=\"August\">August</option>\n                            <option value=\"September\">September</option>\n                            <option value=\"October\">October</option>\n                            <option value=\"November\">November</option>\n                            <option value=\"December\">December</option>\n                          </select>\n                        </div>\n                        <div class=\"form-group\">\n                          <label for=\"closingTime\">Day:</label>\n                          <select class=\"form-control\" [(ngModel)]=\"dateTime.day\" name=\"day\"\n                            #day=\"ngModel\">\n                            <option value=\"1\">1</option>\n                            <option value=\"2\">2</option>\n                            <option value=\"3\">3</option>\n                            <option value=\"4\">4</option>\n                            <option value=\"5\">5</option>\n                            <option value=\"6\">6</option>\n                            <option value=\"7\">7</option>\n                            <option value=\"8\">8</option>\n                            <option value=\"9\">9</option>\n                            <option value=\"10\">10</option>\n                            <option value=\"11\">11</option>\n                            <option value=\"12\">12</option>\n                            <option value=\"13\">13</option>\n                            <option value=\"14\">14</option>\n                            <option value=\"15\">15</option>\n                            <option value=\"16\">16</option>\n                            <option value=\"17\">17</option>\n                            <option value=\"18\">18</option>\n                            <option value=\"19\">19</option>\n                            <option value=\"20\">20</option>\n                            <option value=\"21\">21</option>\n                            <option value=\"22\">22</option>\n                            <option value=\"23\">23</option>\n                            <option value=\"24\">24</option>\n                            <option value=\"25\">25</option>\n                            <option value=\"26\">26</option>\n                            <option value=\"27\">27</option>\n                            <option value=\"28\">28</option>\n                            <option value=\"29\">29</option>\n                            <option value=\"30\">30</option>\n                            <option value=\"31\">31</option>\n                          </select>\n                        </div>\n                        <div class=\"form-group\">\n                          <label for=\"hour\">Hour:</label>\n                          <select class=\"form-control\" [(ngModel)]=\"dateTime.hour\" name=\"hour\"\n                            #hour=\"ngModel\">\n                            <option value=\"1\">1</option>\n                            <option value=\"2\">2</option>\n                            <option value=\"3\">3</option>\n                            <option value=\"4\">4</option>\n                            <option value=\"5\">5</option>\n                            <option value=\"6\">6</option>\n                            <option value=\"7\">7</option>\n                            <option value=\"8\">8</option>\n                            <option value=\"9\">9</option>\n                            <option value=\"10\">10</option>\n                            <option value=\"11\">11</option>\n                            <option value=\"12\">12</option>\n                          </select>\n                        </div>\n                        <div class=\"form-group\">\n                          <label for=\"minutes\">Minutes:</label>\n                          <select class=\"form-control\" [(ngModel)]=\"dateTime.minutes\" name=\"minutes\"\n                            #minutes=\"ngModel\">\n                            <option value=\"00\">00</option>\n                            <option value=\"01\">01</option>\n                            <option value=\"02\">02</option>\n                            <option value=\"03\">03</option>\n                            <option value=\"04\">04</option>\n                            <option value=\"05\">05</option>\n                            <option value=\"06\">06</option>\n                            <option value=\"07\">07</option>\n                            <option value=\"08\">08</option>\n                            <option value=\"09\">09</option>\n                            <option value=\"10\">10</option>\n                            <option value=\"11\">11</option>\n                            <option value=\"12\">12</option>\n                            <option value=\"13\">13</option>\n                            <option value=\"14\">14</option>\n                            <option value=\"15\">15</option>\n                            <option value=\"16\">16</option>\n                            <option value=\"17\">17</option>\n                            <option value=\"18\">18</option>\n                            <option value=\"19\">19</option>\n                            <option value=\"20\">20</option>\n                            <option value=\"21\">21</option>\n                            <option value=\"22\">22</option>\n                            <option value=\"23\">23</option>\n                            <option value=\"24\">24</option>\n                            <option value=\"25\">25</option>\n                            <option value=\"26\">26</option>\n                            <option value=\"27\">27</option>\n                            <option value=\"28\">28</option>\n                            <option value=\"29\">29</option>\n                            <option value=\"30\">30</option>\n                            <option value=\"31\">31</option>\n                            <option value=\"32\">32</option>\n                            <option value=\"33\">33</option>\n                            <option value=\"34\">34</option>\n                            <option value=\"35\">35</option>\n                            <option value=\"36\">36</option>\n                            <option value=\"37\">37</option>\n                            <option value=\"38\">38</option>\n                            <option value=\"39\">39</option>\n                            <option value=\"40\">40</option>\n                            <option value=\"41\">41</option>\n                            <option value=\"42\">42</option>\n                            <option value=\"43\">43</option>\n                            <option value=\"44\">44</option>\n                            <option value=\"45\">45</option>\n                            <option value=\"46\">46</option>\n                            <option value=\"47\">47</option>\n                            <option value=\"48\">48</option>\n                            <option value=\"49\">49</option>\n                            <option value=\"50\">50</option>\n                            <option value=\"51\">51</option>\n                            <option value=\"52\">52</option>\n                            <option value=\"53\">53</option>\n                            <option value=\"54\">54</option>\n                            <option value=\"55\">55</option>\n                            <option value=\"56\">56</option>\n                            <option value=\"57\">57</option>\n                            <option value=\"58\">58</option>\n                            <option value=\"59\">59</option>\n                          </select>\n                        </div>\n                        <div class=\"form-group\">\n                          <label for=\"am\">am</label>\n                          <input name=\"am\" type=\"radio\" value=\"am\" [(ngModel)]=\"dateTime.time\">\n                          <label for=\"pm\">pm</label>\n                          <input name=\"pm\" type=\"radio\" value=\"pm\" [(ngModel)]=\"dateTime.time\">\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                      <button id=\"deadlineConfirm\" type=\"button\"\n                        class=\"btn btn-primary\"\n                        [disabled]=\"deadlineForm.invalid\"\n                        (click)=\"submitDeadlineModal()\"\n                      >Confirm\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div> <!-- END MODAL -->\n\n\n            </div> <!-- END col-12 grid-margin -->\n\n\n          </div> <!-- END row -->\n\n\n        </div> <!-- content-wrapper ends -->\n\n\n        <app-footer></app-footer>\n\n\n      </div> <!-- main-panel ends -->\n    </div> <!-- page-body-wrapper ends -->\n  </div> <!-- container-scroller -->\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/view-property/view-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auction_service__ = __webpack_require__("./src/app/services/auction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_customizeProperty_service__ = __webpack_require__("./src/app/services/customizeProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_deleteProperty_service__ = __webpack_require__("./src/app/services/deleteProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_editProperty_service__ = __webpack_require__("./src/app/services/editProperty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_photos_service__ = __webpack_require__("./src/app/services/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_viewProperty_service__ = __webpack_require__("./src/app/services/viewProperty.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewPropertyComponent = /** @class */ (function () {
    function ViewPropertyComponent(route, alertService, authService, auctionService, customizePropertyService, deletePropertyService, editPropertyService, viewPropertyService, router, photosService, validateService) {
        this.route = route;
        this.alertService = alertService;
        this.authService = authService;
        this.auctionService = auctionService;
        this.customizePropertyService = customizePropertyService;
        this.deletePropertyService = deletePropertyService;
        this.editPropertyService = editPropertyService;
        this.viewPropertyService = viewPropertyService;
        this.router = router;
        this.photosService = photosService;
        this.validateService = validateService;
        this.subscriptions = [];
        this.daysAdded = false;
        this.hoursAdded = false;
        this.editMode = false;
        this.photosToAdd = [];
        this.photoURLsAdded = [];
        this.showUploadPhotosButton = false;
        this.showRemovePhotosButton = false;
    }
    ViewPropertyComponent.prototype.ngOnInit = function () {
        this.currentUserType = this.authService.loggedInUserType();
        this.propertyID = this.route.snapshot.params['id'];
        this.getProperty(this.propertyID);
        this.wholesalerID = this.authService.loggedInUser();
        this.date = new Date();
        this.currentMonth = this.date.getMonth();
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.currentDay = this.date.getDate();
        this.dateTime = {
            month: this.months[this.currentMonth],
            day: this.currentDay + 1,
            hour: '5',
            minutes: '00',
            time: 'pm'
        };
    };
    ViewPropertyComponent.prototype.getProperty = function (id) {
        var _this = this;
        this.getPropertySubscription = this.viewPropertyService.getPropertyById(id)
            .subscribe(function (response) {
            _this.property = response;
            _this.propertyOwner = _this.confirmPropertyOwnership();
            _this.auctionEstablished = _this.property.auctionEstablished;
        }, function (error) {
            _this.alertService.error('Error retrieving property.');
        });
        this.subscriptions.push(this.getPropertySubscription);
    };
    ViewPropertyComponent.prototype.confirmPropertyOwnership = function () {
        return this.property.wholesaler_id === this.authService.loggedInUser() ? true : false;
    };
    ViewPropertyComponent.prototype.addPhoto = function (event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        if (this.validateService.validatePhotoInput(fileType)) {
            this.photo = event.target.files[0];
            this.photosToAdd.push(this.photo);
            document.getElementById('selectedFiles').innerHTML += file.name + "</br>";
            this.showRemovePhotosButton = true;
            this.showUploadPhotosButton = true;
            if (this.property.photos.length + this.photosToAdd.length === 3) {
                var inputButton = document.getElementById('imageInput');
                inputButton.disabled = true;
            }
        }
        else {
            this.alertService.error('Please add a valid photo image.');
        }
    };
    ViewPropertyComponent.prototype.uploadPhotos = function (event) {
        var _this = this;
        document.getElementById('uploadPhotos').setAttribute('disabled', 'disabled');
        document.getElementById('removePhotos').setAttribute('disabled', 'disabled');
        this.photosService.uploadPropertyPhotos(this.photosToAdd, function (error, photosUploaded) {
            if (error) {
            }
            else {
                var inputValue = document.getElementById('imageInput');
                inputValue.value = "";
                _this.showRemovePhotosButton = false;
                _this.showUploadPhotosButton = false;
                _this.photosToAdd = [];
                photosUploaded.forEach(function (photo) {
                    _this.photoURLsAdded.push(photo);
                });
                document.getElementById("selectedFiles").innerHTML = '';
                _this.photosService.getPropertyPhotoUrls(photosUploaded, function (error, photos) {
                    if (error) {
                        _this.alertService.error('Error uploading photos.');
                        return;
                    }
                    else {
                        photos.forEach(function (photo) {
                            _this.property.photos.push(photo);
                        });
                    }
                });
            }
        });
    };
    ViewPropertyComponent.prototype.removePhoto = function (photo) {
        var _this = this;
        this.photosService.removePropertyPhoto(photo, function (error) {
            if (error) {
                _this.alertService.error('Error removing photo. Please try again.');
            }
            else {
                _this.alertService.error('Successfully removed photo.');
            }
        });
    };
    ViewPropertyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.editPropertySubscription = this.editPropertyService.editProperty(this.property)
            .subscribe(function (response) {
            if (response.success) {
                _this.alertService.success('Changes saved.');
                _this.router.navigate(['/dashboard']);
            }
        }, function (error) {
            _this.alertService.error('Error editing property.');
        });
        this.subscriptions.push(this.editPropertySubscription);
    };
    ViewPropertyComponent.prototype.edit = function () {
        this.editMode = true;
    };
    ViewPropertyComponent.prototype.imageModal = function (photo) {
        this.enlargedPhoto = photo;
        $("#photoModal").modal('show');
    };
    ViewPropertyComponent.prototype.sold = function () {
        var soldConfirm = confirm("Are you sure you want to mark this property as sold?");
        if (soldConfirm) {
            this.viewPropertyService.setSoldProperty(this.property);
            this.router.navigate(['/soldproperty/', this.property._id]);
        }
    };
    ViewPropertyComponent.prototype.listed = function () {
        var _this = this;
        var listedConfirm = confirm("Are you sure you want to mark this property as listed?");
        if (listedConfirm) {
            this.property.status = "Listed";
            this.editPropertyListedSubscription = this.editPropertyService.editProperty(this.property)
                .subscribe(function (response) {
                if (response.success) {
                }
            }, function (error) {
                _this.alertService.error('Error marking property as listed.', true);
            });
            this.subscriptions.push(this.editPropertyListedSubscription);
        }
    };
    ViewPropertyComponent.prototype.cancel = function () {
        this.deletePropertyService.removePhotos(this.photoURLsAdded);
        this.editMode = false;
    };
    ViewPropertyComponent.prototype.deleteProperty = function () {
        var _this = this;
        var deleteConfirm = confirm("Are you sure you want to delete this property?");
        if (deleteConfirm) {
            this.deletePropertyService.removePhotos(this.property.photos);
            this.deletePropertySubscription = this.deletePropertyService.deleteProperty(this.property._id, this.wholesalerID)
                .subscribe(function (response) {
                if (response.success) {
                    _this.alertService.success('Deleted property successfully.');
                    _this.router.navigate(['/dashboard']);
                }
            }, function (error) {
                _this.alertService.error('Error deleting property.', true);
            });
            this.subscriptions.push(this.deletePropertySubscription);
        }
    };
    ViewPropertyComponent.prototype.customizeProperty = function () {
        this.customizePropertyService.setProperty(this.property);
        this.router.navigate(['/customizeproperty/', this.property._id]);
    };
    // called when auction has not been established for a property
    // and loggedInUser is wholesaler && owner of property
    ViewPropertyComponent.prototype.openAuction = function () {
        $("#deadlineModal").modal('show');
    };
    // called when auction has been established for a property
    // user can be either investor or wholesaler
    ViewPropertyComponent.prototype.enterAuction = function () {
        var _this = this;
        var that = this;
        var propertyId = this.property._id.toString();
        this.auctionService.setProperty(this.property);
        this.getInitialBidsSubscription = this.auctionService.getInitialBids(propertyId)
            .subscribe(function (response) {
            $("#deadlineModal").modal('hide');
            _this.router.navigate(['/auction/', propertyId]);
        }, function (error) {
        });
        this.subscriptions.push(this.getInitialBidsSubscription);
    };
    // called when user has submitted deadline modal
    ViewPropertyComponent.prototype.submitDeadlineModal = function () {
        var _this = this;
        var currentYear = this.date.getFullYear();
        var month = this.months.indexOf(this.dateTime.month);
        if (month < this.currentMonth) {
            currentYear = currentYear + 1;
        }
        if (this.dateTime.time == 'pm') {
            var hour = parseInt(this.dateTime.hour);
            this.dateTime.hour = hour + 12;
        }
        var deadline = this.dateTime.month + ' ' + this.dateTime.day + ', ' + currentYear + ' ' +
            this.dateTime.hour + ':' + this.dateTime.minutes + ':00';
        this.openAuctionSubscription = this.auctionService.openAuction(this.propertyID, deadline)
            .subscribe(function (response) {
            _this.auctionService.setProperty(response);
            _this.router.navigate(['/auction/', _this.propertyID]);
        }, function (error) {
        });
        this.subscriptions.push(this.openAuctionSubscription);
    };
    ViewPropertyComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ViewPropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-property',
            template: __webpack_require__("./src/app/view-property/view-property.component.html"),
            styles: [__webpack_require__("./src/app/view-property/view-property.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auction_service__["a" /* AuctionService */],
            __WEBPACK_IMPORTED_MODULE_5__services_customizeProperty_service__["a" /* CustomizePropertyService */],
            __WEBPACK_IMPORTED_MODULE_6__services_deleteProperty_service__["a" /* DeletePropertyService */],
            __WEBPACK_IMPORTED_MODULE_7__services_editProperty_service__["a" /* EditPropertyService */],
            __WEBPACK_IMPORTED_MODULE_10__services_viewProperty_service__["a" /* ViewPropertyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__services_photos_service__["a" /* PhotosService */],
            __WEBPACK_IMPORTED_MODULE_9__services_validate_service__["a" /* ValidateService */]])
    ], ViewPropertyComponent);
    return ViewPropertyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA9uOeXPL1vBe4oWRTe824d4oOq0RcjtfY",
        authDomain: "veeya-c0185.firebaseapp.com",
        databaseURL: "https://veeya-c0185.firebaseio.com",
        projectId: "veeya-c0185",
        storageBucket: "veeya-c0185.appspot.com",
        messagingSenderId: "364065119012"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map