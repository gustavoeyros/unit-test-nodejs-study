const chai = require('chai');
const expect = chai.expect;

describe('name test', ()=>{

    it('compare os valores', ()=>{
        expect(1).to.equal(1);
    })

    it('teste outra coisa', ()=>{
        expect({name: 'Gustavo'}).to.deep.equal({name: 'Gustavo'}); //comparar objetos
        expect({name: 'Gustavo'}).to.have.property('name').to.equal('Gustavo'); //verificar valor da propriedade
        expect(5>8).to.be.false;
        expect({}).to.be.a('object'); //verificar o tipo
        expect('Gustavo').to.be.a('string');
        expect(3).to.be.a('number');
        expect('bar').to.be.a('string').be.lengthOf(3) //verificar o tipo e o tamanho
        expect([1,2,3].length).to.equal(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.exist;
    })
})