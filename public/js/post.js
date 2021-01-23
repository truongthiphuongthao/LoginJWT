var my_token = localStorage.getItem('my_token')
// display add posts
function handleAddPost(){
	$.ajax({
	 url: '/add-post',
	 method: 'GET',
	 headers: {
		 authorization: 'Bearer ' + my_token
	 },
	 success: function(res){
		 window.location.href = "../pages/add-post.html"
	 }
 })
}
// delete post
function handleDeletePost(value){
	var id_post = value
	$.ajax({
		url: '/delete-post/' + id_post,
		method: 'DELETE',
		headers: {
          authorization: 'Bearer ' + my_token
    },
		data: {
			id_post: id_post
		},
		success: function(res){
			alert(res)
			location.reload()
		}
	})
}

// add post
var arr_link = []
// get image link in post
function getImageLink(){
		let image_link = $('#image_link').val().trim()
		if (image_link.length == 0) return
		if(arr_link.indexOf(image_link) === -1){
			arr_link.push(image_link)
			$('#main-list').append(`
				<tr id="${image_link}">
					<td>${image_link}</td>
					<td> <button type="button" class="btn btn-secondary" onclick="deleteLink('${image_link}')"> Delete</button> </td>
				</tr>`
			)
		}
}

// event delete link
function deleteLink(image_link){
  var link = document.getElementById("main-list")
	// alert(image_link)
  $(this).parents('tr').first().remove();
	let idx = arr_link.indexOf(image_link);
	if (idx > -1) {
		arr_link.splice(idx, 1)
		link.deleteRow(idx);
	}
}

// // save post
function savePost(){
  let post_content = $('#post_content').val()
	let image_links = arr_link
	// alert(post_content)
	// alert(image_links)
	$.ajax({
		url: '/add-post',
		method: 'POST',
		headers: {
          authorization: 'Bearer ' + my_token
    },
		data: {
			post_content: post_content,
			image_links: image_links
		},
		success: function(res){
			alert(res)
			window.location.href = "../pages/index.html"
		}
	})
}

// // update post
// function handleDisplayUpdate(value){
// 	$.ajax({
// 		url: "/update-post",
// 		method: "GET",
// 		headers: {
//           authorization: 'Bearer ' + my_token
//     },
// 		success: function(res){
// 			window.location.href = "../pages/update-post.html"
// 		}
// 	})
// 	$.ajax({
// 		url: "/get-update-post/" + value,
// 		method: "GET",
// 		headers: {
// 			authorization: 'Bearer ' + my_token
// 		},
// 		data: {
// 			post_id: value
// 		},
// 		success: function(res){
// 			$('#post_content_update').innerHTML = "hello"
// 		}
// 	})
// }



function updatePost(id){
	let post_content = $('#post_content_update').val()
	$.ajax({
		url: '/update-post/' + id,
		method: 'POST',
		headers: {
      authorization: 'Bearer ' + my_token
    },
		data: {
			id: id,
			post_content: post_content
		},
		success: function(res){
			alert(res)
			window.location.href = "../pages/index.html"
		}
	})

}
