 "use server"
import fs from "fs/promises"
export const submitAction = async (e) => {
    
    console.log(e.get("Name"), e.get("ADD"))
    let a = await fs.writeFile("Mansi.txt", `Name is :${e.get("Name")} and Address is:${e.get("ADD")} `)
    console.log(a)
  }