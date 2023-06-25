// Function to submit the comment
function submitComment() {
    var comment = document.getElementById("comment-box").value;
  
    if (comment.trim() !== "") {
      // Store the comment in localStorage
      storeComment(comment);
  
      // Clear the comment box
      document.getElementById("comment-box").value = "";
  
      // Redirect to comments.html
      window.location.href = "comments.html";
    }
  }
  
  // Function to store the comment in localStorage
  function storeComment(comment) {
    var comments = [];
  
    // Check if there are existing comments in localStorage
    if (localStorage.getItem("comments")) {
      comments = JSON.parse(localStorage.getItem("comments"));
    }
  
    // Add the new comment to the array
    comments.push(comment);
  
    // Store the updated comments array in localStorage
    localStorage.setItem("comments", JSON.stringify(comments));
  }
  
  // Function to load comments from localStorage
function loadComments() {
  var commentsList = document.getElementById("comments-list");
  var comments = [];

  // Check if there are existing comments in localStorage
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));

    // Create a list item for each comment and add it to the comments list
    comments.forEach(function(comment) {
      var li = document.createElement("li");
      li.textContent = comment;
      commentsList.appendChild(li);
    });
  }
}

// Load comments when the comments.html page is loaded
window.onload = loadComments;

  
