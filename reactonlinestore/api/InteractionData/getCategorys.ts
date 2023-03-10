import { getRequest } from "../apiOnlineStore/getRequests";

export async function getCategorys(){
    return await getRequest('showcategory');
}
