import React from 'react';
import './App.css';
// import List from './day01/List';
// import UserInfo from './day01/UserInfo'

// import List from './day02/List';
import Clock from './day02/Clock';
import Student from './day02/Student';

function App() {
  //day02的代码
  return(
    <div className="App">
        {/* <List/> */}
        <Clock/>
        <Student/>
    </div>
  );


  //day01的代码
  // let msg="hello react";
  // let dd=[1,2,3,4,5,6,7,8,9];
  // let user={name:"terry",photo:"xxx"}
  // return (
  //   <div className="App">
  //       <UserInfo user={user}/>

  //       {msg}
  //       {/* 调用list组件，为list传递参数 */}
  //      <List a='aaa' b={3} c={true} data={['tom','jack','rose']}/>
    
  //      <List data={dd}/>
  //   </div>
  // );
}

export default App;
