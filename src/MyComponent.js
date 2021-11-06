import React,{Component}from 'react'
import PropTypes from 'prop-types'

class MyComponent extends Component{
    static defaultProps = {
        name:'기본이름'
    }
    static propTypes ={
        name:PropTypes.string,
        favoriteNumber:PropTypes.number.isRequired
    }
    render(){
        const {name, favoriteNumber, children} = this.props;// 비구조화 할당
    return(
        <div>
             나의 새롭고 멋진 컴포넌트{name} <br />
             children 의 값은 {children} <br />
             제가 좋아하는 숫자는 {favoriteNumber}
        </div>
    )
    }
}
export default MyComponent
