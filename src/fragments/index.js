export const WineFragment = graphql`
  fragment WineFragment on Wine {
    id
    name
    premium
    image
    vintage
    varietal
    price
    content
    awardText
    awardLevel
    packaging {
      displayName
      measure
      unitOfMeasure
    }
  }
`
