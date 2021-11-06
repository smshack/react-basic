import React from 'react'
import PropTypes from 'prop-types'
// const  MyComponent =(props)=> {
//     const {name,children} = props
//     return (
//         <div>
//              나의 새롭고 멋진 컴포넌트{name} <br />
//              children 의 값은 {children}
//         </div>
//     )
// }

const  MyComponent =({name,favoriteNumber,children})=> {
    return (
        <div>
             나의 새롭고 멋진 컴포넌트{name} <br />
             children 의 값은 {children} <br />
             제가 좋아하는 숫자는 {favoriteNumber}
        </div>
    )
}
// 기본값 설정
MyComponent.defaultProps = {
    name:'기본 이름'
}
// 타입 지정
MyComponent.prototype ={
    name:PropTypes.string,
    favoriteNumber:PropTypes.number.isRequired
}
export default MyComponent
