import React from "react"
import { Animated, StyleSheet, PanResponder, View } from "react-native"

export default class PanPanel extends React.Component {

    style = StyleSheet.create({

    })

    pan = new Animated.ValueXY();
    panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.pan.setOffset({
          x: this.pan.x._value,
          y: this.pan.y._value,
        });
      },
      onPanResponderMove: (e, gestureState)=> {
        //this.tos(this.pan.x);
        this.pan.setValue(this.max(this.pan, gestureState))
      },
      onPanResponderRelease: () => {
        this.pan.flattenOffset();
      }
    });

    constructor(props){
        super(props)

        const img = this.props.imageSize;
        const frame = this.props.frameSize;

        this.state = {
          x: 0,
          y: 0
        }
        if(img && frame){
          this.state.x = (img.width / 2) - (frame.x /2);
          this.state.y = (img.height / 2) - (frame.y /2);
        }
        //x = 107.25
    }

    max(pan, gest){
      return {
        x: this.clamp(gest.dx, -this.state.x - pan.x._offset,
          this.state.x - pan.x._offset),
        y: this.clamp(gest.dy, -this.state.y - pan.y._offset,
           this.state.y - pan.y._offset),
      }
    }

    tos(v){
      console.log(`v:${v._value}, o:${v._offset}`)
    }

    clamp(v, min, max, p){
        
        const b = Math.min(Math.max(v, min), max)
        if(p) console.log(`${v} = [${min}, ${max}] = ${b}`)
        return b;
    }

    render(){
        return (
            <Animated.View 
                style={{ 
                transform: [{ translateX: this.pan.x }, 
                  { translateY: this.pan.y }] 
                }}
                    {...this.panResponder.panHandlers}>
                <View pointerEvents={"none"} >
                    {this.props.children}
                </View>
            </Animated.View>
        )
    }
}