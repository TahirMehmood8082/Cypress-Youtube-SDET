describe('Learn BDD Explicit Asscertion', ()=>{

    it.skip('Using Expect Validate Complex Data ',()=>{
        cy.visit('www.google.com')
        
        let pageName = "Google Homepage"
    
        expect(pageName).to.not.equal('Google')
        expect(pageName).to.be.equal('Google Homepage')
        expect(pageName).to.be.a('string')
        expect(pageName).to.have.length.of.at.most(15)
    
        let person = {
            firstname:"Testing", lastName: "Funda"
        }

        expect(person).to.deep.equal({
            firstname:"Testing", lastName: "Funda"
        })
        expect(person).to.have.property('lastName', 'Funda')

        let EmployeeIds = [1,2,3,4,5]
    
        expect(EmployeeIds).to.have.ordered.members([1,2,3,4,5])
        expect(EmployeeIds).to.include(2)
        expect(EmployeeIds).to.include.members([3,2])
    })

    it(' using Assert Validate Complex Data',()=>{
        //cy.visit('www.google.com') 
        
        
        // let firstName = "TestingFunda"
        // assert.equal(firstName, 'TestingFunda')
        // assert.include(firstName, 'ingFun')
        // assert.typeOf(firstName, 'string')
        // assert.notTypeOf(firstName, 'Integer')

        // let person = { firstName:"Testing", lastName:"Funda"}
        // assert.property(person,"lastName")
        // assert.isObject(person)
        // assert.deepPropertyVal(person, 'firstName', 'Testing')
        // assert.deepEqual(person,{ firstName:"Testing", lastName:"Funda"})

        let EmployeeIds = [1,2,3,4,5]
    
        assert.isArray(EmployeeIds)
        assert.includeDeepMembers(EmployeeIds, [3,2])
        assert.includeDeepOrderedMembers(EmployeeIds, [1,2,3,4,5])
        assert.typeOf(EmployeeIds, 'array')
    
    })
})
