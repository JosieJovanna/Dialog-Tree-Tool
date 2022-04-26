# About the Project
...

## Terminology

- `Dialog:`
  Text read by the player from NPCs, events, signage, items, etc.
  - May have formatted text.
  - May have attached scripts.
  - As metadata, may have a title and description.
  - Conversations may include several people - possibly indicate speaker with index to swappable list of subjects.
  - Connect to other Dialogs and to Responses with Links,

- `Response:`
  Text representing responses the player has, in speech and action, to a given Dialog.
  - 

- `Link:`
  A connection between Nodes, which may have prerequisites. There may be several links, either at once, or by conditional.
  - 

# Notes

Set styles to SCSS:
`ng config schematics.@schematics/angular:component.style scss`
