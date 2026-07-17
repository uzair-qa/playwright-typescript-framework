import cryptoJs from 'crypto-js';

export default class CommonUtils {

    private secretKey: string;

    /**
     * Initialising secret key
     */
    constructor() {
        //this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

        if (process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        } else {
            throw new Error("Please provide secret key while staring execution :)")
        }
    }

    /**
     * This method provides encrypted data from strings
     * @param data 
     * @returns encryptedData
     */
    public encryptData(data: string) {
        const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }

    /**
     * This method provides decrypted data from strings
     * @param encData 
     * @returns decryptedData
     */
    public decryptData(encData : string){
        const decryptedData = cryptoJs.AES.decrypt(encData, this.secretKey).toString(cryptoJs.enc.Utf8);
        return decryptedData;
    }
}