import { useNavigate,useParams,useSearchParams,useLocation } from "react-router-dom"

function withRouter (WrapperComponent){
    return function(props){
        // 获取导航
        const navigate = useNavigate()

        // 动态路由参数
        const params = useParams()

        // 查询字符串参数

        // 第一种方法
        // 这个函数是个标准hook函数,返回数组,数组里面两个元素,第一个searchParams,第二个setSearchParams
        // 需要将其转化为普通对象
        const [searchParams] = useSearchParams()
        const query = Object.fromEntries(searchParams)
        
        // 第二种方法, 但是需要进行进一步处理(search: '?name=Tom&age=20')
        const location = useLocation()

        const router = { navigate, params,query,location }

        return <WrapperComponent {...props}  router={ router }/>
    }
}


export default withRouter