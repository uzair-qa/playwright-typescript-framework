export class RandomUtils {

    static employeeId(): string {
        return `${Date.now()}${Math.floor(Math.random() * 1000)}`.slice(-8);
    }

    static randomString(prefix = ""): string {
        return `${prefix}${Date.now()}`;
    }
}