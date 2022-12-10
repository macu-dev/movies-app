const setStyledFlex = (value: number | string) : string =>`
    -ms-flex: 0 0 ${value}%;
    flex: 0 0 ${value}%;
    max-width: ${value}%;
`

export default setStyledFlex;