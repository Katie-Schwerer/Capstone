$("input[type='button']").on('click', chooseLanguage);

function chooseLanguage() {
  let secretContainer = $('.secretContainer');
  //let points = 0;
  //let language = 0;
  let age = $("input[name ='age']:checked").val();
  let subject = $("input[name='subject']:checked").val();
  let activity = $("input[name='activity']:checked").val();
  let learn = $("input[name='learn']:checked").val();
  let describe = $("input[name='describe']:checked").val();
  let challenge = $("input[name='challenge']:checked").val();
  let name = $("input[name='name']").val();

  secretContainer.append(`<h2>Hey ${name}, here are some languages to learn</h2>`);

  if((age == "kids" || age == "senior_citizen") || learn == "visual") {
    if(age == "senior_citizen" && challenge == "easy") {}
    secretContainer.append("<div class='language'><h4>Scratch</h4><a href='https://www.udemy.com/course/scratch-programming-fundamentals/'>Udemy</a><br><a href='https://www.youtube.com/watch?v=ofmjvZ3nDjc'>Dr. Codie</a></div>");
  }

  if((age == "kids" && challenge == "hard") || (age == "adult" && challenge == "medium") && (age == "senior_citizen" && challenge == "easy") || subject == "english" || activity == "books" || describe == "disciplined") {
    secretContainer.append("<div class='language'><h4>Ruby</h4><a href='https://www.udemy.com/course/2020-complete-ruby-on-rails-6-bootcamp-learn-ruby-on-rails/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.US&utm_content=deal4584&utm_term=_._ag_81829991707_._ad_532193842025_._kw__._de_c_._dm__._pl__._ti_aud-720389363895%3Adsa-1007766171312_._li_9010192_._pd__._&matchtype=&gclid=EAIaIQobChMIq-mEpIjK_gIVjg6zAB00twF8EAAYAiAAEgLJ4PD_BwE'>Udemy</a><br><a href='https://www.codecademy.com/learn/learn-ruby'>Codecademy</a></div>");
  }

  if((age =="teens" || age == "young_adult") || challenge == "medium" || learn == "hand" || (activity == "books" || activity == "games" || activity == "sport") || describe == "disciplined") {
    secretContainer.append("<div class='language'><h4>Java</h4><a href='https://www.codecademy.com/catalog/language/java'>Codecademy</a><br><a href='https://www.w3schools.com/java/default.asp'>W3Schools</a></div>");
  }

  if((age == "teens" || challenge == "hard") || learn == "hand" || (activity == "watch" || activity == "games") || describe == "adventurous") {
    secretContainer.append("<div class='language'><h4>C++</h4><a href='https://www.codecademy.com/catalog/language/c-plus-plus'>Codecademy</a><br><a href='https://www.w3schools.com/cpp/default.asp'>W3Schools</a></div>");
  }

   if((age == "young_adult" || challenge == "hard") || (age == "adult" || challenge == "medium") || activity == "games" || describe == "disciplined") {
    secretContainer.append("<div class='language'><h4>C#</h4><a href='https://www.codecademy.com/catalog/language/c-sharp'>Codecademy</a><br><a href='https://www.w3schools.com/cs/index.php'>W3Schools</a></div>");
  }

  if(age == "senior_citizen" || subject == "english" || activity == "watch" || describe == "adventurous") {
    secretContainer.append("<div class='language'><h4>Swift</h4><a href='https://www.codecademy.com/catalog/language/swift'>Codecademy</a><br><a href='https://developer.apple.com/swift/'>Apple Developer</a></div>");
  }

  if((subject == "math" || subject == "science") || activity == "sport" || describe == "analytical") {
    secretContainer.append("<div class='language'><h4>R</h4><a href='https://www.w3schools.com/r/default.asp'>Codecademy</a><br><a href='https://www.codecademy.com/catalog/language/r'>W3Schools</a></div>");
  }

  if(learn == "visual" || subject == "visual" || describe == "creative") {
    secretContainer.append("<div class='language'><h4>Processing</h4><a href='https://www.udemy.com/course/learn-to-program-with-processing/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.US&utm_content=deal4584&utm_term=_._ag_81829991707_._ad_532193842025_._kw__._de_c_._dm__._pl__._ti_aud-720389363895%3Adsa-1007766171312_._li_9010192_._pd__._&matchtype=&gclid=EAIaIQobChMI1_HV95HK_gIV5QizAB23lw7CEAAYAiAAEgKh0vD_BwE'>Udemy</a><br><a href='https://processing.org/tutorials/'>Processing</a></div>");
  }

  secretContainer.append("<div class='language'><h4>Python</h4><a href='https://www.codecademy.com/catalog/language/python'>Codecademy</a><br><a href='https://www.w3schools.com/python/'>W3Schools</a></div>");

  secretContainer.append("<div class='language'><h4>Javascript</h4><a href='https://www.codecademy.com/catalog/language/javascript'>Codecademy</a><br><a href='https://www.w3schools.com/js/default.asp'>W3Schools</a></div>");
  
}