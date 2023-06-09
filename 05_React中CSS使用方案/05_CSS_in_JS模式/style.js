import { styled } from "styled-components";
import * as vars from './style/variable'




export const AppWrapper = styled.div`
    .footer {
        p {
            color: green;
            font-size: ${vars.bigSize};
        }
    }
`

// 1.子元素单独抽取到一个样式组件中
// 2.可以接收外部传入的props
// 3.可以通过attrs给标签模板字符串注入props属性
// 4.可以引用外部变量
// 5.继承
// 6.共享主题
export const SectionWrapper = styled.div.attrs(props=>({
    tcolor:props.color || 'blue'
}))`
    .title {
            color: ${props => props.tcolor};
        }
        .content {
            color: orange;
        }
`