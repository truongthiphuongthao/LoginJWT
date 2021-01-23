var my_token = localStorage.getItem('my_token')
function handleAddComment(postId){
  $( "#" + postId ).append(`
   <div class="input-group mb-3">
      <input type="text" class="form-control" id="inputComment" placeholder="Enter comment">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="send" onclick="saveComment('${postId}')">Send</button>
      </div>
   </div>
  `
  );
}

function saveComment(postId){
  let comment_details = $('#inputComment').val()
  $.ajax({
    url: '/save-comment/' + postId,
    method: 'POST',
    headers: {
          authorization: 'Bearer ' + my_token
    },
    data: {
      post_id: postId,
      comment_details: comment_details
    },
    success: function(res){
      alert(res)
      window.location.href = "../pages/index.html"
    }

  })
}

//delete comment
function handleDeleteComment(comment_id){
  alert(comment_id)
  $.ajax({
    url: '/delete-comment/' + comment_id,
    method: 'DELETE',
    headers: {
          authorization: 'Bearer ' + my_token
    },
    data: {
      _id: comment_id,
    },
    success: function(res){
      alert(res)
      window.location.href = "../pages/index.html"
    }
  })
}

// edit comment
function handleEditComment(comment_id) {
  alert($('#' + comment_id).prop('disabled'))
  if($('#' + comment_id).prop('disabled')){
    ($('#' + comment_id).prop('disabled', false))
  }
  else{
      ($('#' + comment_id).prop('disabled', true))
      let comment_details = $('#' + comment_id).val()
      $.ajax({
        url: '/update-comment/' + comment_id,
        method: 'POST',
        headers: {
          authorization: 'Bearer ' + my_token
        },
        data: {
          _id: comment_id,
          comment_details: comment_details
        },
        success:function(res){
          alert(res)
          window.location.href = "../pages/index.html"
        }
      })
  }
}
