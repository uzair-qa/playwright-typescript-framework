import {test as baseTest} from './pom-fixtures'
import CommonUtils from '../utils/CommonUtils'

type CommonFixtureType = {
    commonUtils : CommonUtils
}

export const test = baseTest.extend<CommonFixtureType>({
    commonUtils : async({},use)=>{
        await use(new CommonUtils())
    }
})