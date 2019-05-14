import React from 'react';

class Clock extends React.Component{

    constructor(){
        super();
        //局部状态 （仅在当前组件中有效），动态改变UI，获取UI上数据状态变化
        this.state={
            now:new Date().toLocaleString()
        }


        // setInterval(()=>{
        //     this.setState({
        //         now:new Date().toLocaleString()
        //     });
        // },1000);

    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                now:new Date().toLocaleString()
            });
        },1000);
    }

    
    render(){
        return(
            <div>
                当前时间：{this.state.now}
            </div>
        );
    }
}

export default Clock;