function handleLogin(){
  let username = $('#username').val()
  let password = $('#password').val()

  $.ajax({
    url: "/login",
    method: "POST",
    data: {
      username: username,
      password: password
    },
    success: function(res){
      console.log(res)
      if(res.token){
        window.localStorage.setItem('my_token', res.token)
        window.location.href= "../pages/index.html"
     }
     else{
       alert("Login fail")
     }
    }
  })

}
