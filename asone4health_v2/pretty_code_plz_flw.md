# List of practices to follow in this code to keep it pretty

## Naming

### fuction names

- jsx functions must start in a capital letter, or else you will not be imported
=> all function names (even in js files) must start with a capital letter
- they are written using the pascal notation (functionNameLikeThis)

### Variable names

- Variable should start with a lowercase letter
- they are wriiten using underscores (variable_name_like_this)

## Functionality

### Single responsibilty priciple (SRP)

- every componet and every function must have exactly one functionality, if it has more, it must be split (you can use "glean" extension to make this easier)

### API calls

- every API call should be done in a seperate file under the API folder for a cleaner code and to respect SRP
- API calls are made using fetch and await instead of get and .then for better optimality

## Nesting

- to return 1 element in each component, dont wrap everything in one div: either use react.fragment or <></> to enclose it
