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

## Airtable Data Snippet

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

## MVP and "Beyond"

### MVP

- A home page with a form to submit your questions.
- A card render that will happen on submit, allowing the user to "flip" face-down cards and get their image and description.
- Post page that will hold every user's anonymous questions for viewing.
- A fitting aesthetic for the content.

### Post MVP

- Have a place where users can submit their own tarot and psychic phenomena-related images.
- Create a way for interpretations of cards to be more in depth than only descriptions i.e. "if this card, and this card are drawn together, that means this."

## Project Schedule

| Day      | Deliverable                                                      |
| -------- | ---------------------------------------------------------------- |
| March 26 | Pitch, finish Airtable with image links/ Boilerplate React begin |
| March 27 | Continue component creation, set up API call                     |
| March 28 | Card logic, digging into code                                    |
| March 29 | Continue coding/ preliminary CSS                                 |
| March 30 | Coding/ more in depth CSS styling                                |
| March 31 | Hit MVP                                                          |
| April 1  | Clean up code, Clean up CSS                                      |
| April 2  | Presentation Day                                                 |

## Project Timetable

|          | Studying New Concepts | General(Axios Calls, ect.) | Writing Code | Styling           | Total Hours Day | Total Hours Days |
| -------- | --------------------- | -------------------------- | ------------ | ----------------- | --------------- | ---------------- |
| March 26 | 4 hours               | 2 hours                    | 3 hours      | 0.5 hour(initial) | 9.5             | 9.5              |
| March 27 | 1 hour                | 1 hour                     | 5 hours      | 1 hour            | 8               | 17.5             |
| March 28 | 1 hours(review)       | 1 hour                     | 6 hours      | 1.5 hours         | 8.5             | 26               |
| March 29 | 0                     | 1 hour                     | 6 hours      | 1.5 hours         | 8.5             | 34.5             |
| March 30 | 0                     | 1 hour                     | 4 hours      | 4 hours           | 9               | 43.5             |
| March 31 | 0                     | 1 hour                     | 5 hours      | 2 hours           | 8               | 51.5             |
| April 1  | 0                     | 1 hour                     | 4 hours      | 3 hours           | 8               | 59.5             |
| April 2  | PRESENTATION          | PRES DAY                   | PRES DAY     | PRES DAY          | PRES DAY        | PRES DAY         |

## SWOT

### Strengths:

I have a strong idea of what I want to make conceptually and visually in my mind, and I have experience with card logic after doing my P1.

### Weaknesses:

My propensity to be paralyzed with not knowing what to do next, esp after a success in one part of a thing.

### Opportunities:

A chance to build a really cool React app! I think if I do this properly, in both code and aesthetic, it could be a very strong addition to my portfolio.

### Threats:

Improper time management, and more specifically, not getting as much sleep as I need. I have trouble shutting my brain off at night.
