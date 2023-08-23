// 环境配置文件
// 一般在企业力有三个环境
// 开发环境
// 测试环境
// 线上环境
//当前环境

const env =import.meta.env.MODE || 'prod'

const EnvConfig = {
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/52d95933b9530db433d6001ce9492b40/api'
    },
    development:{
        baseApi:'//test.future.com/api',
        mockApi:'https://www.fastmock.site/mock/52d95933b9530db433d6001ce9492b40/api'
    },
    development:{
        baseApi:'//future.com/api',
        mockApi:'https://www.fastmock.site/mock/52d95933b9530db433d6001ce9492b40/api'
    }
}
export default {
    env,
    //mock的总开关
    mock:true,
    ...EnvConfig[env]
}