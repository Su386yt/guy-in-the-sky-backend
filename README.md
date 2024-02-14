# guy-in-the-sky-backend


## Endpoints

### /users/

#### /users/getUser

A ``POST`` endpoint expecting a JSON content type containing the uuid of the user.
```json
{ 
    "userid": "<user uuid>"
}
```
Returns: a JSON file with the user data.

```json
{
    "userId": "b3ee8a87-ad0d-4871-a0bd-673838bf098e",
    "username": "flagmaster",
    "displayName": "FlagMaster"
}
```

#### /users/searchByUsername

A ``POST`` endpoint expecting a JSON content type containing a keyword search of the user.
```json
{
    "keyword": "flag"
}
```

Returns: a json object containing all valid users.
```json
{
    "users": [
        {
            "userId": "b3ee8a87-ad0d-4871-a0bd-673838bf098e",
            "username": "flagmaster",
            "displayName": "FlagMaster"
        }
    ]
}
```




