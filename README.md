# Places API

```
BASE URL: https://places-api-v1-mern.herokuapp.com/api/places
```
This is a simple API for registering places and landmarks. 

# Endpoints

```
GET: BASE URL
```
Returns a list of all registered places.

```
POST: BASE URL
```
Registers a landmark given the following required properties: 
- Name
- City
- State/Region
```
Sample POST request body: 
{
  name: "Taj Mahal"
  city: "Agra"
  state: "Utter Pradesh"
}
```
# Search through registered places
By place's SLUG

A slug is the part of a URL that identifies a particular page on a website in an easy-to-read form.
```
GET: BASE URL/{slug}
```
Returns an item that EXACTLY matches the given slug

```
Sample search with slug

Search for: "statue-of-liberty"

Returns: 

{
    "_id": "6308463560a8a9e4e5905dd7",
    "name": "Statue of Liberty",
    "slug": "statue-of-liberty",
    "city": "New York",
    "state": "New York",
    ...
}
```


By place's NAME
```
GET: BASE URL/search/name/{string}
```
Returns a list of all registered places that contains the given string in their name property

```
Sample search with place's name

Search for: "tower"

Returns: 

[
    {
        "_id": "6308471960a8a9e4e5905ddb",
        "name": "Eiffel Tower",
        "slug": "eiffel-tower",
        "city": "Paris",
        ...
    },
    {
        "_id": "630849ce8dd9349b4a1a9c0e",
        "name": "Leaning Tower of Pisa",
        "slug": "leaning-tower-of-pisa",
        "city": "Pisa",
        "state": "Tuscany",
        ...
    }
]

Explanation: Both Eiffel Tower and Leaning Tower of Pisa contains the search keyword in their name
```

By place's CITY
```
GET: BASE URL/search/city/{string}
```
Returns a list of all registered places that contains the given string in their city property

```
Sample searches with place's city

Search for: "is"

Returns: 

[
    {
        "_id": "6308471960a8a9e4e5905ddb",
        "name": "Eiffel Tower",
        "slug": "eiffel-tower",
        "city": "Paris",
        "state": "Île-de-France",
        "createdAt": "2022-08-26T04:07:53.829Z",
        "updatedAt": "2022-08-26T04:07:53.829Z",
        "__v": 0
    },
    {
        "_id": "630849ce8dd9349b4a1a9c0e",
        "name": "Leaning Tower of Pisa",
        "slug": "leaning-tower-of-pisa",
        "city": "Pisa",
        "state": "Tuscany",
        "createdAt": "2022-08-26T04:19:26.962Z",
        "updatedAt": "2022-08-26T04:19:26.962Z",
        "__v": 0
    }
]

Explanation: Both Paris and Pisa, the cities of the respective results, contain the search keyword

Search for: "i"

Returns: 

[
    {
        "_id": "6308471960a8a9e4e5905ddb",
        "name": "Eiffel Tower",
        "slug": "eiffel-tower",
        "city": "Paris",
        "state": "Île-de-France",
        "createdAt": "2022-08-26T04:07:53.829Z",
        "updatedAt": "2022-08-26T04:07:53.829Z",
        "__v": 0
    },
    {
        "_id": "6308487f60a8a9e4e5905de1",
        "name": "Christ the Redeemer",
        "slug": "christ-the-redeemer",
        "city": "Rio de Janeiro",
        "state": "Southeast Region",
        "createdAt": "2022-08-26T04:13:51.956Z",
        "updatedAt": "2022-08-26T04:13:51.956Z",
        "__v": 0
    },
    {
        "_id": "630849ce8dd9349b4a1a9c0e",
        "name": "Leaning Tower of Pisa",
        "slug": "leaning-tower-of-pisa",
        "city": "Pisa",
        "state": "Tuscany",
        "createdAt": "2022-08-26T04:19:26.962Z",
        "updatedAt": "2022-08-26T04:19:26.962Z",
        "__v": 0
    }
]

Explanation: Paris, Rio de Janerio, and Pisa, the cities of the respective results, contain the search keyword
```
