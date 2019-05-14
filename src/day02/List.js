import React from 'react';


class List extends React.Component{

    constructor(props){
        super(props);
        //局部状态 （仅在当前组件中有效），动态改变UI，获取UI上数据状态变化
        this.state={
            arr:[1,2,3]
        }

        //每隔1s改变arr引用地址，而不是值
        setInterval(()=>{
            this.setState({
                arr:[...this.state.arr,Math.round(Math.random()*10)]
            })
        },1000);

    }

    
    render(){
        let {arr}=this.state;
        return(
            <div>
                <ul>
                    {
                        arr.map((item,index) => <li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default List;
