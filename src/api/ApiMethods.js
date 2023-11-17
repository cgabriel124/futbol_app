import ApiManager from "./ApiManager";

export const create_team = async data =>{
    try {
        const response = await ApiManager("/teamcreate/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data:data
        })
        return response;
    } catch (error) {
        return error.response.data;
    }
}

export const create_player = async data =>{
    try {
        const response = await ApiManager("/playercreate/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data:data
        })
        return response;
    } catch (error) {
        return error.response.data;
    }
}