export class RandomUtils{

    static employeeId(){
        return Date.now().toString().slice(-6);
    }
}