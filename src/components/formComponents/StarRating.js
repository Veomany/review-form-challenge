import React from 'react'
import { Rating } from 'semantic-ui-react'

const StarRating = () => <Rating className="u-padding-bottom-10" icon='star' size='massive' defaultRating={0} maxRating={5} />

export default StarRating;