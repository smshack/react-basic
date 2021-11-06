import React,{Component}from 'react'
import PropTypes from 'prop-types'

class MyComponent extends Component{

    constructor(props){
        super(props);
        // state의 초기값 설정
        this.state={
            number:0
        }
    }
    static defaultProps = {
        name:'기본이름'
    }
    static propTypes ={
        name:PropTypes.string,
        favoriteNumber:PropTypes.number.isRequired
    }
    render(){
        const {name, favoriteNumber, children} = this.props;// 비구조화 할당
        const {number} = this.state
    return(
        <div>
             나의 새롭고 멋진 컴포넌트{name} <br />
             children 의 값은 {children} <br />
             제가 좋아하는 숫자는 {favoriteNumber}<br />
             현재 상태값 숫자 {number}
             <button 
             //onClick을 통해 보튼이 클릭되었을 때 호출할 함수를 지정
             onClick={()=>{
                 // this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
                this.setState({number:number+1})
             }} >증가</button>
        </div>
    )
    }
}
export default MyComponent
