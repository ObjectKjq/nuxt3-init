import { mongo } from '#nuxt-mongodb'

/**
 * 数据库查询方法
 * @param table 数据集合
 * @param obj 查询对象
 * @returns 返回查询结果
 * @example 
 * getWishs("wish",{"age": 21})
 */
export const getWishs = async (table: string, obj: object = {}) => {
    return new Promise(async (resolve, reject) => {
        const db = mongo.db()
        try {
            const response = await db.collection(table).find().skip((obj.page-1)*obj.num).limit(obj.num).toArray()  //注意此处的toArray()方法，否则可能返回的数据无法正常访问
            resolve(response)
            db.close();
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * 获取数据总数
 * @param table 
 * @returns 
 */
export const getTotal = async (table: string) => {
    return new Promise(async (resolve, reject) => {
        const db = mongo.db()
        try {
            const total = await db.collection(table).find().count()
            resolve(total)
            db.close();
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * 添加心愿
 * @param table 
 * @param obj 
 * @returns 
 */
export const addWish = async (table: string, obj: object = {}) => {
    return new Promise(async (resolve, reject) => {
        const db = mongo.db()
        try {
            const response = await db.collection(table).insertOne(obj);
            resolve(response)
            db.close();
        } catch (error) {
            reject(error)
        }
    })
}
