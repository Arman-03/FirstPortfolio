function toggleLike() {
    var likeButton = document.getElementById("likeButton");
    var likeCounter = document.getElementById("likeCounter");
    
    if (likeButton.classList.contains("liked")) {
      var likes = parseInt(likeCounter.textContent);
      likes--;
      likeCounter.textContent = likes;
      likeButton.classList.remove("liked");
    } else {
      var likes = parseInt(likeCounter.textContent);
      likes++;
      likeCounter.textContent = likes;
      likeButton.classList.add("liked");
    }
  
    localStorage.setItem("likes", likeCounter.textContent);
  }
  
  function addComment() {
    var commentInput = document.getElementById("commentInput");
    var commentList = document.getElementById("commentList");
    var commentText = commentInput.value;
  
    if (commentText.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = commentText;
      commentList.appendChild(li);
      commentInput.value = "";
  
      var comments = localStorage.getItem("comments");
      if (comments) {
        comments = JSON.parse(comments);
      } else {
        comments = [];
      }
      comments.push(commentText);
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }
  
  var likes = localStorage.getItem("likes");
  if (likes) {
    document.getElementById("likeCounter").textContent = likes;
  }
  
  var comments = localStorage.getItem("comments");
  if (comments) {
    comments = JSON.parse(comments);
    var commentList = document.getElementById("commentList");
    comments.forEach(function(commentText) {
      var li = document.createElement("li");
      li.textContent = commentText;
      commentList.appendChild(li);
    });
  }
  