exports.process = function (request, response, messages) {
  let commandList = request.url.split('/')[2];
  response.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
              // Return messages id list
              if(commandList === 'lu'){
                  processLu(request, response, messages);
              }else if(commandList === 'exped'){               
                  processExped(request, response, messages);
              }else if(commandList === 'date'){
                  processDate(request, response, messages);
              }else{

                // fs.readFile("./messagesNew.json", function (err, data) {
                //   if (err) {console.log(err);}
          
                  response.write(JSON.stringify(messages));
                  response.end();
                // });
              }
};

function processLu (request, response, messages) {

      var tabItem = messages;
      // console.log(tabItem);
      var tabLu =[]
      for(i=0;i<tabItem.length;i++){

        if(tabItem[i].lu){
          tabLu.push(tabItem[i]);
        };

      }
      tabLuStrg= JSON.stringify(tabLu);

      response.write(tabLuStrg);
      response.end();
};

function processExped (request, response, messages){

    var tabItem = messages;
    // console.log(tabItem);
    var tabExped =[];
    for(i=0;i<tabItem.length;i++){
      tabExped.push(tabItem[i].exped);
    }

    tabExped.sort();
    console.log(tabExped);

    var tabReorga=[];

    for(i=0;i<tabExped.length;i++){

      for(j=0; j<tabItem.length; j++){
      
        if(tabExped[i]===tabItem[j].exped){
          tabReorga.push(tabItem[j]);
        }
      }
    }
    console.log(tabReorga);
    tabReorgaStrg= JSON.stringify(tabReorga);
    
    response.write(tabReorgaStrg);
    response.end();

}

function processDate (request, response, messages){

    var tabItem = messages;
    // console.log(tabItem);
    var tabDate =[];

    for(i=0;i<tabItem.length;i++){
      tabDate.push(tabItem[i].date);
    }

    tabDate.sort();
    console.log(tabDate);

    var tabReorgaDate=[];

    for(i=0;i<tabDate.length;i++){

      for(j=0; j<tabItem.length; j++){
      
        if(tabDate[i]===tabItem[j].date){
          tabReorgaDate.push(tabItem[j]);
        }
      }
    }



    tabDateStrg= JSON.stringify(tabReorgaDate);
    
    response.write(tabDateStrg);
    response.end();

}