import {getTotal} from '../../db/wish'

export default defineEventHandler(async (event) => {
    //服务端接口可以访问数据库，展示第1页的三条数据
    const data = await getTotal('wish')
    return {
        code:200,
        msg: 'ok',
        data:data,
    }
})