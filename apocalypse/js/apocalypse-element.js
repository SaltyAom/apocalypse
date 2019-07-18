$(document).ready(function(){
  $("apocalypse-project").on("click",function(){
    var project = $(this).attr("data");
    $("apocalypse-left, apocalypse-right, apocalypse-welcome-container").addClass("project-show");
    $("apocalypse-welcome-container, apocalypse-left, apocalypse-right").fadeOut();
    $("a-project-container, project-frame").delay(500).fadeIn();
    $("a-project-header").html(project);
    switch(project){
      case "Silverfate":
        var projectContent = "Remaster version of Alter social media project, recompile with less framework made progress faster than Alter x4";
        var src = "silverfate";
        var tag = " <project-entity> <grid class='half no-float project-tag'> <span class='glyphicon glyphicon-console'></span> Social Network </grid> <grid class='half float-right project-tag'> Remaster Project </grid> </project-entity>";
        break;
      case "EtherealNeet":
        var projectContent = "Some more information about myself, despite what I do and what I like.";
        var src = "Ethereal Neet";
        var tag = " <project-entity> <grid class='half no-float project-tag'> <span class='glyphicon glyphicon-console'></span> Myself </grid> <grid class='half float-right project-tag'> Information </grid> </project-entity>";
        break;
      case "Alter":
        var projectContent = "Social Network Project, running with beautiful UI, backend with PHP and MySQL Database, Bootstrap and JQuery is included in this project.";
        var src = "alter";
        var tag = "<project-entity><grid class='half project-tag'><span class='glyphicon glyphicon-globe'></span>Social Network</grid><grid class='half no-float project-tag'>Version | 1.1 Beta 2</grid></project-entity";
        break;
      case "Light-Mystia":
        var projectContent = "Light-weight and minimal version of directory listing using PHP to retrieve directory and JS to to control over page.";
        var src = "light-mystia";
        var tag = " <project-entity> <grid class='half no-float project-tag'> <span class='glyphicon glyphicon-console'></span> PHP, JS, Jquery-ui </grid> <grid class='half float-right project-tag'> Light-Mystia </grid> </project-entity>";
        break;
        case "Nuclear-Reaction":
          var projectContent = "Some of pre-competition website which use to join some competition, using pure HTML, CSS and Jquery";
          var src = "Nuclear Reaction";
          var tag = " <project-entity> <grid class='half project-tag'> <span class='glyphicon glyphicon-send'></span> Pre-Competition </grid> <grid class='half no-float project-tag'> WMC-2018 Compeition </grid> </project-entity>";
          break;
        case "Re-Dimension":
          var projectContent = "Animated GIF to be interactive with user. \"Reimu Hakurei\" is chose to be prototype of this project. (Because I'm bored)";
          var src = "Reimu Project";
          var tag = " <project-entity> <grid class='half no-float project-tag'> <span class='glyphicon glyphicon-picture'></span> Interactive image </grid> <grid class='half float-right project-tag'> Reimu Hakurei </grid> </project-entity>";
          break;
        case "Matrix":
          var projectContent = "Just some code put on marquee with theme like console, nothing special. (Just made to look cool for some reason)";
          var src = "matrix";
          var tag = " <project-entity> <grid class='half no-float project-tag'> <span class='glyphicon glyphicon-console'></span> Console Theme </grid> <grid class='half float-right project-tag'> Matrix Style </grid> </project-entity>";
          break;
    default:
      break;
    }
    $("#project-iframe").attr({"src":src});
    $("a.frame-content").attr({"href":src});
    $("a.frame-content").html(project + " >");
    $("a-project-content").html(projectContent);
    $("a-entity").html(tag);
  });
  $("project-main").on("click",function(){
    $("a-project-container, project-frame").fadeOut();
    $("apocalypse-left, apocalypse-right, apocalypse-welcome-container").removeClass("project-show");
    $("apocalypse-welcome-container, apocalypse-left, apocalypse-right, alert").delay(500).fadeIn();
  });
});
