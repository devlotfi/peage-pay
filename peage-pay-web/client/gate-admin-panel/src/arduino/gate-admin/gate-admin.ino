#include <Servo.h>

#define SERVO_PIN 3
#define BUZZER_PIN 2
#define GREEN_LED_PIN 4
#define RED_LED_PIN 5

Servo servo;

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(GREEN_LED_PIN, OUTPUT);
  pinMode(RED_LED_PIN, OUTPUT);
  digitalWrite(GREEN_LED_PIN, LOW);
  digitalWrite(RED_LED_PIN, HIGH);

  servo.attach(SERVO_PIN);
  servo.write(180);

  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\n');
    if (input == "OPEN_GATE") {
      digitalWrite(GREEN_LED_PIN, HIGH);
      digitalWrite(RED_LED_PIN, LOW);
      servo.write(90);

      delay(2000);
      digitalWrite(GREEN_LED_PIN, LOW);
      digitalWrite(RED_LED_PIN, HIGH);
      servo.write(180);
    }
  }
}
