import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import LogOut from './logOut'

function Home() {
		document.title = 'Home';
		//无状态组件获取input的值
		let usernameid;   //用户名输入框的值
		let passwordid;   //密码输入框的值
		let email;
		let token = localStorage.getItem("token");
		let dataList = [];
		let dataListBox = document.querySelector("#dataList");
		const clickFun = (id) =>{
			console.log("111");
		}
		const clickFun2 = (id) =>{
			console.log("2222");
		}
	const initData = (e) =>{
		console.log("11111");
		dataListBox = document.querySelector("#dataList");
		axios({
			  method: 'get',
			  url: 'http://localhost:5005/admin/quiz',
			 headers: {
				"Content-Type":'application/json',
				"Authorization":"Bearer "+token ,
				}
			}).then(function (response) {
				if(response.status==200){//成功
				// console.log(response.data.quizzes.length);
					dataList = response.data.quizzes;
					var html ='';
					for(var i=0;i<dataList.length;i++){
						console.log(dataList[i]);
						html+= '<tr className="t_h">'+'<td>'+dataList[i].name+'</td>'+
									'<td>'+dataList[i].oldSessions.length+'</td>'+
									'<td>'+dataList[i].thumbnail+'</td>'+
									'<td>'+dataList[i].createdAt+'</td>'+
									'<td><a href="#">detail</a>&nbsp;<a href="#"> delete</a></td></tr>';
					}
					document.querySelector("#dataList").innerHTML=html;
				}else{
					 alert(response.error);
				}
			  console.log(response);
			}).catch(function (error) {
				// alert(error.response.data.error);
			  console.log(error);
			});
	}
	initData();
	
  return (
    <div className="App">
	  <LogOut />
	  <div>
		Question List
		<table>
			<thead>
			<tr className="t_h">
				<td>title</td>
				<td>number</td>
				<td>thumbnail</td>
				<td>total time</td>
				<td>option</td>
			</tr>
			</thead>
			<tbody id="dataList">
			</tbody>
		</table>
	  </div>
	</div>
  );
}

export default Home;
