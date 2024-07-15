//register

import { BASEURL } from "./BaseURL"
import { commonAPI } from "./CommonAPi"



export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/user/register`,user,"")
}

//login

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/user/login`,user,"")
}

//add projects


export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASEURL}/projects/add`,reqBody,reqHeader)
}

//gethomeprojects

export const homeProjectAPI = async()=>{
    return await commonAPI("GET",`${BASEURL}/projects/homeprojects`,"","")
}

export const allProjectAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASEURL}/projects/all?search=${searchKey}`,"",reqHeader)
}


//getuserprojects

export const userProjectAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASEURL}/user/allprojects`,"",reqHeader)
}


//edit project

export const editProjectAPI = async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASEURL}/projects/edit/${projectId}`,reqBody,reqHeader)
}


