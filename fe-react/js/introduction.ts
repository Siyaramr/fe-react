let formData ="";
var formData = "";
const formData = "";

//ts
/**
 * a.string
 * b.number
 * c.boolean
 * d.undefined
 * e.null
 * f.symbol
 * g.set
 * h.array
 * i.object
 * j.function
 * 
 * k.interface
 * l.enum
 * m.type
 */

let fullname: string = ""; // tightly coupled, statically typed
// name = 123; // error
let mySum = symbol();
const obj = {
    [mySum]:""
}

const numbs = [1,2,3,4,5,6,1,4]
const unique = new Set(numbs)

enum UserRole {
    ADMIN= 'admin',
    SELLER= "seller",
    CUSTOMER= "customer"
}

interface IClassName {
    name: string
    email: string
    address: string
    role: string
    getName():string;
}
type RandomStringType = {
    data?: string;
    len: number
}

const randomStringGenerate = async(): Promise<RandomStringType> => {
    //
    return {
        len: 10
    };
}

const res = randomStringGenerate()

class ClassName implements IClassName {
    name;
    email;
    address;
    role; // admin, seller, customer

    getName = () => {
        return this.name;
    }
}