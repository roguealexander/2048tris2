import { b2World } from '@flyover/box2d'
import React, { useContext } from 'react'

const worldContext = React.createContext<b2World | null>(null)
export default worldContext
