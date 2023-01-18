## Taters-FE
### Install
`git clone git@github.com:Wotts/taters-fe.git && cd taters-fe`

`yarn`

`yarn dev`


### Toevoegingen/verbeteringen:
- Een Form-component die je kunt voorzien van validatie zodat je onder andere errors kan triggeren en de submit knop kunt disablen.
- ESLint en/of Prettier.
- Ik heb zoals geadviseerd 0 tijd gestoken in styling, maar TailWindCSS the way to go als je het mij vraagt.
- Buttons/menu items renderen in een loop

### Algemene gedachten/keuzes:
- Ik heb het Vite en Vue logo laten staan; vond het wel een mooi duo
- De Enum in de authStore is natuurlijk niet helemaal hoe het hoort maar voelde als een gepaste abstractie
- puntcomma's; ze kosten niets! TypeScript heeft ze weinig nodig en het internet is er verdeeld over, maar ik heb nog een la vol met ; en als ze op zijn bestel ik wel nieuwe.
- Je zou kunnen stellen dat het redirecten na login eventueel in de authStore kan, maar daar vond ik het niet passen.
