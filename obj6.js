weatherData=[
    {district:"Thrissur",temp:32},
    {district:"Thrissur",temp:32},
    {district:"Kottayam",temp:29},
    {district:"palakkad",temp:34},
    {district:"Ernakulam",temp:33},
    {district:"Thrissur",temp:29},
    {district:"Kottayam",temp:30},
    {district:"Palakkad",temp:32},
    {district:"Ernakulam",temp:31},
]
// print district with its highest temperature
// output:{Thrissur:32,Kottayam:30,..}
output={}
weatherData.forEach(districtDetails=>{
    dis=districtDetails.district
    curTemp=districtDetails.temp
    if(output.hasOwnProperty(dis))
    {
        oldTemp = output[dis]
        if(curTemp>=oldTemp){
            output[dis]=curTemp
        }
    }else{
        output[dis]=curTemp
    }
})