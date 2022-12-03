const assert = require('assert')

describe('arquivo para ser testado', ()=>{
    context('função a ser testada', ()=>{

       /*  before(()=>{
            console.log("=======before")
        })

        after(()=>{
            console.log("======after")
        })

        beforeEach(()=>{
            console.log('=====beforeEach')
        })

        afterEach(()=>{
            console.log('=====afterEach')
        })
 */
        it('isso deve fazer x', ()=>{
            // assert.equal(1,2); o teste irá apontar um erro, visto que, 1 não é igual a 2
            assert.equal(1,1);
            console.log("ENV:" + process.env.NODE_ENV)
            if(process.env.NODE_ENV == 'development'){
                console.log("DEVELOPMENT MODE")
            }
        })

        it('isso deve fazer y ', ()=>{
            assert.deepEqual({name: 'Gustavo'}, {name: 'Gustavo'});
        })

        it('teste vazio'); //irá retornar o teste como pendente
    })

    context('outra função a ser testada', ()=>{

        it('teste pendente');

    })
})