import logo from './logo.svg';
import React from 'react';
import './App.css';
import Register from './Register';
import axios from 'axios';
import { Link,Route,useNavigate } from "react-router-dom"

function App() {
		document.title = 'Home';
		//无状态组件获取input的值
		let usernameid;   //用户名输入框的值
		let passwordid;   //密码输入框的值
		const history = useNavigate();
	const login = (e) => {       //登陆方法
		// if (e) e.preventDefault();  //该方法将通知 Web 浏览器不要执行与事件关联的默认动作(如果存在这样的动作)
		const username = usernameid.value;   //赋值
		const password = passwordid.value;  
		//在此做ajax提交
		axios({
			  method: 'post',
			  url: 'http://localhost:5005/admin/auth/login',
			  headers: {
			  		'Content-Type':'application/json'
			  	},
			  data: { // 这里data中的参数为requestBody参数，服务端需要使用@RequestBody注解进行获取
				email: username,
				password: password
			  }
			}).then(function (response) {
				if(response.status==200){//成功
					console.log();
					localStorage.setItem("token",response.data.token);
					console.log("1111"+localStorage.getItem("token"));
					history('/Home' )
				}else{
					 alert(response.error);
				}
			  console.log(response);
			}).catch(function (error) {
				// alert(error.response.data.error);
				usernameid.value = "";
				passwordid.value = "";
			  console.log(error);
			});
	};
  return (
    <div className="App">
	  <header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>username<input type="text" ref={input => usernameid= input}></input></p>
		<p>password<input type="password" ref={input => passwordid= input}></input></p>
		<a
		  href="#"
		  className="App-link"
		  onClick= {login}
		>
		  sign in
		</a>
		<a
		  href="Register"
		  className="App-link"
		>
		  sign up
		</a>
	  </header>
	</div>
  );
}

export default App;
