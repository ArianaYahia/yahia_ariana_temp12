let temp1 = 30
while (true) {
    if (temp1 > 70) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (temp1 > 40) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
