import axios from "axios";
/*
返回的数据为response.data
 */

export default function ajax(url, data={}, type='GET') {
    return new Promise(function (resolve, reject) {
        //1.执行异步Ajax请求
        //2.成功就执行resolve函数
        //3.失败执行reject函数
        //将变量指向函数，或者将函数作为传参（本质也是变量指向函数），则将该函数成为高阶函数

        let promise
        if (type === 'GET') {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr) {
              dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
              url = url + '?' + dataStr
            }
            promise = axios.get(url)
        }
        if (type === 'POST') {
            promise = axios.post(url, data)
        }

        promise.then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            reject(error)
        })
    })
}
