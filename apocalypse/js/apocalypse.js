$(document).ready(function(){
  var loading = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "|",
    "|",
    "|",
    "|",
    "|",
    "L|",
     "Lo|",
     "Loa|",
     "Load|",
     "Loadi|",
     "Loadin|",
     "Loading|",
     "Loading|",
     "Loading|",
     "Loading|",
     "Loading|",
     "Loading|",
     "Loading|",
     "Loading|",
     "Loading|",
     "Loading"
   ];

     loading.forEach(function(name,index) {
       setTimeout(function(){
         $("apocalypse-welcome-header").html(name);
       },50 * index);
     });
});

$(window).on("load",function(){

  setTimeout(function(){


    $("apocalypse-line").css({"animation":"line-in 3.5s ease-out","width":"85%"});

    var mystia_project = [
      "Loading|",
      "Loading|",
      "Loading|",
      "Loadin|",
      "Loadi|",
      "Load|",
      "Loa|",
      "Lo|",
      "L|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "M|",
       "My|",
       "Mys|",
       "Myst|",
       "Mysti|",
       "Mystia|",
       "Mystia |",
       "Mystia P|",
       "Mystia Pr|",
       "Mystia Pro|",
       "Mystia Proj|",
       "Mystia Proje|",
       "Mystia Projec|",
       "Mystia Project|",
       "Mystia Project|",
       "Mystia Project|",
       "Mystia Project|",
       "Mystia Project|",
       "Mystia Project|",
       "Mystia Project|",
       "Mystia Project|",
       "Mystia Project|",
       "Mystia Project",
    ];

          if($(document).width() < 500) {
        var mystia_project = ["Mystia Project"];
      }

    mystia_project.forEach(function(name,index) {
      setTimeout(function(){
        $("apocalypse-welcome-header").html(name);
      },50 * index);
    });

    var apocalypse = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "|",
      "|",
      "|",
      "|",
      "|",
      "A|",
      "Ap|",
      "Apo|",
      "Apoc|",
      "Apoca|",
      "Apocaly|",
      "Apocalyp|",
      "Apocalpys|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse|",
      "Apocalpyse"
      ];

          if($(document).width() < 500) {
        var apocalypse = ["Apocalypse"];
      }

      apocalypse.forEach(function(name,index) {
        setTimeout(function(){
          $("apocalypse-welcome-sub-header").html(name);
        },50 * index);
      });

    var content = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "P|",
      "Pr|",
      "Pro|",
      "Proj|",
      "Proj|",
      "Proje|",
      "Projec|",
      "Project|",
      "Project |",
      "Project o|",
      "Project of|",
      "Project of |",
      "Project of s|",
      "Project of st|",
      "Project of stu|",
      "Project of stud|",
      "Project of stude|",
      "Project of studen|",
      "Project of student|",
      "Project of student |",
      "Project of student w|",
      "Project of student we|",
      "Project of student web|",
      "Project of student web |",
      "Project of student web d|",
      "Project of student web de|",
      "Project of student web dev|",
      "Project of student web deve|",
      "Project of student web devel|",
      "Project of student web develo|",
      "Project of student web develop|",
      "Project of student web develope|",
      "Project of student web developer|",
      "Project of student web developer,|",
      "Project of student web developer, |",
      "Project of student web developer,  t|",
      "Project of student web developer, tr|",
      "Project of student web developer, try|",
      "Project of student web developer, tryi|",
      "Project of student web developer, tryin|",
      "Project of student web developer, trying|",
      "Project of student web developer, trying |",
      "Project of student web developer, trying  t|",
      "Project of student web developer, trying to|",
      "Project of student web developer, trying to |",
      "Project of student web developer, trying to a|",
      "Project of student web developer, trying to ac|",
      "Project of student web developer, trying to ach|",
      "Project of student web developer, trying to ache|",
      "Project of student web developer, trying to achei|",
      "Project of student web developer, trying to acheiv|",
      "Project of student web developer, trying to acheive|",
      "Project of student web developer, trying to acheive |",
      "Project of student web developer, trying to acheive t|",
      "Project of student web developer, trying to acheive th|",
      "Project of student web developer, trying to acheive the|",
      "Project of student web developer, trying to acheive the |",
      "Project of student web developer, trying to acheive the h|",
      "Project of student web developer, trying to acheive the hi|",
      "Project of student web developer, trying to acheive the hig|",
      "Project of student web developer, trying to acheive the high|",
      "Project of student web developer, trying to acheive the high-|",
      "Project of student web developer, trying to acheive the high-e|",
      "Project of student web developer, trying to acheive the high-en|",
      "Project of student web developer, trying to acheive the high-end|",
      "Project of student web developer, trying to acheive the high-end |",
      "Project of student web developer, trying to acheive the high-end l|",
      "Project of student web developer, trying to acheive the high-end le|",
      "Project of student web developer, trying to acheive the high-end lev|",
      "Project of student web developer, trying to acheive the high-end leve|",
      "Project of student web developer, trying to acheive the high-end level|",
      "Project of student web developer, trying to acheive the high-end level |",
      "Project of student web developer, trying to acheive the high-end level o|",
      "Project of student web developer, trying to acheive the high-end level of|",
      "Project of student web developer, trying to acheive the high-end level of|",
      "Project of student web developer, trying to acheive the high-end level of |",
      "Project of student web developer, trying to acheive the high-end level of W|",
      "Project of student web developer, trying to acheive the high-end level of Web|",
      "Project of student web developer, trying to acheive the high-end level of Web |",
      "Project of student web developer, trying to acheive the high-end level of Web D|",
      "Project of student web developer, trying to acheive the high-end level of Web De|",
      "Project of student web developer, trying to acheive the high-end level of Web Dev|",
      "Project of student web developer, trying to acheive the high-end level of Web Deve|",
      "Project of student web developer, trying to acheive the high-end level of Web Devel|",
      "Project of student web developer, trying to acheive the high-end level of Web Develo|",
      "Project of student web developer, trying to acheive the high-end level of Web Develop|",
      "Project of student web developer, trying to acheive the high-end level of Web Developi|",
      "Project of student web developer, trying to acheive the high-end level of Web Developin|",
      "Project of student web developer, trying to acheive the high-end level of Web Developing|",
      "Project of student web developer, trying to acheive the high-end level of Web Developing.|",
      "Project of student web developer, trying to acheive the high-end level of Web Developing.|",
      "Project of student web developer, trying to acheive the high-end level of Web Developing.|",
      "Project of student web developer, trying to acheive the high-end level of Web Developing.|",
      "Project of student web developer, trying to acheive the high-end level of Web Developing.|",
      "Project of student web developer, trying to acheive the high-end level of Web Developing."
    ];

        if($(document).width() < 500) {
      var content = ["Team of student web developer, trying to acheive the high-end level of Web Developing."];
    }

      content.forEach(function(name,index) {
        setTimeout(function(){
          $("apocalypse-content").html(name);
        },25 * index);
      });

      $("alert-dismiss-block").on("click",function(){
        $("alert").fadeOut();
      });

    if($(document).width() < 500) {
      $("apocalypse-content,apocaylpse,apocalypse-welcome-sub-header,apocalypse-welcome-header").fadeOut(0).fadeIn(700);
      $("apocalypse-left, apocalypse-right").delay(700).fadeIn(700);
    } else {
      $("apocalypse-left, apocalypse-right, alert").delay(3000).fadeIn(1500);
    }
  },2000);
});
