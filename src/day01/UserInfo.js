import React from 'react';

//用户信息栏
function UserInfo(props){
    let {user} = props;
    if(user){
        return(
           <div>
               欢迎{user.name}登录
               头像
           </div> 
        )
    }
    return(
        <div><a>亲，请返回</a></div>
    );
}

export default UserInfo;