# guy-in-the-sky-backend

## Endpoints

### /users/

#### /users/getUser

A ``POST`` endpoint expecting a JSON content type containing the uuid of the user.

Example: 
```json
{ 
    "userid": "b3ee8a87-ad0d-4871-a0bd-673838bf098e"
}
```
Returns: a JSON object with the user data.

Example: 
```json
{
    "userId": "b3ee8a87-ad0d-4871-a0bd-673838bf098e",
    "username": "flagmaster",
    "displayName": "FlagMaster"
}
```

#### /users/searchByUsername

A ``POST`` endpoint expecting a JSON content type containing a keyword search of the user.

Example: 
```json
{
    "keyword": "flag"
}
```

Returns: a JSON object containing all valid users' data.

Example: 
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




