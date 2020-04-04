import React, { useEffect, useRef } from 'react'
import { View, Animated } from 'react-native'

const Ball = () => {
  const position = useRef(new Animated.ValueXY(0, 0)).current

  useEffect(() => {
    Animated.spring(position, {
      toValue: { x: 200, y: 500 }
    }).start();  
  }), []

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  )
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'red'
  }
}

export default Ball