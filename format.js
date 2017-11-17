console.log(qcm);

var answers;
for(var i=0; i<45; i++) {
  document.write('<h1>'+ i +' -- Type : ' + qcm[i].parent.type + '. Titre : ' + qcm[i].parent.title + '</h1>');
  for(var x=0; x<qcm[i].child.length; x++) {
    document.write('<h2>Type : ' + qcm[i].child[x].type + '. Titre : ' + qcm[i].child[x].title + '</h2>');

    if(qcm[i].child[x].description)
    document.write('Description : ' + qcm[i].child[x].description + '<br><br>');

    if(qcm[i].child[x].scorm_version)
    document.write('Scorm Version : ' + qcm[i].child[x].scorm_version + '<br><br>');

    if(qcm[i].child[x].standard)
    document.write('Standard : ' + qcm[i].child[x].standard + '<br><br>');

    document.write('Contenu : <br>');
    for(var y=0; y < qcm[i].child[x].content.length; y++) {
      document.write('Type : ' + qcm[i].child[x].content[y].type  + '. Titre : ' + qcm[i].child[x].content[y].title + '<br><br>');
      document.write('Media : <br>');
      for(var j=0; j < qcm[i].child[x].content[y].media.length; j++) {

        if(qcm[i].child[x].content[y].media[j].about)
        document.write('A propos : ' + qcm[i].child[x].content[y].media[j].about + '<br><br>');

        if(qcm[i].child[x].content[y].media[j].description)
        document.write('Description : ' + qcm[i].child[x].content[y].media[j].description + '<br><br>');
        
        document.write('Msubtype : ' + qcm[i].child[x].content[y].media[j].msubtype + '<br><br>');
        document.write('mtype : ' + qcm[i].child[x].content[y].media[j].mtype + '<br><br>');
        document.write('<strong>Question : ' + qcm[i].child[x].content[y].media[j].title + '</strong><br>');
        document.write('<strong>Reponses (vert = bonne reponse) : </strong><br>');
        answers = eval(qcm[i].child[x].content[y].media[j].answers);
        if(undefined !== answers) {
          for(var k=0; k < answers.length; k++) {
            if(answers[k].is_good) {
              document.write('<div style="color:green; font-weight:bold;">'+ answers[k].text +'</div>');
            } else {
              document.write('<div style="color:tomato; font-weight:bold;">'+ answers[k].text +'</div>');
            }

            if(answers[k].comment)
            document.write('<p>Commentaire : ' + answers[k].comment + '</p>');
          }
          document.write('<p style="width: 30%; border-top: 1px dotted black;"></p>');
        }
      }
    }
  }
document.write('<hr>');
}