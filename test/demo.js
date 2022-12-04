exports.add = function (a,b) {
    return a + b;
}

exports.addCallback = function(a, b, callback){
    setTimeout(()=>{
        return callback(null, a+b)
    }, 500)
}

exports.addPromise = function(a,b){
   // return Promise.reject(new Error('Fake'))
    return Promise.resolve(a+b) 
}

exports.consoleTest = () =>{
    console.log('console.log called')
    console.warn('console.warn called')
}

exports.bar = async (fileName) => {
    await exports.createFile(fileName)
    let result = await callDB(fileName)
    return result;
}

exports.createFile = (fileName) => {
    console.log('at createFile')

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('fake file created')
            return Promise.resolve('done')
        }, 100)
    })
}

function callDB(fileName){
    console.log('at calldb')
    //fake create file
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('fake db call')
            resolve('saved')
        }, 100)
    })
}