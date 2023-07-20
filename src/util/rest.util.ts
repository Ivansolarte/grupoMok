export const Get = async(url:any) => {
   
        const response = await fetch(url)
        const data =await response.json();
        return data.results
  
}