import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import imagem from '../../assets/cronometro.png'

class Cronometro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            lastTime: '00:00:00', 
            running: false,
            intervalId: null,
        };
    }

    startStopTimer = () => {
        if (this.state.running) {
            clearInterval(this.state.intervalId);
            this.setState({
                lastTime: `${this.formatTime(this.state.hours)}:${this.formatTime(this.state.minutes)}:${this.formatTime(this.state.seconds)}`,
            });
        } else {
            const intervalId = setInterval(this.updateTimer, 1000);
            this.setState({ intervalId });
        }

        this.setState({ running: !this.state.running });
    };

    resetTimer = () => {
        clearInterval(this.state.intervalId);
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0,
            running: false,
            intervalId: null,
        });
    };

    updateTimer = () => {
        const { hours, minutes, seconds } = this.state;
        let newSeconds = seconds + 1;
        let newMinutes = minutes;
        let newHours = hours;

        if (newSeconds === 60) {
            newSeconds = 0;
            newMinutes += 1;
        }

        if (newMinutes === 60) {
            newMinutes = 0;
            newHours += 1;
        }

        this.setState({ hours: newHours, minutes: newMinutes, seconds: newSeconds });
    };

    formatTime = (value) => {
        return value < 10 ? `0${value}` : `${value}`;
    };

    render() {
        const { hours, minutes, seconds, running, lastTime } = this.state;

        return (
            <View style={styles.container}>
                <Image source={imagem} style={styles.image} />
                <View style={styles.timerBackground}>
                    <Text style={styles.timerText}>
                        {this.formatTime(hours)}:{this.formatTime(minutes)}:{this.formatTime(seconds)}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={running ? styles.stopButton : styles.startButton}
                        onPress={this.startStopTimer}
                    >
                        <Text style={styles.buttonText}>{running ? 'Parar' : 'Iniciar'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.restartButton}
                        onPress={this.resetTimer}
                    >
                        <Text style={styles.buttonText}>Reiniciar</Text>
                    </TouchableHighlight>
                </View>
                <Text style={styles.lastTimeText}>Último Tempo Marcado: {lastTime}</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
        borderRadius: 450,
    },
    timerBackground: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
    },
    timerText: {
        color: 'white',
        fontSize: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    startButton: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 10,
        margin: 10,
    },
    stopButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    restartButton: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    lastTimeText: {
        marginTop: 20,
        fontSize: 16,
    },
});

export default Cronometro;