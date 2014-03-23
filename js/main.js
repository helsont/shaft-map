
Shaft={};
Shaft.filterCriteria=[];
Shaft.MatchedDorms=[];
Shaft.DormObjectMap = {};
Shaft.DormObject = function (prop) {
    this.name = prop.name;
    this.description= prop.description;
    this.amenities = prop.amenities;
    this.suiteSize = prop.suiteSize;
}




Shaft.DormObject.prototype.toHTML = function () {

}



function addFilter(filter){
  Shaft.filterCriteria.push(filter);
}

function matchDorm(){
  //has to satisfy all conditions for it to be true
  
  for (var dorm in Shaft.DormObjectMap){
    var isMatch=true;
    console.log(dorm);
    var dormObj=Shaft.DormObjectMap[dorm];
    for (var criteria in Shaft.filterCriteria){
      var criteriaStr=Shaft.filterCriteria[criteria];
     if (dormObj.amenities[criteriaStr]===false){
      isMatch=false;
      continue;
     }
    }
    if (isMatch){
      Shaft.MatchedDorms.push(dorm);
    }
  }
}

$("#schapiro").on("mouseenter", function (e){
 $("#schapiro").css("fill","yellow");
  $("#schapiro").css("cursor","pointer");

  });
$("#schapiro").on("mouseout", function (e){
 $("#schapiro").css("fill","#007fb2");
  });

$("#schapiro").on("click", function (e){
	 $(".housing-info-body").empty();
	 $(".housing-info-title").empty();
	 $(".housing-info-title").append("Building details");
 $(".housing-info-body").append("<h2>Schapiro</h2>");
 $(".housing-info-body").append("With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising junio With its upcoming renovations from the sixth floor up, Schapiro’s gotten much more popular for rising juniors. Each floor has a roomy kitchen and lounge, while the building as a whole boasts perhaps the most beautiful sky lounge at Columbia. Expect singles to be grabbed by juniors and doubles by sophomores. (singles, doubles)");
  });

$("#woodbridge").on("mouseenter", function (e){
 $("#woodbridge").css("fill","yellow");
 $("#woodbridge").css("cursor","pointer");

  });
$("#woodbridge").on("mouseout", function (e){
 $("#woodbridge").css("fill","#007fb2");

  });

$("#woodbridge").on("click", function (e){
	 $(".housing-info-body").empty();
	 	 $(".housing-info-title").empty();
	 $(".housing-info-title").append("Building details");
 $(".housing-info-body").append("<h2>Woodbridge</h2>");
 $(".housing-info-body").append("Seniors and juniors will fill up Woodbridge. Every double in Woodbridge features a private kitchen and bathroom as well as a large living room. (2 person)");
  });


/// data stuff

var schapiro= {
  'name': "Schapiro",
  'description': "Seniors and juniors will fill up Woodbridge. Every double in Woodbridge features a private kitchen and bathroom as well as a large living room. (2 person)",
  'amenities': {
      'musicRoom': false,
      'ac': true,
      'computerLab': false,
      'fitness': true
  },
   'suiteSize':{
      'single': true,
      'double': true,
      '3-person': false,
      '4-person': false,
      '5-person': false,
      '6-person': false,
      '7-person': false,
      '8-person': false

    }
}

var woodbridge= {
  'name': "Schapiro",
  'description': "Seniors and juniors will fill up Woodbridge. Every double in Woodbridge features a private kitchen and bathroom as well as a large living room. (2 person)",
  'amenities': {
      'musicRoom': true,
      'ac': true,
      'computerLab': false,
      'fitness': true
  },
   'suiteSize':{
      'single': true,
      'double': true,
      '3-person': false,
      '4-person': false,
      '5-person': false,
      '6-person': false,
      '7-person': false,
      '8-person': false

    }
}
Shaft.DormObjectMap['schapiro']= new Shaft.DormObject(schapiro);
Shaft.DormObjectMap['woodbridge']= new Shaft.DormObject(woodbridge);