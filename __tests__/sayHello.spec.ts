import { sayHello } from "../src/lib"

it("Should say Hello!", () => {
    console.log = jest.fn()
    sayHello()
    expect(console.log).toHaveBeenCalledWith("👋 Hello!")
})
