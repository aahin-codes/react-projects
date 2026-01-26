const dummyApiResponse = {
    
    showRandomColorGenerator:true,
}

function fetaureFlagDataServiceCall(){
    return new Promise((resolve, reject)=>{
        if(dummyApiResponse){
            setTimeout(
                resolve(dummyApiResponse), 500
            )
        }else{
            reject("Some error occured! Please try again...")
        }
    })
}
export const data = [
  {
    title: "Feature Flag Implementation",
    shortDescription:
      "A configurable system to enable or disable features dynamically.",
    description:
      "The Feature Flag Implementation allows features to be toggled on or off without redeploying the application. It supports centralized configuration, environment-based flags, and conditional rendering of components. This project demonstrates controlled feature rollout, safer deployments, and scalable application architecture.",
  },
];



export default fetaureFlagDataServiceCall;