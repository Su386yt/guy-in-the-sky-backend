import { getUser } from "../../backend/UserManager";
import { api } from "../api";

export function loadGetUserEndpoint() {
  api.post("/users/getUser", (req, res) => {
    console.log(req.body)
    try {
      const uuid: string = req.body.userid
      if (uuid == null ) {
        res.status(400)
        res.send("Bad Request: No user provided")
        return
      }
      getUser(uuid).then( (user) => {
        console.log(user)
        if (user == null) {
          res.status(400)
          res.send("Bad Request: No such user found")
          return
        }
        res.send(JSON.stringify(user))
      }).catch((exception) => {
        console.error(exception)
        res.status(500)
        res.send("Internal Server Error")
        return
      })
      
    } catch (exception) {
      console.error(exception)
      res.status(500)
      res.send("Internal Server Error")
    }
  });
}