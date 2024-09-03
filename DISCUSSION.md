# Discussion

- I took the long weekend to work on this. I got into a groove and did not want to stop. In reality, at the 2-hour mark, I was wrapping up on the bugs and getting into analysis paralysis on how best to proceed.

- I ended up using [Shadcn](https://ui.shadcn.com/) and [Tanstack Table](https://tanstack.com/table/latest) for the table element. I also installed [fakerjs](https://fakerjs.dev/) to bulk out the stubbed data.

- I massaged the `db/seed/advocates` file to update the array of string for `specialties` into...

```
specialties: {
  title: string,
  subtitle: string,  // the parenthetical
  color: string (hex)
}
```

This allowed for the subtitle tooltip hover and to keep the titles of the specialties easier to manage as pills.

- I made the rows clickable to show a dialog screen. This was to show any further information not pertient for look at first-glance at the table.

- Used Context and Hooks with AbortController and Loading states to handle fetching data.

![Screenshot Gif](./Screen%20Recording%202024-09-03%20at%2012.33.28%20PM.gif)

---

## Future Considerations

- Move search inputs and pagination to all be server-side. With larger datasets, it will bog down when the whole set is sent to the browser for filtering and searching.

- After searching, the table does not disable next pages after all the rows are shown. Definitely a bug worth chasing, but needed to stop.

- Have a unit test suite and tests written for components.

- Containerize with Docker to have the app scale when needed.

- Use browser location to allow user to sort by distance.

- The specialties are currently sorted alphabetically - in future, it would be nice to sort their specialties by advocate preference/experience.

- Make a mobile-friendly version with media breakpoints. Possibly break the table down into infinite-scroll rows with search.

- Allow for toggle buttons by specialty to filter rows.

- Have an indicator on availablity (color dot or fraction of slots available) and sort by.

- Using Redis for caching data

- Using Apollo/GraphQL to make FE caching and querying easier.

- Give users a way of rating and reviewing advocates.

- Show advocate avatars in profiles.
