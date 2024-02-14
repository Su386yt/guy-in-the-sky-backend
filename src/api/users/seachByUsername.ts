import { getUser, searchUsersByUsernameKeyword } from "../../backend/UserManager";
import { api } from "../api";

export function loadSearchByUsernameEndpoint() {
  api.post("/users/searchByUsername", (req, res) => {
    console.log(req.body)
    try {
      const keyword: string = req.body.keyword
      if (keyword == null ) {
        res.status(400)
        res.send("Bad Request: No keyword provided")
      }
      
      searchUsersByUsernameKeyword(keyword).then((users) => {
        const json: { users: any[] } = {
          users: []
      };
  
        users.forEach((user, index) => {
          json.users.push(user)
        })
        res.send(JSON.stringify(json))
      }).catch((error) => {
        console.error(error)
        res.status(500)
        res.send(`Internal server error`)
      })
      

    } catch (exception) {
      console.error(exception)
      res.status(500)
      res.send("Internal Server Error")
    }
  });
}