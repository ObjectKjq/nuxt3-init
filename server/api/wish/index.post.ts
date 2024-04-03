import {addWish} from '../../db/wish'

export default defineEventHandler(async (event) => {
    //此处解析前端传入的params和query，body数据
    const body = await readBody(event);
    //此处进行参数校验，如参数缺失或格式不正确，则返回错误信息
    if(body.title === undefined 
        || body.content === undefined 
        || body.title.length > 200 
        || body.title.length < 1 
        || body.content.length > 1000 
        || body.content.length < 1){

        return {
            code:400,
            msg:'参数错误',
        }
    }
    //服务端接口可以访问数据库，展示第1页的三条数据
    const data = await addWish('wish', {
        ...body,
        createTime: new Date(),
        updateTime: new Date(),
        isDelete: 0,
    })
    return {
        code:200,
        msg: 'ok',
        data:data,
    }
})