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

export const distribute_teams = async () =>{
    try {
        const response = await ApiManager("/teamdistribution/", {
            method: "GET",
        })
        return response;
    } catch (error) {
        return error;
    }
}

export const get_team_players = async () =>{
    try {
        const response = await ApiManager("/teamplayerlist/", {
            method: "GET",
        })
        return response;
    } catch (error) {
        return error;
    }
}

export const generate_matches = async () =>{
    try {
        const response = await ApiManager("/generatematches/", {
            method: "GET",
        })
        return response;
    } catch (error) {
        return error;
    }
}

export const get_matches = async () =>{
    
    try {
        const response = await ApiManager("/getmatches/", {
            method: "GET",
        })
        return response;
    } catch (error) {
        return error;
    }
}

export const set_result = async data =>{
    try {
        const response = await ApiManager("/registerresult/", {
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

export const get_team_stats = async () =>{
    try {
        const response = await ApiManager("/getteamstats/", {
            method: "GET",
        })
        return response;
    } catch (error) {
        return error;
    }
}