const chai = require('chai')
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const rewire = require('rewire')
chai.use(chaiAsPromised)

var demo = rewire('./demo')

describe('demo', ()=>{
    context('add', ()=>{
        it('sum 2 numbers', ()=>{
            expect(demo.add(1,2)).to.equal(3)
        })
    })

    context('callback', ()=>{
        it('callback test', (done)=>{
            demo.addCallback(1,2, (err, result)=>{
                expect(err).to.not.exist;
                expect(result).to.equal(3);
                done()
            })
        })
    })

     context('promise test', ()=>{
        it('add with a promise cb', (done)=>{
            demo.addPromise(1,2).then((result)=>{
                expect(result).to.equal(3)
                done()
            }).catch((error)=>{
                console.log("O problema é:" + error)
                done(error)
            })
        })

        it('add with a promise with return', ()=>{
            return demo.addPromise(1,2).then((result)=>{
                expect(result).to.equal(3)
            })
        })

        it('test promise with async await', async()=>{
            let result = await demo.addPromise(1,2)
            expect(result).to.equal(3)
        })

        it('promise test with chai-as-promised', async()=>{
            await expect(demo.addPromise(1,2)).to.eventually.equal(3)
        })
    }) 

   context('test doubles', ()=>{
        it('spy at log', ()=>{
            let spy = sinon.spy(console, 'log')
            demo.consoleTest()

            expect(spy.calledOnce).to.be.true
            spy.restore()
        })

        it('stub console.warn', ()=>{
            let stub = sinon.stub(console, 'warn').callsFake(()=>{
                console.log('message from stub')
            })
            demo.consoleTest()

            expect(stub).to.have.been.calledOnce
            expect(stub).to.have.been.calledWith('console.warn called')
            stub.restore()
        })
   })

   context('stub private functions', ()=>{
        it('stub createFile', async()=>{
            let createStub = sinon.stub(demo, 'createFile').resolves('create_stub')
            let callStub = sinon.stub().resolves('calldb_stub')

            demo.__set__('callDB', callStub)
            
            let result = await demo.bar('test.txt')
            expect(result).to.equal('calldb_stub')
            expect(createStub).to.have.been.calledOnce;
            expect(createStub).to.have.been.calledWith('test.txt')
            expect(callStub).to.have.been.calledOnce
        })
   })

})