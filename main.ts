while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() < 6) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() > 13) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.setAll(light.rgb(235, 146, 52))
    }
    
}
