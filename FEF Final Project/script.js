$(document).ready(function(){    
    $(".inline").hover(function(){
        $(this).css("height", "10rem");
    }, function(){
        $(this).css("height", "5rem");
    });
});

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("my_github_repos").innerHTML = this.responseText;
  }
};
newRequest.open("GET", "https://api.github.com/users/jcshelley/repos", true);
newRequest.send();



