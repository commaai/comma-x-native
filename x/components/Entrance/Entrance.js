import React, { Component } from 'react';
import { View, Animated } from 'react-native';

import EntranceStyles from './EntranceStyles';

export default (theme) => {
    let Styles = EntranceStyles(theme);

    return class XEntrance extends Component {
        state = {
            transitionProgress: new Animated.Value(0),
        }

        static defaultProps = {
            type: 'default',
            delay: 0,
            duration: 500,
            transition: 'fadeInUp',
            useNativeDriver: true,
            toValue: 1,
        };

        constructor(props) {
            super(props);
            this.applyTransition = this.applyTransition.bind(this);
        }

        componentDidMount() {
            const { delay, duration, useNativeDriver, toValue } = this.props;
            const { transitionProgress } = this.state;
            setTimeout(() => {
                Animated.timing(
                    transitionProgress,
                    {
                        toValue,
                        duration,
                        useNativeDriver,
                    }
                ).start();
            }, delay)
        }

        applyTransition() {
            const { transition } = this.props;
            const { transitionProgress } = this.state;
            switch (transition) {
                case 'fadeInUp':
                    return {
                        opacity: transitionProgress,
                        transform: [{
                            translateY: transitionProgress.interpolate({
                                inputRange: [-1, 0.6, 1],
                                outputRange: [8, -1, 0]
                            }),
                        }],
                    };
                case 'fadeInLeft':
                    return {
                        opacity: transitionProgress,
                        transform: [{
                            translateX: transitionProgress.interpolate({
                                inputRange: [-1, 0.6, 1],
                                outputRange: [8, -1, 0]
                            }),
                        }],
                    };
                default:
                    return {};
            }
        }

        render() {
            const { type } = this.props;
            const style = [
                Styles[`${ type }TypeEntrance`],
                this.applyTransition(),
                this.props.style || {},
            ];

            return (
                <Animated.View
                    style={ style }>
                    { this.props.children }
                </Animated.View>
            )
        }
    }

}
