const enhancer = require('./enhancer.js');
// test away!
describe("item functions", () => {
    it("repairs durability", () => {
        expect(enhancer.repair({
            name: "theItem",
            durability: 25,
            enhancement: 14
        })).toEqual({
            name: "theItem",
            durability: 100,
            enhancement: 14
        })
    })

    it("succeeds", () => {
        expect(enhancer.success({
            name: "theItem",
            durability: 1,
            enhancement: 30
        })).toEqual({
            name: "theItem",
            durability: 1,
            enhancement: 30
        })
    })
    it("fails", () => {
        expect(enhancer.fail({
            name: "theItem",
            durability: 14,
            enhancement: 95
        })).toEqual({
            name: "theItem",
            durability: 15,
            enhancement: 100
        })
    })
})