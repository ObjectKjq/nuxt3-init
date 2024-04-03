import {getWishs} from '../../db/wish'

export default defineEventHandler(async (event) => {
    //此处解析前端传入的params和query，body数据
    const query = getQuery(event);
    query.page = Number(query.page);
    query.num = Number(query.num);
    //服务端接口可以访问数据库，展示第1页的三条数据
    const data = await getWishs('wish', query)
    return {
        code:200,
        msg: 'ok',
        data:data,
    }
})