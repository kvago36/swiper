import React, { useRef } from 'react'
import { View, PanResponder, Animated } from 'react-native'

const Deck = ({ data, renderCard }) => {
  const position = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy })
    },
    onPanResponderRelease: () => {}
  })).current

  return (
    <View>
      <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>
        {data.map(item => renderCard(item))}
      </Animated.View>
    </View>
  )
}

export default Deck
