
import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
    <Label as='a' color='blue' image>
      <img src='/assets/images/avatar/small/veronika.jpg' />
        Veronika
        <Label.Detail>Friend</Label.Detail>
    </Label>

)

export default LabelExampleImage
