![alt text](https://i.pinimg.com/originals/d2/e9/5f/d2e95f54788f932b61296561d8ef6343.jpg)



# Alice-Tarot-Queen

An application for all of your prognosticative needs, known or otherwise



## Purpose

This is a React-built application that allows the user to interact with their past, present, and future, by printing any query, thought, or concern to the page, and on submission will receive answers through the vessel of Tarot, and Math.random. Those questions will be preserved in an anonymous, ethereal realm that can be accessesed if the user is so inclined. It uses Airtable for the cards, descriptions, and images.

## Wireframes

Below are examples of how this website will materialize on desktop, tablet, and a phone

![alt text](https://i.imgur.com/hI5wTaK.jpeg)
![alt text](https://i.imgur.com/bdcAFyz.jpeg)
![alt text](https://i.imgur.com/9ykv229.jpeg)

## Component Hierarchy

![alt text](https://i.imgur.com/IcQao8U.jpeg)

## Airtable data snippet

```
{
    "records": [
        {
            "id": "reckbMpQaxOk4Byoy",
            "fields": {
                "name": "the fool",
                "description": "newness, adventure, beginnings",
                "num": 0,
                "arcana": "major"
            },
            "createdTime": "2021-03-26T04:24:34.000Z"
        },
        {
            "id": "receslQiwyH2AxUBr",
            "fields": {
                "name": "the magician",
                "description": "power, charisma, manifestation, self-determination, masculine magic(k)",
                "num": 1,
                "arcana": "major"
            },
            "createdTime": "2021-03-26T04:24:34.000Z"
        },
        {
            "id": "rec2ofuTqTyHHykVV",
            "fields": {
                "name": "the high priestess",
                "description": "intuition, liminality, divination, psychic exploration, feminine magic(k)",
                "num": 2,
                "arcana": "major"
            },
            "createdTime": "2021-03-26T04:24:34.000Z"
        }
    ],
    "offset": "rec2ofuTqTyHHykVV"
}
```
